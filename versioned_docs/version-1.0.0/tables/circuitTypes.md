---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Circuit Types
---

### [dbo.circuitTypes]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **circuitTypeID** |  Primary Key | INT | ☐ |  |  | 
| **circuitType** |  | VARCHAR(50) | ☑ |  | Type of circuit E.G. Street | 

### Table Relationships

This table has no foreign keys with any other tables

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### [dbo.circuitTypes]
| Parent_schemaName | Parent_tableName | Parent_columnName | Schema | table | column | constraint_name |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| dbo | circuitTypes | circuitTypeID | dbo | circuits | circuitTypeID | FK_Circuits_CircuitTypeID | 

### Example Query

```sql
SELECT 
	[circuitTypeID]
	,[circuitType]
FROM 
	[dbo].[circuitTypes]
```

### Example Output

|**circuitTypeID**|**circuitType**|  
|---|---| 
|1|Street circuit| 
|2|Race circuit| 