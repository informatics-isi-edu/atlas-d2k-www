# Digoxigenin-labelled Riboprobe Synthesis from a PCR-generated DNA template (Version 1.0)

## Version
1.0

## Notice
This page is the corresponding protocol tomestone page generated as part of the ATLAS-D2K shutdown in July 2025. Many links on this page may be broken.

## Authors
Melissa H. Little

## Keywords
['in situ hybridization', 'probe generation']

## Subjects
['Gene expression analysis', 'Molecular biology', 'Imaging']

## Release Date
2017-08-04

## Abstract
Digoxigenin-labelled Riboprobe Synthesis from a PCR-generated DNA template by the Little Group

## Procedure
## Primer Design

Primers are designed to amplify a 3’UTR region of a gene in the FANTOM2 pool of between 500-700bp. The reverse primer is linked to a T7 polymerase promoter tag sequence as follows:

Reverse (3’) Primer 5’ leader sequence CGATGT- T7 polymerase sequence TAATACGACTCACTATAGGG – then the primer sequence – 3’.

Primers are ordered from Invitrogen.

## Primer Resuspension

Re-suspend PCR primers using 10mM Tris-HCl pH8.0 to make a 100µM stock.  From the well resuspended stock solution, make a 20µM working dilution. At this point, you may combine both the forward and reverse primer for each set into a labeled 1.5ml eppendorf.

Eg. Dilute stock ie. 10µl F primer stock + 10µl Reverse primer stock + 30ul 10mM Tris pH8.0 in a 1.5ml eppendorf.

Final concentration is 20µM = 20pmol/ul.

Store stocks at -20°C

## Gradient PCR

To determine the optimal annealing temperature, choose 3-5 primer sets and perform a gradient PCR as follows using the BioRAD MyCycler. One reaction volume is to be divided equally between 8-strip 0.2ml PCR tubes (Scientific Specialties Inc. 3240-00):

| | 1x |
| ---- |:------:|
| 10x PCR reaction buffer | 20.0 |
| 50mM MgCl2 | 6.0 |
| 10mM dNTPs | 4.0 |
| 20µM F & R Primer | 2.0 |
| FANTOM II plasmid pool (1:10 000) | 8.0 |
| 5U/µl Taq DNA polymerase | 2.0 |
| RO-H20 | 156.0 |
| TOTAL | 200.0 |


PCR Conditions using BioRad MyCycler

1. 94°C     2min    1 cycle
2. 94°C     1min
    53-65°C   30sec   35 cycles
    72°C   45sec
3. 72°C    10min    1 cycle
4. 4°C    hold


\* The gradient depends on melting temperature of primer set and spans across 8 temperature points in the PCR machine.

Run 12.5ul on a 1% agarose gel at 100V for 35min to determine the optimal annealing temp.

## Primary PCR

Once the optimal annealing temperature has been determined, prepare a primary PCR reaction mix for the 48 primer sets in a 96well plate as follows:

| | 1x |
| ---- |:------:|
| 10x PCR reaction buffer | 5.0µl |
| 50mM MgCl2 | 1.5µl |
| 10mM dNTPs | 1.0µl |
| 20µM F & R Primer | 0.5µl |
| FANTOM II plasmid pool (1:10 000) | 2.0µl |
| 5U/µl Taq DNA polymerase | 0.5µl |
| RO-H20 | 39.0µl |
| TOTAL | 50.0µl |


Make enough Master Mix to include negative controls for the PCR.

Use every second column of the 96 well plate.

Cover with sealing film.

Spin at 1500rpm for 5min.

Perform PCR in the Tetrad DNA Engine (Microarray Facility) as follows:

1. 94°C     2min    1 cycle
2. 94°C     1min
    55°C   30sec   35 cycles
    72°C   45sec
3. 72°C    10min    1 cycle
4. 4°C    hold

\* Annealing temp based on results of gradient PCR

Run out 50uL product on 1.5% agarose gel 100V for 25min. Expect to see 1 distinct band between 500-700bp.

Cut bands out using a scalpel blade under UV light and placed into appropriately numbered 1.5ml tubes.

Purify PCR products using Qiagen Gel Extraction Kit as summarised:

1. Add 3x volumes Buffer QG to volume of gel

2. Dissolve @ 50°C/10min

3. Place column in 2mL collection tube

4. Apply sample to column and centrifuge for 1min @13000rpm

5. Discard flow through and place column back in tube

6. Add 0.75mL Buffer PE to column. Centrifuge 1min @13000rpm.

7. Discard flow through. Centrifuge 1min @13000rpm.

8. Place column in clean 1.5mL tube.

9. Elute DNA by adding 30uL Buffer EB to column

10. Let stand for 1 min

11. Centrifuge 1min @ 13000rpm

12. Label tube with ‘Gene symbol-1st’ sticky label

Store samples @ 4°C or -20°C for long term storage.

If no primary PCR product is amplified, repeat reaction using E15.5 whole embryo cDNA instead of the FANTOM pool. 

Record the percentage of primary PCR which failed to amplify with the FANTOM pool.

Also record if the product failed to amplify using the cDNA.

## Secondary PCR

Perform secondary PCR on purified primary PCR template. For one reaction:

| | 1x |
| ---- |:------:|
| 10x PCR reaction buffer | 5.0µl |
| 50mM MgCl2 | 1.5µl |
| 10mM dNTPs | 1.0µl |
| 20µM F & R Primer | 0.5µl |
| Primary PCR product (1-1:100diln) | 2.0- 10.0µl |
| 5U/µl Taq DNA polymerase | 0.5µl |
| RO-H20 | xµl |
| TOTAL | 50.0µl |


PCR conditions (using Tetrad in Array facility or DNA Engine in MHL Lab)

1. 94°C     2min    1 cycle
2. 94°C     1min
    55°C   30sec   35 cycles
    72°C   45sec
3. 72°C    10min    1 cycle
4. 4°C    hold


After completion of secondary PCR run 5uL of sample on 1.5% agarose gel 100V 25min to check amplification and concentration.

Purify products using Qiagen PCR Purification Kit as summarised:

1. Add 5x volumes Buffer PB to 1x volume PCR product

2. Place Qiaquick spin column in collection tube.

3. Apply sample to column. Centrifuge 1min @ 13000rpm.

4. Discard flow through. Place column back in same tube.

5. Wash by adding 0.75mL Buffer PE to column. Centrifuge 1min@13000rpm.

6. Discard flow through and place QIAquick column back in same tube

7. Centrifuge 1min @13000rpm

8. Place column in clean 1.5mL microfuge tube.

9. Elute DNA by adding 30uL Buffer EB to centre of column

10. Let stand for 1min

11. Centrifuge 1min @13000rpm

Store sample @ 4°C

The DNA concentration is measured using 2µl on a Nanodrop.

If the concentration is <40ng/µl, the sample will be concentrated using a Speed Vacuum.

Record the percentage of secondary PCRs which failed to amplify.

## Sequence Check

4 primer sets (A1/2.A3/4, D1/2, H11/12) are chosen and secondary PCR products are sequenced checked.

Use 5-20ng DNA template (500-1000bp).

| | 1x |
| ---- |:------:|
| BDT V3.1 | 1.0µl |
| 5xBDT dilution buffer (400mM Tris pH9.0, 10mM MgCl2 | 3.5µl |
| 3.2pmol T7 primer | 1.0µl |
| DNA template | 1.0µl |
| MilliQ Water | 13.5µl |
| TOTAL | 20.0 |


Cycling Conditions using DNA Engine

| 1. | 96°C | 1min | 1 cycle |
| 2. | 96°C | 10sec |
 50°C* | 5sec | 20-35 cycles |
 60°C | 4 min |
| 3\. | 72°C | 10min | 1 cycle |


## Post-reaction Clean Up

Use the magnesium sulphate protocol for the clean-up of sequencing reactions as provided by AGRF.

1. 0.2mM MgSO4 stock solution contains 30 mL of MilliQ water, 70 mL of absolute ethanol and 20 μL 1M MgSO4 and should be prepared fresh on a fortnightly basis.

2. Allow your plates or tubes to equilibrate at room temperature following cycling.

3. Add 75 μL of room temperature 0.2mM MgSO4 stock solution (see below) to each well/tube. This volume applies to sequencing reactions between 10 – 20μL in total volume.

4. Mix thoroughly by vortexing and allow to sit at room temperature for a minimum of 15 minutes to allow precipitation of your labelled products.

5. Spin at room temperature for a minimum of 15 minutes (longer incubation and spinning times will increase the precipitation of labelled products but will/may also precipitate un-incorporated dyes). Tubes at max speed in a bench top centrifuge.

6. Remove samples from the centrifuge and gently invert plates/tubes over paper towels for 1-2mins.

7. Remove samples from the centrifuge and gently invert plates/tubes over paper towels.

8. If using plates, place on paper towel upside down and spin for 1 minute at 1000rpm. If using tubes, allow them to air dry or place in a 37°C oven, but do not allow your samples to over-dry, as they will be difficult to resuspend if this occurs. Do NOT aspirate remaining solution as the pellet is easily dislodged.

9. When samples are dry submit them to the AGRF for resuspension and analysis.

Once the sequencing samples are returned:

1. BLAST to confirm that sequence of the secondary PCR product matches expected product.

2. Ensure orientation of sequence is as expected i.e. if you have sequenced with the T7 primer, sequence should be in the antisense direction and therefore BLAST results should match accession number as +/-.

3. Perform literature searches and check MGI/UniGene for expression information.

## *in vitro* Transcription of Digoxigenin-Labeled Riboprobes

Once sequences and orientation are confirmed, continue with the production of riboprobes.

Ensure RNase-free conditions are maintained and reagents kept on ice.

| | 1x |
| ---- |:------:|
| 10x transcription buffer (Roche) | 2.0µl |
| 10x DIG RNA labeling mix (Roche) | 2.0µl |
| 10mM DTT (freshly diluted from 1M stock) | 2.0µl |
| 40U/µl Ribonuclease inhibitor RNase Out (Invitrogen) | 1.0µl |
| 20U/µl T7 RNA polymerase | 1.0µl |
| 500ng 2° PCR DNA template | Up to 12.0µl |
| RO-H20 | Xµl |
| TOTAL | 20.0µl |


Incubate in heating block @37°C for 60min.

Add another 1uL T7 RNA polymerase.

Incubate in heating block @37°C for 60min

Add 2.0uL RQ1-DNaseI (10U/uL) @ 37°C for 20 min.

Purify using Roche Quick Mini Spin Column:

Prepare Roche column - flick & invert to resuspend matrix.

Snap off appropriate plastic at top and bottom of column.

Spin column @ 3700 rpm for 1min to remove buffer (collected in 2.0mL tube)

Load riboprobe onto centre of column placed in 1.5ml eppendorf labelled with appropriate sticky label ‘Gene Symbol-Riboprobe’

Spin @ 3500rpm for 4min. Collect approximately 50uL each tube.

Run out 2uL of probe on 1.5% agarose gel at 100V for 15min

Check product on UV Transilluminator. Ideal result shows distinct bright bands with no smearing.

Print 2 pictures of gel and save in GUDMAP folder with date

Store at -70°C in GUDMAP Riboprobe Boxes

Record the percentage of riboprobes which failed to be transcribed.

## QUANTITATION

Quantify riboprobe using 2µl sample on the Nanodrop.

The concentration is usually between 50-300ng/ul.

Record concentration on excel spreadsheet and tube.


## Associated_Publications
- Rumballe BA, Chiu HS, Georgas KM and Little MH. **Use of in situ hybridization to examine gene expression in the embryonic, neonatal and adult urogenital system.** Methods in Molecular Biology: Kidney Development (commissioned book chapter).
- Rumballe B, Georgas K, Little MH. **High-throughput paraffin section in situ hybridisation and dual immunohistochemistry** CSH Protocols, 2008
- Georgas K, Rumballe B, Wilkinson L, Chiu HS, Lesieur E, Gilbert T, Little MH. **Use of dual section mRNA in situ hybridisation/immunohistochemistry to clarify gene expression patterns during the early stages of nephron development in the embryo and in the mature nephron of the adult mouse kidney.** Histochem Cell Biol. 2008 Nov;130(5):927-42. Epub 2008 Jul 11.

## Consortium
GenitoUrinary Development Molecular Anatomy Project (GUDMAP) Consortium
