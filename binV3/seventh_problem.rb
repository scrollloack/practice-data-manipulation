require 'json'
require 'date'

staffs = JSON.parse(File.read('input_data/staff.json'))

latest_commenters = staffs.map do |staff|
  comments = staff.dig('result', 'feedback').max_by do |comment|
    Date.parse(comment['date'])
  end

  {
    id: staff['id'],
    email: staff['email'],
    full_name: staff['full_name'],
    latest_comment: comments&.fetch('comment', 'No comment available.')
  }
end

print JSON.pretty_generate(latest_commenters)
