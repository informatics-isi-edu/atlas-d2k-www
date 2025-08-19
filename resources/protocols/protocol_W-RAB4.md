# Adult mouse kidney dissociation (on ice) (Version 1.0)

## Version
1.0

## Notice
This page is the corresponding protocol tomestone page generated as part of the ATLAS-D2K shutdown in July 2025. Many links on this page may be broken.

## Authors
Andrew Potter; Steve Potter

## Keywords
['kidney digestion', 'kidney', 'Cell dissociation']

## Subjects
['Developmental biology']

## Release Date
2018-06-29

## Abstract
Protocol for adult (8-10 week) mouse kidney dissociation performed on ice to reduce artifact gene expression. The first layer, consisting of collagenase digestion, breaks down the tissue and releases some cells and glomeruli and tubules. The second layer consists of _bacillus licheniformis_ digestion for 15 min. augmented with a thermomixer at 1400 RPM and passaging with a 27 gauge needle. The second layer is meant to thoroughly break up remaining tubules and glomeruli, releasing cells such as podocytes. The final yield is 250K cells from 18 mg tissue with 98% viability, approximately 14,000 cells/mg tissue. Approximately 1% of released cells are podocytes (visualized using kidneys from MAFB-GFP+ mice using a hemocytometer).

## Introduction
A cold-active method for adult mouse kidney dissociation. 

The protocol workflow is as follows: 
A. Isolate Kidney
B. First layer
C. Second layer
D. Preparing cells for DropSeq/Chromium


## Reagents
**Collagenase Enzyme Mix (1 mL per 18 mg tissue):**
50 µL Coll. A 100 mg/mL (5 mg/mL final) Sigma (cat. #10103586001)
50 µL Coll. Type 4 100 mg/mL (5 mg/mL final) Worthington (cat. #LS004186)
125 U DNAse (5 µL) AppliChem (cat. #A3778)
5 mM Cacl2 (5 µL of 1 M CaCl2)
890 µL DPBS (no Ca, Mg) Thermo Fisher (cat. #14190)

**Bacillus Licheniformis Enzyme Mix (1 mL per 18 mg tissue):**
100 µL b. lich 100 mg/mL (10 mg/mL final)
1 µL 0.5 M EDTA
899 µL DPBS (no Ca, Mg) ThermoFisher (cat. #14190)

**Preparing enzymes:**
The enzymes are made up in DPBS (#14190). They are aliquoted and stored at -80 ºC.
Collagenase A,Collagenase 4 and bacillus licheniformis: 100 mg/mL in 100 µL aliquots.
DNAse: 250 U/10 µL in 20 µL aliquots.

Red Blood Cell Lysis Buffer - Sigma (R7757)

**Optional Dead Cell Removal Kit: **
EasySep dead cell removal (Annexin V) kit (cat. #17899)
EasySep Magnet (cat. #18000)


## Equipment
Thermomixer
Centrifuges for 1.5 mL and 15 mL conicals (MLS)
Pipettes and pipet tips (MLS)
15, 50 ml Conicals (MLS)
1.5 mL tubes (MLS)
40 µM filters (MLS)
100 µM filters (MLS)
Petri dishes (MLS)
Razor blades (MLS)
Ice bucket w/ice (MLS)
Hemocytometers - InCyto Neubauer Improved (DHC-NO1-5)
27 g x 1/2 needle w/syringe (BD, #309623)

## Procedure
**Before starting:**
-Prepare enzyme mixes and leave on ice. 
-Cool centrifuges to 4 °C.
-Isolate and transport tissue in ice-cold DPBS. 

**Protocol**
1.	Transport kidney in ice-cold PBS.
2.	Using razor blade, mince biopsy for 2 min until fine paste on petri dish on ice.
3.	Weigh out 18 mg of minced kidney onto petri dish. Transfer to 1.5 mL tube with 1 mL of collagenase enzyme mix on ice.
4.	Shake tube every min. Triturate 10x every min (starting at 2 min), using p1000 set to 700 µL with the end of the tip cut off. 
5.	After 20 min, let tissue chunks settle on ice 1 min. Spin tube 70 g for 30 sec. to pellet glomeruli and tubules.
6.	Remove 60% of supernatant (consisting of released cells) and apply to 40 µM filter on 50 mL conical. Rinse filter with 6 mL ice-cold PBS/BSA 0.04%. 
7.	Add 1 mL PBS to tube containing remaining enzyme mix with tissue chunks. Triturate 10X. Apply to 100 µM filter on 50 mL conical. Rinse filter w/10 mL PBS. 
8.	Transfer flow-through to 15 mL conical. Spin 300 g for five minutes to pellet flow-through.
9.	Remove supernatant. Add 1 mL b. lich enzyme mix to tube containing the flow-through from the 100 µM filter (should be enriched in tubules and glomeruli). Triturate 10x. Transfer to 1.5 mL tube.
10.	For 15 min additional time (35 min total digestion) shake in thermomixer at 1400 RPM at 4 °C. Halfway through, stop and passage 5X w/27 gauge needle to help break up tubules and glomeruli. 
11.	Triturate digest mix 10X and transfer to the same 40 µM filter on 50 mL conical. Rinse w/6 mL PBS/BSA 0.04%.
12.	Spin the tube with released cells 300 g for 5 min at 4 °C. Remove supernatant (leave ~100 µL).
13.	Add 1 mL of RBC lysis buffer to the 15 mL conical containing the cells. Triturate 10X using 1 mL pipet. Let sit two min on ice. Add 10 mL ice-cold PBS/BSA 0.04% to dilute RBC lysis buffer. 
14.	 Spin 300 g for 5 min at 4 °C. Remove supernatant and re-suspend in 100-200 µL ice-cold PBS/BSA 0.04%.  Check viability and concentration using hemocytometer with trypan blue.
15.	Optional: to increase the % of viable cells, at this point in the procedure you can perform dead cell removal using the EasySep dead cell removal kit according to the manufacturer’s instructions. 
16.	Adjust concentration to 100 cells/µL for DropSeq or 1,000 cells/µL for Chromium.


## Timing
The procedure takes about 1 hours to perform. The total digest time is approximately 35 min.

## Anticipated_Results
The final yield is 250K cells from 18 mg tissue with 98% viability, approximately 14,000 cells/mg tissue. Approximately 1% of released cells are podocytes (visualized using kidneys from MAFB-GFP+ mice using a hemocytometer).

## Consortium
(Re)Building a Kidney (RBK) Consortium
