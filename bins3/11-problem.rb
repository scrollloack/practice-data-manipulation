# frozen_string_literal: true

def is_constructed(str1, str2)
  counts = Hash.new(0)
  str1.each_char { |char| counts[char] += 1 }

  str2.each_char do |char|
    return false if counts[char] <= 0
    counts[char] -= 1
  end

  true
end

puts is_constructed('wwcdore', 'coder')  # true
puts is_constructed('h3llko', 'hello')   # false
puts is_constructed('rkqodlw', 'world')  # true
