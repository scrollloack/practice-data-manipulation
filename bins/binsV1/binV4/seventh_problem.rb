require 'json'
require 'date'

input_data = JSON.parse(File.read('input_data/staff.json'), symbolize_names: true)

latest_feedbacks = input_data.map do |data|
  feedbacks = data.dig(:result, :feedback).max_by do |feedback|
    Date.parse(feedback[:date])
  end

  {
    email: data[:email],
    full_name: data[:full_name],
    latest_feedbacks: feedbacks&.fetch(:comment, 'No comment available.')
  }
end

print JSON.pretty_generate({ data: latest_feedbacks })
