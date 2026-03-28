require 'json'

staffs = JSON.parse(File.read('input_data/staff.json'), symbolize_names: true)

highestRatedStaffs = staffs.select { |staff| staff[:result][:rating] > 4 }

mappedResult = highestRatedStaffs.map do |staff|
  {
    id: staff[:id],
    full_name: staff[:full_name],
    email: staff[:email],
    rating: staff[:result][:rating]
  }
end

puts JSON.pretty_generate({ data: mappedResult })
