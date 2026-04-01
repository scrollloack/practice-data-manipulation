require 'json'

n = ARGV[1].to_i
n = 1 if n.zero?

input_data = [
  { "name": "Apples", "quantity_sold": 120 },
  { "name": "Oranges", "quantity_sold": 75 },
  { "name": "Bananas", "quantity_sold": 200 }
]

sorted_products = input_data.sort_by { |data| data[:quantity_sold] }.reverse

top_sold_products = sorted_products.take(n)

print JSON.pretty_generate({ data: top_sold_products })
