# Table of contents
- [Table of contents](#table-of-contents)
  - [🧠 Goal](#-goal)
  - [✅ Constraints/Assumptions](#-constraintsassumptions)
  - [📚 Ruby Data Manipulation Quizzes](#-ruby-data-manipulation-quizzes)
    - [1. Group Users by Email Domain](#1-group-users-by-email-domain)
    - [2. Flatten a Nested Tag Structure](#2-flatten-a-nested-tag-structure)
    - [3. Find Top N Products by Quantity](#3-find-top-n-products-by-quantity)
    - [4. Detect Duplicate Customers by Name and Email](#4-detect-duplicate-customers-by-name-and-email)
    - [5. Build User-Post Relationships](#5-build-user-post-relationships)
    - [6. Filter Users with High Ratings](#6-filter-users-with-high-ratings)
    - [7. Extract Latest Feedback Comments](#7-extract-latest-feedback-comments)
  - [✅ Notes](#-notes)
  - [💡 Reminder](#-reminder)

## 🧠 Goal

These problems are designed to strengthen your understanding of how to traverse, query, and manipulate arrays and hashes using core Ruby and Enumerable methods like:

- `map`, `each`, `select`, `filter`, `find`, `find_all`, `collect`, `group_by`, `reduce`, `flatten`, and more.

## ✅ Constraints/Assumptions

- Input is a JSON file (e.g., input_data/data.json) passed via CLI (ruby bin/app.rb input_data/data.json --problem 1)
- Output is printed to the terminal or returned as a data hash.
- No third-party gems required; standard Ruby and JSON.
- Each problem should be modular and can be easily adapted for a web/API context.

## 📚 Ruby Data Manipulation Quizzes

### 1. Group Users by Email Domain
Problem:
Given a JSON array of users with an email field, group all users by their `email` domain (e.g., `gmail.com`, `yahoo.com`, etc.).

Input JSON Format:
```JSON
[
  { "name": "Alice", "email": "alice@gmail.com" },
  { "name": "Bob", "email": "bob@yahoo.com" },
  { "name": "Carol", "email": "carol@gmail.com" }
]
```

Expected Output:
```JSON
{
  "data": {
    "gmail.com": ["Alice", "Carol"],
    "yahoo.com": ["Bob"]
  }
}
```

Hints:
- Use `map`, `group_by`, `split`, and `each_with_object`.

### 2. Flatten a Nested Tag Structure
Problem:
Given a JSON object where each key represents a post and its associated `tags` array (possibly nested), flatten all tags into a unique list.

Input JSON Format:
```JSON
{
  "post_1": { "tags": ["ruby", ["cli", "json"], "parsing"] },
  "post_2": { "tags": ["ruby", ["api", ["cli"]]] }
}
```

Expected Output:
```JSON
["ruby", "cli", "json", "parsing", "api"]
```

Hints:
- Use `flatten`, `uniq`, `map`, and `values`.

### 3. Find Top N Products by Quantity
Problem:
Given a list of products with `name` and `quantity_sold`, find the top `N` products by quantity.

Input JSON Format:
```JSON
[
  { "name": "Apples", "quantity_sold": 120 },
  { "name": "Oranges", "quantity_sold": 75 },
  { "name": "Bananas", "quantity_sold": 200 }
]
```

CLI Input:
Pass an argument like --top 2 to get top 2 products.

Expected Output:
```JSON
[
  { "name": "Bananas", "quantity_sold": 200 },
  { "name": "Apples", "quantity_sold": 120 }
]
```

Hints:
- Use `sort_by`, `reverse`, `take`, `select`.

### 4. Detect Duplicate Customers by Name and Email
Problem:
Given a list of customers, find all duplicates based on **both** name and email (case insensitive).

Input JSON Format:
```JSON
[
  { "name": "john doe", "email": "john@example.com" },
  { "name": "John Doe", "email": "JOHN@example.com" },
  { "name": "jane smith", "email": "jane@example.com" }
]
```

Expected Output:
```JSON
[
  { "name": "john doe", "email": "john@example.com" },
  { "name": "John Doe", "email": "JOHN@example.com" }
]
```

Hints:
- Use `group_by`, `map`, `downcase`, `select`.

### 5. Build User-Post Relationships
Problem:
Given two separate JSON arrays — one for `users`, and one for `posts`, where each post has a `user_id`, return each user with their posts attached.

Input JSON Format:
```JSON
{
  "users": [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" }
  ],
  "posts": [
    { "id": 101, "user_id": 1, "title": "Hello" },
    { "id": 102, "user_id": 1, "title": "World" },
    { "id": 103, "user_id": 2, "title": "Ruby Rocks" }
  ]
}
```

Expected Output:
```JSON
[
  { "id": 1, "name": "Alice", "posts": [ { "id": 101, "title": "Hello" }, { "id": 102, "title": "World" } ] },
  { "id": 2, "name": "Bob", "posts": [ { "id": 103, "title": "Ruby Rocks" } ] }
]
```

Hints:
- Use `map`, `select`, `group_by`, `merge`.

### 6. Filter Users with High Ratings
Problem:
Given an array of user records from a JSON file, extract only the users whose `result.rating` **is greater than 4**. This helps in identifying high performers based on a simple numerical threshold.

Input JSON Format:

<details open><summary>Open JSON</summary>

```JSON
[
  {
    "id": 1,
    "full_name": "John Smith",
    "email": "john.smith@example.com",
    "result": {
      "rating": 2.8,
      "feedback": [
        {
          "comment": "Great job on the project!",
          "date": "2023-10-01"
        },
        {
          "comment": "Needs improvement in communication.",
          "date": "2023-10-02"
        }
      ]
    }
  },
  {
    "id": 2,
    "full_name": "Jane Doe",
    "email": "jane.doe@example.com",
    "result": {
      "rating": 4.2,
      "feedback": [
        {
          "comment": "Excellent performance in the last quarter.",
          "date": "2023-10-01"
        },
        {
          "comment": "Keep up the good work!",
          "date": "2023-10-02"
        }
      ]
    }
  },
  {
    "id": 3,
    "full_name": "Michael Johnson",
    "email": "michael.johnson@example.com",
    "result": {
      "rating": 3.5,
      "feedback": []
    }
  },
  {
    "id": 4,
    "full_name": "Emily Brown",
    "email": "emily.brown@example.com",
    "result": {
      "rating": 4.0,
      "feedback": [
        {
          "comment": "Excellent work ethic.",
          "date": "2023-10-03"
        }
      ]
    }
  },
  {
    "id": 5,
    "full_name": "Mike Johnson",
    "email": "michael.johnson@example.com",
    "result": {
      "rating": 4.6,
      "feedback": [
        {
          "comment": "Great team player.",
          "date": "2023-10-01"
        },
        {
          "comment": "Needs to work on time management.",
          "date": "2023-10-02"
        }
      ]
    }
  },
  {
    "id": 6,
    "full_name": "Sophia Williams",
    "email": "sophia.williams@example.com",
    "result": {
      "rating": 3.8,
      "feedback": [
        {
          "comment": "Very creative.",
          "date": "2023-10-01"
        },
        {
          "comment": "Could improve on deadlines.",
          "date": "2023-10-02"
        }
      ]
    }
  },
  {
    "id": 7,
    "full_name": "Liam Brown",
    "email": "liam.brown@example.com",
    "result": {
      "rating": 3.9,
      "feedback": [
        {
          "comment": "Good attention to detail.",
          "date": "2023-10-01"
        },
        {
          "comment": "Needs to be more proactive.",
          "date": "2023-10-02"
        }
      ]
    }
  }
]
```

</details>

Expected Output:
```JSON
[
  {
    "id": 2,
    "full_name": "Jane Doe",
    "email": "jane.doe@example.com",
    "rating": 4.2
  }
]
```

Hints:
- Use select, map, and nested hash access.
- Ideal for practicing filtering and mapping over arrays of hashes.

### 7. Extract Latest Feedback Comments
Problem:
From a list of users with feedback history, extract the latest comment per user based on date, and return a new array with each user’s email, full_name, and the most recent comment.

Input JSON Format:
Same as [Problem 6](#6-filter-users-with-high-ratings) above.

Expected Output:
```JSON
[
  {
    "email": "john.smith@example.com",
    "full_name": "John Smith",
    "latest_comment": "Needs improvement in communication."
  },
  {
    "email": "jane.doe@example.com",
    "full_name": "Jane Doe",
    "latest_comment": "Keep up the good work!"
  }
]
```

Hints:
- Use `map`, `max_by`, and `dig`.
- You’ll need to parse dates using `Date.parse` or `Time.parse` to sort them.

## ✅ Notes
- All problems can be tackled using only Ruby’s Enumerable methods.
- They're CLI-ready, and can be transitioned to a Sinatra or Rails API controller.
- These problems simulate real-life data handling: flattening, filtering, grouping, joining datasets.
- Each problem will challenge your understanding of arrays, hashes, and nested structures.

## 💡 Reminder
These problems are designed to hone your skills in:
- Array and Hash traversal
- Nested data structure manipulation
- Using common Ruby methods like: select, map, each, find, group_by, max_by, flatten, etc.