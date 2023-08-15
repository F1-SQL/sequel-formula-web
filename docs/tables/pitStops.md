---
sidebar_position: 1
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
| **duration** |  | VARCHAR(255) | ☑ |  | Duration of stop in milliseconds | 
| **milliseconds** |  | INT | ☑ |  | Duration of stop in milliseconds | 

### Example Query

```sql

```

### Example Output