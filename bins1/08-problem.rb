# frozen_string_literal: true

require 'json'

def fib_logger(num)
  return [ 0 ] unless num.is_a?(Integer) && num >= 2

  fib = [ 0, 1 ]
  return fib if num === 2

  (2...num).each do |i|
    fib << fib[i - 1] + fib[i - 2]
  end

  fib
end

def fib_finder(num)
  a, b = 0, 1
  return a unless num.is_a?(Integer) && num >= 2
  return b if num === 2

  (2...num).each do |i|
    a, b = b, a + b
  end

  b
end

puts JSON.pretty_generate({ data: fib_logger(10) })
puts JSON.pretty_generate({ data: fib_finder(10) })
