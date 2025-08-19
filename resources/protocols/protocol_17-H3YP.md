# Dextran Accumulation in Human Kidney Organoids (Version 1.0)

## Version
1.0

## Notice
This page is the corresponding protocol tomestone page generated as part of the ATLAS-D2K shutdown in July 2025. Many links on this page may be broken.

## Authors
Maximillian Frank; Benjamin S. Freedman

## Keywords
['imaging', 'hiPSC', 'organoid', 'proximal tubule epithelial cells', 'probe']

## Subjects
['Imaging', 'Cell biology']

## Release Date
2022-04-21

## Abstract
The ability to specifically accumulate certain cargoes is a well-recognized functional assay for isolated kidney tubules and kidney organoids. To demonstrate cargo uptake, fluorescent molecules are added to the media during a "pulse" period. The media is then exchanged with fresh, un-supplemented media during a "chase" period. Accumulation of fluorescence is assessed by microscopy. Dextrans are branched, inert chains of polysaccharides available in a wide range of molecular weights and in fluorescence-tagged forms, and are commonly used as cargoes for this type of physiology assay.

## Introduction
Before it was used in kidney organoids, dextran had been demonstrated to accumulate in microdissected rabbit proximal tubules, as well as in explants of  mouse embryonic kidneys.

## Reagents
Fluorescent dextran, e.g. Fisher Scientific #D1820 Fluorescein Dextran, 10,000 MW, Anionic, Lysine Fixable (Fluoro-Emerald)

RB Media:
Gibco #12633-012 Advanced RPMI 500mL
Gibco #12504-044 B-27 Supplement 10mL
Fisher Scientific #35050061  Glutamax (100X) 5mL

Human kidney organoids (e.g. WTC-11 iPS cell line, Coriell Institute #GM25256), terminally differentiated in 96 well plates (e.g. day 21 of [STEMdiff™ kit](protocol_17-EBYM/)).

## Equipment
Greiner # 655090 96-well cell culture plate
Inverted confocal microscope with GFP laser line

Standard equipment:
•	Biosafety cabinet certified for Level II handling of biological materials
•	Incubator with humidity and gas control to maintain 37°C and 95% humidity in an atmosphere of 5% CO2 in air
•	Pipettor with appropriate tips (e.g. Catalog #38058)
•	1.5 mL Eppendorf tubes (Fisher brand Catalog # 05-408-129)
•	-20°C freezer
•	Vortex


## Procedure
2)	Using 0.5mL PBS as a solvent, dissolve, and aliquot dextran into 5mM aliquots and store long-term at -20°C
3)	From a thawed aliquot, prepare a 2X dextran solution in RB:
    a.	First, dilute 10µL of the 5mM stock solution into 490µL of RB media in an Eppendorf tube. Mix, then centrifuge at 12,000 g for three minutes. Remove the supernatant into separate Eppendorf tube—this is your 20X solution.
    b.	Add 100 µL of this 20X solution to 900µL of RB. This is now your 2X solution
4)	Aspirate current media in all wells marked for dextran addition and replace with 50µL of fresh RB media
5)	Add 50µL of your 2X solution to desired wells. This gives a final dextran concentration of 1:100.
6)	Incubate for 18 hours prior to imaging/observation at 37°C with 95% humidity and 5% CO2
7)	After 18 hours, remove 75 of the 100µL within each dextran well and wash three times using 175µL of RB
8)	Image live immediately via confocal microscopy (the D1820 dextran occupies the GFP (488nm) channel; brightfield can be used as a counterstain)


## Timing
The timing of the pulse and chase are flexible. These should be determined for each individual system and cell line. In general, a four hour pulse is expected to be sufficient.

## Critical_Steps
The most critical steps in the protocol are:

-	Vortexing and centrifuging 20X dextran solutions.
-	Washing dextran wells with RB after 18-hour incubation



## Trouble_Shooting
Dextran signal may be relatively dim in live imaging, thus it is recommended to boost the gain on any images acquired to ensure that the dynamic range of the instrument is sufficient for detection. In this regard, it may be helpful to set up a titration of the fluorescent dextran in media (with no organoids present), and image the wells, to demonstrate increasing signal with increasing dextran concentration. This is helpful for determining image exposure times.

Results may vary between different batches of organoids, and between genotypes. The differentiation protocol used to produce the organoids may also have an effect. It is recommended to attempt this protocol using adherent organoids generated using the protocol referenced above, as a positive control.

## Anticipated_Results
Dextran is expected to be enriched inside tubular structures, at the apical surface, and decorating the junctions between cells (a 'cobblestone' pattern).

## References
Freedman BS, Brooks CR, Lam AQ, Fu H, Morizane R, Agrawal V, et al (2015). Modelling kidney disease with CRISPR-mutant kidney organoids derived from human pluripotent epiblast spheroids. Nat. Commun., doi: 10.1038/ncomms9715.

Freedman BS (2022). Physiology Assays in Human Kidney Organoids. Am J Physiol Renal Physiol. 2022 Apr 4. doi: 10.1152/ajprenal.00400.2021.

## Associated_Publications
Freedman BS, Brooks CR, Lam AQ, Fu H, Morizane R, Agrawal V, et al (2015). Modelling kidney disease with CRISPR-mutant kidney organoids derived from human pluripotent epiblast spheroids. Nat. Commun., doi: 10.1038/ncomms9715.

Takasato M, Er PX, Chiu HS, Maier B, Baillie GJ, Ferguson C, Parton RG, Wolvetang EJ, Roost MS, Chuva de Sousa Lopes SM, Little MH. Kidney organoids from human iPS cells contain multiple lineages and model human nephrogenesis. Nature 526: 564–568, 2015. doi:10.1038/nature15695.

Low JH, Li P, Chew EGY, Zhou B, Suzuki K, Zhang T, Lian MM, Liu M, Aizawa E, Rodriguez Esteban C, Yong KSM, Chen Q, Campistol JM, Fang M, Khor CC, Foo JN, Izpisua Belmonte JC, Xia Y. Generation of human PSC-derived kidney organoids with patterned nephron segments and a de novo vascular network. Cell Stem Cell 25: 373–387.e9, 2019. doi:10.1016/j.stem.2019.06.009.

## Acknowledgement
Max Frank co-authored this protocol.

## Consortium
(Re)Building a Kidney (RBK) Consortium
