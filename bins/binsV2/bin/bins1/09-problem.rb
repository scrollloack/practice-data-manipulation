# frozen_string_literal: true

require 'json'

def str_rev_with_loop(str)
  result = ''

  (str.length - 1).downto(0) do |i|
    result += str[i]
  end

  result
end

def str_rev_with_loop_efficient(str)
  chars = Array.new(str.length)
  j = str.length - 1

  str.length.times do |i|
    chars[i] = str[j]
    j -= 1
  end

  chars.join
end

def str_rev_with_chain(str)
  str.chars.reverse.join
end

def str_rev_with_spread(str)
  str.chars.reverse.join
end

puts JSON.pretty_generate({ data: str_rev_with_loop('hello') })
puts JSON.pretty_generate({ data: str_rev_with_loop_efficient('hello') })
puts JSON.pretty_generate({ data: str_rev_with_chain('world') })
puts JSON.pretty_generate({ data: str_rev_with_spread('programmer') })