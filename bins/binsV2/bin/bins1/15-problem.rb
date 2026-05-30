# frozen_string_literal: true

require 'json'

def rotate(arr, k)
  n = arr.length
  return arr if n <= 1

  k = k % n
  return arr if k == 0

  def reverse(a, start, stop)
    while start < stop
      a[start], a[stop] = a[stop], a[start]
      start += 1
      stop  -= 1
    end
  end

  reverse(arr, 0, n - 1)
  reverse(arr, 0, k - 1)
  reverse(arr, k, n - 1)

  arr
end

array = [1, 2, 3, 4, 5, 6, 7]
puts JSON.pretty_generate({ data: rotate(array, 3) })
# Output: [5, 6, 7, 1, 2, 3, 4]
