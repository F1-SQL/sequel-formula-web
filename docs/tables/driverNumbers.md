---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Driver Numbers
---

### [dbo.driverNumbers]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **driverNumberID** |  Primary Key | INT | ☐ |  |  | 
| **number** |  | INT | ☐ |  |  | 
| **driverID** | PK_driverNumbers_driverID (dbo.drivers driverId) | INT | ☐ |  |  | 
| **constructorID** | PK_driverNumbers_constructorID (dbo.constructors constructorId) | INT | ☑ |  |  | 
| **season** | PK_driverNumbers_season (dbo.seasons year) | INT | ☑ |  |  | 
| **sub** |  | BIT | ☑ | 0 |  | 
| **retired** |  | BIT | ☑ | 0 |  | 

### Table Relationships

### Example Query

```sql
SELECT 
	[driverNumberID]
	,dn.[number]
	,CONCAT(d.forename, ' ', d.surname) AS [Driver Name]
	,c.name AS [Constructor]
	,s.[season]
	,dn.[sub]
	,dn,[retired]
FROM 
	[dbo].[driverNumbers] dn

	INNER JOIN [dbo].[drivers] d 
		ON d.driverId = dn.driverID

	INNER JOIN [dbo].[constructors] c 
		ON c.constructorId = dn.constructorID

	INNER JOIN [dbo].[seasons] s 
		ON s.year = dn.season

WHERE
	dn.retired = 0
```

### Example Output