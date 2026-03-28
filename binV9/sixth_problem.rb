require 'json'

staffs = JSON.parse(File.read('input_data/staff.json'), symbolize_names: true)

highestRatedStaffs = staffs.select { |data| data[:result][:rating] > 4 }

mappedResult = highestRatedStaffs.map do |data|
  {
    id: data[:id],
    full_name: data[:full_name],
    email: data[:email],
    rating: data[:result][:rating]
  }
end

puts JSON.pretty_generate({ data: mappedResult })
