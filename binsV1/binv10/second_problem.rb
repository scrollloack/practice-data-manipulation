require 'json'

posts = {
  "post_1": { "tags": [ "ruby", [ "cli", "json" ], "parsing" ] },
  "post_2": { "tags": [ "ruby", [ "api", [ "cli" ] ] ] }
}

tags = posts.values.flat_map do |post|
  post[:tags].flatten
end.uniq

puts JSON.pretty_generate({ data: tags })
