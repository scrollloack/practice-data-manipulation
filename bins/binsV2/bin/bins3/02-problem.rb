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
    arr.each do |tag|
      if tag.is_a?(Array)
        flatten.call(tag)
      elsif !unique_tags.include? tag
        unique_tags << tag
      end
    end
  }

  posts.each_value { |post| flatten.call(post[:tags]) }

  unique_tags
end

puts JSON.pretty_generate({ data: flatten_with_enum(posts) })
puts JSON.pretty_generate({ data: flatten_with_loop(posts) })
