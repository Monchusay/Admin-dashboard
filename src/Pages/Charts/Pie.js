import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

import { pieChartData } from "../../Data/dummy";
import { useStateContext } from "../../Contexts/ContextProvider";
import { Header } from "../../Components";

const Pie = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header title="Project Cost Breakdown" category="Pie" />
      <AccumulationChartComponent
        id="pie"
        height="full"
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        legendSettings={{ visible: true, background: "white" }}
      >
        <Inject
          services={[
            AccumulationLegend,
            PieSeries,
            AccumulationDataLabel,
            AccumulationTooltip,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Sale"
            dataSource={pieChartData}
            xName="x"
            yName="y"
            innerRadius="40%"
            startAngle={0}
            endAngle={360}
            radius="70%"
            explode
            explodeOffset="10%"
            explodeIndex={2}
            dataLabel={{
              visible: true,
              name: "text",
              position: "Inside",
              font: {
                fontWeight: "600",
                color: "#fff",
              },
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pie;
