# frozen_string_literal: true

require "json"

n = (ARGV[3] || 2).to_i

products = [
  { name: 'Apples',  quantity_sold: 120 },
  { name: 'Oranges', quantity_sold: 75  },
  { name: 'Bananas', quantity_sold: 200 }
]

def self.find_top_sold_with_sort(products, n)
  products.sort_by { |p| -p[:quantity_sold] }.first(n)
end

def self.find_top_sold_with_loop(products, n)
  top_sold = []

  products.each do |product|
    if top_sold.length < n
      top_sold << product
      top_sold.sort_by! { |p| -p[:quantity_sold] }
    elsif product[:quantity_sold] > top_sold.last[:quantity_sold]
      top_sold[-1] = product
      top_sold.sort_by! { |p| -p[:quantity_sold] }
    end
  end

  top_sold
end

puts JSON.pretty_generate({ data: find_top_sold_with_sort(products, n) })
puts JSON.pretty_generate({ data: find_top_sold_with_loop(products, n) })
