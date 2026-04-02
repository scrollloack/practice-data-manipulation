# frozen_string_literal: true

require "json"

customers = [
  { "name": "john doe", "email": "john@example.com" },
  { "name": "John Doe", "email": "JOHN@example.com" },
  { "name": "jane smith", "email": "jane@example.com" }
]

def self.find_duplicates_with_loop(customers)
  seen = {}
  duplicate_customers = []

  customers.each do |customer|
    key = "#{customer[:name].downcase}|#{customer[:email].downcase}"
    entry = seen[key]

    unless entry
      seen[key] = { data: customer, added: false }
      next
    end

    unless entry[:added]
      duplicate_customers << entry[:data]
      entry[:added] = true
    end

    duplicate_customers << customer
  end

  duplicate_customers
end

puts JSON.pretty_generate({ data: find_duplicates_with_loop(customers) })
