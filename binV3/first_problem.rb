require 'json'

input_data = [
  { "name": "Alice", "email": "alice@gmail.com" },
  { "name": "Bob", "email": "bob@yahoo.com" },
  { "name": "Carol", "email": "carol@gmail.com" }
]

grouped_domains = input_data.group_by { |data| data[:email].split('@')[1] }

filtered_names = grouped_domains.each_with_object({}) { |(k, v), h| h[k] = v.map { |a| a[:name] } }

print JSON.pretty_generate(filtered_names)
