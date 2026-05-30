# frozen_string_literal: true

require "json"

users = [
  { "name": "Alice", "email": "alice@gmail.com" },
  { "name": "Bob", "email": "bob@yahoo.com" },
  { "name": "Carol", "email": "carol@gmail.com" }
]

users_by_domain = users.each_with_object({}) do |user, hash|
  domain = user[:email].split('@').last
  (hash[domain] ||= []) << user[:name]
end

puts JSON.pretty_generate({ usersByDomain: users_by_domain })
