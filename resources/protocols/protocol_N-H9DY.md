# GUDMAP1/GUDMAP2/nGUDMAP: Genelists from Microarray Analysis (Version 1.0)

## Version
1.0

## Notice
This page is the corresponding protocol tomestone page generated as part of the ATLAS-D2K shutdown in July 2025. Many links on this page may be broken.

## Authors
Richard Baldock

## Release Date
2017-09-19

## Abstract
This protocol describes gene lists the Editorial Office in the University of Edinburgh produced from analyses of the microarray expression data in GUDMAP1, GUDMAP2 and nGUDMAP.

## Procedure
**Genelists from Microarray Analysis**

GUDMAP gene lists are the products of analyses of the GUDMAP microarray expression data. They are spilt into those lists that have been included in publications and those that are unpublished.  
Lists are further sub-divided by sample datasets and microarray chip platform and in some cases the developmental stage of the sample on which the analysis was based. The datasets are groups of samples, spilt by microarray platform (MOE430 or ST1), with further sub-division by anatomy (kidney, lower urinary tract, reproductive system, pelvic ganglion and juxtaglomerular apparatus).

Please browse the tree for gene lists of interest, the number of microarray probes/genes which comprise each list is displayed. Hover over a list name for more detailed information, or click on a list (bold) to view the lists in heatmap view. The majority of the **unpublished gene lists** have been produced by **Dr. Bruce Aronow** (CCHMC). The protocol used by the Aronow group to produce the gene lists is given below. For any further assistance with the methodology please contact [Dr. Bruce Aronow](mailto:bruce.aronow@cchmc.org) directly.

Protocols for published gene lists can be found in their respective publications:  
[Brunskill et al. (2008)](http://www.ncbi.nlm.nih.gov/pubmed/19000842) Pubmed: 19000842  
[Georgas et al. (2009)](http://www.ncbi.nlm.nih.gov/pubmed/19501082) Pubmed: 19501082  
[Thiagarajan et al. (2011)](http://www.ncbi.nlm.nih.gov/pubmed/21386911) Pubmed: 21386911  

**<a name="Aronow_Genelist_Protocol" id="Aronow_Genelist_Protocol"></a>Aronow genelist protocol**

Gene lists (probeset lists) were formed by averaging the relative values of the replicates of a given samples, filtering out probesets that had raw expression in the each compartment less than 6.0, and the filtering to form a list of the probesets that had the highest relative expression in the average of each compartment using cutoffs that allowed for the delineation of the top 100, 200, 500 and 1000 probesets per each compartment. From each of those lists, K-means clustering was carried out to divide them into 5 clusters per gene list. All gene lists (probeset lists) were then subjected to hierarchical clustering to identify coordinately regulated gene sets among these.

Thus, for example, the gene list named **DevelopingLowerUrinaryTract_e14.5_ Genital tubercle_emap-6706_500_MOE430_k1** would be a list of genes that were mapped from the lists of probesets that were the top 500 based on normalized relative expression in the e14.5 genital tubercle, and then subjected to K-means clustering to form smaller list of genes in that cluster.


## Consortium
GenitoUrinary Development Molecular Anatomy Project (GUDMAP) Consortium
