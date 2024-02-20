import { Link } from "react-router-dom";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

import "./chartbox.scss";

interface ChartBoxProps {
  title: string;
  number: number | string;
  icon: string;
  chartData: Object[];
  dataKey: string;
  color: string;
  percentage: number;
}

const ChartBox = ({
  title,
  number,
  icon,
  chartData,
  dataKey,
  color,
  percentage,
}: ChartBoxProps) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={icon} alt="" />
          <span>{title}</span>
        </div>
        <h1>{number}</h1>
        <Link to={"/"} style={{ color: color }}>
          View All
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: percentage < 0 ? "tomato" : "limegreen" }}
          >
            {percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
