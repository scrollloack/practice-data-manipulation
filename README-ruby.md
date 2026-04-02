# Table of contents
- [Table of contents](#table-of-contents)
  - [🧠 Goal](#-goal)
  - [✅ Constraints/Assumptions](#-constraintsassumptions)
  - [🚀 Getting Started](#-getting-started)
  - [📚 Ruby Data Manipulation Quizzes](#-ruby-data-manipulation-quizzes)
    - [1. Group Users by Email Domain](#1-group-users-by-email-domain)
    - [2. Flatten a Nested Tag Structure](#2-flatten-a-nested-tag-structure)
    - [3. Find Top N Products by Quantity](#3-find-top-n-products-by-quantity)
    - [4. Detect Duplicate Customers by Name and Email](#4-detect-duplicate-customers-by-name-and-email)
    - [5. Build User-Post Relationships](#5-build-user-post-relationships)
    - [6. Filter Users with High Ratings](#6-filter-users-with-high-ratings)
    - [7. Extract Latest Feedback Comments](#7-extract-latest-feedback-comments)
    - [8. Fibonacci Challenge](#8-fibonacci-challenge)
    - [9. String Reverser](#9-string-reverser)
    - [10. Repeated Character Challenge](#10-repeated-character-challenge)
    - [11. String Challenge](#11-string-challenge)
    - [12. Math Challenge](#12-math-challenge)
    - [13. Array Parser](#13-array-parser)
    - [14. Event Loop](#14-event-loop)
    - [15. Rotate Array](#15-rotate-array)
    - [16. Palindrome Challenge](#16-palindrome-challenge)
    - [17. Second Largest Number Challenge](#17-second-largest-number-challenge)

## 🧠 Goal

These problems are designed to strengthen your understanding of how to traverse, query, and manipulate arrays and hashes using idiomatic Ruby, including methods like:

- `map`, `each`, `select`, `filter_map`, `reduce`, `flat_map`, `sort_by`, `group_by`, `each_with_object`, `uniq`, and `Hash.new`.

## ✅ Constraints/Assumptions

- Input is a JSON file (e.g., `input_data/staff.json`) read via `File.read` where applicable.
- Output is printed to the terminal using `puts` with `JSON.pretty_generate`.
- Use only Ruby's standard library (`json`, `date`); no third-party gems required.
- Each problem is a standalone `.rb` file and easily adapted for a web/API context.

## 🚀 Getting Started

**Requirements:** Ruby 3.1+ (uses `Hash#except` and `Hash#slice`).

Run any problem file directly:

```bash
ruby 01-problem.rb
```

For problems 3 you can pass `N` as a CLI argument:

```bash
ruby 03-problem.rb 2
```

For problems 6 and 7, ensure the JSON data file exists at the expected path:

```bash
mkdir -p input_data
# place your staff.json inside input_data/
ruby 06-problem.rb
ruby 07-problem.rb
```

## 📚 Ruby Data Manipulation Quizzes

### 1. Group Users by Email Domain
**Problem:**
Given an array of users with an email field, group all users by their `email` domain (e.g., `gmail.com`, `yahoo.com`).

**Input:**
```ruby
[
  { name: 'Alice', email: 'alice@gmail.com' },
  { name: 'Bob',   email: 'bob@yahoo.com'   },
  { name: 'Carol', email: 'carol@gmail.com' }
]
```

**Expected Output:**
```json
{
  "usersByDomain": {
    "gmail.com": ["Alice", "Carol"],
    "yahoo.com": ["Bob"]
  }
}
```

**Hints**
- Use `each_with_object({})` and `split('@').last` to extract the domain.

---

### 2. Flatten a Nested Tag Structure
**Problem:**
Given a hash where each key represents a post and its `tags` array (possibly nested), flatten all tags into a unique list. Implement two versions — one using enumerable methods and one using a recursive loop.

**Input:**
```ruby
{
  post_1: { tags: ['js', ['cli', 'json'], 'parsing'] },
  post_2: { tags: ['js', ['api', ['cli']]] }
}
```

**Expected Output:**
```json
["js", "cli", "json", "parsing", "api"]
```

**Hints**
- Use `flat_map` + `Array#flatten` + `Array#uniq` for the enum approach.
- Use a recursive lambda with `is_a?(Array)` for the loop approach.

---

### 3. Find Top N Products by Quantity
**Problem:**
Given a list of products with `name` and `quantity_sold`, find the top `N` products by quantity. Implement two versions — one with `sort_by` and one with a loop.

**Input:**
```ruby
[
  { name: 'Apples',  quantity_sold: 120 },
  { name: 'Oranges', quantity_sold: 75  },
  { name: 'Bananas', quantity_sold: 200 }
]
```

**Expected Output (N=2):**
```json
[
  { "name": "Bananas", "quantity_sold": 200 },
  { "name": "Apples",  "quantity_sold": 120 }
]
```

**Hints**
- Use `sort_by { |p| -p[:quantity_sold] }.first(n)` for the sort approach.
- Maintain a small sorted array of size `N` in the loop approach.

---

### 4. Detect Duplicate Customers by Name and Email
**Problem:**
Given a list of customers, find all duplicates based on **both** name and email (case insensitive).

**Input:**
```ruby
[
  { name: 'john doe',   email: 'john@example.com' },
  { name: 'John Doe',   email: 'JOHN@example.com' },
  { name: 'jane smith', email: 'jane@example.com' }
]
```

**Expected Output:**
```json
[
  { "name": "john doe", "email": "john@example.com" },
  { "name": "John Doe", "email": "JOHN@example.com" }
]
```

**Hints**
- Normalise the key with `downcase` on both name and email joined by `|`.
- Track duplicates with a plain `Hash` and an `added` flag.

---

### 5. Build User-Post Relationships
**Problem:**
Given two arrays — one for `users` and one for `posts` (each post has a `user_id`) — return each user with their posts attached. Implement two versions.

**Input:**
```ruby
{
  users: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }],
  posts: [
    { id: 101, user_id: 1, title: 'Hello'    },
    { id: 102, user_id: 1, title: 'World'    },
    { id: 103, user_id: 2, title: 'JS Rocks' }
  ]
}
```

**Expected Output:**
```json
[
  { "id": 1, "name": "Alice", "posts": [{ "id": 101, "title": "Hello" }, { "id": 102, "title": "World" }] },
  { "id": 2, "name": "Bob",   "posts": [{ "id": 103, "title": "JS Rocks" }] }
]
```

**Hints**
- Use `group_by` + `map` + `merge` for the enum approach.
- Build a plain hash keyed by `user_id` with the loop approach.

---

### 6. Filter Users with High Ratings
**Problem:**
From a JSON file of staff records, extract only those whose `result[:rating]` is **greater than 4**. Implement two versions — one with `filter_map` and one with a loop.

**Input JSON format:** See `input_data/staff.json`.

**Expected Output:**
```json
[
  { "id": 2, "full_name": "Jane Doe",    "email": "jane.doe@example.com",     "rating": 4.2 },
  { "id": 5, "full_name": "Mike Johnson","email": "michael.johnson@example.com","rating": 4.6 }
]
```

**Hints**
- Use `filter_map` (returns only non-`nil`/non-`false` values) as the chained approach.
- Use `Hash#except` to drop the `:result` key before merging the rating.

---

### 7. Extract Latest Feedback Comments
**Problem:**
From the same staff JSON file, extract the latest comment per staff member based on date, and return each person's `email`, `full_name`, and most recent comment.

**Input JSON format:** See `input_data/staff.json`.

**Expected Output:**
```json
[
  { "email": "john.smith@example.com", "full_name": "John Smith", "latest_comment": "Needs improvement in communication." },
  { "email": "jane.doe@example.com",   "full_name": "Jane Doe",   "latest_comment": "Keep up the good work!" }
]
```

**Hints**
- Use `max_by { |f| Date.parse(f[:date]) }` for the enum approach.
- Use `&.dig(:comment)` with a fallback string for staff with no feedback.

---

### 8. Fibonacci Challenge
**Problem:**
Write two lambdas: one that returns every number in the Fibonacci sequence up to a given count, and one that returns only the nth element.

**Input:** An integer `n` (nth position).

**Expected Output:**
- `fib_logger.call(6)` → `[0, 1, 1, 2, 3, 5]`
- `fib_finder.call(6)` → `5`

**Hints**
- Use a simple `each` loop building an array for the logger.
- Use parallel assignment `a, b = b, a + b` in the finder to avoid storing the whole sequence.

---

### 9. String Reverser
**Problem:**
Write a function that returns a string with its characters in reverse order. Implement multiple approaches.

**Expected Output:**
- `'hello'` → `'olleh'`
- `'world'` → `'dlrow'`
- `'programmer'` → `'remmargorp'`

**Hints**
- Loop approach: use `downto` on the index.
- Idiomatic Ruby: `str.chars.reverse.join`.

---

### 10. Repeated Character Challenge
**Problem:**
Write two lambdas — one that returns the **first** repeated character and one that returns **all** duplicate characters.

**Expected Output:**
- `find_first_repeat_char.call('swiss')` → `'s'`
- `find_all_repeat_chars.call('programming')` → `['r', 'g', 'm']`

**Hints**
- Use a `Hash` (or `Set`) to track seen characters for O(n) lookups.
- Use `Hash.new(0)` as a frequency counter for the "all duplicates" version.

---

### 11. String Challenge
**Problem:**
Implement a lambda `is_constructed` that checks whether `str2` can be built using only characters from `str1`.

**Expected Output:**
- `is_constructed.call('wwcdore', 'coder')` → `true`
- `is_constructed.call('h3llko', 'hello')` → `false`
- `is_constructed.call('rkqodlw', 'world')` → `true`

**Hints**
- Build a frequency map from `str1`, then decrement counts while scanning `str2`.
- Return `false` as soon as a count would go below zero.

---

### 12. Math Challenge
**Problem:**
Implement a lambda that determines whether a given number is prime.

**Expected Output:**
- `is_prime_number.call(65521)` → `true`
- `is_prime_number.call(25)`    → `false`
- `is_prime_number.call(17.5)`  → `false`

**Hints**
- Only check odd divisors up to `Math.sqrt(num).to_i` for efficiency.
- Guard against non-integers with `num.is_a?(Integer)`.

---

### 13. Array Parser
**Problem:**
Implement a recursive lambda that flattens a deeply nested array into a single flat array.

**Input:**
```ruby
[1, [2, 3, 4], [5, 6, [7, 8]], 9, 10]
```

**Expected Output:**
```json
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

**Hints**
- Check each element with `is_a?(Array)` and recurse; otherwise append to the accumulator.
- Ruby also has a built-in `Array#flatten` if you want a one-liner alternative.

---

### 14. Event Loop
**Problem:**
Demonstrate Ruby's concurrency model as an analogue to the JavaScript event loop.

**Expected output order:** `1, 5, 3, 2, 4`

**Notes**
- Ruby has no built-in browser-style event loop.
- The solution uses `Thread` to simulate micro-tasks (Promises) and macro-tasks (setTimeout).
- Micro-task threads are joined before macro-task threads to mirror JS priority rules.

---

### 15. Rotate Array
**Problem:**
Rotate an array of length `N` by `K` steps to the right, in-place, using the three-reversal algorithm.

**Input:** `[1, 2, 3, 4, 5, 6, 7]`, `k = 3`

**Expected Output:** `[5, 6, 7, 1, 2, 3, 4]`

**Hints**
- Reverse the whole array, then reverse the first `k` elements, then reverse the rest.
- Normalise `k` with `k % n` to handle `k >= n`.

---

### 16. Palindrome Challenge
**Problem:**
Check whether a string is a palindrome, ignoring case, punctuation, and spaces. Must be Unicode-safe.

**Input / Output:**
```ruby
is_palindrome.call('A man, a plan, a canal: Panama')  # true
is_palindrome.call('hello')                            # false
is_palindrome.call('racecar')                          # true
is_palindrome.call('🚀 racecar 🚀')                    # true
```

**Hints**
- Strip non-alphanumeric chars with `gsub(/[^a-z0-9]/u, '')` after downcasing.
- Use a two-pointer approach (`left` / `right`) to avoid allocating a second array.

---

### 17. Second Largest Number Challenge
**Problem:**
Find the second largest number in an array **without using sort**.

**Input:** `[3, 1, 4, 1, 5, 9, 2, 6]`

**Expected Output:** `6`

**Hints**
- Track `largest` and `second_largest` with `-Float::INFINITY` as initial sentinels.
- When a new `largest` is found, demote the previous `largest` to `second_largest`.
- Return `nil` if `second_largest` is still `-Float::INFINITY` at the end.

```ruby
find_second_largest = ->(args) {
  return nil if args.length < 2

  largest        = -Float::INFINITY
  second_largest = -Float::INFINITY

  args.each do |num|
    if num > largest
      largest, second_largest = num, largest
    elsif num > second_largest && num < largest
      second_largest = num
    end
  end

  second_largest == -Float::INFINITY ? nil : second_largest
}
```