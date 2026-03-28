require 'json'

input_data = {
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

users = input_data[:users]
posts = input_data[:posts]

user_posts = users.map do |user|
  {
    id: user[:id],
    name: user[:name],
    posts: posts
           .select { |post| post[:user_id] == user[:id] }
           .map { |data| { id: data[:id], title: data[:title] } }
  }
end

print JSON.pretty_generate(user_posts)
