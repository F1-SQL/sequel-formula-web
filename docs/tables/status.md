---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Status
---

### [dbo.status]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **statusId** |  Primary Key | INT | ☐ |  |  | 
| **status** |  | VARCHAR(255) | ☐ |  | Finishing status e.g. "Retired" | 

### Table Relationships

This table has no foreign keys with any other tables

### Example Query

```sql
SELECT 
	[statusId]
    ,[status]
FROM 
	[dbo].[status]
```

### Example Output

 |**statusId**|**status**|  
 |---|---| 
 |1|Finished| 
 |2|Disqualified| 