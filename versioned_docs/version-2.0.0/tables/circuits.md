---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Circuits
---

### [dbo.circuits]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **circuit_key** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **circuit_short_name** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **name** |  | NVARCHAR(MAX) | ☑ |  | Circuit name | 
| **location_key** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **country_key** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **direction_key** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **type_key** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **alt** |  | NVARCHAR(MAX) | ☑ |  | Altitude (metres) | 
| **url** |  | NVARCHAR(MAX) | ☑ |  | Circuit Wikipedia page | 

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.


### Example Query

```sql
SELECT 
	[circuitId]
	,[circuitRef]
	,[name]
	,[location]
	,[country]
	,[alt]
	,[url]
FROM 
	[dbo].[circuits]
WHERE 
	circuitRef ='spa'
	AND active = 1
```

### Example Output

 |**circuit_key**|**circuit_short_name**|**name**|**location_key**|**country_key**|**direction_key**|**type_key**|**alt**|**url**|  
 |---|---|---|---|---|---|---|---|---|  
 |10|Melbourne|Albert Park Grand Prix Circuit|40|5|1|1|10|http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit| 
 |63|Sakhir|Bahrain International Circuit|63|36|1|2|7|http://en.wikipedia.org/wiki/Bahrain_International_Circuit| 