# Table of contents
- [Table of contents](#table-of-contents)
  - [🧠 Goal](#-goal)
  - [✅ Constraints/Assumptions](#-constraintsassumptions)
  - [📚 TypeScript/JavaScript Data Manipulation Quizzes](#-typescriptjavascript-data-manipulation-quizzes)
    - [1. Group Users by Email Domain](#1-group-users-by-email-domain)
    - [2. Flatten a Nested Tag Structure](#2-flatten-a-nested-tag-structure)
    - [3. Find Top N Products by Quantity](#3-find-top-n-products-by-quantity)
    - [4. Detect Duplicate Customers by Name and Email](#4-detect-duplicate-customers-by-name-and-email)
    - [5. Build User-Post Relationships](#5-build-user-post-relationships)
    - [6. Filter Users with High Ratings](#6-filter-users-with-high-ratings)
    - [7. Extract Latest Feedback Comments](#7-extract-latest-feedback-comments)
    - [8. FibonacciChallenge](#8-fibonaccichallenge)
    - [9. String Reverser](#9-string-reverser)
    - [10. Repeated Character Challenge](#10-repeated-character-challenge)
    - [11. String Challenge](#11-string-challenge)
    - [12. Math Challenge](#12-math-challenge)
    - [13. Array Parser](#13-array-parser)

## 🧠 Goal

These problems are designed to strengthen your understanding of how to traverse, query, and manipulate arrays and objects using modern JavaScript (ES6+) and TypeScript array methods like:

- `map`, `forEach`, `filter`, `find`, `reduce`, `flat`, `flatMap`, `sort`, and `Object.entries`.

## ✅ Constraints/Assumptions

- Input is a JSON file (e.g., `input_data/data.json`) passed via CLI (e.g., `node app.js input_data/data.json --problem 1`).
- Output is printed to the terminal or returned as a data object.
- Use standard Node.js modules or basic TypeScript; no heavy third-party libraries like Lodash required.
- Each problem should be modular and easily adapted for a web/API context.

## 📚 TypeScript/JavaScript Data Manipulation Quizzes

### 1. Group Users by Email Domain
**Problem:**
Given a JSON array of users with an email field, group all users by their `email` domain (e.g., `gmail.com`, `yahoo.com`).

**Input JSON Format:**
```JSON
[
  { "name": "Alice", "email": "alice@gmail.com" },
  { "name": "Bob", "email": "bob@yahoo.com" },
  { "name": "Carol", "email": "carol@gmail.com" }
]
```

**Expected Output:**
```JSON
{
  "data": {
    "gmail.com": ["Alice", "Carol"],
    "yahoo.com": ["Bob"]
  }
}
```
**Hints**
- Use `reduce()`, `split('@')`, and bracket notation for dynamic keys.

### 2. Flatten a Nested Tag Structure
Problem:
Given a JSON object where each key represents a post and its associated `tags` array (possibly nested), flatten all tags into a unique list.

**Input JSON Format:**
```JSON
{
  "post_1": { "tags": ["js", ["cli", "json"], "parsing"] },
  "post_2": { "tags": ["js", ["api", ["cli"]]] }
}
```

**Expected Output:**
```JSON
["js", "cli", "json", "parsing", "api"]
```
**Hints**
- Use Object.values(), flat(Infinity), and [...new Set(array)].

### 3. Find Top N Products by Quantity
Problem:
Given a list of products with `name` and `quantity_sold`, find the top `N` products by quantity.

**Input JSON Format:**
```JSON
[
  { "name": "Apples", "quantity_sold": 120 },
  { "name": "Oranges", "quantity_sold": 75 },
  { "name": "Bananas", "quantity_sold": 200 }
]
```

**Expected Output:**
```JSON
[
  { "name": "Bananas", "quantity_sold": 200 },
  { "name": "Apples", "quantity_sold": 120 }
]
```
**Hints**
- Use sort((a, b) => b.quantity_sold - a.quantity_sold) and slice(0, n).

### 4. Detect Duplicate Customers by Name and Email
Problem:
Given a list of customers, find all duplicates based on **both** name and email (case insensitive).

**Input JSON Format:**
```JSON
[
  { "name": "john doe", "email": "john@example.com" },
  { "name": "John Doe", "email": "JOHN@example.com" },
  { "name": "jane smith", "email": "jane@example.com" }
]
```

**Expected Output:**
```JSON
[
  { "name": "john doe", "email": "john@example.com" },
  { "name": "John Doe", "email": "JOHN@example.com" }
]
```
**Hints**
- Use filter() while checking a helper object or Map to track counts of a normalized string (e.g., name.toLowerCase() + email.toLowerCase()).

### 5. Build User-Post Relationships
Problem:
Given two separate JSON arrays — one for `users`, and one for `posts`, where each post has a `user_id`, return each user with their posts attached.

**Input JSON Format:**
```JSON
{
  "users": [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" }
  ],
  "posts": [
    { "id": 101, "user_id": 1, "title": "Hello" },
    { "id": 102, "user_id": 1, "title": "World" },
    { "id": 103, "user_id": 2, "title": "JS Rocks" }
  ]
}
```

**Expected Output:**
```JSON
[
  { "id": 1, "name": "Alice", "posts": [ { "id": 101, "title": "Hello" }, { "id": 102, "title": "World" } ] },
  { "id": 2, "name": "Bob", "posts": [ { "id": 103, "title": "JS Rocks" } ] }
]
```
**Hints**
- Use map() to iterate users and filter() to find matching posts, then spread the user object with the new posts key.

### 6. Filter Users with High Ratings
Problem:
Given an array of user records from a JSON file, extract only the users whose `result.rating` **is greater than 4**. This helps in identifying high performers based on a simple numerical threshold.

**Input JSON Format:**
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

**Expected Output:**
```JSON
[
  {
    "id": 2,
    "full_name": "Jane Doe",
    "email": "jane.doe@example.com",
    "rating": 4.2
  },
  {
    "id": 5,
    "full_name": "Mike Johnson",
    "email": "michael.johnson@example.com",
    "rating": 4.6
  }
]
```
**Hints**
- Use filter(), then map() to return a flattened object structure. Use optional chaining ?. if the result might be missing.

### 7. Extract Latest Feedback Comments
Problem:
From a list of users with feedback history, extract the latest comment per user based on date, and return a new array with each user’s email, full_name, and the most recent comment.

**Input JSON Format:**
Same as [Problem 6](#6-filter-users-with-high-ratings) above.

**Expected Output:**
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
**Hints**
- Use map() for the users. Inside, use sort() on the feedback array by converting dates with new Date(item.date) and pick the first element.

### 8. FibonacciChallenge
Problem: 
Write two functions: one that logs every number in the Fibonacci sequence up to a given count, and another that returns only the nth element of the sequence.

**Input:**
- Integer, nth position of the fibonacci.
**Expected Output:**
- First fn(6):
```JSON
{
  "data": [
    0,
    1,
    1,
    2,
    3,
    5,
  ]
}
```
- Second fn(6):
```JSON
{
  "data": 5
}
```

**Hints**
- Use a for loop or while loop for the sequence logger.- Consider using recursion or a mathematical formula for finding the \(n^{th}\) element.
- Remember that the sequence typically starts with 0 and 1.

### 9. String Reverser
Problem:
Write a function that takes a string as input and returns a new string with the characters in reverse order.

**Input:**
- String
**Expected Output:**
- First fn('hello'):
```JSON
{
  "data": "olleh"
}
```
- Second fn('world'):
```JSON
{
  "data": "dlrow"
}
```
- Third fn('programming'):
```JSON
{
  "data": "remmargorp"
}
```

**Hints**
- Use a decrementing for loop to iterate through the string characters starting from the last index (string.length - 1) down to 0.
- Alternatively:
- Use String.prototype.split() to turn the string into an array.
- Utilize Array.prototype.reverse() to flip the element order.
- Use Array.prototype.join() to assemble the characters back into a string.

### 10. Repeated Character Challenge
Problem:
Write a function that identifies repeating characters in a given string. You should implement two versions: one that returns the first character that repeats and another that returns an array of all duplicate characters found in the string. 

**Input:**
- String
**Expected Output:**
- First fn('swiss'):
```JSON
{
  "data": "s"
}
```
- Second fn('programmer'):
```JSON

{
  "data": [
    "r",
    "g",
    "m"
  ]
}
```

**Hints**
- Compare indexOf() and lastIndexOf() for a specific character; if they are different, that character is repeated.
- Use a Frequency Counter (an empty object or Map) to track how many times each character appears as you iterate.
- Utilize a Set to quickly check if a character has already been encountered during a single pass.
- Bonus: For a concise check, convert the string to an array and then to a Set, then compare the .size of the Set against the .length of the original array.

### 11. String Challenge
Problem:
Implement a function StringChallenge(str1, str2) that evaluates whether str2 can be constructed using only characters found in str1. Return the string "true" if a portion of str1 characters can be rearranged to match str2. Otherwise, return the string "false"

**Input:**
- Two strings, str1 and str2.
**Expected Output:**
- fn("cdore", "coder")
```JSON
{ "data": "true" }
```
- fn("h3llko", "hello")
```JSON
{ "data": "false" }
```

**Note:** You do not need to worry about punctuation or symbols; only alphanumeric characters will be passed. 

**Hints**
- Sorting: One of the most readable ways to solve this is to sort both strings and see if one is a subset of the other. However, sorting is computationally expensive (O(n log n)).
- Recommendation: Use a frequency map for the best balance. It provides (O(n)) time complexity (optimization) while remaining fairly clear for other developers to read. 

### 12. Math Challenge
Problem:
Implement a function MathChallenge(num) that determines if a given number is prime. 

**Input:**
- An integer num between 1 and 2^16
**Expected Output:**
- Return the string "true" if the number is prime; otherwise, return the string "false"

**Note:** A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. 

**Hints**
- For mathematical checks like this, a for loop is the standard approach because you can short-circuit (exit early) as soon as a divisor is found. 
- Optimization Tip: You don’t need to check every number up to num. You only need to check up to the square root of num. If no divisor is found by that point, none will be found later.
- Efficiency: Using Math.sqrt(num) significantly reduces the number of iterations, which is vital as the input reaches (65,536).
- Remember 1: The number 1 is neither prime nor composite. Ensure your function handles this correctly by returning "false"
- Even Numbers: Aside from the number 2, no even number can be prime. You can optimize your loop further by checking if the number is 2 and then skipping all other even numbers.

### 13. Array Parser
Problem:
Implement a function that flattens arrays of arrays in a single array. 

**Input:**
- An array
```JSON
[1,[2,3,4],[5,6,[7,8]],9,10]
```
**Expected Output:**
- Return all elements in a single array
