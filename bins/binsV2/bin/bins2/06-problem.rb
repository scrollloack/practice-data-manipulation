# frozen_string_literal: true

require 'json'

staffs = JSON.parse(
  File.read('input_data/staff.json'),
  symbolize_names: true
)

def find_top_rated_staffs_with_chain(staffs)
  staffs.filter_map do |staff|
    rating = staff[:result][:rating]
    next if rating <= 4

    staff.except(:result).merge(rating: rating)
  end
end

def find_top_rated_staffs_with_loop(staffs)
  top_rated = []

  staffs.each do |staff|
    rating = staff[:result][:rating]
    if rating > 4
      top_rated << staff.except(:result).merge(rating: rating)
    end
  end

  top_rated
end

puts JSON.pretty_generate({ data: find_top_rated_staffs_with_chain(staffs) })
puts JSON.pretty_generate({ data: find_top_rated_staffs_with_loop(staffs) })
