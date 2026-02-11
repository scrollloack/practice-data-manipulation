require 'json'

customers = [
  { "name": "john doe", "email": "john@example.com" },
  { "name": "John Doe", "email": "JOHN@example.com" },
  { "name": "jane smith", "email": "jane@example.com" }
]

groupedCustomers = customers.group_by { |data| [ data[:name].downcase, data[:email].downcase ] }

filteredCustomers = groupedCustomers.select do |k, v|
  v.size > 1
end.values.flatten

puts JSON.pretty_generate({ data: filteredCustomers })
