---
sidebar_position: 1
title: Constructor Standings
---

### [dbo.constructorStandings]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **constructorStandingsId** |  Primary Key | INT | ☐ |  |  | 
| **raceId** | FK_ConstructorStandings_RaceID (dbo.races raceId) | INT | ☐ | 0 | Foreign key link to races table | 
| **constructorId** | FK_ConstructorStandings_ConstructorID (dbo.constructors constructorId) | INT | ☐ | 0 | Foreign key link to constructors | 
| **points** |  | FLOAT | ☐ | 0 | Constructor points for season | 
| **position** |  | INT | ☑ |  | Constructor standings position | 
| **positionText** |  | VARCHAR(255) | ☑ |  | Constructor standings position | 
| **wins** |  | INT | ☐ | 0 | Season win count | 

### Example Query

```sql

```

### Example Output