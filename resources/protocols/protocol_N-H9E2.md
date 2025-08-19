# GUDMAP1/GUDMAP2/nGUDMAP: Software Testing and Bug Fixing (Version 1.0)

## Version
1.0

## Notice
This page is the corresponding protocol tomestone page generated as part of the ATLAS-D2K shutdown in July 2025. Many links on this page may be broken.

## Authors
Richard Baldock

## Release Date
2017-09-19

## Abstract
This protocol describes testing the software used by the Editorial Office in the University of Edinburgh in GUDMAP1, GUDMAP2 and nGUDMAP.

## Procedure
## Testing

Software Testing is aimed at evaluating the capability and the quality of the system under test, with respect to the context in which it is intended to operate.  
Test techniques include, but are not limited to, the process of executing a program or application with the intent of finding as many errors in the software as possible.  

Software Testing can also be stated as the process of validating and verifying that a software program/application:

1.  meets the business and technical requirements that guided its design and development;
2.  works as expected.

For the GUDMAP project, all defects/concerning issues are reported in Mantis, basically a bugtracking system but which can also be used to track other issues like new requirements from the editors. Its clean interface and numerous features make bug/issue tracking fast and easy and it can also notify developers and normal users of reported bugs through email, RSS feeds, and even Twitter.

## Bug Fixing

Once a defect has been reported in Mantis, there are some basic steps to follow before bug fixing takes place.

*   Reported issues are normally assigned to the developers either by the project manager or by the developers themselves.
*   The developer will review the bug report and attempt to confirm the bug by reproducing it.
*   If the defect is confirmed, the developer can then take measures to correct it.
*   Once the reported defect is fixed (on his local machine), the developer updates the bug report status to ‘RESOLVED’ and waits for the next Software Release to deploy the bug fix changes.

After the software deployment has been made, it is the tester’s job to verify the resolved issues and see if the reported bugs have been fixed.  
If the tester feels that a bug no longer exists in the software, he/she can change the status of that bug to “CLOSED”. This state means that the bug is fixed, tested and approved. However, if the bug still exists even after it has been resolved by the developer, the tester can reopen the issue and change the status to “NEW”.

## Consortium
GenitoUrinary Development Molecular Anatomy Project (GUDMAP) Consortium
