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

type TopRated = Omit<Staff, "result"> & {
  rating: number;
};

const staffs: Staff[] = JSON.parse(
  fs.readFileSync("input_data/staff.json", "utf8"),
);

const findTopRatedStaffsWithChained = (): TopRated[] => {
  return staffs.flatMap((staff) => {
    const { result, ...staffBase } = staff;
    if (!result || result.rating <= 4) return [];

    return {
      ...staffBase,
      rating: result.rating,
    };
  });
};

const findTopRatedStaffsWithLoop = (): TopRated[] => {
  const topRatedStaffs: TopRated[] = [];

  for (let i = 0; i < staffs.length; i++) {
    const staff = staffs[i];
    const { result, ...staffBase } = staff;

    if (result && result.rating > 4) {
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
