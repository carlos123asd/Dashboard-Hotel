import React from "react"
import { ComboChart, ComboChartEventProps } from "../tremor/chartUtils"

const data = [
    { date: "Jan 23", SolarPanels: 2890, MoMChange: 0 },
    { date: "Feb 23", SolarPanels: 2756, MoMChange: -4.64 },
    { date: "Mar 23", SolarPanels: 3322, MoMChange: 20.54 },
    { date: "Apr 23", SolarPanels: 3470, MoMChange: 4.46 },
    { date: "May 23", SolarPanels: 3475, MoMChange: 0.14 },
    { date: "Jun 23", SolarPanels: 3129, MoMChange: -9.96 },
    { date: "Jul 23", SolarPanels: 3490, MoMChange: 11.54 },
    { date: "Aug 23", SolarPanels: 2903, MoMChange: -16.82 },
    { date: "Sep 23", SolarPanels: 2643, MoMChange: -8.96 },
    { date: "Oct 23", SolarPanels: 2837, MoMChange: 7.34 },
    { date: "Nov 23", SolarPanels: 2954, MoMChange: 4.12 },
    { date: "Dec 23", SolarPanels: 3239, MoMChange: 9.65 },
]

export default function ProfitsCharCombo(){
    const [value, setValue] = React.useState<ComboChartEventProps>(null)

    return <>
        <ComboChart
            data={data}
            index="date"
            enableBiaxial={true}
            onValueChange={(v) => setValue(v)}
            barSeries={{
            categories: ["SolarPanels", "Inverters"],
            yAxisLabel: "Solar Panels (Bars)",
            }}
            lineSeries={{
            categories: ["AveragePrice"],
            showYAxis: true,
            yAxisLabel: "AveragePrice (Line)",
            colors: ["gray"],
            }}
        />
    </>
}