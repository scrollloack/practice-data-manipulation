require 'json'

input_data = {
  "post_1": { "tags": [ "ruby", [ "cli", "json" ], "parsing" ] },
  "post_2": { "tags": [ "ruby", [ "api", [ "cli" ] ] ] }
}

tags_data = input_data.values

flat_data = tags_data.flat_map do |data|
  data[:tags].flatten
end.uniq

print JSON.pretty_generate({ data: flat_data })
