---
sidebar_position: 1
title: Results
---

### [dbo.results]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **resultId** |  Primary Key | INT | ☐ |  |  | 
| **raceId** | FK_Results_RaceID (dbo.races raceId) | INT | ☐ | 0 | Foreign key link to races table | 
| **driverId** | FK_Results_DriverID (dbo.drivers driverId) | INT | ☐ | 0 | Foreign key link to drivers table | 
| **constructorId** | FK_Results_ConstructorID (dbo.constructors constructorId) | INT | ☐ | 0 | Foreign key link to constructors table | 
| **number** |  | INT | ☑ |  | Driver number | 
| **grid** |  | INT | ☐ | 0 | Starting grid position | 
| **position** |  | INT | ☑ |  | Official classification, if applicable | 
| **positionText** |  | VARCHAR(255) | ☐ |  |  | 
| **positionOrder** |  | INT | ☐ | 0 | Driver position for ordering purposes | 
| **points** |  | FLOAT | ☐ | 0 | Driver points for race | 
| **laps** |  | INT | ☐ | 0 | Number of completed laps | 
| **time** |  | VARCHAR(255) | ☑ |  | Finishing time or gap | 
| **milliseconds** |  | INT | ☑ |  | Finishing time in milliseconds | 
| **fastestLap** |  | INT | ☑ |  | Lap number of fastest lap | 
| **rank** |  | INT | ☑ | 0 | Fastest lap rank, compared to other | 
| **fastestLapTime** |  | VARCHAR(255) | ☑ |  | Fastest lap time e.g. "1:27.453" | 
| **fastestLapSpeed** |  | VARCHAR(255) | ☑ |  | Fastest lap speed (km/h) e.g. "213.874" | 
| **statusId** | FK_Results_StatusID (dbo.status statusId) | INT | ☐ | 0 | Fastest lap speed (km/h) e.g. "213.874" | 
| **positionTextID** | FK_Results_PositionTextID (dbo.positionText positionTextID) | INT | ☑ |  | Foreign Key link to positionText | 

### Example Query

```sql

```

### Example Output