# Assay for measurement of intracellular calcium concentration [Ca2+]i in nonperfused isolated tubules or structures using the ratiometric indicator FURA-2 AM (Version 1.0)

## Version
1.0

## Notice
This page is the corresponding protocol tomestone page generated as part of the ATLAS-D2K shutdown in July 2025. Many links on this page may be broken.

## Authors
Rolando Carrisoza-Gaytan

## Keywords
['hiPSC', 'imaging', 'kidney', 'mouse', 'nephron', 'organoid', 'Podocytes', 'proximal tubule epithelial cells']

## Subjects
['Cell biology', 'Imaging']

## Release Date
2022-06-29

## Abstract
This assay describes methods for measurement of intracellular Ca2+ concentration [Ca2+]i  and the assessment of basolateral Ca2+ entry into cells in isolated tubules or structures using a ratiometric fluorescent probe.

## Reagents


- **Cell-Tak™** Cell and Tissue Adhesive (Corning®, cat # 354240): Prepare according to the manufacturer’s instructions;
- **Poly-D-lysine hydrobromide** mol wt 70000-150000, lyophilized powder (Millipore Sigma, cat# P6407): Prepare stock solution of 0.1% w/v and diluted working solutions 0.01% (store at -20°C).
- **Fura 2-AM** in solution (1mM) – CAS 108964-32-5 - Calbiochem (Millipore Sigma; cat# 344906): 1 mM stock solution in DMSO (store 25 μL aliquots at -20°C) and then working 20 μM aliquots in Burg’s solution (prepare 2 aliquots of 1 ml each for 2 sequential 10 min loads) before each experiment.
- **EGTA-AM**  – CAS 99590-86-0 - Calbiochem (Millipore Sigma, Cat# 324628): Prepare a 10 mM w/v stock solution in DMSO (store 10 μL aliquots at -20°C) and then working 10 μM aliquots in Ca2+-free Burg’s solution (prepare 3 aliquots of 1 ml each for 3 sequential 10 min loads) before each experiment.
- **Ionomycin, Calcium Salt, _Streptomyces conglobatus_**  – CAS 56092-82-1 – Calbiochem (Millipore Sigma, Cat# 407952): Prepare a 10 mM w/v stock solution in DMSO and store at 4°C. Prepare 2 mL of a 20 μM working solution in Burg’s solution before each experiment. 
- **Solutions:**
![Figure1](https://www.rebuildingakidney.org/hatrac/resources/protocol/2022/Source_Files/17-H480/e7a0a4262bb2789b046356f638a71eba:KVTBTJUEPAAZQXABG6EHG23MZY)

## Equipment
Digital ratio fluorometry is performed in Fura2-loaded cells or tubules, visualized using a Nikon S Fluor X40 objective (numeric aperture 0.9, working distance 0.3) attached to an inverted epifluorescence microscope (Nikon Eclipse Ti U) and alternately excited at 340 nm and 380 nm using a wavelength switcher (DG-4 or LAMBDA Sutter) and images of the fluorescence emission at 510 nm are acquired at intervals of 3 to 5 sec using a Zyla 4.2 sCMOS camera (ANDOR Technology), interfaced with a digital imaging system (MetaFluor, Universal Imaging).


## Procedure
1.	Single tubules are isolated from organoids by manual microdissection (on a cold stage under a stereoscopic microscope) or by [collagenase digestion (L. Oxburgh protocol)](https://www.rebuildingakidney.org/id/17-H2V0).
2.	Isolated tubules are transferred and affixed to a coverslip (No. 1 thickness) previously painted with a circular droplet (1 µL) of 0.01% poly-D-lysine (in H2O) or Cell-Tak. See below representative photos of our chamber.
3.	Tubules are equilibrated in Burg’s solution at 37°C for 1 hour.
4.	During an equilibration period and thereafter, the perfusion chamber is continuously suffused with a gas mixture of 95%O2 – 5%CO2 and the bathing solution exchanged at a rate of 10 mL/h using a peristaltic syringe pump.
5.	After equilibration, tubules are incubated with 20 µM of the acetoxymethyl ester Fura-2 AM (Molecular Probes; in Burg’s) added to the bath for 20 min in the absence of flow (bath containing Fura-2 probe is exchanged every 10 min to minimize evaporative losses) and then rinsed for 30 min with Burg’s solution. 
6.	Digital ratio fluorometry is performed in Fura 2-loaded cells or tubules, visualized using a Nikon S Fluor X40 objective (numeric aperture 0.9, working distance 0.3) and alternately excited at 340 and 380 nm, using a wavelength switcher (DG-4 or LAMBDA Sutter) and images of the fluorescence emission at 510 nm are acquired at intervals of 3 - 5 sec using a Zyla 4.2 sCMOS camera (ANDOR Technology), interfaced with a digital imaging system (MetaFluor, Universal Imaging).
7.	Once a stable reading of the fluorescence intensity ratio (FIR; emission from excitation at 340nm/380 nm) is observed (generally after 5 – 10 mins), agonists (for example, Yoda1 to activate basolateral piezo1 Ca2+ channels) or antagonists of ion channels, transporters or signaling pathways can be added to the bath and FIRs followed (see Figure). 
8.	Finally, an intracellular calibration is performed: tubules are exposed to 10 µM EGTA-AM in a Ca2+ -free bath for 30 mins (images are acquired at intervals of every 5 mins during this incubation) and then exposed to a 2 mM Ca2+ bath (Burg’s solution) containing ionomycin (10 µM; images are acquired at intervals of 5 sec for this step).
9. Standard equations are used to calculate experimental values of [Ca2+]I as per Grynkiewicz, et al (PMID: 3838314):
**[Ca2+]i = [R-Rmin/Rmax-R] x [Sf2/Sb2] x Kd**
**R =** fluorescence ratio value obtained during the experiment
**Rmin =** minimal fluorescence ratio (Ca2+ free, EGTA)
**Rmax =** maximal fluorescence ratio (Ca2+ bounded, ionomycin)
**Sf2 =** fluorescence at 380nm Ca2+ free 
**Sb2 =** fluorescence at 380nm Ca2+ bounded
**Kd =** 224 nM (dissociation constant for Fura2 and Ca2+)

![Figure2](https://www.rebuildingakidney.org/hatrac/resources/protocol/2022/Source_Files/17-H480/110991d2c2569b53e428e20ce21591f5:W3E3LEK7D4Y65XQAPUTUPIVJQA)	
![Figure3](https://www.rebuildingakidney.org/hatrac/resources/protocol/2022/Source_Files/17-H480/a751bffe6d63db076c05b782cd7c37d8:ANKQMYEDJUXOQYA2LTDFQ5VISI)


## Anticipated_Results
	
![Figure4](https://www.rebuildingakidney.org/hatrac/resources/protocol/2022/Source_Files/17-H480/38236ee22bfd3251ecd4df872256383b:LUJWOQATADQJO3FJ7PB2VOKKUY)

## References
G Grynkiewicz, M Poenie, R Y Tsien.  A new generation of Ca2+ indicators with greatly improved fluorescence properties. J Biol Chem 260(6):3440-50, 1985. PMID: 3838314

## Consortium
(Re)Building a Kidney (RBK) Consortium
