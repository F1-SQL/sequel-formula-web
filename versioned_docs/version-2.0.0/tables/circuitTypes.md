---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Circuit Types
---

### [dbo.circuitTypes]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **type_key** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **circuitType** |  | NVARCHAR(MAX) | ☑ |  |  | 

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### Example Query

```sql
SELECT 
	[circuitTypeID]
	,[circuitType]
FROM 
	[dbo].[circuitTypes]
```

### Example Output

 |**type_key**|**circuitType**|  
 |---|---|  
 |1|Street circuit|  
 |2|Race circuit| 