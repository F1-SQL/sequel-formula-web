---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Countries
---

### [dbo.countries]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **countryID** |  Primary Key | INT | ☐ |  |  | 
| **country** |  | VARCHAR(255) | ☑ |  | Name of the country, E.G. United States | 

### Table Relationships

This table has no foreign keys with any other tables

### Example Query

```sql
SELECT 
	[countryID]
    ,[country]
FROM 
	[dbo].[countries]
```

### Example Output