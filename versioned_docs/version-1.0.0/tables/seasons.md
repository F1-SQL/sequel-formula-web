---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Seasons
---

### [dbo.seasons]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **year** |  Primary Key | INT | ☐ | 0 | Primary key e.g. 1950 | 
| **url** |  | VARCHAR(2048) | ☐ |  | Season Wikipedia page | 

### Table Relationships

This table has no foreign keys with any other tables

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### [dbo.seasons]
| Parent_schemaName | Parent_tableName | Parent_columnName | Schema | table | column | constraint_name |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| dbo | seasons | year | dbo | driverNumbers | season | PK_driverNumbers_season | 
| dbo | seasons | year | dbo | races | year | FK_Races_Year | 

### Example Query

```sql
SELECT 
	[year]
    ,[url]
FROM 
	[dbo].[seasons]
```

### Example Output

|**year**|**url**|  
|---|---| 
|1950|http://en.wikipedia.org/wiki/1950_Formula_One_season| 
|1951|http://en.wikipedia.org/wiki/1951_Formula_One_season| 