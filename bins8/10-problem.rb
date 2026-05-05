# frozen_string_literal: true

require 'json'

def find_first_repeat_char(str)
  seen = {}

  str.each_char do |char|
    return char if seen[char]
    seen[char] = true
  end

  nil
end

def find_all_repeat_chars(str)
  counts = Hash.new(0)

  str.each_char { |c| counts[c] += 1 }

  counts.select { |_, count| count > 1 }.keys
end

puts JSON.pretty_generate({ data: find_first_repeat_char('swiss') })
puts JSON.pretty_generate({ data: find_first_repeat_char('them') })
puts JSON.pretty_generate({ data: find_all_repeat_chars('programming') })
