require 'json'

input_data = {
  "post_1": { "tags": [ "ruby", [ "cli", "json" ], "parsing" ] },
  "post_2": { "tags": [ "ruby", [ "api", [ "cli" ] ] ] }
}

tags = input_data.values.map { |data| data[:tags].flatten || [] }.flatten

print JSON.pretty_generate(tags.uniq)
