# frozen_string_literal: true

def is_palindrome(str)
  chars = str.downcase.gsub(/[^a-z0-9]/u, '').chars

  left = 0
  right = chars.length - 1

  while left < right
    return false if chars[left] != chars[right]
    left += 1
    right -= 1
  end

  true
end

puts is_palindrome('A man, a plan, a canal: Panama')  # true
puts is_palindrome('hello')                           # false
puts is_palindrome('racecar')                         # true
puts is_palindrome('🚀 racecar 🚀')                   # true (Unicode safe!)
