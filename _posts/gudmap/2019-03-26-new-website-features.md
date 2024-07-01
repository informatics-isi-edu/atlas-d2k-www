---
title: 'New Features in the GUDMAP Data Browser'
layout: post
tag: gudmap
---

The Hub has updated [gudmap.org](/) with some important new features and improvements for users and data submitters. We would love to get your [feedback - just use this form](https://isrd.wufoo.com/forms/s11zsu750g4r50y/)!

* **Unified imaging model**: We unified the data model for all types of imaging data. This means that when you browse our [Specimen](/chaise/recordset/#2/Gene_Expression:Specimen@sort(Stage_Ordinal,RID)?pcid=static/posts) data, all related images - ie, in situ hybridization (ISH), immunohistochemical (IH) and histology (H&E) - in our repository will now show up under the appropriate "Specimen" page.  

* **Specimen Expression Treeview** visualization: You can now visually display the scored expression annotation associated with a mouse specimen. For example, go to [the specimen page for the Reln gene](/id/N-GHTR?pcid=static) and click _Specimen Expression_ in the right "Contents" sidebar. To the left of the treeview is a legend representing different states of _Strength_, _Pattern_, _Density_, _Density Change_ and whether there are further notes available. A camera icon indicates one or more related images. Just scroll through the tree and click a term (in **bold**) to learn more. Tip: Click the "Treeview (full screen)" link at the very top of the tree to open the treeview to it's full size in a separate browser tab.

* **Boolean Anatomy Search**: The ability to perform [boolean anatomy searches](https://www.gudmap.org/deriva-webapps/boolean-search/) is now available. From the navigation bar, click _Search_, then _Boolean Anatomy Search_ to get to the app. You can find documentation [here](https://informatics-isi-edu.github.io/atlas-d2k-docs/docs/querying-the-atlas-d2k-data-browser/) or click the "i" icon on the app for more information.

* **Support for visualization images and applications**: As we mentioned in our previous news post, you can now find visualizations of analyzed single cell RNA-Seq data. Check out [these studies with visualization images](/chaise/recordset/#2/RNASeq:Study/*::facets::N4IghgdgJiBcDaoDOB7ArgJwMYFM6JAEsIAjdafEAJQDkBBAZRwEcQAaEANUKTTABtCALzAAXQiggB9BqLRQAnlIBmAaxwKQAXQC+bUOlFk0FBNXpNWHbrwHCxE6Tb6CR4yVLoAHL4KwOPNQ1tPWoASQARbQ4IFFEpCDR+fjhRDDQcHV0gA@sort(RMT::desc::,RID)?pcid=static).

* **User experience improvements**:

    * Added a link from the _Array_ heatmap page to the raw array data, so users may download the source data.
    * Changed menu bar navigation from hovering to clicking in order to expand sub menus which will enable touch-screen access.
    * New and expanded Help section. Go to _Help_ from the navigation menu for user documentation on querying the data browser, using the boolean anatomy search, Theiler stage reference guide and more.
    * Soon we will be standardizing the menus between the Data Browser and the rest of the website for a more seamless experience. For this release, you'll notice that instead of "Data" we now have "Search" as a top-level menu item, and its menu is structured similarly to that in the repository. We'll be announcing the full integration soon.
    * Fixed bugs related to the "Contents" sidebar on the record detail page and fixed broken URLs.

* **Streamlining efforts for data submitters**:

  * Unified data model for scRNA-Seq and bulk RNA-Seq. All sequencing experiments now require Replicates (which capture the information about the bio-specimen). Single_Cell_Metrics will only contain statistic information and will be linked to a specific Replicate.  
  * Extended the model to take _dbGaP_Accession_ID_ for human-protected sequencing files.

  * Automatically scroll to the top after creating/updating records.

  * Enabled the repository to accept Antibodies and Protocol data from KPMP.
