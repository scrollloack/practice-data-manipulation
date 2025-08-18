import fs from "fs";

const staffs = JSON.parse(fs.readFileSync("input_data/staff.json", "utf8"));

const latestFeedbacks = staffs.map((staff) => {
  const feedbacks = staff?.result?.feedback;

  const latestFeedback = feedbacks?.reduce((prev, curr) => {
    return new Date(prev.date) > new Date(curr.date) ? prev : curr;
  }, feedbacks[0]);

  return {
    id: staff.id,
    full_name: staff.full_name,
    email: staff.email,
    latest_feedbacks: latestFeedback?.comment ?? "No available feedback yet.",
  };
});

console.log(JSON.stringify({ data: latestFeedbacks }, null, 2));
