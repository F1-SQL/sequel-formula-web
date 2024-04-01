---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Circuit Direction
---

### [dbo.circuitDirection]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **circuitDirectionID** |  Primary Key | INT | ☐ |  |  | 
| **circuitDirection** |  | VARCHAR(255) | ☑ |  | Direction of circuit E.G. Clockwise | 

### Table Relationships

This table has no foreign keys with any other tables

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### Example Query

```sql
SELECT 
	[circuitDirectionID]
	,[circuitDirection]
FROM 
	[dbo].[circuitDirection]
```

### Example Output

|**circuitDirectionID**|**circuitDirection**|  
|---|---| 
|1|Clockwise| 
|2|Anti-clockwise| 