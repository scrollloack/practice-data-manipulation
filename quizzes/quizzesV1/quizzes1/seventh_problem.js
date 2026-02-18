const fs = require("fs");

const staffs = JSON.parse(fs.readFileSync("input_data/staff.json", "utf8"));

const findLatestFeedbacksWithChained = (staffs) => {
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

  return latestFeedbacks;
};

const findLatestFeedbacksWithLoop = (staffs) => {
  const result = [];

  for (let i = 0; i < staffs.length; i++) {
    const staff = staffs[i];
    const feedbacks = staff?.result?.feedback;

    let latest = null;

    for (let j = 0; j < (feedbacks?.length ?? 0); j++) {
      if (!latest || new Date(feedbacks[j].date) > new Date(latest.date)) {
        latest = feedbacks[j];
      }
    }

    result.push({
      email: staff.email,
      full_name: staff.full_name,
      latest_comment: latest?.comment ?? "No available feedback yet.",
    });
  }

  return result;
};

console.log(
  JSON.stringify({ data: findLatestFeedbacksWithChained(staffs) }, null, 2),
);
console.log(
  JSON.stringify({ data: findLatestFeedbacksWithLoop(staffs) }, null, 2),
);
