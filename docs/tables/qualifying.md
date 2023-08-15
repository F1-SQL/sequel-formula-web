---
sidebar_position: 1
title: Qualifying
---

### [dbo.qualifying]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **qualifyId** |  Primary Key | INT | ☐ |  |  | 
| **raceId** | FK_Qualifying_RaceID (dbo.races raceId) | INT | ☐ | 0 | Foreign key link to races table  | 
| **driverId** | FK_Qualifying_DriverID (dbo.drivers driverId) | INT | ☐ | 0 | Foreign key link to drivers table | 
| **constructorId** | FK_Qualifying_ConstructorID (dbo.constructors constructorId) | INT | ☐ | 0 | Foreign key link to constructors table | 
| **number** |  | INT | ☐ | 0 | Driver number | 
| **position** |  | INT | ☑ |  | Qualifying position | 
| **q1** |  | VARCHAR(255) | ☑ |  | Q1 lap time e.g. "1:21.374" | 
| **q2** |  | VARCHAR(255) | ☑ |  | Q2 lap time | 
| **q3** |  | VARCHAR(255) | ☑ |  | Q3 lap time | 

### Example Query

```sql

```

### Example Output