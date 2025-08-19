# GUDMAP1/GUDMAP2/nGUDMAP: Automated checking protocols - Probe Checker (Version 1.0)

## Version
1.0

## Notice
This page is the corresponding protocol tomestone page generated as part of the ATLAS-D2K shutdown in July 2025. Many links on this page may be broken.

## Authors
Richard Baldock

## Release Date
2017-09-19

## Abstract
This protocol describes methods used by the Editorial Office in the University of Edinburgh for checking data entries for probes in GUDMAP1, GUDMAP2 and nGUDMAP.

## Procedure
## Running the Probe Checker

1. Navigate to the folder which contains both the perl script "primer_coordinates" and Blast applications.

```sbms07689:~ eo$ cd Desktop/test/```

Press Enter.

2. Define the path.

```sbms07689:~/Desktop/test eo$ export PATH=.:$PATH```

Press Enter.

3. Type "primer_coordinates" followed by the input file (text Windows format). 

```sbms07689:~/Desktop/test eo$ primer_coordinates ArchiveXXX.txt```

Press Enter.

4. You will see something like the following:
```
Processing NM_013523.2 ... 
Processing NM_007857.2 ... 
Processing NM_007809.2 ...

Coordinates are stored in ArchiveXXX_processed.txt

 

This exe file was created with the evaluation version of Perl2Exe.
For more information visit http://www.indigostar.com
(The full version does not display this message with a 2 second delay.)
...
```

A probe report will have been generated in the "test" folder.

The filename of this report appears in the Unix shell.

(in the example above, the filename is "ArchiveXXX_processed.txt")

**IMPORTANT** - The input file should contain only 3 columns. These are: 

- Accession_Number
- Probe_5’
- Probe_3’

![Screenshot 1](Source_Files/N-H9DJ_Probe1.png)
 
The input file **must** be saved as a text Windows format.

![Screenshot 2](Source_Files/N-H9DJ_Probe2.png)


## Consortium
GenitoUrinary Development Molecular Anatomy Project (GUDMAP) Consortium
