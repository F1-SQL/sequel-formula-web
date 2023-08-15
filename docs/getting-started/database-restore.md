---
sidebar_position: 2
pagination_next: null
pagination_prev: null
title: Database Restore
---

In this section, we will demonstrate how to restore a Sequel Formula backup to your instance of Microsoft SQL Server, to begin, make sure that you are running a [supported version](../about/supported-versions). You can of course try and restore to any version of SQL Server, but these are the only versions we officially [support](../about/supported-versions).

We are going to assume you have downloaded the latest release from the link in the [getting started](../getting-started) section of this documentation.

## Step By Step Guide

The below steps will demonstrate how to restore the database backup to your instance of Microsoft SQL Server, if you would rather watch our short video you can do so at the bottom of this page.

### Step 1 - Extract the zip

![Alt text](../../static/img/database-restore/zip-unpacked.png)

### Step 2 - Find the backup for your instance

![Alt text](../../static/img/database-restore/database-list.png)

### Step 3 - Open SQL Server Management Studio

![Alt text](../../static/img/database-restore/ssms-not-connected.png)

### Step 4 - Connect to your instance of Microsoft SQL Server

![Alt text](../../static/img/database-restore/ssms-connection-1.png)
![Alt text](../../static/img/database-restore/ssms-connection-2.png)
![Alt text](../../static/img/database-restore/ssms-connected.png)

### Step 5 - Restore the database backup

![Alt text](../../static/img/database-restore/ssms-restore-db-1.png)
![Alt text](../../static/img/database-restore/ssms-restore-db-2.png)
![Alt text](../../static/img/database-restore/ssms-restore-db-3.png)
![Alt text](../../static/img/database-restore/ssms-restore-db-4.png)
![Alt text](../../static/img/database-restore/ssms-restore-db-5.png)
![Alt text](../../static/img/database-restore/ssms-restore-db-6.png)
![Alt text](../../static/img/database-restore/ssms-restore-db-7.png)

### Step 6 - Ensure that the backup has been successfully restored. 

![Alt text](../../static/img/database-restore/ssms-database-list.png)

## Video Demonstration

<iframe width="560" height="315" src="https://www.youtube.com/embed/g89yXpLzLhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>