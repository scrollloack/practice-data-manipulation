# frozen_string_literal: true

require 'json'

def rotate(args, k)
  n = args.length
  return args if n <= 2

  k = k % n
  return args if k === 0

  def reverse(arr, start, stop)
    while start < stop
      arr[start], arr[stop] = arr[stop], arr[start]
      start += 1
      stop -= 1
    end
  end

  reverse(args, 0, n - 1)
  reverse(args, 0, k - 1)
  reverse(args, k, n - 1)

  args
end

array = [ 1, 2, 3, 4, 5, 6, 7 ]
puts JSON.pretty_generate({ data: rotate(array, 3) })
# Output: [5, 6, 7, 1, 2, 3, 4]
