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

type TopRatedStaff = Omit<Staff, "result"> & {
  rating: Result["rating"];
};

const staffs: Staff[] = JSON.parse(
  fs.readFileSync("input_data/staff.json", "utf8"),
);

const findTopRatedStaffsWithChained = (): TopRatedStaff[] => {
  return staffs.flatMap((staff) => {
    const { result, ...staffBase } = staff;
    if (result.rating <= 4) return [];

    return {
      ...staffBase,
      rating: result.rating,
    };
  });
};

const findTopRatedStaffsWithLoop = (): TopRatedStaff[] => {
  const topRatedStaffs: TopRatedStaff[] = [];

  for (const staff of staffs) {
    const { result, ...staffBase } = staff;

    if (result.rating > 4) {
      topRatedStaffs.push({
        ...staffBase,
        rating: result.rating,
      });
    }
  }

  return topRatedStaffs;
};

console.log(JSON.stringify({ data: findTopRatedStaffsWithChained() }, null, 2));
console.log(JSON.stringify({ data: findTopRatedStaffsWithLoop() }, null, 2));
