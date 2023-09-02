---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Seasons
---

### [dbo.seasons]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **year** |  Primary Key | INT | ☐ | 0 | Primary key e.g. 1950 | 
| **url** |  | VARCHAR(2048) | ☐ |  | Season Wikipedia page | 

### Table Relationships

This table has no foreign keys with any other tables

### Example Query

```sql
SELECT 
	[year]
    ,[url]
FROM 
	[dbo].[seasons]
```

### Example Output

 |**year**|**url**|  
 |---|---| 
 |1950|http://en.wikipedia.org/wiki/1950_Formula_One_season| 
 |1951|http://en.wikipedia.org/wiki/1951_Formula_One_season| 