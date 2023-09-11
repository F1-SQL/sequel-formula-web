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

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

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