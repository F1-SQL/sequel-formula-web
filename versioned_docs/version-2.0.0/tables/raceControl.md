---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Race Control
---

### [dbo.raceControl]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **category** |  | VARCHAR(10) | ☑ |  |  | 
| **date** |  | DATETIME2 | ☐ |  |  | 
| **driver_key** |  | INT | ☑ |  |  | 
| **flag** |  | VARCHAR(20) | ☑ |  |  | 
| **lap_number** |  | INT | ☑ |  |  | 
| **meeting_key** |  | INT | ☑ |  |  | 
| **message** |  | VARCHAR(300) | ☑ |  |  | 
| **scope** |  | VARCHAR(10) | ☑ |  |  | 
| **sector** |  | INT | ☑ |  |  | 
| **session_key** |  | INT | ☑ |  |  | 

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### Example Query

### Example Output

 |**category**|**date**|**driver_key**|**flag**|**lap_number**|**meeting_key**|**message**|**scope**|**sector**|**session_key**|  
 |---|---|---|---|---|---|---|---|---|---|  
 |Flag|2023-02-23 07:00:00.000000|0|GREEN|0|1140|GREEN LIGHT - PIT EXIT OPEN|Track|0|9222|  
 |Flag|2023-02-23 07:00:00.000000|0|GREEN|0|1140|GREEN LIGHT - PIT EXIT OPEN|Track|0|9222| 