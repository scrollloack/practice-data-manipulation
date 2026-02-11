require 'json'

staffs = JSON.parse(File.read('input_data/staff.json'))

high_rated_data = staffs.select { |staff| staff['result']['rating'] > 4 }

filtered_data = high_rated_data.map do |data|
  {
    id: data['id'],
    full_name: data['full_name'],
    email: data['email'],
    rating: data['result']['rating']
  }
end

print JSON.pretty_generate(filtered_data)
