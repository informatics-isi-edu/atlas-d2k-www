# GUDMAP1/GUDMAP2/nGUDMAP: Automated checking protocols - Image Checker (Version 1.0)

## Version
1.0

## Notice
This page is the corresponding protocol tomestone page generated as part of the ATLAS-D2K shutdown in July 2025. Many links on this page may be broken.

## Authors
Richard Baldock

## Release Date
2017-09-19

## Abstract
This protocol describes methods used by the Editorial Office in the University of Edinburgh for checking data entries for images in GUDMAP1, GUDMAP2 and nGUDMAP.

## Procedure
## Running the Image Checker

1. Copy a tab-delimited text version of the excel spreadsheet to be checked into the "parser_input" folder.  

Rename this file "input.txt".

Also, copy the "listings.txt" file into this folder.

![Screenshot 1](Source_Files/N-H9DC_ImageCheck1.png)

2. Open up a terminal shell (on toolbar).  Navigate to the folder "Documents/parser_image_check/" and press Enter.

![Screenshot 2](Source_Files/N-H9DC_ImageCheck2.png)

3. Type the following on the command line and press Enter.

```java -jar checkimages.jar -f /Users/eo/Documents/parser_image_check/input.properties```

![Screenshot 3](Source_Files/N-H9DC_ImageCheck3.png)

4. By pressing Enter, you will run the image checker program.

You will see something like the following:

```DO YOU WISH TO PROCEED?  Y/N ```

5. Press ‘y’.

You will see a list of filenames, which will end with something like this.
```
********* FINISHED ********** 
Number of Rows transformed: 8 
sbms07689:parser_image_check eo$
```
Ensure that the number of rows transformed is equivalent to the number of submissions in the spreadsheet. 

An error report entitled "image_error_report.txt" will have been generated in the "parser_error_report" folder.

![Screenshot 4](Source_Files/N-H9DC_ImageCheck4.png)


## Consortium
GenitoUrinary Development Molecular Anatomy Project (GUDMAP) Consortium
