---
sidebar_position: 1
title: Lap Times
---

### [dbo.lapTimes]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **raceId** |  Primary Key | INT | ☐ |  | Foreign key link to races table | 
| **driverId** |  Primary Key | INT | ☐ |  | Lap number | 
| **lap** |  Primary Key | INT | ☐ |  | Lap number | 
| **position** |  | INT | ☑ |  | Driver race position | 
| **time** |  | VARCHAR(255) | ☑ |  | Lap time in milliseconds | 
| **milliseconds** |  | INT | ☑ |  | Lap time in milliseconds | 

### Example Query

```sql
SELECT 
	r.[raceId]
	,r.name AS [race_name]
	,d.[driverId]
	,CONCAT(d.forename, ' ',d.surname) AS [driver_name]
    ,[lap]
    ,[position]
    ,lt.[time]
    ,[milliseconds]
FROM 
	[dbo].[lapTimes] lt

  	INNER JOIN [dbo].[races] r
		ON r.raceId = lt.raceId

	INNER JOIN [dbo].[drivers] d
		ON d.driverId = lt.driverId
WHERE 
	r.year = '2023'
	AND r.name = 'Australian Grand Prix'
```

### Example Output