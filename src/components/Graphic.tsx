import { BarChart, Card } from "@tremor/react";
import { Button, Input } from "@mui/material";
import { useEffect, useState } from "react";

export default function Graphic({data}:any){
  const [goal,setGoal] = useState(localStorage.getItem("goalMiranda") ? Number(localStorage.getItem("goalMiranda")) : 1000);
  const [media,setMedia] = useState(333);

  useEffect(() => {
    const calc = Math.round(goal / 3)
    setMedia(calc)
  },[goal])

  const setValueLocalGoal = (val:string) => {
    localStorage.setItem("goalMiranda",val)
  }
  
  const calculateColor = (data:any) => {
    return data > (media * 2) ? "green" : "yellow"
  }
      return (
        <Card className="h-full flex gap-9 flex-col">
          <div className="flex gap-3">
            <Input
              placeholder="Enter Goal"
              id="order"
              name="order"
              type="number"
              className="mt-2"
              onChange={(e) => setGoal(Number(e.target.value))}
            />
            <Button onClick={() => setValueLocalGoal(goal ? goal.toString() : "1000")} variant="contained" size="small">
              Save Goal
            </Button>
          </div>
          <BarChart
            maxValue={goal}
            className="h-full"
            data={data}
            index="date"
            categories={["gains"]}
            showLegend={false}
            colors={[data[0].gains < media ? "red" : calculateColor(data[0].gains)]}
          />
        </Card>
      )
}