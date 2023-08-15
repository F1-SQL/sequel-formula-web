---
sidebar_position: 1
title: Driver Standings
---

### [dbo.driverStandings]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **driverStandingsId** |  Primary Key | INT | ☐ |  |  | 
| **raceId** | FK_DriverStandings_RaceID (dbo.races raceId) | INT | ☐ | 0 | Foreign key link to races table | 
| **driverId** | FK_DriverStandings_DriverID (dbo.drivers driverId) | INT | ☐ | 0 | Foreign key link to drivers table | 
| **points** |  | FLOAT | ☐ | 0 | Driver points for season | 
| **position** |  | INT | ☑ |  | Driver standings position (integer) | 
| **positionText** |  | VARCHAR(255) | ☑ |  |  | 
| **wins** |  | INT | ☐ | 0 | Driver standings position (string) | 

### Example Query

```sql

```

### Example Output