require 'json'
require 'date'

input_data = JSON.parse(File.read('input_data/staff.json'))

staffs = input_data.map do |staff|
  feedback = staff.dig('result', 'feedback')&.max_by do |comment|
    Date.parse(comment['date'])
  end

  {
    email: staff['email'],
    full_name: staff['full_name'],
    latest_comment: feedback&.fetch('comment', 'No comment available.')
  }
end

print JSON.pretty_generate({ data: staffs })
