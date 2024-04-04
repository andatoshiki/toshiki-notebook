# CIS105: Computer Applications & Information Systems Lect. 14

## Chapter 14: More SQL Statement

### 14.1: Statement Review

- `SELECT`: What **fields** (column) you want
  - `fieldname`: If the name is used in only one table
- `FROM`: What table or tables contain the fields
- `ORDER BY`: Sorting
- `DISTINCT`: Use after `SELECT` when you only want to show each vale of the selected field(s) once
- `LIMIT`: Use when you want to limit the number of records produced

### 14.2: New SQL Statements

- `WHERE`: Applies conditions, filters

  - `WHERE` clause conditions follow a pattern: field + comparison operator + value

  - ```sql
    WHERE crime.iucr_no = 420
    ```

- Comparison Operators:

  - ﻿﻿`>` : Returns all records larger than the specified value
  - ﻿﻿`>=`: Returns all records that are at least as large as the specified value (including the value)
  - ﻿﻿`<` : Returns all records smaller than the specified value
  - ﻿﻿`<=`: Returns all records that are at least as small as the specified value (including the value)
  - ﻿﻿`=` : Returns all records that are exactly equal to the specified value
  - ﻿﻿`<>`: Returns all records that are not equal to the specified value

- `NULL`: An empty value

- `NOT`: Can be used to create a condition that reverses the logic of any condition

  - Similar logic to the `NOT` function in Excel

- `AND`: Both conditions must be met for row to be included in query

- `OR`: Used to combine criteria when we want our results to mach any criteria

- `BETWEEN`: Shorthand way to include values in a range

- `IN`: Shorthand way to include values in a range

- `LIKE`: Use this statement when you aren't sure of the values in a record

- `%`:  any combination of characters

  - ﻿﻿`%Keyword`: ends with keyword
  - ﻿﻿`﻿﻿%Keyword%`: looks for %keyword% anywhere in the record
  - ﻿﻿`Keyword%`: starts with keyword

- `-` substitutes for any single character

  - ﻿﻿'`t_p`' would return '`tip`', '`tap`', or '`top`''; but not '`stop`'

  - ﻿﻿'`p_st`" would return '`past`"', but not '`paste`'

  - ﻿﻿`'h__s_n'` would return '`hanson`', 'hensen', or '`hansen`'; but not '`harrison`' (note that '`h%s_n`' would return '`harrison`')

### 14.3: Rules to Remember

- To combine `AND` and `OR` statements, you must follow the order of operations (`AND` 1st, `OR` 2nd)
  - If `OR` must be first, use `()`
- All words must be in between `('_')`, `("_")`
  - If your value contains a quotation, use double quotation or a `/`
  - All `#s` is left as-is

