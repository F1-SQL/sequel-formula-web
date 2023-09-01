---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Driver Standings
---

### [dbo.driverStandings]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **driverStandingsId** |  Primary Key | INT | ☐ |  |  | 
| **raceId** | FK_DriverStandings_RaceID (dbo.races raceId) | INT | ☐ | 0 | Foreign key link to races table | 
| **driverId** | FK_DriverStandings_DriverID (dbo.drivers driverId) | INT | ☐ | 0 | Foreign key link to drivers table | 
| **points** |  | FLOAT | ☐ | 0 | Driver points for season | 
| **position** |  | INT | ☑ |  | Driver standings position (integer) | 
| **wins** |  | INT | ☐ | 0 | Driver standings position (string) | 
| **positionTextID** | FK_DriverStandings_PositionTextID (dbo.positionText positionTextID) | INT | ☑ |  | Driver standings position (string) | 

### Table Relationships

![Driver Standings](/img/table-relationships/driverStandings.png)

### Example Query

```sql
SELECT 
	r.[raceId]
	,r.name AS [race_name]
	,d.[driverId]
	,CONCAT(d.forename, ' ',d.surname) AS [driver_name]
	,[points]
	,[position]
	,[positionText]
	,[wins]
FROM 
	[dbo].[driverStandings] ds

    INNER JOIN [dbo].[races] r
		ON r.raceId = ds.raceId

	INNER JOIN [dbo].[drivers] d
		ON d.driverId = ds.driverId
WHERE
	r.year = '2023'
	AND d.driverId = 1
```

### Example Output