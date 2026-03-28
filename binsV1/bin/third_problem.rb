require 'json'

top_n = ARGV[1].to_i
top_n = 1 if top_n.zero?

input_data = [
  { "name": "Apples", "quantity_sold": 120 },
  { "name": "Oranges", "quantity_sold": 75 },
  { "name": "Bananas", "quantity_sold": 200 }
]

sorted_data = input_data.sort_by { |data| data[:quantity_sold] }.reverse!

print JSON.pretty_generate(sorted_data.take(top_n))
