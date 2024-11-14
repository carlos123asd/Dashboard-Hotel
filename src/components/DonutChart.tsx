import { Card, DonutChart, ProgressBar } from "@tremor/react";

export default function CustomDonutChart() {
  const data = [
    { name: "Available", amount: 20 },
    { name: "Booked", amount: 10 },
  ];

  return (
    <Card className="h-full flex flex-col gap-12 justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="font-titDashboard text-2xl text-gray-700 dark:text-gray-300">Progress of the total work</p>
        <DonutChart
          data={data}
          category="amount"
          label="30 Rooms"
          index="name"
          colors={["teal","red"]}
          valueFormatter={(number: number) =>
            `${number.toString()} rooms`
          }
        />
      </div>
      <div className="mx-auto max-w-sm space-y-4">
            <div className="flex items-center justify-between space-x-3">
                <ProgressBar value={data[1].amount} tooltip={data[1].amount > 1 ? `${data[1].amount} rooms` : `${data[1].amount} room`} color="red" className="w-60" />
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                    Booked (%)
                </span>
            </div>
            <div className="flex items-center justify-between space-x-3">
                <ProgressBar value={data[0].amount} tooltip={data[0].amount > 1 ? `${data[0].amount} rooms` : `${data[0].amount} room`} color="teal" className="w-60" />
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                    Available (%)
                </span>
            </div>
        </div>
    </Card>
  );
}
