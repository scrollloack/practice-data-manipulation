# frozen_string_literal: true

require 'json'

def is_constructed(str1, str2)
  counts = Hash.new(0)

  str1.each_char { |c| counts[c] += 1 }

  str2.each_char do |c|
    return false if counts[c] <= 0
    counts[c] -= 1
  end

  true
end

puts is_constructed('wwcdore', 'coder')  # true
puts is_constructed('h3llko', 'hello')   # false
puts is_constructed('rkqodlw', 'world')  # true
