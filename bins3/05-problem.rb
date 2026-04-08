# frozen_string_literal: true

require "json"

data = {
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

users = data[:users]
posts = data[:posts]

def get_users_posts_with_group(users, posts)
  grouped_posts = posts.group_by { |post| post[:user_id] }

  users.map do |user|
    user_posts = (grouped_posts[user[:id]] || []).map do |p|
      {
        id: p[:id],
        title: p[:title]
      }
    end

    user.merge(posts: user_posts)
  end
end

def get_users_posts_with_loop(users, posts)
  posts_by_user_id = {}

  posts.each do |post|
    user_id = post[:user_id]
    posts_by_user_id[user_id] ||= []
    posts_by_user_id[user_id] << { id: post[:id], title: post[:title] }
  end

  users.map do |user|
    user.merge(posts: posts_by_user_id[user[:id]] || [])
  end
end

puts JSON.pretty_generate({ data: get_users_posts_with_group(users, posts) })
puts JSON.pretty_generate({ data: get_users_posts_with_loop(users, posts) })
