import fs from "fs";

const staffs = JSON.parse(fs.readFileSync("input_data/staff.json", "utf8"));

const latestFeedbacks = staffs.map((staff) => {
  const feedbacks = staff?.result?.feedback;

  const latestFeedback = feedbacks?.reduce((latest, current) => {
    return new Date(latest.date) > new Date(current.date) ? latest : current;
  }, feedbacks[0]);

  return {
    id: staff.id,
    full_name: staff.full_name,
    email: staff.email,
    feedback: latestFeedback?.comment ?? "No available feedback yet.",
  };
});

console.log(JSON.stringify({ data: latestFeedbacks }, null, 2));
