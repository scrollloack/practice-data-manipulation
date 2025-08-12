require 'json'
require 'date'

staffs = JSON.parse(File.read('input_data/staff.json'), symbolize_names: true)

latest_feedbacks = staffs.map do |staff|
  feedbacks = staff.dig(:result, :feedback).max_by do |feedback|
    Date.parse(feedback[:date])
  end

  {
    id: staff[:id],
    full_name: staff[:full_name],
    email: staff[:email],
    latest_feedbacks: feedbacks&.fetch(:comment, 'No available feedback yet.')
  }
end

puts JSON.pretty_generate({ data: latest_feedbacks })
