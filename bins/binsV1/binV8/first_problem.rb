require 'json'

users = [
  { "name": "Alice", "email": "alice@gmail.com" },
  { "name": "Bob", "email": "bob@yahoo.com" },
  { "name": "Carol", "email": "carol@gmail.com" }
]

grouped_by_domain = users.group_by { |data| data[:email].split('@')[1] }

filtered_users_name = grouped_by_domain.each_with_object({}) do |(k, v), h|
  h[k] = v.map { |a| a[:name] }
end

puts JSON.pretty_generate({ data: filtered_users_name })
