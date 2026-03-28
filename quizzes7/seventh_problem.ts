export {};

// @ts-ignore
import fs from "fs";

type Feedback = {
  comment: string;
  date: string;
};

type Result = {
  rating: number;
  feedback: Feedback[];
};

type Staff = {
  id: number;
  full_name: string;
  email: string;
  result: Result;
};

type LatestFeedback = Pick<Staff, "email" | "full_name"> & {
  latest_comment: string;
};

const staffs: Staff[] = JSON.parse(
  fs.readFileSync("input_data/staff.json", "utf8"),
);

const findLatestFeedbacksWithChained = (): LatestFeedback[] => {
  return staffs.map((staff) => {
    const latest = staff.result.feedback.toSorted(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    )[0];

    return {
      email: staff.email,
      full_name: staff.full_name,
      latest_comment: latest?.comment ?? "No available feedback yet.",
    };
  });
};

const findLatestFeedbacksWithLoop = (): LatestFeedback[] => {
  const latestFeedbacks: LatestFeedback[] = [];

  for (const staff of staffs) {
    const feedbacks = staff.result.feedback;

    let latest: Feedback | null = null;

    for (const feedback of feedbacks) {
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
