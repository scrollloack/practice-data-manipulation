require 'json'

input_data = JSON.parse(File.read('input_data/staff.json'))

users = input_data.select { |data| data['result']['rating'] > 4 }

result = {
  data: users.map do |user|
    {
      id: user['id'],
      full_name: user['full_name'],
      email: user['email'],
      rating: user['result']['rating']
    }
  end
}

print JSON.pretty_generate(result)
