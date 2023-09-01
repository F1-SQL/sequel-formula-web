---
sidebar_position: 1
title: Latest Result
---

```sql
SELECT
    CONCAT(drivers.forename, ' ', drivers.surname) as Driver,
    drivers.[code],
    races.year,
    races.round,
    races.name,
    races.date,
    races.time,
    races.fp1_date,
    races.fp1_date,
    races.fp1_date,
    races.quali_date,
    results.grid,
    results.points,
    results.position,
    status.status
FROM
    [dbo].[races] races
    INNER JOIN [dbo].[results] results ON races.raceId = results.raceId
    INNER JOIN [dbo].[drivers] drivers ON results.driverId = drivers.driverId
    INNER JOIN [dbo].[status] status ON results.statusId = status.statusId
WHERE
    [Year] = (
        SELECT
            MAX([Year])
        FROM
            [dbo].[races]
    )
    AND [round] = (
        SELECT
            MAX(Round)
        FROM
            [dbo].[races]
            INNER JOIN [dbo].[results] results ON races.raceId = results.raceId
        WHERE
            year = (
                SELECT
                    MAX([Year])
                FROM
                    [dbo].[races]
            )
    )
ORDER BY
    results.grid
```