---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Pit Stops
---

### [dbo.pitStops]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **raceId** |  Primary Key | INT | ☐ |  |  | 
| **driverId** |  Primary Key | INT | ☐ |  | Foreign key link to drivers table | 
| **stop** |  Primary Key | INT | ☐ |  | Stop number | 
| **lap** |  | INT | ☐ |  | Lap number | 
| **time** |  | TIME | ☐ |  | Time of stop e.g. "13:52:25" | 
| **milliseconds** |  | INT | ☑ |  | Duration of stop in milliseconds | 
| **duration** |  | DECIMAL | ☑ |  | Duration of stop in milliseconds | 

### Table Relationships

![Pit Stops](/img/table-relationships/pitStops.png)

### Example Query

```sql
SELECT
	r.[raceId]
	,r.name AS [race_name]
	,d.[driverId]
	,CONCAT(d.forename, ' ',d.surname) AS [driver_name]
	,[stop]
	,[lap]
	,ps.[time]
	,[duration]
	,[milliseconds]
FROM 
	[dbo].[pitStops] ps

	INNER JOIN [dbo].[races] r
		ON r.raceId = ps.raceId

	INNER JOIN [dbo].[drivers] d
		ON d.driverId = ps.driverId
WHERE
	r.year = '2023'
	AND r.name = 'Australian Grand Prix'
```

### Example Output

 |**raceId**|**driverId**|**stop**|**lap**|**time**|**milliseconds**|**duration**|  
 |---|---|---|---|---|---|---| 
 |841|1|1|16|17:28:24.0000000|23227|23.227| 
 |841|1|2|36|17:59:29.0000000|23199|23.199| 