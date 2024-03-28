# CIS105: Computer Applications & Information Systems Lect. 12

## Chapter 12: Introduction to SQL

### 12.1: SQL Getting Started

- Capture the data
  - Point of Sale, Scanning, etc
- Get the data into a database
  - Import from other systems
  - Direct input from forms
- Extract the data
  - SQL
- Use the data
  - Analysis systems
  - Reporting systems
- SQL: The language of relational databases
  - Structured query Language

If you plan to analyze data for a business, there is a good chance it's stored in a data warehouse, and you will need to learn how to retrieve it yourself.

### 12.2: SQL Statement

- `SELECT`: What **fields** (column) you want
  - `fieldname`: If the name is used in only one table
- `FROM`: What table or tables contain the fields
- `ORDER BY`: Sorting
- `DISTINCT`: Use after `SELECT` when you only want to show each vale of the selected field(s) once
- `LIMIT`: Use when you want to limit the number of records produced