const fs = require("fs");

const staffs = JSON.parse(fs.readFileSync("input_data/staff.json", "utf8"));

const highestRatedStaff = staffs.flatMap((staff) => {
  // console.log({ staff });

  if (staff.result.rating <= 4) return [];

  return [
    {
      id: staff.id,
      full_name: staff.full_name,
      email: staff.email,
      rating: staff.result.rating,
    },
  ];
});

console.log(JSON.stringify({ data: highestRatedStaff }, null, 2));
