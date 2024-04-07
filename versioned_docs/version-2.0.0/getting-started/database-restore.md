---
sidebar_position: 2
pagination_next: null
pagination_prev: null
title: Database Restore
---

In this section, we will demonstrate how to restore a F1 SQL backup to your instance of Microsoft SQL Server, to begin, make sure that you are running a [supported version](../about/supported-versions). You can of course try and restore to any version of SQL Server, but these are the only versions we officially [support](../about/supported-versions).

We are going to assume you have downloaded the latest release from the link in the [getting started](../getting-started) section of this documentation.

## Step By Step Guide

The below steps will demonstrate how to restore the database backup to your instance of Microsoft SQL Server, if you would rather watch our short video you can do so at the bottom of this page.

### Step 1 - Extract the zip

The first step is to make sure that the zip file that you have downloaded is unpacked. 

![Alt text](../../../static/img/database-restore/zip-unpacked.png)

### Step 2 - Find the backup for your instance

Next, within that zip locate the **backups** folder and then locate the backup suitable for your instance of SQL Server.

![Alt text](../../../static/img/database-restore/database-list.png)

### Step 3 - Open SQL Server Management Studio

Open up Microsoft SQL Server Management Studio.

![Alt text](../../../static/img/database-restore/ssms-not-connected.png)

### Step 4 - Connect to your instance of Microsoft SQL Server

Connect up to your instance by selecting the **connect** button in the **Object Explorer** and selecting **Database Engine** from the list of options.

![Alt text](../../../static/img/database-restore/ssms-connection-1.png)

Enter the details for your instance and click **Connect**. 

![Alt text](../../../static/img/database-restore/ssms-connection-2.png)

Once complete, you should then see something like this. 

![Alt text](../../../static/img/database-restore/ssms-connected.png)

### Step 5 - Restore the database backup

Now that you are connected you can begin the restore.

Right click on the **Databases** 'folder' under your instance name and select **Restore Database**.

![Alt text](../../../static/img/database-restore/ssms-restore-db-1.png)

Select the **Device** Radio Button then click the three `...` to select your file.

![Alt text](../../../static/img/database-restore/ssms-restore-db-2.png)

Make sure **media file** is selected from the drop down and select **Add**

![Alt text](../../../static/img/database-restore/ssms-restore-db-3.png)

In the window that appears, navigate to the location of the extracted zip files and select the `.bak` file for your Instance.

![Alt text](../../../static/img/database-restore/ssms-restore-db-4.png)

You should see something like this

![Alt text](../../../static/img/database-restore/ssms-restore-db-5.png)

Click the **Files** option on the far left of the window and select **relocate all files to folder** then click **Ok**

![Alt text](../../../static/img/database-restore/ssms-restore-db-6.png)

You should then get a message to say the Database has been successfully restored.

![Alt text](../../../static/img/database-restore/ssms-restore-db-7.png)

### Step 6 - Ensure that the backup has been successfully restored. 

If all went well, the database will now be available in Microsoft SQL Management Studio for you to use.

![Alt text](../../../static/img/database-restore/database-list.png)

## Video Demonstration

<iframe width="560" height="315" src="https://www.youtube.com/embed/g89yXpLzLhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>