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
          <div className="flex gap-3 justify-between">
            <div>
              <Input
                placeholder="Enter Goal"
                id="order"
                name="order"
                type="number"
                className="mt-2 mr-2"
                onChange={(e) => setGoal(Number(e.target.value))}
              />
              <Button onClick={() => setValueLocalGoal(goal ? goal.toString() : "1000")} variant="contained" size="small">
                Save Goal
              </Button>
            </div>
            <div className="flex gap-2">
              <div><span style={{display:"inline-block"}} className="w-[15px] h-[15px] rounded-full mr-1 bg-red-600"></span><span style={{display:"inline-block"}}>Low</span></div>
              <div><span style={{display:"inline-block"}} className="inline-block w-[15px] h-[15px] rounded-full mr-1 bg-yellow-600"></span><span style={{display:"inline-block"}}>Middle</span></div>
              <div><span style={{display:"inline-block"}} className="inline-block w-[15px] h-[15px] rounded-full mr-1 bg-green-600"></span><span style={{display:"inline-block"}}>Hight</span></div>
            </div>
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