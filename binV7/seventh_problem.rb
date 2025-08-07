require 'json'
require 'date'

staffs = JSON.parse(File.read('input_data/staff.json'), symbolize_names: true)

latest_feedback = staffs.map do |staff|
  feedbacks = staff.dig(:result, :feedback).max_by do |feedback|
    Date.parse(feedback[:date])
  end

  {
    email: staff[:email],
    full_name: staff[:full_name],
    latest_comment: feedbacks&.fetch(:comment, 'No available feedback yet.')
  }
end

print JSON.pretty_generate({ data: latest_feedback })
