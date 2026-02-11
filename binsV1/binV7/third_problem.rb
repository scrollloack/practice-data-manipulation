require 'json'

n = ARGV[1].to_i
n = 2 if n.zero?

products = [
  { "name": "Apples", "quantity_sold": 120 },
  { "name": "Oranges", "quantity_sold": 75 },
  { "name": "Bananas", "quantity_sold": 200 }
]

sorted_products = products.sort_by { |product| product[:quantity_sold] }.reverse

most_sold_products = sorted_products.take(n)

print JSON.pretty_generate({ data: most_sold_products })
