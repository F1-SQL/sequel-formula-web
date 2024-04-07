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

### Table Relationships

![Circuits](/img/table-relationships/circuits.png)

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### [dbo.circuits]
| Parent_schemaName | Parent_tableName | Parent_columnName | Schema | table | column | constraint_name |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| dbo | circuits | circuitId | dbo | circuitMap | circuitId | FK_circuitMap_circuitId | 
| dbo | circuits | circuitId | dbo | races | circuitId | FK_Races_CircuitID | 

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