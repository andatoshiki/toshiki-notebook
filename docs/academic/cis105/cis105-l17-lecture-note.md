# CIS105: Computer Applications & Information Systems Lect. 17

## Chapter 17: SQL Clauses: `JOIN` Query

### 17.1: `JOIN` & `ON` Clauses

- `JOIN`: Join tables together to connect multiple fields into 1 query.
- `ON`: Linking the primary and foreign key
- Linking formula: `FROM table1 + JOIN table2 ON table1.primarykey = table2.foreignkey`

```sql
SELECT first_name, last_name, link_to_major, major_id, major_name
	FROM member
	JOIN major
		ON member. link_to_major = major.major_id
```

### 17.2: SQL Statements: Primary vs. Foreign Keys

- Primary key: A field on a database table that uniquely identifies each row of the table.
- Foreign key: is used to combine the rows from one table wit the rows of another table.

### 17.3: SQL Statement: Date & Time Formatting

- The common conventional format of SQL date & time searching is as followed, in form of `YEAR-MONTH-DATT12:00:00`

  - ```sql
    '2022-04-17T12:00:00'
    ```

