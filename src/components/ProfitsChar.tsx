import { Button } from "@mui/material";
import { AreaChart, Card, Divider } from "@tremor/react"
import { useState } from "react"

export default function ProfitChar({data}:any){
  const [currentProfit,setCurrentProfit] = useState("");
  const [gainTotal,setGainTotal] = useState(data.gainTotal);
  const handleEventChar = (val_month:string,val_gains:string) => {
        setCurrentProfit(val_month);
        setGainTotal(val_gains);
  }
    return <>
        <Card className="h-full w-full flex gap-6">
            <AreaChart
                className="h-full w-6/12"
                data={data.char}
                index="date"
                categories={["Profits"]}
                valueFormatter={(number: number) =>
                `$${Intl.NumberFormat("us").format(number).toString()}`
                }
                onValueChange={(e:any) => {
                  if (e && e.eventType === 'category') {
                    setCurrentProfit("");
                    setGainTotal(data.gainTotal);
                  } else {
                      handleEventChar(e ? String(e.formatDate) : "", e ? e.Profits : data.gainTotal);
                  }
                }}
              />
            <div className="h-full w-6/12">
              <h2 className="text-sm text-gray-500 dark:text-gray-500">Total Profits</h2>
              <div className="flex justify-between">
                <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                    {`$${gainTotal}`}
                </p>
                <Button onClick={() => {}} variant="contained" size="small">
                  Analysis Generate 
                </Button>
              </div>
                <Divider>Details {currentProfit}</Divider>
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