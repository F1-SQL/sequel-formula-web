---
sidebar_position: 1
title: Drivers
---

### [dbo.drivers]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **driverId** |  Primary Key | INT | ☐ |  |  | 
| **driverRef** |  | VARCHAR(255) | ☐ |  | Unique driver identifier | 
| **number** |  | INT | ☑ |  | Permanent driver number | 
| **code** |  | VARCHAR(3) | ☑ |  | Driver code e.g. "ALO" | 
| **forename** |  | VARCHAR(255) | ☐ |  | Driver forename | 
| **surname** |  | VARCHAR(255) | ☐ |  | Driver surname | 
| **dob** |  | DATE | ☑ |  | Driver date of birth | 
| **nationality** |  | VARCHAR(255) | ☑ |  |  | 
| **url** |  | VARCHAR(2048) | ☐ |  | Driver Wikipedia page | 
| **nationalityID** |  | INT | ☑ |  | Foreign Key to nationalities | 

### Example Query

```sql
SELECT 
	[driverId]
	,[driverRef]
	,[number]
	,[code]
	,[forename]
	,[surname]
	,[dob]
	,[url]
	,n.[nationalityID]
	,n.nationality
FROM 
	[dbo].[drivers] d

	INNER JOIN [dbo].[nationalities] n
		ON n.nationalityID = d.nationalityID
```

### Example Output
