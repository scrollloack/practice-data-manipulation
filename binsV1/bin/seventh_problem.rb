require 'json'
require 'date'

input_data = JSON.parse(File.read('input_data/staff.json'))

result = input_data.map do |user|
  feedback = user.dig('result', 'feedback')&.max_by do |comment|
    Date.parse(comment['date'])
  end

  {
    email: user['email'],
    full_name: user['full_name'],
    latest_comment: feedback&.fetch('comment', 'No comment available.')
  }
end

print JSON.pretty_generate(result)
