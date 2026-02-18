const fs = require("fs");

const staffs = JSON.parse(fs.readFileSync("input_data/staff.json", "utf8"));

const findTopRatedStaffsWithChained = () => {
  return staffs.flatMap((staff) => {
    if (staff?.result?.rating <= 4) return [];

    return {
      id: staff.id,
      full_name: staff.full_name,
      email: staff.email,
      rating: staff.result.rating,
    };
  });
};

const findTopRatedStaffsWithLoop = () => {
  const topRatedStaffs = [];

  for (let i = 0; i < staffs.length; i++) {
    const staff = staffs[i];

    if (staff?.result?.rating > 4) {
      topRatedStaffs.push({
        id: staff.id,
        full_name: staff.full_name,
        email: staff.email,
        rating: staff.result.rating,
      });
    }
  }

  return topRatedStaffs;
};

console.log(JSON.stringify({ data: findTopRatedStaffsWithChained() }, null, 2));
console.log(JSON.stringify({ data: findTopRatedStaffsWithLoop() }, null, 2));
