import { IoEyeOutline } from "react-icons/io5";

const rows = [
  {
    week: "Week1 (31st Aug-7th Sep)",
    income: "42,000",
    project: "1,800",
    chancery: "1,800",
  },
  {
    week: "Week2 (8th Sep-14th Sep)",
    income: "48,000",
    project: "1,800",
    chancery: "1,800",
  },
  {
    week: "Week3 (15th Sep- 21st Sep)",
    income: "39,000",
    project: "1,800",
    chancery: "1,800",
  },
  {
    week: "Week4 (22nd Sep-28th Sep)",
    income: "51,000",
    project: "1,800",
    chancery: "1,800",
  },
];

const Table = () => (
  <div className="border border-gray-200 rounded p-5 mt-10 mb-20">
    <h2 className="pb-7">Report Details</h2>
    <table className="w-full">
      <thead>
        <tr className="text-left">
          <th className="pb-4 pl-3 w-80">Sept</th>
          <th className="pb-4 pl-3 w-52">Income</th>
          <th className="pb-4 pl-3">Project Levy</th>
          <th className="pb-4 pl-3 w-52">Chancery Levy</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx} className="text-sm ">
            <td className="p-3">{row.week}</td>
            <td className="p-3">{row.income}</td>
            <td className="p-3">{row.project}</td>
            <td className="flex items-center justify-around">
              {row.chancery} <IoEyeOutline />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
