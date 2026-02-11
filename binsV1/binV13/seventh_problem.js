const fs = require("fs");

const staffs = JSON.parse(fs.readFileSync("input_data/staff.json"));

const latestFeedbacks = staffs.map((staff) => {
  const latestFeedback = staff?.result?.feedback?.toSorted(
    (a, b) => new Date(b.date) - new Date(a.date),
  )[0];

  return {
    email: staff.email,
    full_name: staff.full_name,
    latest_feedback: latestFeedback?.comment ?? "No feedback available yet.",
  };
});

console.log(JSON.stringify({ data: latestFeedbacks }, null, 2));
