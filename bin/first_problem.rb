require 'json'

input_data = [
  {
    "name": "Alice",
    "email": "alice@gmail.com"
  },
  {
    "name": "Bob",
    "email": "bob@yahoo.com"
  },
  {
    "name": "Carol",
    "email": "carol@gmail.com"
  }
]

grouped_data = input_data.group_by { |data| data[:email].to_s.split('@')[1] }

mapped_data = grouped_data.each_with_object({}) { |(k, v), h| h[k] = v.map { |a| a[:name] } }

print JSON.pretty_generate({ data: mapped_data })
