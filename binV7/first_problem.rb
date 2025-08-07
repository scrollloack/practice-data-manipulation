require 'json'

users = [
  { "name": "Alice", "email": "alice@gmail.com" },
  { "name": "Bob", "email": "bob@yahoo.com" },
  { "name": "Carol", "email": "carol@gmail.com" }
]

grouped_by_domains = users.group_by { |user| user[:email].split('@')[1] }

filtered_result = grouped_by_domains.each_with_object({}) do |(k, v), h|
  h[k] = v.map { |a| a[:name] }
end

print JSON.pretty_generate({ data: filtered_result })
