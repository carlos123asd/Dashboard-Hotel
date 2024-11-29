import { BarChart, Card } from "@tremor/react";
import { appSelector } from "../features/hooks/hooks";
import { Input, InputLabel } from "@mui/material";
import { useState } from "react";

export default function Graphic({data}:any){
  const [goal,setGoal] = useState(1000);
      return (
        <Card className="h-full flex gap-9 flex-col">
          <div>
            <InputLabel htmlFor="order">Goal</InputLabel>
            <Input
              placeholder="Enter Goal"
              id="order"
              name="order"
              type="number"
              className="mt-2"
              onChange={(e) => setGoal(Number(e.target.value))}
            />
          </div>
          <BarChart
            maxValue={goal}
            className="h-full"
            data={data}
            index="date"
            categories={["gains"]}
            showLegend={false}
            colors={["yellow"]} //Hacer calculo para cambiar colores segun el progreso
          />
        </Card>
      )
}