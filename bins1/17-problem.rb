# frozen_string_literal: true

def find_second_largest(numbers)
  return { secondLargest: nil } if numbers.length < 2

  largest = -Float::INFINITY
  second_largest = -Float::INFINITY

  numbers.each do |num|
    if num > largest
      largest, second_largest = num, largest
    elsif num > second_largest && num != largest
      second_largest = num
    end
  end

  { secondLargest: second_largest === -Float::INFINITY ? nil : second_largest }
end

# Input
input = [ 3, 1, 4, 1, 5, 9, 2, 6 ]
puts find_second_largest(input)
puts find_second_largest([ 3 ])
# Output: {:secondLargest=>6}
