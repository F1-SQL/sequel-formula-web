---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Locations
---

### [dbo.locations]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **location_key** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **locationName** |  | NVARCHAR(MAX) | ☑ |  | Location Name E.G. Las Vegas | 

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### Example Query

```sql
SELECT 
	[locationID]
    ,[locationName]
FROM
	[dbo].[locations]
```

### Example Output

|**location_key**|**locationName**|  
|---|---|  
|1|Yas Island|  
|2|Adelaide| 