---
sidebar_position: 1
title: Position Text
---

### [dbo.positionText]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **positionTextID** |  Primary Key | INT | ☐ |  |  | 
| **positionText** |  | VARCHAR(50) | ☑ |  | Text of the outcome of the race, E.G. "D" for Disqualified | 

### Example Query

```sql
SELECT 
	[positionTextID]
    ,[positionText]
FROM 
	[dbo].[positionText]
```

### Example Output