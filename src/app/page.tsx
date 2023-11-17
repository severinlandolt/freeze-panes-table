const data = [
  {
    id: 1,
    name: "Martha",
    kilometers: 487000,
    region: "Hamburg",
    status: "overperforming",
    deltaType: "moderateIncrease",
    hours: 100,
    productivity: "n/a",
    specialSkill: "Exceptional Cooking",
  },
  {
    id: 2,
    name: "Captain Nemo",
    kilometers: 32186,
    region: "Nautilus",
    status: "overperforming",
    deltaType: "moderateIncrease",
    hours: 110,
    productivity: "n/a",
    specialSkill: "Submarine Navigation",
  },
  {
    id: 3,
    name: "Professor Aronnax",
    kilometers: 324000,
    region: "Paris",
    status: "underperforming",
    deltaType: "moderateDecrease",
    hours: 90,
    productivity: "n/a",
    specialSkill: "Marine Biology Expertise",
  },
  {
    id: 4,
    name: "Michael Strogoff",
    kilometers: 200000,
    region: "Russia",
    status: "overperforming",
    deltaType: "moderateDecrease",
    hours: 92,
    productivity: "n/a",
    specialSkill: "Courageous Courier",
  },
  {
    id: 5,
    name: "Ned Land",
    kilometers: 250000,
    region: "Canada",
    status: "underperforming",
    deltaType: "moderateDecrease",
    hours: 95,
    productivity: "n/a",
    specialSkill: "Expert Harpooner",
  },
  {
    id: 6,
    name: "Jean Passepartout",
    kilometers: 275000,
    region: "France",
    status: "overperforming",
    deltaType: "moderateIncrease",
    hours: 98,
    productivity: "n/a",
    specialSkill: "Resourceful Valet",
  },
  {
    id: 7,
    name: "Gordon",
    kilometers: 345000,
    region: "New Zealand",
    status: "underperforming",
    deltaType: "moderateDecrease",
    hours: 101,
    productivity: "n/a",
    specialSkill: "Leadership in Adversity",
  },
  {
    id: 8,
    name: "Axel Lidenbrock",
    kilometers: 400000,
    region: "Hamburg",
    status: "overperforming",
    deltaType: "moderateDecrease",
    hours: 104,
    productivity: "n/a",
    specialSkill: "Geology Enthusiast",
  },
  {
    id: 9,
    name: "Otto Lidenbrock",
    kilometers: 450000,
    region: "Iceland",
    status: "underperforming",
    deltaType: "moderateIncrease",
    hours: 107,
    productivity: "n/a",
    specialSkill: "Innovative Scientist",
  },
  {
    id: 10,
    name: "Helena Blunt",
    kilometers: 480000,
    region: "England",
    status: "overperforming",
    deltaType: "moderateDecrease",
    hours: 110,
    productivity: "n/a",
    specialSkill: "Aristocratic Connections",
  },
  {
    id: 11,
    name: "Briant",
    kilometers: 495000,
    region: "Australia",
    status: "underperforming",
    deltaType: "moderateDecrease",
    hours: 113,
    productivity: "n/a",
    specialSkill: "Survival Skills",
  },
  {
    id: 12,
    name: "Alice Strogoff",
    kilometers: 310000,
    region: "Russia",
    status: "overperforming",
    deltaType: "moderateIncrease",
    hours: 116,
    productivity: "n/a",
    specialSkill: "Determination",
  },
  {
    id: 13,
    name: "Lady Helena",
    kilometers: 360000,
    region: "Scotland",
    status: "underperforming",
    deltaType: "moderateDecrease",
    hours: 119,
    productivity: "n/a",
    specialSkill: "High Society Influence",
  },
];

const footer = [
  { prefix: "Count", value: 13 },
  { prefix: "Sum", value: 4_408_186 },
  { prefix: "", value: "" },
  { prefix: "", value: "" },
  { prefix: "Avg", value: 104.23 },
  { prefix: "Avg", value: "---" },
  { prefix: "", value: "" },
];
const header = [
  "Name",
  "Distance travelled (KM)",
  "Region",
  "Status",
  "Working Hours (H)",
  "Productivity",
  "Special Skill",
];

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full h-full">
      <div className="resize overflow-auto border rounded w-full h-full">
        <table className="border-separate border-spacing-0 w-full text-sm tabular-nums">
          <thead className="h-10">
            <tr className="font-medium">
              {header.map((content, index) => (
                <th
                  key={index}
                  className="first:pr-4 first:left-0 first:border-r first:z-20 top-0 bg-white whitespace-nowrap sticky border-b font-semibold text-right px-2.5"
                >
                  {content}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-right">
            {data.map((item) => (
              <tr key={item.id} className="whitespace-nowrap align-middle">
                <td className="py-2 pr-4 align-middle sticky left-0 z-10 bg-white border-r px-2.5">
                  {item.name}
                </td>
                <td className="py-2 px-2.5">
                  {item.kilometers.toLocaleString()}
                </td>
                <td className="py-2 px-2.5">{item.region}</td>
                <td className="py-2 px-2.5">
                  <span
                    className={`${
                      item.deltaType === "moderateIncrease"
                        ? " bg-emerald-50 text-emerald-700  ring-emerald-600/20"
                        : "bg-rose-50 text-rose-700  ring-rose-600/20"
                    } capitalize text-xs py-1 inline-flex items-center rounded-md font-medium ring-1 ring-inset px-2.5`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-2 px-2.5">{item.hours}</td>
                <td className="py-2 px-2.5 text-slate-400">
                  {item.productivity}
                </td>
                <td className="py-2 px-2.5">{item.specialSkill}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="sticky bottom-0 bg-white z-10 font-medium border-t">
            <tr className="text-right ">
              {footer.map((item, index) => (
                <td
                  key={index}
                  className="first:pr-4 first:bg-white first:sticky first:left-0 first:bottom-0 first:z-20 first:border-r py-2 align-middle border-t whitespace-nowrap px-2.5"
                >
                  {item.prefix ? (
                    <span className="text-xs capitalize text-slate-400">
                      {item.prefix}{" "}
                    </span>
                  ) : null}
                  {item.value.toLocaleString()}
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  );
}
