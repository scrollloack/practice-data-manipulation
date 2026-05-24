# frozen_string_literal: true

require "json"

posts = {
  "post_1": { "tags": [ "js", [ "cli", "json" ], "parsing" ] },
  "post_2": { "tags": [ "js", [ "api", [ "cli" ] ] ] }
}

def flatten_with_enum(posts)
  posts.values.flat_map do |post|
    post[:tags].flatten
  end.uniq
end

def flatten_with_loop(posts)
  unique_tags = []

  flatten = ->(arr) {
    arr.each do |item|
      if item.is_a? Array
        flatten.call(item)
      elsif !unique_tags.include?(item)
        unique_tags << item
      end
    end
  }

  posts.each_value { |p| flatten.call(p[:tags]) }

  unique_tags
end

puts JSON.pretty_generate({ data: flatten_with_enum(posts) })
puts JSON.pretty_generate({ data: flatten_with_loop(posts) })
