---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Pit Stops
---

### [dbo.pitStops]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **date** |  | DATETIME2 | ☑ |  |  | 
| **driver_key** |  | INT | ☑ |  |  | 
| **lap_number** |  | INT | ☑ |  |  | 
| **meeting_key** |  | INT | ☑ |  |  | 
| **pit_duration** |  | DECIMAL | ☑ |  |  | 
| **session_key** |  | INT | ☑ |  |  | 

### Table Relationships

![Pit Stops](/img/table-relationships/pitStops.png)

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

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