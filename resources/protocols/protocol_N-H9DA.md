# Psychrophilic (Cold) protease dissociation of mouse kidney (Version 1.0)

## Version
1.0

## Notice
This page is the corresponding protocol tomestone page generated as part of the ATLAS-D2K shutdown in July 2025. Many links on this page may be broken.

## Authors
Mike Adam; Andrew Potter; Steve Potter

## Keywords
['Cell dissociation', 'kidney digestion']

## Subjects
['Gene expression analysis', 'Developmental biology', 'Isolation, purification and separation']

## Release Date
2017-08-24

## Abstract
Single cell RNA-seq is a powerful methodology. Nevertheless there are important limitations, including the technical challenges of breaking down an organ or tissue into a single cell suspension. Invariably this has required enzymatic incubation at 37 deg C, which can be expected to result in artifact changes in gene expression patterns. We here describe a dissociation method that uses a protease with high activity in the cold, purified from a psychrophilic microorganism. The entire procedure is carried out at 6 deg C or colder, where mammalian transcriptional machinery is largely inactive, thereby effectively “freezing in” the in vivo gene expression patterns. 

## Introduction
A third limitation is the element of artifactual gene expression introduced by the process of single cell dissociation. The breakdown of an organ or tissue into a single cell suspension often requires a lengthy and complex protocol. Almost invariably these procedures include 37 deg C incubation with a protease to help break attachments between cells. Among the enzymes and enzyme cocktails typically used are trypsin, TrypLE, pronase, collagenase, liberase, and dispase, all active at 37 deg C. At this temperature the enzymes within mammalian cells are also maximally active, including the transcriptional machinery. Because the cells are surrounded by an extremely foreign environment during this enzymatic digestion period one can predict that artifact changes in gene expression will result. 

We reasoned that this situation is analogous to that encountered during the advent of PCR. At first it was necessary to add a fresh aliquot of E. coli DNA polymerase after each denaturation cycle, as the heat inactivated the enzyme. The switch to DNA polymerases from thermophilic organisms, with enzymes adapted for high activity and stability at elevated temperatures, allowed the elimination of this cumbersome step. 

Similarly, single cell RNA-seq could incorporate the use of cold adapted proteases that show high activity at low temperatures. This would allow the entire single cell dissociation process to be carried out “on ice”, or at greatly reduced temperatures, where mammalian enzymes show little activity, thereby minimizing gene expression artifacts. Just as there are thermophilic organisms that live in extremely hot environments, there are psychrophilic, or cryophilic, organisms that are adapted to thrive in the cold. These can be found on mountaintops, on glaciers, in the deep ocean and at extreme northern and southern latitudes, where cold temperatures prevail. These organisms can produce proteases that are adapted for high activity in the cold. 

We here develop and test a cold protease method of single cell dissociation, showing that it can dramatically reduce the gene expression artifacts resulting from 37 deg C protease incubations. We apply the cold protease single cell RNA-seq procedure to the newborn postnatal day 1 (P1) mouse kidney. This is a very interesting stage of mouse kidney development, where mature nephrons are present, as required to support postpartum life, and yet nephrogenesis is still quite active. All stages of nephron formation are represented, from cap mesenchyme progenitor cells to fully differentiated nephrons. The results provide a single cell resolution gene expression atlas of the P1 developing kidney. 


## Reagents
Bacillus Licheniformis protease [Creative-biomart NATE0633] (also available from Sigma, Catalog # P5380)
DNAse [Applichem, A3778]
DPBS [Gibco 14190-144]
0.5 M EDTA pH 8.0 [Ambion 9260G]
BSA [Sigma A3311]
30 uM filter [Miltenyi MAVS smart strainer]

## Equipment
Miltenyi gentleMACS [can substitute with only trituration if required, but more variable results]

## Procedure
- Euthanize 12 P1 strain CD1 mice by decapitation; immerse bodies in ice-cold PBS. 
- Rapidly dissect kidneys in ice-cold PBS. 
- Finely mince kidneys in petri dish on ice using razor blade. 
- Weigh out 50 mg of tissue and add to 2 ml of protease (DPBS, 2.5 mM EDTA, 10 mg/ml of Bacillus Licheniformis protease, 125 U/ml DNAse). 
- Incubate in 6° C water bath with trituration using 1 ml pipet (15 sec every 2 minutes). 
- After 7 min transfer to Miltenyi C-tube (on ice) and in cold room (4 deg C) run Miltenyi gentleMACS brain_03 program twice. 
- Repeat incubation at 6 deg C with trituration for an additional 8 min. 
- Confirm single cell dissociation with microscope. 
- Transfer cells to 15 ml conical tube, add 3 ml ice cold PBS with 0.01% BSA. 
- Pellet cells (800 G 5 min 4 deg C), discard supernatant and resuspend cells in 2 ml PBS/BSA. 
- Pass cells through 30 µM filter (Miltenyi MACS smart strainer), rinse filter with 2 ml PBS/0.01%BSA (PBS/BSA).
- Pellet cells, (800 G, 5 min 4 deg C), resuspend cell pellet in 5 ml PBS/BSA.


## Critical_Steps
It is important to monitor the process of dissociation with a microscope. Periodically remove an aliquot of cells, place on a slide and observe. DNAseI can usually be left out. It is just to reduce viscosity if there is much cell lysis, but this should not happen. If no Milteny gentleMACS is available to not despair. We have had good luck just using trituration in its place, but this is quite variable depending on user, so the GentleMACS is a more reproducible method if possible. the spec sheets for the enzyme give an optimal temperature that is very high. Don't worry. This enzyme works at a wide range of temperatures, and is valuable here because of its high activity retained in the cold. The enzyme spec sheets also say that the enzyme requires calcium. We have used that, but then found that substituting EDTA actually worked better, so apparently it is not a strict requirement. 

## Trouble_Shooting
If you see too many cell clumps and doublets then you need to incubate with enzyme longer and/or use a more potent mechano-dissociation assist. If you see excessive cell debris then cut back on time. In general this procedure works very well for P1 mouse kidneys, but must be tweaked for other tissues. Embryonic tissues, in general, are easier to dissociate and adult are more difficult. We are working on adult kidney for mouse and human, organ and biopsy. 

## Anticipated_Results
You should generate a single cell preparation with very few clumps or doublets and little cell debris. Measure cell concentrations with a hemocytometer. Check viability with a vital stain or other method. Over 90% should be viable. 

## Associated_Publications
This procedure is included in the following publication:

Psychrophilic proteases dramatically reduce single-cell RNA-seq artifacts: a molecular atlas of kidney development
Mike Adam, Andrew S. Potter, S. Steven Potter
Development 2017 144: 3625-3632; doi: 10.1242/dev.151142

## Acknowledgement
This work was supported by National Institutes of Health grant UO1DK107350. 

## Consortium
(Re)Building a Kidney (RBK) Consortium
