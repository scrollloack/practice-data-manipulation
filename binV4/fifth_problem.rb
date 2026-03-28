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
posts = input_data[:posts].group_by { |data| data[:user_id] }

user_posts = users.map do |user|
  {
    id: user[:id],
    name: user[:name],
    posts: (posts[user[:id]] || []).map { |post| { id: post[:id], title: post[:title] } }
  }
end

print JSON.pretty_generate({ data: user_posts })
