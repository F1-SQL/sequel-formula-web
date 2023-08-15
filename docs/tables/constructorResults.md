---
sidebar_position: 1
title: Constructor Results
---

### [dbo.constructorResults]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **constructorResultsId** |  Primary Key | INT | ☐ |  |  | 
| **raceId** | FK_ConstructorResults_RaceID (dbo.races raceId) | INT | ☐ | 0 | Foreign key link to races table | 
| **constructorId** | FK_ConstructorResults_ConstructorID (dbo.constructors constructorId) | INT | ☐ | 0 | Foreign key link to constructors | 
| **points** |  | FLOAT | ☑ |  | Constructor points for race | 
| **status** |  | VARCHAR(255) | ☑ |  |  | 
| **positionTextID** | FK_ConstructorResults_positionTextID (dbo.positionText positionTextID) | INT | ☑ |  | Foreign Key link to postitionText | 

### Example Query

```sql

```

### Example Output