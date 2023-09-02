---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Sprint Results
---

### [dbo.sprintResults]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **resultId** |  Primary Key | INT | ☐ |  |  | 
| **raceId** | FK_SprintResults_RaceID (dbo.races raceId) | INT | ☐ | 0 | Foreign key link to races table | 
| **driverId** | FK_SprintResults_DriverID (dbo.drivers driverId) | INT | ☐ | 0 | Foreign key link to drivers table | 
| **constructorId** | FK_SprintResults_ConstructorID (dbo.constructors constructorId) | INT | ☐ | 0 | Foreign key link to constructors table | 
| **number** |  | INT | ☐ | 0 | Driver number | 
| **grid** |  | INT | ☐ | 0 | Starting grid position | 
| **position** |  | INT | ☑ |  | Official classification, if applicable | 
| **positionOrder** |  | INT | ☐ | 0 | Driver position for ordering purposes | 
| **points** |  | FLOAT | ☐ | 0 | Driver points for race | 
| **laps** |  | INT | ☐ | 0 | Number of completed laps | 
| **milliseconds** |  | INT | ☑ |  | Finishing time in milliseconds | 
| **fastestLap** |  | INT | ☑ |  | Lap number of fastest lap | 
| **statusId** | FK_SprintResults_StatusID (dbo.status statusId) | INT | ☐ | 0 | Foreign key link to status table | 
| **positionTextID** | FK_SprintResults_PositionTextID (dbo.positionText positionTextID) | INT | ☑ |  | Foreign key link to positionText | 
| **time** |  | TIME | ☑ |  | Finishing time or gap | 
| **fastestLapTime** |  | TIME | ☑ |  | Lap number of fastest lap | 

### Table Relationships

![Sprint Results](/img/table-relationships/sprintResults.png)

### Example Query

```sql
SELECT 
	[resultId]
    ,r.name AS [race_name]
    ,CONCAT(d.forename, ' ',d.surname) AS [driver_name]
    ,c.name AS [constructor]
    ,sr.[number]
    ,[grid]
    ,[position]
    ,[positionOrder]
    ,[points]
    ,[laps]
    ,sr.[time]
    ,[milliseconds]
    ,[fastestLap]
    ,[fastestLapTime]
    ,s.status
    ,pt.positionText
FROM 
	[dbo].[sprintResults] sr

	INNER JOIN [dbo].[races] r 
		ON r.raceId = sr.raceId

	INNER JOIN [dbo].[drivers] d 
		ON d.driverId = sr.driverId

	INNER JOIN [dbo].[constructors] c
		ON c.constructorId = sr.constructorId

	LEFT JOIN [dbo].[status] s 
		ON s.statusId = sr.statusId

	LEFT JOIN [dbo].[positionText] pt 
		ON pt.positionTextID = sr.positionTextID
```

### Example Output

 |**resultId**|**raceId**|**driverId**|**constructorId**|**number**|**grid**|**position**|**positionOrder**|**points**|**laps**|**milliseconds**|**fastestLap**|**statusId**|**positionTextID**|**time**|**fastestLapTime**|  
 |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---| 
 |1|1061|830|9|33|2|1|1|3|17|1538426|14|1|1|00:25:38.426|00:01:30.013| 
 |2|1061|1|131|44|1|2|2|2|17|1539856|17|1|2|00:00:01.430|00:01:29.937| 