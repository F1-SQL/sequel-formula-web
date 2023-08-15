---
sidebar_position: 1
title: Nationalities
---

### [dbo.nationalities]
| Column name | Key | Data type | Allow NULLs | Default | Description |
| ------- | ------- | ------- | ------- | ------- | ------- |
| **nationalityID** |  Primary Key | INT | ☐ |  |  | 
| **nationality** |  | VARCHAR(50) | ☑ |  | Nationality E.G. British | 

### Table Relationships

This table has no foreign keys with any other tables

### Example Query

```sql
SELECT 
	[nationalityID]
    ,[nationality]
FROM 
	[dbo].[nationalities]
```

### Example Output