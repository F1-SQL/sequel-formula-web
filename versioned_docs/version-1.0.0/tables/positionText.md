---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Position Text
---

### [dbo.positionText]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **positionTextID** |  Primary Key | INT | ☐ |  |  | 
| **positionText** |  | VARCHAR(50) | ☑ |  | Text of the outcome of the race, E.G. "D" for Disqualified | 

### Table Relationships

This table has no foreign keys with any other tables

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### [dbo.positionText]
| Parent_schemaName | Parent_tableName | Parent_columnName | Schema | table | column | constraint_name |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| dbo | positionText | positionTextID | dbo | driverStandings | positionTextID | FK_DriverStandings_PositionTextID | 
| dbo | positionText | positionTextID | dbo | constructorStandings | positionTextID | FK_ConstructorStandings_PositionTextID | 
| dbo | positionText | positionTextID | dbo | constructorResults | positionTextID | FK_ConstructorResults_positionTextID | 
| dbo | positionText | positionTextID | dbo | results | positionTextID | FK_Results_PositionTextID | 

### Example Query

```sql
SELECT 
	[positionTextID]
    ,[positionText]
FROM 
	[dbo].[positionText]
```

### Example Output

|**positionTextID**|**positionText**|  
|---|---| 
|1|1| 
|2|2| 