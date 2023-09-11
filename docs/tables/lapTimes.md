---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Lap Times
---

### [dbo.lapTimes]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **raceId** |  Primary Key | INT | ☐ |  | Foreign key link to races table | 
| **driverId** |  Primary Key | INT | ☐ |  | Lap number | 
| **lap** |  Primary Key | INT | ☐ |  | Lap number | 
| **position** |  | INT | ☑ |  | Driver race position | 
| **milliseconds** |  | INT | ☑ |  | Lap time in milliseconds | 
| **time** |  | TIME | ☑ |  | Lap time in milliseconds | 

### Table Relationships

![Lap Times](/img/table-relationships/lapTimes.png)

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

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

|**raceId**|**driverId**|**lap**|**position**|**milliseconds**|**time**|  
|---|---|---|---|---|---| 
|1|1|1|13|109088|00:01:49.088| 
|1|1|2|12|93740|00:01:33.740| 