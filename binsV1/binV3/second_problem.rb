require 'json'

input_data = {
  "post_1": { "tags": [ "ruby", [ "cli", "json" ], "parsing" ] },
  "post_2": { "tags": [ "ruby", [ "api", [ "cli" ] ] ] }
}

tags = input_data.values.flat_map do |data|
  data[:tags].flatten
end.uniq

print JSON.pretty_generate(tags)
