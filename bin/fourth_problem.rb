require 'json'

input_data = [
  { "name": "john doe", "email": "john@example.com" },
  { "name": "John Doe", "email": "JOHN@example.com" },
  { "name": "jane smith", "email": "jane@example.com" }
]

grouped_data = input_data.group_by { |data| [ data[:name].downcase, data[:email].downcase ] }

duplicate_customers = grouped_data.select { |key, value| value.size > 1 }

print JSON.pretty_generate(duplicate_customers.values.flatten)
