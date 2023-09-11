---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Result Type
---

### [dbo.resultType]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **resultTypeID** |  Primary Key | INT | ☐ |  |  | 
| **resultType** |  | VARCHAR(255) | ☑ |  |  | 

### Table Relationships


### Example Query

```sql
SELECT 
	[resultTypeID]
	,[resultType]
FROM 
	[dbo].[resultType]
```

### Example Output

 |**resultTypeID**|**resultType**|  
 |---|---|  
 |1|Race Result|  
 |2|Sprint Race Result| 

