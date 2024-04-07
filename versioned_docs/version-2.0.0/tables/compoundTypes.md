---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Compound Types
---

### [dbo.compoundTypes]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **compound_key** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **compound_name** |  | NVARCHAR(MAX) | ☑ |  |  | 

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### Example Query

```sql
SELECT 
	[countryID]
    ,[country]
FROM 
	[dbo].[countries]
```

### Example Output

 |**compound_key**|**compound_name**|  
 |---|---|  
 |1|Soft|  
 |2|Unknown| 