const fs = require("fs");

const staffs = JSON.parse(fs.readFileSync("input_data/staff.json", "utf8"));

const latestFeedbacks = staffs.map((staff) => {
  const latestFeedback = staff?.result?.feedback?.toSorted(
    (a, b) => new Date(b.date) - new Date(a.date),
  )[0];

  return {
    email: staff.email,
    full_name: staff.full_name,
    latest_comment: latestFeedback?.comment ?? "No available feedback yet.",
  };
});

console.log(JSON.stringify({ latestFeedbacks }, null, 2));
