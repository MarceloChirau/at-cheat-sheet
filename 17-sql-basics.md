# SQL Basics for QA Automation

## What is SQL?

**SQL (Structured Query Language)** is the standard language used to communicate with relational databases.

As a QA Engineer, SQL is commonly used to:

* Verify data stored in the database.
* Validate test results.
* Check whether inserts, updates, or deletes were successful.
* Prepare test data.
* Investigate bugs.

---

# Database Basics

A database contains one or more **tables**.

Example:

### Users Table

| id | username | email                                   | age |
| -: | -------- | --------------------------------------- | --: |
|  1 | John     | [john@email.com](mailto:john@email.com) |  25 |
|  2 | Anna     | [anna@email.com](mailto:anna@email.com) |  31 |
|  3 | Mike     | [mike@email.com](mailto:mike@email.com) |  28 |

Each row is called a **record**.

Each column is called a **field**.

---

# Basic SQL Syntax

```sql
SELECT column_name
FROM table_name
WHERE condition;
```

Example:

```sql
SELECT username
FROM users;
```

---

# SELECT

Retrieves data from a table.

```sql
SELECT * FROM users;
```

Returns all columns.

---

Retrieve specific columns:

```sql
SELECT username, email
FROM users;
```

---

# WHERE

Filters records.

```sql
SELECT *
FROM users
WHERE age > 25;
```

---

Examples

```sql
WHERE username = 'John'
```

```sql
WHERE age >= 18
```

```sql
WHERE age <> 18
```

```sql
WHERE age < 30
```

---

# Comparison Operators

| Operator | Meaning          |
| -------- | ---------------- |
| =        | Equal            |
| <> or != | Not equal        |
| >        | Greater than     |
| <        | Less than        |
| >=       | Greater or equal |
| <=       | Less or equal    |

---

# AND / OR / NOT

## AND

Both conditions must be true.

```sql
SELECT *
FROM users
WHERE age > 20
AND age < 30;
```

---

## OR

At least one condition must be true.

```sql
SELECT *
FROM users
WHERE username = 'John'
OR username = 'Anna';
```

---

## NOT

```sql
SELECT *
FROM users
WHERE NOT age = 18;
```

---

# ORDER BY

Sorts the results.

Ascending:

```sql
SELECT *
FROM users
ORDER BY age ASC;
```

Descending:

```sql
SELECT *
FROM users
ORDER BY age DESC;
```

---

# LIMIT

Returns only a certain number of rows.

```sql
SELECT *
FROM users
LIMIT 5;
```

---

# DISTINCT

Returns unique values.

```sql
SELECT DISTINCT country
FROM users;
```

---

# INSERT

Adds new records.

```sql
INSERT INTO users (username, email, age)
VALUES ('Alex', 'alex@email.com', 29);
```

---

# UPDATE

Updates existing records.

```sql
UPDATE users
SET age = 30
WHERE username = 'Alex';
```

**Always use a WHERE clause unless you intentionally want to update every row.**

---

# DELETE

Deletes records.

```sql
DELETE FROM users
WHERE username = 'Alex';
```

Without a WHERE clause:

```sql
DELETE FROM users;
```

This removes **all rows**.

---

# COUNT()

Counts rows.

```sql
SELECT COUNT(*)
FROM users;
```

Example:

```sql
SELECT COUNT(*)
FROM users
WHERE age >= 18;
```

---

# MIN(), MAX(), AVG(), SUM()

Small aggregation functions.

Maximum:

```sql
SELECT MAX(age)
FROM users;
```

Minimum:

```sql
SELECT MIN(age)
FROM users;
```

Average:

```sql
SELECT AVG(age)
FROM users;
```

Sum:

```sql
SELECT SUM(age)
FROM users;
```

---

# LIKE

Searches using patterns.

Starts with "J":

```sql
SELECT *
FROM users
WHERE username LIKE 'J%';
```

Ends with "n":

```sql
SELECT *
FROM users
WHERE username LIKE '%n';
```

Contains "oh":

```sql
SELECT *
FROM users
WHERE username LIKE '%oh%';
```

---

# IN

Checks multiple values.

```sql
SELECT *
FROM users
WHERE username IN ('John', 'Anna', 'Mike');
```

---

# BETWEEN

Checks ranges.

```sql
SELECT *
FROM users
WHERE age BETWEEN 18 AND 30;
```

---

# IS NULL

Finds missing values.

```sql
SELECT *
FROM users
WHERE email IS NULL;
```

---

# INNER JOIN

Joins matching records from two tables.

### Users

| id | username |
| -: | -------- |
|  1 | John     |
|  2 | Anna     |

### Orders

|  id | user_id | total |
| --: | ------: | ----: |
| 101 |       1 |    50 |
| 102 |       2 |   120 |

Query:

```sql
SELECT users.username, orders.total
FROM users
INNER JOIN orders
ON users.id = orders.user_id;
```

Result:

| username | total |
| -------- | ----: |
| John     |    50 |
| Anna     |   120 |

---

# GROUP BY

Groups rows.

```sql
SELECT country, COUNT(*)
FROM users
GROUP BY country;
```

Example output:

| country | count |
| ------- | ----: |
| Greece  |     5 |
| Croatia |     3 |
| Germany |     7 |

---

# HAVING

Filters grouped results.

```sql
SELECT country, COUNT(*)
FROM users
GROUP BY country
HAVING COUNT(*) > 5;
```

---

# Common QA SQL Queries

Find user:

```sql
SELECT *
FROM users
WHERE username = 'john';
```

Verify user exists:

```sql
SELECT COUNT(*)
FROM users
WHERE email = 'john@email.com';
```

Check latest order:

```sql
SELECT *
FROM orders
ORDER BY created_at DESC
LIMIT 1;
```

Find duplicate emails:

```sql
SELECT email, COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

---

# SQL Execution Order

```text
FROM
↓
WHERE
↓
GROUP BY
↓
HAVING
↓
SELECT
↓
ORDER BY
↓
LIMIT
```

---

# Interview Questions

### What is SQL?

SQL is a language used to query and manipulate relational databases.

---

### Difference between WHERE and HAVING?

* **WHERE** filters rows before grouping.
* **HAVING** filters groups after `GROUP BY`.

---

### Difference between DELETE and DROP?

* **DELETE** removes rows but keeps the table.
* **DROP** removes the entire table, including its structure.

---

### Difference between INNER JOIN and LEFT JOIN?

* **INNER JOIN** returns only matching records.
* **LEFT JOIN** returns all rows from the left table and matching rows from the right table. If there is no match, the right-side columns contain `NULL`.

---

# SQL Order to Remember

```text
SELECT → Read data

WHERE → Filter

ORDER BY → Sort

GROUP BY → Group

HAVING → Filter groups

INSERT → Add

UPDATE → Modify

DELETE → Remove

JOIN → Combine tables
```

---

# SQL Cheat Sheet

| Command   | Purpose                 |
| --------- | ----------------------- |
| SELECT    | Read data               |
| WHERE     | Filter rows             |
| ORDER BY  | Sort results            |
| GROUP BY  | Group rows              |
| HAVING    | Filter grouped data     |
| INSERT    | Add records             |
| UPDATE    | Modify records          |
| DELETE    | Remove records          |
| COUNT     | Count rows              |
| AVG       | Calculate average       |
| MIN / MAX | Find minimum or maximum |
| SUM       | Calculate total         |
| DISTINCT  | Remove duplicates       |
| LIKE      | Pattern matching        |
| IN        | Match multiple values   |
| BETWEEN   | Filter by range         |
| JOIN      | Combine related tables  |
