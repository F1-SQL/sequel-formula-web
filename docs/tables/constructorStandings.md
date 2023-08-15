---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Constructor Standings
---

### [dbo.constructorStandings]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **constructorStandingsId** |  Primary Key | INT | ☐ |  |  | 
| **raceId** | FK_ConstructorStandings_RaceID (dbo.races raceId) | INT | ☐ | 0 | Foreign key link to races table | 
| **constructorId** | FK_ConstructorStandings_ConstructorID (dbo.constructors constructorId) | INT | ☐ | 0 | Foreign key link to constructors | 
| **points** |  | FLOAT | ☐ | 0 | Constructor points for season | 
| **position** |  | INT | ☑ |  | Constructor standings position | 
| **positionText** |  | VARCHAR(255) | ☑ |  | Constructor standings position | 
| **wins** |  | INT | ☐ | 0 | Season win count | 

### Table Relationships


### Example Query

```sql
SELECT 
	[constructorStandingsId]
	,r.[raceId]
	,r.date AS [race_date]
	,c.[constructorId]
	,c.name AS [constructor]
	,[points]
	,points, 
	position, 
	positionText, 
	wins
FROM 
	[dbo].[constructorStandings] cs

	INNER JOIN [dbo].[races] r 
		ON r.raceId = cs.raceId

	INNER JOIN [dbo].[constructors] c 
		ON c.constructorId = cs.constructorId
```

### Example Output