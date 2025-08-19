# GUDMAP1/GUDMAP2/nGUDMAP: Normalisation of cDNA microarray CHP files (Version 1.0)

## Version
1.0

## Notice
This page is the corresponding protocol tomestone page generated as part of the ATLAS-D2K shutdown in July 2025. Many links on this page may be broken.

## Authors
Richard Baldock

## Release Date
2017-09-19

## Abstract
This protocol describes methods used by the Editorial Office in the University of Edinburgh for normalizing cDNA microarray CHP files in GUDMAP1, GUDMAP2 and nGUDMAP.

## Procedure
## Normalisation of cDNA microarray CHP files

CHP files are normalised by averaging values for each cDNA probe across entire datasets. Binary logarithms (log2) of these normalised values are published as heatmaps on the GUDMAP website.  

![Heatmap example](Source_Files/N-H9DT_Heatmap.png)

[Heatmaps](http://www.gudmap.org/gudmap/pages/all_components_genelists.html) are currently available for the following datasets.

*   Developing Kidney (MOE_430)
*   Lower Urinary Tract (MOE_430)
*   Reproductive Gonadal (MOE_430)
*   Developing Kidney (ST1)
*   Developing Gonadal FACS (ST1)
*   Developing Pelvic Ganglia FACS (ST1)
*   JGS Single Cell (ST1)

To display [heatmaps](http://www.gudmap.org/gudmap/pages/all_components_genelists.html) we use the following formula:

*   M (of a probeset in sample i) = RMA (of probeset in sample i) - RMA (median of its value across all samples)

More details on the Affymetrix platforms (MOE430, ST1) can be found [here](http://www.gudmap.org/gudmap/pages/focus_platform_browse.html).


## Consortium
GenitoUrinary Development Molecular Anatomy Project (GUDMAP) Consortium
