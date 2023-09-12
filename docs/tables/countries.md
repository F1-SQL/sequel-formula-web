---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Countries
---

### [dbo.countries]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **countryID** |  Primary Key | INT | ☐ |  |  | 
| **country** |  | VARCHAR(255) | ☑ |  | Name of the country, E.G. United States | 

### Table Relationships

This table has no foreign keys with any other tables

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### [dbo.countries]
| Parent_schemaName | Parent_tableName | Parent_columnName | Schema | table | column | constraint_name |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| dbo | countries | countryID | dbo | circuits | countryID | FK_Circuits_CountryID | 

### Example Query

```sql
SELECT 
	[countryID]
    ,[country]
FROM 
	[dbo].[countries]
```

### Example Output

|**countryID**|**country**|  
|---|---| 
|1|Argentina| 
|2|Australia| 