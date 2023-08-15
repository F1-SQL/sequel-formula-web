---
sidebar_position: 1
title: Circuit Direction
---

### [dbo.circuitDirection]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **circuitDirectionID** |  Primary Key | INT | ☐ |  |  | 
| **circuitDirection** |  | VARCHAR(255) | ☑ |  | Direction of circuit E.G. Clockwise | 

### Table Relationships

This table has no foreign keys with any other tables

### Example Query

```sql
SELECT 
	[circuitDirectionID]
	,[circuitDirection]
FROM 
	[dbo].[circuitDirection]
```

### Example Output
