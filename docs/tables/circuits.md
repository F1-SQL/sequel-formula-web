---
sidebar_position: 1
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
| **locationID** |  | INT | ☑ |  | Foreign key links to locations | 
| **countryID** | FK_Circuits_CountryID (dbo.countries countryID) | INT | ☑ |  | Foreign Key link to countries | 
| **circuitDirectionID** | FK_Circuits_CircuitDirectionID (dbo.circuitDirection circuitDirectionID) | INT | ☑ |  | Foreign key link to circuitDirection | 
| **circuitTypeID** | FK_Circuits_CircuitTypeID (dbo.circuitTypes circuitTypeID) | INT | ☑ |  | Foreign key link to circuitType | 

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

|circuitId|circuitRef|name|location|country|lat|lng|alt|url|
| ------- | ------- | ------- | ------- | ------- | ------- |------- |------- |------- |
| **13** |  spa | Circuit de Spa-Francorchamps |Spa|Belgium|50.4372|5.97139|401|http://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps|