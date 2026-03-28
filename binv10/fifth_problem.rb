require 'json'

data = {
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

users = data[:users]
posts = data[:posts].group_by { |post| post[:user_id]  }

userPosts = users.map do |user|
  {
    id: user[:id],
    name: user[:name],
    posts: (posts[user[:id]] || []).map { |post| { id: post[:id], title: post[:title] } }
  }
end

puts JSON.pretty_generate({ data: userPosts })
