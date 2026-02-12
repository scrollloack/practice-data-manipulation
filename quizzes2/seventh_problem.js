const fs = require("fs");

const staffs = JSON.parse(fs.readFileSync("input_data/staff.json", "utf8"));

const findLatestFeedbacksWithChained = () => {
  return staffs.map((staff) => {
    const latestFeedback = staff?.result?.feedback?.toSorted(
      (a, b) => new Date(b.date) - new Date(a.date),
    )[0];

    return {
      email: staff.email,
      full_name: staff.full_name,
      latest_comment: latestFeedback?.comment ?? "No available feedback yet.",
    };
  });
};

const findLatestFeedbacksWithLoop = () => {
  const latestFeedbacks = [];

  for (let i = 0; i < staffs.length; i++) {
    const staff = staffs[i];
    const feedbacks = staff?.result?.feedback;

    let latest = null;

    for (let j = 0; j < (feedbacks.length ?? 0); j++) {
      const feedback = feedbacks[j];

      if (!latest || new Date(feedback.date) > new Date(latest.date)) {
        latest = feedback;
      }
    }

    latestFeedbacks.push({
      email: staff.email,
      full_name: staff.full_name,
      latest_comment: latest?.comment ?? "No available feedback yet.",
    });
  }

  return latestFeedbacks;
};

console.log(
  JSON.stringify({ data: findLatestFeedbacksWithChained() }, null, 2),
);
console.log(JSON.stringify({ data: findLatestFeedbacksWithLoop() }, null, 2));
