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
| **nationality** |  | VARCHAR(255) | ☑ |  |  | 
| **url** |  | VARCHAR(2048) | ☐ |  | Constructor Wikipedia page | 
| **nationalityID** |  | INT | ☑ |  | Foreign Key to nationalities | 

### Example Query

```sql

```

### Example Output