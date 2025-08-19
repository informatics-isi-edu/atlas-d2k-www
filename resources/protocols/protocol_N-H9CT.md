# Digoxigenin-11-UTP-Labeled Riboprobe Synthesis (Version 1.0)

## Version
1.0

## Notice
This page is the corresponding protocol tomestone page generated as part of the ATLAS-D2K shutdown in July 2025. Many links on this page may be broken.

## Authors
Chad Vezina

## Keywords
['in situ hybridization', 'probe generation']

## Subjects
['Molecular biology', 'Gene expression analysis']

## Release Date
2017-08-07

## Abstract
Digoxigenin-11-UTP-Labeled Riboprobe Synthesis protocol by the Vezina Group

## Procedure

**Design of Polymerase Chain Reaction (PCR) Primers**

1. Extract cDNA sequence from Entrez Gene ([http://www.ncbi.nlm.nih.gov/sites/entrez](http://www.ncbi.nlm.nih.gov/sites/entrez)).

2. Use Primer3 program ([http://frodo.wi.mit.edu/primer3/](http://frodo.wi.mit.edu/primer3/)) to design PCR primers against the 3’-region of the cDNA sequence. The following parameters are used to assist in the design of high-quality, specific PCR primers:

* **A.** Mispriming Library (repeat library): RODENT_AND_SIMPLE.

* **B.** PCR Product Size Range: 500-800 base pairs (bp).

* **C.** Maximum allowable weighted similarity to ectopic sites in the cDNA sequence (Template Mispriming): 10.

* **D.** Primer Size Minimum: 18bp, Optimum: 20bp, Maximum: 27bp.

* **E.** Primer melting temperature (Tm) Minimum: 57°C, Optimum: 60°C, Maximum: 63°C.

* **F.** Maximum acceptable Tm difference between left and right primers: 100°C.

* **G.** Primer GC content: Minimum: 20%, Optimum: 50%, Maximum: 80%.

* **H.** Maximum allowable 3'-anchored global alignment score for self-complimentarity: 1.

* **I.** Maximum allowable length of homonucleotide repeat (Poly-X): 3.

* **J.** Number of guanines or cytosines required at 3’ end of left and right primer (GC Clamp): 1.

* **K.** The following sequence is added to the 5’-end of the right primer: CGATG**TTAATACGACTCACTATAGGG**. This sequence includes a 5bp leader sequence followed by the T7 RNA polymerase recognition sequence (shown in bold-faced, underlined text).

3. Specificity of the PCR product for the cDNA sequence is assessed with the MegaBLAST Program ([http://www.ncbi.nlm.nih.gov/genome/seq/BlastGen/BlastGen.cgi?taxid=10090](http://www.ncbi.nlm.nih.gov/genome/seq/BlastGen/BlastGen.cgi?taxid=10090)).  A PCR sequence is considered specific for the cDNA when, using an EXPECT threshold of 0.01, it does not align with other members of the RefSeq RNA database.

4. Primers are synthesized by a commercial vendor and are resuspended in nuclease free water at a concentration of 100µM.

**Synthesis of Digoxigenin-11-UTP-Labeled Riboprobes**

1. PCR.

* **A.** Prepare cDNA.

    * **a.** The following C57BL/6J mouse tissues are used as cDNA source material: embryonic day (E)16.5 male urogenital sinus, E16.5 female urogenital sinus, and P60 male prostate (all lobes). Add Molecular Grinding Resin (G-Biosciences #786-138PR) to the frozen tissues, mechanically homogenize tissue with a pestle, and further disrupt tissue by passing homogenate through QIAshredder Columns (Qiagen # 79654). Isolate total mRNA with the RNeasy Mini Kit (Qiagen # 74104) and quantify mRNA by spectrophotometry.

    * **b.** Synthesize cDNA with oligo d(T) primers, according to the instructions of the SuperScript® III First-Strand Synthesis System (Invitrogen # 18080-051). Reverse transcription reactions contained equal amounts of E16.5 Male C57BL/6J total mRNA, E16.5 female C57BL/6J total mRNA, and P60 Male C57BL/6J prostate total mRNA.

* **B.** Amplify PCR Product.

    * **a.** PCR reaction components are optimized for each cDNA sequence. A typical 50µl reaction contains: 1X buffer, 2mM MgCl2, 0.2 mM dNTPs (Roche Applied Science 11969064001), 1X Q solution, approximately 1µg cDNA, 2.5U Taq DNA polymerase (Qiagen #201203), 0.25µM PCR primers and nuclease-free H2O.

    * **b.** Thermocycling conditions on the Perkin Elmer GeneAmp 9600 are optimized for each cDNA sequence.  A typical thermocycling protocol is: initial denaturation at 94°C for 2 min, followed by 40 cycles of 94°C 30s, 57°C 30s, 72°C 1min and a final extension at 72°C 10 min.

* **C.** Gel Purify PCR Product

    * **a.** Separate products in a 1% agarose gel

    * **b.** Visualize gel with an ultraviolet transilluminator and excise DNA bands with a clean razor blade.

    * **c.** Purify excised DNA bands from gel slice with a gel extraction kit (Qiagen # 28704).

    * **d.** Elute DNA in 40µl nuclease free H2O.

    * **e.** Quantify product by spectrophotometry. Expected yield is 1.2 - 3.6µg. 

2. Transcribe PCR product into labeled riboprobe.

* **A.** *In vitro *transcription reactions (40 µl) contain: 400ng clean PCR product, 1X nucleotide labeling mix containing digoxigenin 11-UTP (Roche Applied Science # 1277073910) 1X transcription buffer , 5U RNase inhibitor (Roche Applied Science #03335399001), 80U T7 RNA polymerase (Roche Cat # 10881767001), and nuclease-free H2O. Incubate 3-4 hr at 37°C (agitate samples every 30 min).

* **B.** Purify riboprobes with the Qiagen RNEASY Mini kit (Qiagen # 74104), according to the directions for RNA cleanup with DNase digestion.

* **C.** Elute riboprobe with 40µl nuclease-free H2O.

* **D.** Quantitate by spectrophotometry. Expected yield is 4-20µg.

* **E.** Verify probe quality by separating probe by electrophoresis on a 1.5% non-denaturing agarose gel. High quality probes migrate as distinct bands with minimal smearing.



## Consortium
GenitoUrinary Development Molecular Anatomy Project (GUDMAP) Consortium
