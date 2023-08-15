---
sidebar_position: 1
title: Constructors
---

### [dbo.constructors]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **constructorId** |  Primary Key | INT | ☐ |  |  | 
| **constructorRef** |  | VARCHAR(255) | ☐ |  | Unique constructor identifier | 
| **name** |  | VARCHAR(255) | ☐ |  | Constructor name | 
| **url** |  | VARCHAR(2048) | ☐ |  | Constructor Wikipedia page | 
| **nationalityID** | FK_constructors_NationalityID (dbo.nationalities nationalityID) | INT | ☑ |  | Foreign Key to nationalities | 

### Table Relationships


### Example Query

```sql
SELECT 
	[constructorId]
	,[constructorRef]
	,[name]
	,[url]
	,n.[nationalityID]
	,n.nationality
FROM 
	[SequelFormula].[dbo].[constructors] c 

	INNER JOIN [dbo].[nationalities] n
		ON n.nationalityID = c.nationalityID
```

### Example Output