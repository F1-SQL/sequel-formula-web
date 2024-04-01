---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Circuit Map
---

### [dbo.circuitMap]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **circuitId** |  Primary Key | INT | ☐ |  |  | 
| **latitude** |  | DECIMAL | ☐ |  |  | 
| **longitudes** |  | DECIMAL | ☐ |  |  | 

### Table Relationships

![Circuits](/img/table-relationships/circuitMap.png)

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### Example Query

```sql
SELECT 
	c.[circuitId]
	,c.name
    ,[latitude]
    ,[longitudes]
FROM 
	[dbo].[circuitMap] cm

RIGHT JOIN [dbo].[circuits] c 
	ON cm.circuitID = c.circuitId
```

### Example Output

 |**circuitId**|**latitude**|**longitudes**|**url**|  
 |---|---|---|---|  
 |1|-37.849700|144.968000|https://www.openstreetmap.org/#map=15/-37.849700/144.968000|  
 |2|2.760830|101.738000|https://www.openstreetmap.org/#map=15/2.760830/101.738000| 

 