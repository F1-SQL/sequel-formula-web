---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Result Driver Constructor
---

### [dbo.resultDriverConstructor]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **resultDriverConstructorID** |  Primary Key | INT IDENTITY | ☐ |  |  | 
| **resultID** | PK_resultDriverConstructor_resultID (dbo.results resultId) | INT | ☐ |  |  | 
| **driverID** | PK_resultDriverConstructor_driverID (dbo.drivers driverId) | INT | ☐ |  |  | 
| **constructorID** | PK_resultDriverConstructor_constructorID (dbo.constructors constructorId) | INT | ☐ |  |  | 

### Table Relationships

![Result Driver Constructor](/img/table-relationships/resultDriverConstructor.png)

### Example Query

```sql
SELECT 

	rdc.resultID,
	rdc.DriverID,
	d.forename,
	d.surname,
	rdc.ConstructorID,
	c.name as [constructor]

FROM 
	[dbo].[resultDriverConstructor] rdc

	INNER JOIN [dbo].[results] r
		ON rdc.resultID = r.resultId

	INNER JOIN [dbo].[drivers] d
		ON d.driverId = rdc.driverId
	
	INNER JOIN [dbo].[constructors] c
		ON c.constructorId = rdc.constructorID
```

### Example Output

 |**resultDriverConstructorID**|**resultID**|**driverID**|**constructorID**|  
 |---|---|---|---|  
 |1|1|1|1|  
 |2|2|2|2| 