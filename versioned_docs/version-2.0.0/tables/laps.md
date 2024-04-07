---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Laps
---

### [dbo.laps]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **date_start** |  | DATETIME2 | ☑ |  |  | 
| **driver_key** |  | INT | ☐ |  |  | 
| **duration_sector_1** |  | DECIMAL | ☑ |  |  | 
| **duration_sector_2** |  | DECIMAL | ☑ |  |  | 
| **duration_sector_3** |  | DECIMAL | ☑ |  |  | 
| **first_intermediate_speed** |  | INT | ☑ |  |  | 
| **second_intermediate_speed** |  | INT | ☑ |  |  | 
| **is_pit_out_lap** |  | BIT | ☑ |  |  | 
| **lap_duration** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **lap_number** |  | INT | ☑ |  |  | 
| **meeting_key** |  | INT | ☐ |  |  | 
| **segments_sector_1** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **segments_sector_2** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **segments_sector_3** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **session_key** |  | INT | ☐ |  |  | 
| **st_speed** |  | INT | ☑ |  |  | 

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### Example Query

### Example Output