import { AreaChart, Card, Divider } from "@tremor/react"

export default function ProfitChar({data}:any){
    return <>
        <Card className="h-full w-full flex gap-6">
            <AreaChart
                className="h-full w-6/12"
                data={data.char}
                index="date"
                categories={["Profits"]}
                valueFormatter={(number: number) =>
                `$${Intl.NumberFormat("us").format(number).toString()}`
                }/>
            <div className="h-full w-6/12">
                <p className="text-sm text-gray-500 dark:text-gray-500">Total Profits</p>
                <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                    {`$${data.gainToal}`}
                </p>
                <Divider>Details</Divider>
                <p className="mt-2 text-sm leading-7 text-gray-500 dark:text-gray-500">
                    Ticket sales peaked in March, largely due to the "March Mountain
                    Madness" event on March 12th, drawing significant tourist interest.
                    Operational efficiencies and local hotel partnerships further boosted
                    sales. Additionally, targeted social media promotions ahead of the event
                    significantly increased online bookings.
                </p>
            </div>
        </Card>
    </>
}