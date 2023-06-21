---
title: "Visualization is now available for mRNA-Seq data"
layout: post
tag: rbk
---

The Hub has recently completed the re-analysis of all the mRNA-Seq studies submitted to both the GUDMAP and RBK consortia, updating all derived data to common reference genomes. To facilitate data exploration, the Hub has released a new online interactive tool for visualizing mRNA-Seq gene expression data in TPM (transcripts per kilobase million). The tool allows users to visualize the gene expression data from one or more studies. The expression data is aggregated based on different experiment/sample properties including *Experiment*, *Replicate*, *Specimen Type*, *Anatomical Source*, *Stage*, and *Age* if these were provided by the submitting labs. Users can select a gene of interest against one or more studies, and change different aggregation criteria interactively.  

![Example visualization](/assets/img/news/tpm-example.png)

*Violin plot of bulk mRNA-seq gene expression data in TPM (transcripts per kilobase million).*

The *Group By:* field is set to "Experiment" by default (the above example shows results from two experiments in the study [14-3PXT](/id/14-3PXT)[: RNA-Seq from early time points in the kidney differentiation protocol](/id/14-3PXT)). You can choose from many other metadata aggregation characteristics in this field including anatomical region and stage if available.

There are three ways to access this visualization:

* **[General mRNA-Seq visualization page](/deriva-webapps/plot/?config=study-violin&pcid=newsletter)** - This version has the most flexibility and allows you to select any gene and choose specific studies. You can follow the specific Gene or Study links to get to the detailed information related to a Gene or Study.      

* **[Gene search page](/chaise/recordset/#2/Common:Gene/*::facets::N4IghgdgJiBcDaoDOB7ArgJwMYFM4gEEIBPAfQBEwAXMEAGhCwAsUBLXJOeKjNHAXQC+dZOmx5YIACoAFALKkAaqyRowAG1YAvaqxQR6jFuxycEPPkKFA@sort(RID)?pcid=newsletter)** - You can search for genes that have different types of gene expression data including "mRNA-Seq Visualization". When you browse to a gene of interest, if available, the  "mRNA-Seq Visualization" section will be displayed among other types of gene expression data (e.g. scRNA-Seq visualization and scored expression data). The mRNA-Seq visualization on the Gene page is restricted to a specific gene and the latest Study is selected by default. See this example for the Six2 gene record: [https://www.rebuildingakidney.org/id/Q-4FTJ](/id/Q-4FTJ).

* **[Study search page](/chaise/recordset/#2/RNASeq:Study/*::facets::N4IghgdgJiBcDaoDOB7ArgJwMYFM6JAEsIAjdafEAJQDkBBAZRwEcQAaEAUQA8AHHDIQC2OCABcA+gzFooATwlUAkgBEJAMwDWOOSAC6AXzah0YsmgoJq9Jqw49+gkeIkOBw0ZIAqc-hu26hhzKKvocWAAWKIS4SJQAigC0AJoAUgAaAOr6Rsjo2HiwIF4ACgCyEipgYmDsIJHRsfhiGGg4hoZAA@sort(RMT::desc::,RID)?pcid=newsletter)** - You can search for mRNA-Seq studies that have the gene expression reanalysis data and/or the visualization plots. Only reanalysis expression data from the released studies are available for visualization. When you browse to a Study of interest, if available, an "mRNA-Seq Visualization" plot will be displayed, among other types of data (e.g., the user-submitted sequencing files and hub-generated gene expression files). See this example from the study “16-2CNW: Translational profiles of proximal tubule during kidney fibrosis” [https://www.rebuildingakidney.org/id/16-2CNW](/id/16-2CNW)

Note that for the visualizations at the Gene and Study level, there is a link available to "[Visualization with Gene & Study selectors](/deriva-webapps/plot/?config=study-violin)", which will take you to the general version that allows you to choose different genes and/or studies. The full screen mode is also available within the Gene and Study pages.

### Known Limitations

Although the Hub has done the mRNA-Seq reanalysis on all submitted mRNA-Seq studies, only reanalysis expression data from studies that have been curated and released are available for visualization. The Hub is currently reviewing and amending the rest of the studies including the GUDMAP legacy mRNA-Seq studies before adding them to the visualization list. Furthermore, alternative groupings of the data (e.g., by sex) are limited by what was provided with the submission.
