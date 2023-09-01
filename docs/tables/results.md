---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Results
---

### [dbo.results]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **resultId** |  Primary Key | INT | ☐ |  |  | 
| **raceId** | FK_Results_RaceID (dbo.races raceId) | INT | ☐ | 0 | Foreign key link to races table | 
| **driverId** | FK_Results_DriverID (dbo.drivers driverId) | INT | ☐ | 0 | Foreign key link to drivers table | 
| **constructorId** | FK_Results_ConstructorID (dbo.constructors constructorId) | INT | ☐ | 0 | Foreign key link to constructors table | 
| **number** |  | INT | ☑ |  | Driver number | 
| **grid** |  | INT | ☐ | 0 | Starting grid position | 
| **position** |  | INT | ☑ |  | Official classification, if applicable | 
| **positionOrder** |  | INT | ☐ | 0 | Driver position for ordering purposes | 
| **points** |  | FLOAT | ☐ | 0 | Driver points for race | 
| **laps** |  | INT | ☐ | 0 | Number of completed laps | 
| **milliseconds** |  | INT | ☑ |  | Finishing time in milliseconds | 
| **fastestLap** |  | INT | ☑ |  | Lap number of fastest lap | 
| **rank** |  | INT | ☑ | 0 | Fastest lap rank, compared to other | 
| **statusId** | FK_Results_StatusID (dbo.status statusId) | INT | ☐ | 0 | Fastest lap speed (km/h) e.g. "213.874" | 
| **positionTextID** | FK_Results_PositionTextID (dbo.positionText positionTextID) | INT | ☑ |  | Foreign Key link to positionText | 
| **fastestLapTime** |  | TIME | ☑ |  | Fastest lap time e.g. "1:27.453" | 
| **fastestLapSpeed** |  | DECIMAL | ☑ |  | Fastest lap speed (km/h) e.g. "213.874" | 
| **time** |  | TIME | ☑ |  | Finishing time or gap | 


### Table Relationships

![Results](/img/table-relationships/results.png)

### Example Query

```sql
SELECT 
	[resultId]
    ,ra.name AS [race_name]
	,sea.year
    ,CONCAT(d.forename, ' ',d.surname) AS [driver_name]
    ,c.name AS [constructor]
    ,r.[number]
    ,[grid]
    ,[position]
    ,[positionOrder]
    ,[points]
    ,[laps]
    ,r.[time]
    ,[milliseconds]
    ,[fastestLap]
	,r.rank
    ,[fastestLapTime]
    ,s.status
    ,pt.positionText
FROM 
	[dbo].[results] r

	INNER JOIN [dbo].[races] ra
		ON r.raceId = ra.raceId

	INNER JOIN [dbo].[drivers] d 
		ON d.driverId = r.driverId

	INNER JOIN [dbo].[constructors] c
		ON c.constructorId = r.constructorId

	LEFT JOIN [dbo].[status] s 
		ON s.statusId = r.statusId

	LEFT JOIN [dbo].[positionText] pt 
		ON pt.positionTextID = r.positionTextID

	INNER JOIN [dbo].[seasons] sea
		ON sea.year = ra.year
WHERE
	ra.year = '2023'
	AND ra.name = 'British Grand Prix'
```

### Example Output