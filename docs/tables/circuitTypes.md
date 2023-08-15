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

### Example Query

```sql
SELECT 
	[circuitTypeID]
	,[circuitType]
FROM 
	[dbo].[circuitTypes]
```

### Example Output