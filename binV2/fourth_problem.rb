require 'json'

input_data = [
  { "name": "john doe", "email": "john@example.com" },
  { "name": "John Doe", "email": "JOHN@example.com" },
  { "name": "jane smith", "email": "jane@example.com" }
]

grouped_data = input_data.group_by { |data| [ data[:name].downcase, data[:email].downcase ] }

duplicated_data = grouped_data.select { |k, v| v.size > 1 }.values.flatten

print JSON.pretty_generate({ data: duplicated_data })
