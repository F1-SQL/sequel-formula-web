---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Countries
---

### [dbo.countries]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **country_key** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **country_name** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **country_code** |  | NVARCHAR(MAX) | ☑ |  |  | 

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

 |**country_key**|**country_name**|**country_code**|  
 |---|---|---|  
 |5|Australia|AUS|  
 |17|Austria|AUT| 