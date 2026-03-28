require 'json'

users = [
  { "name": "Alice", "email": "alice@gmail.com" },
  { "name": "Bob", "email": "bob@yahoo.com" },
  { "name": "Carol", "email": "carol@gmail.com" }
]

groupedUsers = users.group_by { |user| user[:email].split('@')[1] }

filteredUsers = groupedUsers.each_with_object({}) do |(k, v), h|
  h[k] = v.map { |a| a[:name] }
end

puts JSON.pretty_generate({ data: filteredUsers })
