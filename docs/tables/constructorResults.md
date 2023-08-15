---
sidebar_position: 1
title: Constructor Results
---

### [dbo.constructorResults]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **constructorResultsId** |  Primary Key | INT | ☐ |  |  | 
| **raceId** | FK_ConstructorResults_RaceID (dbo.races raceId) | INT | ☐ | 0 | Foreign key link to races table | 
| **constructorId** | FK_ConstructorResults_ConstructorID (dbo.constructors constructorId) | INT | ☐ | 0 | Foreign key link to constructors | 
| **points** |  | FLOAT | ☑ |  | Constructor points for race | 
| **positionTextID** | FK_ConstructorResults_positionTextID (dbo.positionText positionTextID) | INT | ☑ |  | Foreign Key link to postitionText | 

### Example Query

```sql
SELECT 
	[constructorResultsId]
	,r.[raceId]
	,r.date AS [race_date]
	,c.[constructorId]
	,c.name AS [constructor]
	,[points]
	,pt.[positionTextID]
	,pt.positionText
FROM 
	[dbo].[constructorResults] cr

	INNER JOIN [dbo].[races] r 
		ON r.raceId = cr.raceId

	INNER JOIN [dbo].[constructors] c 
		ON c.constructorId = cr.constructorId

	LEFT OUTER JOIN [dbo].[positionText] pt
		ON pt.positionTextID = cr.positionTextID
```

### Example Output