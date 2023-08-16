---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Qualifying
---

### [dbo.qualifying]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **qualifyId** |  Primary Key | INT | ☐ |  |  | 
| **raceId** | FK_Qualifying_RaceID (dbo.races raceId) | INT | ☐ | 0 | Foreign key link to races table  | 
| **driverId** | FK_Qualifying_DriverID (dbo.drivers driverId) | INT | ☐ | 0 | Foreign key link to drivers table | 
| **constructorId** | FK_Qualifying_ConstructorID (dbo.constructors constructorId) | INT | ☐ | 0 | Foreign key link to constructors table | 
| **number** |  | INT | ☐ | 0 | Driver number | 
| **position** |  | INT | ☑ |  | Qualifying position | 
| **q1** |  | VARCHAR(255) | ☑ |  | Q1 lap time e.g. "1:21.374" | 
| **q2** |  | VARCHAR(255) | ☑ |  | Q2 lap time | 
| **q3** |  | VARCHAR(255) | ☑ |  | Q3 lap time | 

### Table Relationships

![Qualifying](/img/table-relationships/qualifying.png)

### Example Query

```sql
SELECT 
	[qualifyId]
	,r.[raceId]
	,r.name AS [race_name]
	,d.[driverId]
	,CONCAT(d.forename,' ',d.surname) AS [driver_name]
	,c.[constructorId]
	,c.name AS [constructor_name]
	,q.[number]
	,[position]
	,[q1]
	,[q2]
	,[q3]
FROM 
	[dbo].[qualifying] q

	INNER JOIN [dbo].[races] r
		ON q.raceId = r.raceId

	INNER JOIN [dbo].[drivers] d
		ON d.driverId = q.driverId

	INNER JOIN [dbo].[constructors] c
		ON c.constructorId = q.constructorId
WHERE 
	r.year = '2023'
```

### Example Output