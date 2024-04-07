---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Seasons
---

### [dbo.seasons]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **season_key** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **year** |  | NVARCHAR(MAX) | ☑ |  | Primary key e.g. 1950 | 
| **url** |  | NVARCHAR(MAX) | ☑ |  | Season Wikipedia page | 

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### Example Query

```sql
SELECT 
	[year]
    ,[url]
FROM 
	[dbo].[seasons]
```

### Example Output

 |**season_key**|**year**|**url**|  
 |---|---|---|  
 |1|2023|http://en.wikipedia.org/wiki/2023_Formula_One_World_Championship|  
 |2|2024|https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship| 