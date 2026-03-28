require 'json'

users = [
  { "name": "john doe", "email": "john@example.com" },
  { "name": "John Doe", "email": "JOHN@example.com" },
  { "name": "jane smith", "email": "jane@example.com" }
]

groupedUsers = users.group_by { |data| [ data[:name].downcase, data[:email].downcase ] }

duplicatedUsers = groupedUsers.select { |k, v| v.size > 1 }.values.flatten

puts JSON.pretty_generate({ data: duplicatedUsers })
