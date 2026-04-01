require 'json'

n = ARGV[1].to_i
n = 2 if n.zero?

products = [
  { "name": "Apples", "quantity_sold": 120 },
  { "name": "Oranges", "quantity_sold": 75 },
  { "name": "Bananas", "quantity_sold": 200 }
]

sortedProducts = products.sort_by { |data| data[:quantity_sold] }.reverse

highestSoldProducts = sortedProducts.take(n)

puts JSON.pretty_generate({ data: highestSoldProducts })
