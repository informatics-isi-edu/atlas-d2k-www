navbarMenu: {
        newTab: false,
        children: [
            { "name": "Data Browser",
              "children": [
                { "name": "Datasets", "children": [
                    { "name": "All Datasets", "url": "/chaise/recordset/#1/isa:dataset"},
                    { "name": "Mouse", "url": "/chaise/recordset/#1/isa:dataset/*::facets::N4IghgdgJiBcDaoDOB7ArgJwMYFM6JAEsIAjdafIpMEAGhCjABcwkcmB9FDAc0kKQBbDoxZtOhKBwBmAaxwBPEAF0AvrVDomZNBQRUa9Ua3Zde-IWb4QBwuYpXqiMZfSwALFIVxJKAOQBhACEASQAVAEEADQB5P1gARgAGJIBOJMc1IA"},
                    { "name": "Human", "url": "/chaise/recordset/#1/isa:dataset/*::facets::N4IghgdgJiBcDaoDOB7ArgJwMYFM6JAEsIAjdafIpMEAGhCjABcwkcmB9FDAc0kKQBbDoxZtOhKBwBmAaxwBPEAF0AvrVDomZNBQRUa9Ua3Zde-IWb4QBwuYpXqiMZfSwALFIVxJKAOQBhACEASQAVAEEADQB5P1gATgA2AAYkxzUgA"},
                    { "name": "Zebrafish", "url": "/chaise/recordset/#1/isa:dataset/*::facets::N4IghgdgJiBcDaoDOB7ArgJwMYFM6JAEsIAjdafIpMEAGhCjABcwkcmB9FDAc0kKQBbDoxZtOhKBwBmAaxwBPEAF0AvrVDomZNBQRUa9Ua3Zde-IWb4QBwuYpXqiMZfSwALFIVxJKAOQBhACEASQAVAEEADQB5P1gAdgBOAFYUxzUgA"},
                    { "name": "Chimpanzee", "url": "/chaise/recordset/#1/isa:dataset/*::facets::N4IghgdgJiBcDaoDOB7ArgJwMYFM6JAEsIAjdafIpMEAGhCjABcwkcmB9FDAc0kKQBbDoxZtOhKBwBmAaxwBPEAF0AvrVDomZNBQRUa9Ua3Zde-IWb4QBwuYpXqiMZfSwALFIVxJKAOQBhACEASQAVAEEADQB5P1gATgBWBIAORzUgA"}
                ]},
                { "name": "Images", "url": "/chaise/recordset/#1/isa:imaging_data@sort(RCT::desc::,RID)"},
                { "name": "Experiments", "url": "/chaise/recordset/#1/isa:experiment"},
                { "name": "Biosamples", "url": "/chaise/recordset/#1/isa:biosample"},
                { "name": "Projects", "url": "/chaise/recordset/#1/isa:project"},
                { "name": "Gene Summaries", "url": "/chaise/recordset/#1/isa:dataset/*::facets::N4IghgdgJiBcDaoDOB7ArgJwMYFM6JAEsIAjdafIpMEAGhCjABcwkcmB9HADwAccMhALY4InJgE9+HRizadCUDgDMA1jgkgAugF9aodEzJoKCKjXqzW7LnwHDR4qTlv9BIsR0nS1G7XqIYLXosAAsUQlwkSgAxAEEAYQBRACE4gGUk2ABGAFoADQBWJIAFf10gA"},
                { "name": "Phenotype Summaries", "url": "/chaise/recordset/#1/vocab:phenotype"},
                { "name": "Image Navigation", "url": "/image-nav/"},
                { "name": "How to Submit Data to FB", "url": "/submit/submitting-data/"}
              ]},
            { "name": "Submit",
              "children": [
                { "name": "How to Submit Data to FB", "url": "/submit/submitting-data/"},
                { "name": "Current Data Priorities", "url": "/submit/data-priorities/"}
            ]},
            { "name": "Data Access",
              "children": [
                { "name": "Data Access Policies", "url": "/access/policies/"},
                { "name": "Request Data Access", "url": "/access/request/"},
                { "name": "How to Cite Us", "url": "/access/citing/"}
            ]},
            { "name": "Resources",
              "children": [
                { "name": "Resources Hub", "url": "/resources/"},
                { "name": "3D Facial Norms", "url": "/facial_norms/"},
                { "name": "Genome Browser Tracks", "children": [
                    { "name": "NCBI36/hg18 assembly (human)", "url": "http://genome.ucsc.edu/cgi-bin/hgTracks?db=hg18&hubUrl=http://trackhub.facebase.org/hub.txt"},
                    { "name": "GRCh37/hg19 assembly (human)", "url": "http://genome.ucsc.edu/cgi-bin/hgTracks?db=hg19&hubUrl=http://trackhub.facebase.org/hub.txt"},
                    { "name": "NCBI37/mm9 assembly (mouse)", "url": "http://genome.ucsc.edu/cgi-bin/hgTracks?db=mm9&hubUrl=http://trackhub.facebase.org/hub.txt"},
                    { "name": "GRCm38/mm10 assembly (mouse)", "url": "http://genome.ucsc.edu/cgi-bin/hgTracks?db=mm10&hubUrl=http://trackhub.facebase.org/hub.txt"}
                ]},
                  { "name": "FishFace (zebrafish atlas)", "url": "/fishface/home/"},
                  { "name": "Human Genomics Analysis Interface", "url": "/hgai/"},
                  { "name": "Mouse Anatomy (by age stage)", "url": "/mouseanatomy/"},
                  { "name": "Mouse Data Summary", "url": "/mousematrix/"},
                  { "name": "OCDM (ontology)", "url": "/ocdm/"}
            ]},
            { "name": "About",
              "children": [
                { "name": "About FaceBase", "url": "/about/"},
                { "name": "How to Cite Us", "url": "/access/citing/"},
                { "name": "Publications", "url": "/publications/"},
                { "name": "Projects", "url": "/chaise/recordset/#1/isa:project"},
                { "name": "Data Access Policies", "url": "/access/policies/"},
                { "name": "Metadata Annotation", "url": "/methods/metadata/"}
            ]},
            { "name": "News", "url": "/about/news-events/"},
            { "name": "Help",
              "children": [
                { "name": "FAQs", "url": "/help/faqs/"},
                { "name": "Using the Data Browser", "url": "/help/using-the-data-browser/"},
                { "name": "Exporting Data", "url": "/help/exporting/"},
                { "name": "Citing FaceBase Data", "url": "/access/citing/"},
                { "name": "Submitting Data", "url": "/submit/submitting-data/"},
                { "name": "Training", "url": "/training/"}
            ]}
          ]
        },
    footerMarkdown: "[Contact](/contact/) | [Privacy Policy](/privacy-policy/)"
}
