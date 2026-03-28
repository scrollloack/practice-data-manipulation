const fs = require("fs");

const staffs = JSON.parse(fs.readFileSync("input_data/staff.json", "utf8"));

const highestRatedStaffs = staffs.filter((staff) => staff.result.rating > 4);

const mappedResult = highestRatedStaffs.map((staff) => {
  return {
    id: staff.id,
    full_name: staff.full_name,
    email: staff.email,
    rating: staff.result.rating,
  };
});

console.log(JSON.stringify({ data: mappedResult }, null, 2));
