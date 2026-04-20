
# frozen_string_literal: true

require 'json'
require 'date'

staffs = JSON.parse(
  File.read('input_data/staff.json'),
  symbolize_names: true
)

def find_latest_feedbacks_with_chain(staffs)
  staffs.map do |staff|
    staff => { result:, **staff }
    latest = result[:feedback].max_by do |f|
      Date.parse(f[:date])
    end

    staff.slice(:email, :full_name).merge(latest_comment: latest&.dig(:comment) || 'No latest feedback yet.')
  end
end

def find_latest_feedbacks_with_loop(staffs)
  latest_feedbacks = []

  staffs.each do |staff|
    staff => { result:, **staff }
    latest = nil

    result[:feedback].each do |feedback|
      if latest.nil? || Date.parse(feedback[:date]) > Date.parse(latest[:date])
        latest = feedback
      end
    end

    latest_feedbacks << staff.slice(:email, :full_name).merge(latest_comment: latest&.dig(:comment) || 'No latest feedback yet.')
  end

  latest_feedbacks
end

puts JSON.pretty_generate({ data: find_latest_feedbacks_with_chain(staffs) })
puts JSON.pretty_generate({ data: find_latest_feedbacks_with_loop(staffs) })
