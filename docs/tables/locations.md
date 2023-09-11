---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Locations
---

### [dbo.locations]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **locationID** |  Primary Key | INT | ☐ |  |  | 
| **locationName** |  | VARCHAR(255) | ☑ |  | Location Name E.G. Las Vegas | 

### Table Relationships

This table has no foreign keys with any other tables

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### Example Query

```sql
SELECT 
	[locationID]
    ,[locationName]
FROM
	[dbo].[locations]
```

### Example Output

|**locationID**|**locationName**|  
|---|---| 
|1|Abu Dhabi| 
|2|Adelaide| 