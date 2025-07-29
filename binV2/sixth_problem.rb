require 'json'

input_data = JSON.parse(File.read('input_data/staff.json'))

staffs = input_data.select { |staff| staff['result']['rating'] > 4 }

highest_rated_staff = staffs.map do |staff|
  {
    id: staff['id'],
    full_name: staff['full_name'],
    email: staff['email'],
    rating: staff['result']['rating']
  }
end

print JSON.pretty_generate({ data: highest_rated_staff })
