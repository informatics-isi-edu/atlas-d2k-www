// must be included after ermrestjs
// this is needed and will ensure both ermrestjs and jquery are loaded
$(document).ready(function () {
  /**
   * NOTE: CALL THIS ONLY WHEN ERMRESTJS AND JQUERY ARE FULLY LOADED
   * Send a request and chagne the element's innerHTML with the response.
   * @param {string[]} selector the selector of HTML element where the data should go
   * @param {string} path the ERMrest request path
   * @param {string} action the log action
   * @param {string} schemaTable the <schema>:<table> used for log purposes
   */
  function getERMrestStats(selector, path, action, schemaTable) {
    const ermrestServiceURI = "/ermrest";
    const server = ERMrest.ermrestFactory.getServer(ermrestServiceURI);
    const selectorToDataTypePrefix = {
      '#stat-imaging-number': 'Imaging:',
      '#stat-transcriptomics-number': 'Transcriptomics:',
      '#stat-cell-lines-number': 'Cell Line:',
      '#stat-protocols-number': 'Protocol',
      '#stat-antibody-validation-number': 'Antibody Test',
      '#stat-pubs-number': 'Publication'
    }


    const el = selector.map(id => [id, $(id)]);

    // show spinner in place of the number:
    el.forEach(item => item[1].html('<i class="fas fa-sync-alt fa-spin"></i>'))

    // create the header for log
    const headers = {};
    headers[ERMrest.contextHeaderName] = {
      "cid": "static/home",
      "catalog": "2",
      "schema_table": schemaTable,
      "action": action
    };

    // send the request
    server.http.get(ermrestServiceURI + path, { headers: headers }).then(function (response) {

      // NOTE this should be aligned with the expected result of the ermrest path
      if (Array.isArray(response.data) && response.data.length > 0) {

        el.forEach(([id, element]) => {
          let cnt = 0;
          if (id === '#stat-specimen-number' && response.data[0].count) { // We use a different ermrest query to fetch Specimen Number
            cnt = response.data[0].count;
          }
          else if(id === '#stat-assay-number'){ 
            cnt = response.data.length;
          }else{
            response.data.filter(datum => datum?.Data_Type.startsWith(selectorToDataTypePrefix[id])).forEach(filteredDatum => cnt+= filteredDatum?.Released)
          }

          // show the count
          element.html('<span>' + cnt.toLocaleString() + '</span>');
        })
      }
    }).catch(function (err) {
      console.error("failed to send the request ");
      console.error(err);

      // silently fail and show a danger/error icon in place of the number:
      el.html('<i title="Could not fetch the data" class="fas fa-exclamation-triangle"></i>');
    });

  }

  // Specimens
  getERMrestStats(
    ['#stat-specimen-number'],
    "/catalog/2/aggregate/Gene_Expression:Specimen/Curation_Status=Release/count:=cnt(*)",
    ":,stat/dataset:load",
    "Dashboard:Release_Status"
  );

  // Other Stats
  getERMrestStats(
    [
      '#stat-assay-number',
      '#stat-imaging-number',
      '#stat-transcriptomics-number',
      '#stat-cell-lines-number',
      '#stat-protocols-number',
      '#stat-antibody-validation-number',
      '#stat-pubs-number'
    ],
    "/catalog/2/attributegroup/Dashboard:Release_Status/Consortium=ALL/Species=ALL/ID;Data_Type,Released",
    ":,stat/dataset:load",
    "Dashboard:Release_Status"
  );
});
