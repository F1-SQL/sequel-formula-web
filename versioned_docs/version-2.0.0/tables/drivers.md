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

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.


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

 |**broadcast_name**|**country_code**|**driver_key**|**first_name**|**full_name**|**headshot_url**|**last_name**|**name_acronym**|  
 |---|---|---|---|---|---|---|---|  
 |M VERSTAPPEN|NED|33|Max|Max VERSTAPPEN|https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png|Verstappen|VER|  
 |S PEREZ|MEX|11|Sergio|Sergio PEREZ|https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png|PEREZ|PER| 
