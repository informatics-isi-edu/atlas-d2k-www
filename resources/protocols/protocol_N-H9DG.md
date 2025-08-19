# GUDMAP1/GUDMAP2/nGUDMAP: Automated checking protocols - Spreadsheet Checker (Version 1.0)

## Version
1.0

## Notice
This page is the corresponding protocol tomestone page generated as part of the ATLAS-D2K shutdown in July 2025. Many links on this page may be broken.

## Authors
Richard Baldock

## Release Date
2017-09-19

## Abstract
This protocol describes methods used by the Editorial Office in the University of Edinburgh for checking spreadsheet in GUDMAP1, GUDMAP2 and nGUDMAP.

## Procedure
## Running the Spreadsheet Checker

1. Copy a tab-delimited text version of the Excel spreadsheet to be checked into the "parser_input" folder.  

Rename this file "input.txt".

![Screenshot 1](Source_Files/N-H9DG_Spreadsheet1.png)

2. Open up the 'input.properties' files. The parameters in this file must match the type of Excel spreadsheet the submitter is using.

For a **high resolution** spreadsheet, ensure you have set the following parameters:

- stage=hires
- format=hires

For a **TS23 low resolution** spreadsheet, ensure you have set the following parameters:

- stage=23
- format=23

3. Open up a terminal shell (on toolbar).  Navigate to the folder "Documents/dbData/" and press Enter.

![Screenshot 2](Source_Files/N-H9DG_Spreadsheet2.png)

4. Type the following on the command line and press Enter.

```jar -xf submitparser.jar```

![Screenshot 3](Source_Files/N-H9DG_Spreadsheet3.png)


5. Type the following on the command line and press Enter.

```java -cp .:/Users/Chris/Documents/dbData/mysql_3.1.12.jar hgu.submitparser.bin.Submit_Parser -f ./input.properties```

![Screenshot 4](Source_Files/N-H9DG_Spreadsheet4.png)

6. By pressing Enter, you will run the spreadsheet checker program.

You will see something like the following:

```DO YOU WISH TO PROCEED?  Y/N```

7. Press "y".

You will see a list of filenames, which will end with something like this.
```
********* FINISHED ********** 
Number of Rows transformed: 8 
sbms07689:dbData eo$ 
```
Ensure that the number of rows transformed is equivalent to the number of submissions in the spreadsheet. 

An error report will have been generated in the "parser_error_report" folder.

![Screenshot 5](Source_Files/N-H9DG_Spreadsheet5.png)



## Consortium
GenitoUrinary Development Molecular Anatomy Project (GUDMAP) Consortium
