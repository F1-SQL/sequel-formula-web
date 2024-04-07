---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Drivers
---

### [dbo.drivers]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **broadcast_name** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **country_code** |  | VARCHAR(3) | ☑ |  |  | 
| **driver_key** |  | INT | ☐ |  |  | 
| **first_name** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **full_name** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **headshot_url** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **last_name** |  | NVARCHAR(MAX) | ☑ |  |  | 
| **name_acronym** |  | VARCHAR(3) | ☑ |  |  | 

### Table Relationships

![Drivers](/img/table-relationships/drivers.png)

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### [dbo.drivers]
| Parent_schemaName | Parent_tableName | Parent_columnName | Schema | table | column | constraint_name |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| dbo | drivers | driverId | dbo | pitStops | driverId | FK_PitStops_DriverID | 
| dbo | drivers | driverId | dbo | lapTimes | driverId | FK_LapTimes_DriverID | 
| dbo | drivers | driverId | dbo | driverStandings | driverId | FK_DriverStandings_DriverID | 
| dbo | drivers | driverId | dbo | driverNumbers | driverID | PK_driverNumbers_driverID | 
| dbo | drivers | driverId | dbo | resultDriverConstructor | driverID | PK_resultDriverConstructor_driverID | 
| dbo | drivers | driverId | dbo | qualifying | driverId | FK_Qualifying_DriverID | 

### Example Query

```sql
SELECT 
	[driverId]
	,[driverRef]
	,[number]
	,[code]
	,[forename]
	,[surname]
	,[dob]
	,[url]
	,n.[nationalityID]
	,n.nationality
FROM 
	[dbo].[drivers] d

	INNER JOIN [dbo].[nationalities] n
		ON n.nationalityID = d.nationalityID
```

### Example Output

|**driverId**|**driverRef**|**number**|**code**|**forename**|**surname**|**dob**|**url**|**nationalityID**|  
|---|---|---|---|---|---|---|---|---|  
|1|hamilton|44|HAM|Lewis|Hamilton|1985-01-07|http://en.wikipedia.org/wiki/Lewis_Hamilton|10|  
|2|heidfeld|0|HEI|Nick|Heidfeld|1977-05-10|http://en.wikipedia.org/wiki/Nick_Heidfeld|21| 
