---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Position Text
---

### [dbo.positionText]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **positionTextID** |  Primary Key | INT | ☐ |  |  | 
| **positionText** |  | VARCHAR(50) | ☑ |  | Text of the outcome of the race, E.G. "D" for Disqualified | 

### Table Relationships

This table has no foreign keys with any other tables

### Where Used
Where is this table referenced and what columns are used? The below table shows that information.

### Example Query

```sql
SELECT 
	[positionTextID]
    ,[positionText]
FROM 
	[dbo].[positionText]
```

### Example Output

|**positionTextID**|**positionText**|  
|---|---| 
|1|1| 
|2|2| 