require 'json'

posts = {
  "post_1": { "tags": [ "ruby", [ "cli", "json" ], "parsing" ] },
  "post_2": { "tags": [ "ruby", [ "api", [ "cli" ] ] ] }
}

tags = posts.values

collated_tags = tags.flat_map do |data|
  data[:tags].flatten
end.uniq

print JSON.pretty_generate({ data: collated_tags })
