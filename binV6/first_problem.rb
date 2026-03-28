require 'json'

users = [
  { "name": "Alice", "email": "alice@gmail.com" },
  { "name": "Bob", "email": "bob@yahoo.com" },
  { "name": "Carol", "email": "carol@gmail.com" }
]

grouped_users_by_domain = users.group_by { |user| user[:email].split('@')[1] }

filter_names_by_domain = grouped_users_by_domain.each_with_object({}) do |(k, v), h|
  h[k] = v.map { |user| user[:name] }
end

print JSON.pretty_generate({ data: filter_names_by_domain })
