require 'json'

customers = [
  { "name": "john doe", "email": "john@example.com" },
  { "name": "John Doe", "email": "JOHN@example.com" },
  { "name": "jane smith", "email": "jane@example.com" }
]

grouped_customers = customers.group_by { |customer| [ customer[:name].downcase, customer[:email].downcase ] }

duplicates = grouped_customers.select { |k, v| v.size > 1 }.values.flatten

print JSON.pretty_generate({ data: duplicates })
