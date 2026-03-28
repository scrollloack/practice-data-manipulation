require 'json'

staffs = JSON.parse(File.read('input_data/staff.json'), symbolize_names: true)

highest_rated_staff = staffs.select { |data| data[:result][:rating] > 4 }

filtered_data = highest_rated_staff.map do |data|
  {
    id: data[:id],
    full_name: data[:full_name],
    email: data[:email],
    rating: data[:result][:rating]
  }
end

print JSON.pretty_generate({ data: filtered_data })
