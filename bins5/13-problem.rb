# frozen_string_literal: true

require 'json'

def flatten_array(args, new_arr = [])
  args.each do |item|
    if item.is_a?(Array)
      flatten_array(item, new_arr)
    else
      new_arr << item
    end
  end

  new_arr
end

arr = [ 1, [ 2, 3, 4 ], [ 5, 6, [ 7, 8 ] ], 9, 10 ]

puts JSON.pretty_generate({ data: flatten_array(arr) })
