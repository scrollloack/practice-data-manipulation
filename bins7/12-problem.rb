# frozen_string_literal: true

def is_prime_number(num)
  return false unless num.is_a?(Integer) && num >= 2
  return true if num === 2
  return false if num % 2 === 0

  limit = Math.sqrt(num)
  i = 3

  while i <= limit
    return false if num % i === 0
    i += 2
  end

  true
end

puts is_prime_number(9)      # false
puts is_prime_number(25)     # false
puts is_prime_number(65521)  # true  (Largest prime below 2^16)
puts is_prime_number(19)     # true
puts is_prime_number(1)      # false
puts is_prime_number(17.5)   # false
