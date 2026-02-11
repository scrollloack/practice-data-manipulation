const fs = require("fs");

const staffs = JSON.parse(fs.readFileSync("input_data/staff.json"));

const highestRatedStaffs = staffs.flatMap((staff) => {
  if (staff?.result?.rating <= 4) return [];

  return {
    id: staff.id,
    full_name: staff.full_name,
    email: staff.email,
    rating: staff.result.rating,
  };
});

console.log(JSON.stringify({ data: highestRatedStaffs }, null, 2));
