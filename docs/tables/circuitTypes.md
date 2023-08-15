---
sidebar_position: 1
title: Circuit Types
---

### [dbo.circuitTypes]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **circuitTypeID** |  Primary Key | INT | ☐ |  |  | 
| **circuitType** |  | VARCHAR(50) | ☑ |  | Type of circuit E.G. Street | 

### Example Query

```sql
SELECT 
	[circuitTypeID]
	,[circuitType]
FROM 
	[dbo].[circuitTypes]
```

### Example Output