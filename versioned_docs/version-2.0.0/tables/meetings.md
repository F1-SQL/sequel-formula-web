---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Meetings
---

### [dbo.meetings]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **circuit_key** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **country_key** |  | INT | ☑ |  |  | 
| **date_start** |  | DATETIME2 | ☐ |  |  | 
| **meeting_code** |  | VARCHAR(3) | ☑ |  |  | 
| **meeting_key** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **meeting_name** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **meeting_official_name** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **gmt_offset** |  | INT | ☑ |  |  | 
| **location_key** |  | INT | ☑ |  |  | 
| **type_key** |  | INT | ☑ |  |  | 
| **season_key** |  | INT | ☑ |  |  | 

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### Example Query

### Example Output

 |**circuit_key**|**country_key**|**date_start**|**meeting_code**|**meeting_key**|**meeting_name**|**meeting_official_name**|**gmt_offset**|**location_key**|**type_key**|**season_key**|  
 |---|---|---|---|---|---|---|---|---|---|---|  
 |63|36|2023-02-23 07:00:00.000000||1140|Pre-Season Testing|Formula 1 Aramco Pre-season Testing 2023|3|63|1|1|  
 |63|36|2023-03-03 11:30:00.000000||1141|Bahrain Grand Prix|Formula 1 Gulf Air Bahrain Grand Prix 2023|3|63|2|1| 