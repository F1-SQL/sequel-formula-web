---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Circuits
---

### [dbo.circuits]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **circuitId** |  Primary Key | INT | ☐ |  |  | 
| **circuitRef** |  | VARCHAR(255) | ☐ |  | Unique circuit identifier | 
| **name** |  | VARCHAR(255) | ☐ |  | Circuit name | 
| **alt** |  | INT | ☑ |  | Altitude (metres) | 
| **url** |  | VARCHAR(255) | ☐ |  | Circuit Wikipedia page | 
| **locationID** |  | INT | ☑ |  | Foreign key links to locations | 
| **countryID** |  | INT | ☑ |  | Foreign Key link to countries | 
| **circuitDirectionID** |  | INT | ☑ |  | Foreign key link to circuitDirection | 
| **circuitTypeID** |  | INT | ☑ |  | Foreign key link to circuitType | 

### Table Relationships

![Circuits](/img/table-relationships/circuits.png)

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

 |**circuitId**|**circuitRef**|**name**|**alt**|**url**|**locationID**|**countryID**|**circuitDirectionID**|**circuitTypeID**|  
 |---|---|---|---|---|---|---|---|---|  
 |1|albert_park|Albert Park Grand Prix Circuit|10|http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit|40|2|1|1|  
 |2|sepang|Sepang International Circuit|18|http://en.wikipedia.org/wiki/Sepang_International_Circuit|31|17|1|2| 