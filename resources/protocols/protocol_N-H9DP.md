# GUDMAP1/GUDMAP2/nGUDMAP: Standards for GUDMAP microarray entries (Version 1.0)

## Version
1.0

## Notice
This page is the corresponding protocol tomestone page generated as part of the ATLAS-D2K shutdown in July 2025. Many links on this page may be broken.

## Authors
Richard Baldock

## Release Date
2017-09-19

## Abstract
This protocol describes methods used by the Editorial Office in the University of Edinburgh for checking microarray entries in GUDMAP1, GUDMAP2 and nGUDMAP.

## Procedure
We have just finished a review of our requirements and compared these to MIAME 2.0 standards. We have identified several areas that should be improved and have written the following report detailing these findings. All new data will be required to comply and retrospective checks will then be carried out on data already in the GUDMAP database. 
             
The following elements must be provided to support GUDMAP microarray data.

**1. The raw data for each hybridisation.**
The raw data are defined as data files produced by the microarray image analysis software, such as CEL files for Affymetrix or GPR files for GenePix. These files should be provided in the native formats and should match their respective array designs.

- .CEL file

**2. The final processed data for the set of hybridisations in the experiment**

The processed data is defined as the normalised and/or summarized data on which the conclusions in the related publication are based. For instance, these can be MAS5 or RMA normalised data matrices for Affymetrix data. In gene expression experiments the final processed data is typically a matrix of genes and experimental conditions characterizing the expression of each gene under each condition. The identifiers used in these processed data files should match the array annotation or locations on the arrays.

- Normalised Data

**3. The essential sample annotation, including experimental factors and their values**

Experimental factors (conditions) and their values are the most essential information about the samples used in the experiment. The experimental factors are the key experimental variables in the experiment, for instance "time" in time series experiments, "dose" in dose response experiments, "compound" in compound treatment experiments, or "disease state" (normal or otherwise) in disease studies. The same experiment may have several experimental factors, for example, compound, dose and time may all be experimental factors in a dose response experiment in which several compounds are used to treat samples over a time course. In addition to experimental factor values, additional sample information that is required to interpret the experiment must be given, for instance, the organism and organism part from which the sample has been taken.

- Tissue/Cell Type (plus EMAP Ontology ID)
- Theiler Stage
- Age
- Strain
- Transgenic Allele Details (if a Transgene Reporter specimen)
- Mutant Allele Details (if a Mutant specimen)
- Sex
- Pooled Sample

**4. The experiment design including sample data relationships**

The purpose of the experimental design description is simply to specify the essential relationships between different biomaterials, such as samples and arrays, and the data files which are produced in each hybridisation. In a simple one channel one sample - one array experiment, this may be a table listing all samples and the respective raw data files. If relevant, it is important to show which hybridisations in the experiment are replicates, and which are technical and which are biological replicates. More generally, the experimental design can be described as a graph where nodes represent biomaterials (e.g., samples or their sources) and data objects (e.g., files), and edges or arrows show their relationships. MAGE-TAB provides a simple format to encode such graphs.

- Unique ID
- Sample Name
- Experimental Design
- Biological Replicates
- Technical Replicates

5. Sufficient annotation of the array design

Essential array design information is the reporter (probe) sequence information and/or the database accession numbers that characterise a sequence. For synthetic oligonucleotides the precise DNA sequence must be given. For commercial or other standard array platforms this information is typically provided by the array vendors or manufacturers.

- Platform Details

**6. Essential experimental and data processing protocols**

The essential laboratory and data processing protocols are usually described in the journal methods section. It is sufficient to simply reference the standard experimental or data processing protocols, such as MAS5 or RMA. However, if a protocol depends on parameters that can be varied, their values should be provided. If novel or non-standard data processing protocols are used, these should be described in sufficient detail to allow the user to understand what exactly has been done in the experiment and how the data have been analysed to reach the conclusions of the study.

- Normalisation Methods

**7. Other**

- .EXP file OR Hybridisation Protocols (if .EXP file unavailable)
- .CHP file (contains signal values and presence/absence calls for each probe set)
- .TXT file (a text version of the .CHP file)
- .RPT file (includes info about noise and internal hybridisation controls)
- Extract Preparation Protocols (LCM, FACS, Enzymatic Digestion etc.)

## Consortium
GenitoUrinary Development Molecular Anatomy Project (GUDMAP) Consortium
