---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Result Type
---

### [dbo.resultType]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **resultTypeID** |  Primary Key | INT | ☐ |  |  | 
| **resultType** |  | VARCHAR(255) | ☑ |  |  | 

### Table Relationships

This table has no foreign keys with any other tables

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### [dbo.resultType]
| Parent_schemaName | Parent_tableName | Parent_columnName | Schema | table | column | constraint_name |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| dbo | resultType | resultTypeID | dbo | results | resultTypeId | FK_Results_ResultTypeID | 

### Example Query

```sql
SELECT 
	[resultTypeID]
	,[resultType]
FROM 
	[dbo].[resultType]
```

### Example Output

 |**resultTypeID**|**resultType**|  
 |---|---|  
 |1|Race Result|  
 |2|Sprint Race Result| 

