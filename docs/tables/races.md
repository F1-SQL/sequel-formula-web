---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Races
---

### [dbo.races]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **raceId** |  Primary Key | INT | ☐ |  |  | 
| **year** | FK_Races_Year (dbo.seasons year) | INT | ☐ | 0 | Foreign key link to seasons table | 
| **round** |  | INT | ☐ | 0 | Round number | 
| **circuitId** | FK_Races_CircuitID (dbo.circuits circuitId) | INT | ☐ | 0 |  | 
| **name** |  | VARCHAR(255) | ☐ |  | Race name | 
| **date** |  | DATE | ☐ | 0000-00-00 | Race date e.g. "1950-05-13" | 
| **time** |  | TIME | ☑ |  | Race start time e.g."13:00:00" | 
| **url** |  | VARCHAR(2048) | ☑ |  | Race Wikipedia page | 
| **fp1_date** |  | DATE | ☑ |  | FP1 date | 
| **fp1_time** |  | TIME | ☑ |  | FP1 start time | 
| **fp2_date** |  | DATE | ☑ |  | FP2 date | 
| **fp2_time** |  | TIME | ☑ |  | FP2 start time | 
| **fp3_date** |  | DATE | ☑ |  | FP3 date | 
| **fp3_time** |  | TIME | ☑ |  | FP3 start time | 
| **quali_date** |  | DATE | ☑ |  | Qualifying date | 
| **quali_time** |  | TIME | ☑ |  | Qualifying start time | 
| **sprint_date** |  | DATE | ☑ |  | Sprint date | 
| **sprint_time** |  | TIME | ☑ |  | Sprint start time | 

### Table Relationships

![Races](/img/table-relationships/races.png)

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### Example Query

```sql
SELECT 
	[raceId]
	,[year]
	,[round]
	,c.[circuitId]
	,c.name AS [circuit_name]
	,r.[name] AS [race_name]
	,[date]
	,[time]
	,r.[url]
	,[fp1_date]
	,[fp1_time]
	,[fp2_date]
	,[fp2_time]
	,[fp3_date]
	,[fp3_time]
	,[quali_date]
	,[quali_time]
	,[sprint_date]
	,[sprint_time]
FROM 
	[dbo].[races] r

	INNER JOIN [dbo].[circuits] c 
		ON r.circuitId = c.circuitId
WHERE 
	[year] = '2023'
```

### Example Output

|**raceId**|**year**|**round**|**circuitId**|**name**|**date**|**time**|**url**|**fp1_date**|**fp1_time**|**fp2_date**|**fp2_time**|**fp3_date**|**fp3_time**|**quali_date**|**quali_time**|**sprint_date**|**sprint_time**|  
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|  
|1|2009|1|1|Australian Grand Prix|2009-03-29|06:00:00.0000000|http://en.wikipedia.org/wiki/2009_Australian_Grand_Prix|1900-01-01|00:00:00.0000000|1900-01-01|00:00:00.0000000|1900-01-01|00:00:00.0000000|1900-01-01|00:00:00.0000000|1900-01-01|00:00:00.0000000|  
|2|2009|2|2|Malaysian Grand Prix|2009-04-05|09:00:00.0000000|http://en.wikipedia.org/wiki/2009_Malaysian_Grand_Prix|1900-01-01|00:00:00.0000000|1900-01-01|00:00:00.0000000|1900-01-01|00:00:00.0000000|1900-01-01|00:00:00.0000000|1900-01-01|00:00:00.0000000| 