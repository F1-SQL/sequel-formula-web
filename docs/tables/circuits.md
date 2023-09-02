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
| **lat** |  | FLOAT | ☑ |  | Latitude | 
| **lng** |  | FLOAT | ☑ |  | Longitude | 
| **alt** |  | INT | ☑ |  | Altitude (metres) | 
| **url** |  | VARCHAR(255) | ☐ |  | Circuit Wikipedia page | 
| **locationID** | FK_Circuits_LocationID (dbo.locations locationID) | INT | ☑ |  | Foreign key links to locations | 
| **countryID** | FK_Circuits_CountryID (dbo.countries countryID) | INT | ☑ |  | Foreign Key link to countries | 
| **circuitDirectionID** | FK_Circuits_CircuitDirectionID (dbo.circuitDirection circuitDirectionID) | INT | ☑ |  | Foreign key link to circuitDirection | 
| **circuitTypeID** | FK_Circuits_CircuitTypeID (dbo.circuitTypes circuitTypeID) | INT | ☑ |  | Foreign key link to circuitType | 

### Table Relationships

![Circuits](/img/table-relationships/circuits.png)

### Example Query

```sql
SELECT 
	[circuitId]
	,[circuitRef]
	,[name]
	,[location]
	,[country]
	,[lat]
	,[lng]
	,[alt]
	,[url]
FROM 
	[dbo].[circuits]
WHERE 
	circuitRef ='spa'
	AND active = 1
```

### Example Output

|**circuitId**|**circuitRef**|**name**|**lat**|**lng**|**alt**|**url**|**locationID**|**countryID**|**circuitDirectionID**|**circuitTypeID**|  
|---|---|---|---|---|---|---|---|---|---|---| 
|1|albert_park|Albert Park Grand Prix Circuit|-37.8497|144.968|10|http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit|40|2|1|1| 
|2|sepang|Sepang International Circuit|2.76083|101.738|18|http://en.wikipedia.org/wiki/Sepang_International_Circuit|31|17|1|2| 