---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Nationalities
---

### [dbo.nationalities]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **nationalityID** |  Primary Key | INT | ☐ |  |  | 
| **nationality** |  | VARCHAR(50) | ☑ |  | Nationality E.G. British |  

### Table Relationships

This table has no foreign keys with any other tables

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### [dbo.nationalities]
| Parent_schemaName | Parent_tableName | Parent_columnName | Schema | table | column | constraint_name |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| dbo | nationalities | nationalityID | dbo | constructors | nationalityID | FK_constructors_NationalityID | 
| dbo | nationalities | nationalityID | dbo | drivers | nationalityID | FK_Drivers_NationalityID | 

### Example Query

```sql
SELECT 
	[nationalityID]
    ,[nationality]
FROM 
	[dbo].[nationalities]
```

### Example Output

|**nationalityID**|**nationality**|  
|---|---| 
|1|nationality| 
|2|American| 