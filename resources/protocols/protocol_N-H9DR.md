# GUDMAP1/GUDMAP2/nGUDMAP: SOFT mapping protocol (Version 1.0)

## Version
1.0

## Notice
This page is the corresponding protocol tomestone page generated as part of the ATLAS-D2K shutdown in July 2025. Many links on this page may be broken.

## Authors
Richard Baldock

## Release Date
2017-09-19

## Abstract
This protocol describes methods used by the Editorial Office in the University of Edinburgh for formatting microarray data in GUDMAP1, GUDMAP2 and nGUDMAP.

## Procedure
GUDMAP cDNA microarray data is formatted into a GEO (Gene Expression Omnibus)-compatible format (SOFT) before being submitted to GEO. The mapping protocol used to render the data compatible with both databases is detailed below.

SOFT (Simple Omnibus Format in Text) format support MIAME-compliant data submissions. For more details see the [GEO website](http://www.ncbi.nlm.nih.gov/geo/info/MIAME.html).
| Ser. | Name in GUDMAP spreadsheet | GEO FIELD | Name in database: Table | Name in database: Column |
| --- | -------------------------------------- | ------------- | ---------------------------- | -------------------------------- |
|SAMPLE INFO SHEET|
| 1 | Unique ID | | MIC_SERIES_SAMPLE|SRM_SAMPLE_ID|
| 2 | Associated File | | MIC_GENE_LIST|GLT_FILENAME|
| 3 | Submitted_By | SERIES_CONTRIBUTOR|REF_PERSON|PER_NAME|
| 4 | Submitted_Institution | |  REF_PERSON|PER_LAB|
| 5 | Submitted_Mailing_Address | |  REF_PERSON|PER_ADDRESS|
| 6 | Submitted_City  | | REF_PERSON|PER_CITY|
| 7 | Submitted_Zip_Code  | |  REF_PERSON|PER_POSTCODE|
| 8 | Submitted_Country  | |  REF_PERSON|PER_COUNTRY|
| 9 | Submitted_Telephone  | |  REF_PERSON|PER_PHONE|
| 10 | Submitted_Email  | |  REF_PERSON|PER_EMAIL|
| 11 | PI_Name  | |  REF_PERSON|PER_NAME|
| 12 | PI_Institution  | |  REF_PERSON|PER_LAB|
| 13 | PI_Mailing_Address  | |  REF_PERSON|PER_ADDRESS|
| 14 | PI_City  | |  REF_PERSON|PER_CITY|
| 15 | PI_Zip_Code  | |  REF_PERSON|PER_POSTCODE|
| 16 | PI_Country  | |  REF_PERSON|PER_COUNTRY|
| 17 | PI_Telephone  | |  REF_PERSON|PER_PHONE|
| 18 | PI_Email  | |  REF_PERSON|PER_EMAIL|
| 19 | Sample name|SAMPLE_TITLE|MIC_SAMPLE|SMP_TITLE|
| 20 | Tissue/Cell type|SAMPLE_SOURCE_NAME_CH|MIC_SAMPLE|SMP_SOURCE|
| 21 | Ontology name  | |  MIC_COMPONENT|CPN_COMPONENT_ID|
| 22 | Genus / Species|SAMPLE_ORGANISM / PLATFORM ORGANISM|MIC_SAMPLE|SMP_ORGANISM|
| 23 | Strain|SAMPLE_CHARACTERISTICS|MIC_SAMPLE|SMP_STRAIN|
| 24 | NCBI Taxonomy ID|PLATFORM_ORGANISM|MIC_PLATFORM|PLT_ORGANISM|
| 25 | Mutations|SAMPLE_DESCRIPTION|MIC_SAMPLE|SMP_MUTATION|
| 26 | Pooled sample|SAMPLE_TREATMENT_PROTOCOL_CH|MIC_SAMPLE|SMP_POOLED_SAMPLE|
| 27 | Pool size|SAMPLE_CHARACTERISTICS|MIC_SAMPLE|SMP_POO_SIZE|
| 28 | Sex|SAMPLE_CHARACTERISTICS|MIC_SAMPLE|SMP_SEX|
| 29 | Developmental stage|SAMPLE_CHARACTERISTICS|MIC_SAMPLE|SMP_DEVELOPMENT_STAGE|
| 30 | Theiler Stage|SAMPLE_CHARACTERISTICS|MIC_SAMPLE|SMP_THEILER_STAGE|
| 31 | Somite count|SAMPLE_CHARACTERISTICS|MIC_SAMPLE|SMP_SOMITE_COUNT|
| 32 | Developmental landmarks|SAMPLE_CHARACTERISTICS|MIC_SAMPLE|SMP_DEVELOPMENT_LANDMARK|
| 33 | Dissection method|SAMPLE_TREATMENT_PROTOCOL_CH|MIC_SAMPLE|SMP_DISSECT_METHOD|
| 34 | Sample image  | |  MIC_SAMPLE|SMP_IMAGE|
| 35 | Sample molecule|SAMPLE_MOLECULE|MIC_SAMPLE|SMP_MOLECULE|
| 36 | A260/280  | |  MIC_SAMPLE|SMP_A260_280|
| 37 | Bioanalyzer RIN  | |  MIC_SAMPLE|SMP_BIOANALYZER_RIN|
| 38 | Platform Technology|PLATFORM_TECHNOLOGY|MIC_PLATFORM|PLT_TECHNOLOGY|
| 39 | Platform Distribution|PLATFORM_DISTRIBUTION|MIC_PLATFORM|PLT_DISTRIBUTION|
|40 | Array Manufacturer|PLATFORM_MANUFACTURER|MIC_PLATFORM|PLT_MANUFACTURER|
|41 | Array Manufacturer protocol|PLATFORM_MANUFACTURE_PROTOCOL|MIC_PLATFORM|PLT_MANUFACTURER_PROTOCOL|
|42 | Array Name|PLATFORM_TITLE|MIC_PLATFORM|PLT_NAME|
|43 | RNA extraction protocol|SAMPLE_EXTRACT_PROTOCOL_CH|MIC_SAMPLE|SMP_RNA_EXTRACT_PROTOCOL|
|44 | Target Amplification manufacturer/kit|SAMPLE_DESCRIPTION|MIC_SAMPLE|SMP_TGT_AMP_PROTOCOL|
|45 | Target Amplification protocol|SAMPLE_DESCRIPTION|MIC_SAMPLE|SMP_TGT_AMP_MANUFACT|
|46 | Rounds of amplifcation|SAMPLE_DESCRIPTION|MIC_SAMPLE|SMP_ROUND_OF_AMP|
|47 | Amount labeled target hybridized to array|SAMPLE_HYB_PROTOCOL|MIC_SAMPLE|SMP_AMT_LAB_TGT_HYB_TO_ARY|
|48 | Sample Label|SAMPLE_LABEL_CH|MIC_SAMPLE|SMP_LABEL|
|49 | Array Hyb/Wash/Scan protocol|SAMPLE_HYB_PROTOCOL|MIC_SAMPLE|SMP_ARY_HYB_PROTOCOL|
|50 | GCOS Tgt Value|SAMPLE_DATA_PROCESSING|MIC_SAMPLE|SMP_GCOS_TGT_VAL|
|51 | Data analysis method|SAMPLE_DATA_PROCESSING|MIC_SAMPLE|SMP_DATA_ANA_METHOD|
|52 | Reference used  | |  MIC_SAMPLE|SMP_REFERENCE_USED|
|53 | Experimental goals  | |  MIC_EXPERIMENT|XMT_GOAL|
|54 | Experimental Design  | |  MIC_EXPERIMENT|XMT_DESIGN|
|SERIES INFO SHEET|
|55 | Title (Standard Fields table)|SERIES_TITLE|MIC_SERIES|SER_TITLE|
|56 | Summary (Standard Fields table)|SERIES_SUMMARY|MIC_SERIES|SER_SUMMARY|
|57 | Type (Standard Fields table)|SERIES_TYPE (deprecated)|MIC_SERIES|SER_TYPE|
|58 | Overall design (Standard Fields table)|SERIES_OVERALL_DESIGN|MIC_SERIES|SER_OVERALL_DESIGN|
|59 | Sample ID (Sample ID table)  | |  MIC_SERIES_SAMPLE|SRM_SAMPLE_ID|
|60 | Description (Sample ID table)  | |  MIC_SERIES_SAMPLE|SRM_SAMPLE_DESCRIPTION|
|61 | Variable (Variable table)  | |  MIC_SERIES_DETAIL|SDL_ITEM|
|62 | Description (Variable table)  | |  MIC_SERIES_DETAIL|SDL_VALUE|
|63 | Samples (Variable table)  | |  MIC_SER_DTL_SAMPLE|SDS_SAMPLE_FK|
|64 | Replicate type (Replicates table)  | |  MIC_SERIES_DETAIL|SDL_ITEM|
|65 | Samples (Replicates table)  | |  MIC_SERIES_DETAIL|SDL_VALUE|


## Consortium
GenitoUrinary Development Molecular Anatomy Project (GUDMAP) Consortium
