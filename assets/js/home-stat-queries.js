// must be included after ermrestjs
// this is needed and will ensure both ermrestjs and jquery are loaded
$(document).ready(function(){
  /**
   * NOTE: CALL THIS ONLY WHEN ERMRESTJS AND JQUERY ARE FULLY LOADED
   * Send a request and chagne the element's innerHTML with the response.
   * @param {string} selector the selector of HTML element where the data should go
   * @param {string} path the ERMrest request path
   * @param {string} action the log action
   * @param {string} schemaTable the <schema>:<table> used for log purposes
   */
  function getERMrestStats (selector, path, action, schemaTable) {
    var ermrestServiceURI = "/ermrest";
    var server = ERMrest.ermrestFactory.getServer(ermrestServiceURI);
    var el = $(selector);

    // show spinner in place of the number:
    el.html('<i class="fas fa-sync-alt fa-spin"></i>');

    // create the header for log
    var headers = {};
    headers[ERMrest.contextHeaderName] = {
      "cid": "static/home",
      "catalog": "1",
      "schema_table": schemaTable,
      "action": action
    };

    // send the request
    server.http.get(ermrestServiceURI + path, {headers: headers}).then(function (response) {
      var cnt = 0;
      // NOTE this should be aligned with the expected result of the ermrest path
      if (Array.isArray(response.data) && response.data.length > 0 && response.data[0].cnt) {
        // remove `.toLocaleString()` if you don't want thousand separators
        cnt = response.data[0].cnt.toLocaleString();
      }

      // show the count
      el.html('<span>' + cnt + '</span>');

    }).catch(function (err) {
      console.error("failed to send the request");
      console.error(err);

      // in the following we've incldued three ways of handling errors:

      // show the universal Chaise error:
      // throw err;

      // silently fail and hide the stat-container:
      // $('.stat-container').css('display', 'none');

      // silently fail and show a danger/error icon in place of the number:
      el.html('<i title="Could not fetch the data" class="fas fa-exclamation-triangle"></i>');
    });

  }

  // Assay Types

  getERMrestStats(
    "#stat-assay-number",
    "/catalog/2/aggregate/Gene_Expression:Specimen/Curation_Status=Release/count:=cnt(*)",
    ":,stat/dataset:load",
    "isa:dataset"
  );

  // dataset
  getERMrestStats(
    "#stat-dataset-number",
    "/catalog/1/aggregate/isa:dataset/cnt:=cnt_d(RID)",
    ":,stat/dataset:load",
    "isa:dataset"
  );

  // imaging
  getERMrestStats(
    "#stat-imaging-number",
    "/catalog/1/aggregate/isa:imaging_data/cnt:=cnt_d(RID)",
    ":,stat/imaging:load",
    "isa:imaging"
  );

  // experiment
  getERMrestStats(
    "#stat-experiment-number",
    "/catalog/1/aggregate/isa:experiment/cnt:=cnt_d(RID)",
    ":,stat/experiment:load",
    "isa:experiment"
  );



});
