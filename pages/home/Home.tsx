import { useEffect, useState } from "react";
import BarChartBox from "../../src/components/barchartbox/BarChartBox";
import BigChartBox from "../../src/components/bigchartbox/BigChartBox";
import ChartBox from "../../src/components/chartbox/ChartBox";
import PieChartBox from "../../src/components/piechartbox/PieChartBox";
import TopBox from "../../src/components/topbox/TopBox";

import "./home.scss";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const [chartBoxUserData, setChartBoxUserData] = useState({
    title: "",
    number: "",
    icon: "",
    chartData: [],
    dataKey: "",
    color: "",
    percentage: 0,
  });
  const [chartBoxProductData, setChartBoxProductData] = useState({
    title: "",
    number: "",
    icon: "",
    chartData: [],
    dataKey: "",
    color: "",
    percentage: 0,
  });
  const [chartBoxConversionData, setChartBoxConversionData] = useState({
    title: "",
    number: "",
    icon: "",
    chartData: [],
    dataKey: "",
    color: "",
    percentage: 0,
  });
  const [chartBoxRevenueData, setChartBoxRevenueData] = useState({
    title: "",
    number: "",
    icon: "",
    chartData: [],
    dataKey: "",
    color: "",
    percentage: 0,
  });
  const [barChartBoxVisitData, setBarChartBoxVisitData] = useState({
    title: "",
    chartData: [],
    color: "",
    dataKey: "",
  });
  const [barChartBoxRevenueData, setBarChartBoxRevenueData] = useState({
    title: "",
    chartData: [],
    color: "",
    dataKey: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userResponse = await axios.get(
          "https://dilfoods.onrender.com/chartBoxUser"
        );
        setChartBoxUserData(userResponse.data);

        const productResponse = await axios.get(
          "https://dilfoods.onrender.com/chartBoxProduct"
        );
        setChartBoxProductData(productResponse.data);

        const conversionResponse = await axios.get(
          "https://dilfoods.onrender.com/chartBoxConversion"
        );
        setChartBoxConversionData(conversionResponse.data);

        const revenueResponse = await axios.get(
          "https://dilfoods.onrender.com/chartBoxRevenue"
        );
        setChartBoxRevenueData(revenueResponse.data);

        const visitResponse = await axios.get(
          "https://dilfoods.onrender.com/barChartBoxVisit"
        );
        setBarChartBoxVisitData(visitResponse.data);

        const revenueBarResponse = await axios.get(
          "https://dilfoods.onrender.com/barChartBoxRevenue"
        );
        setBarChartBoxRevenueData(revenueBarResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxUserData} />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxProductData} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversionData} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenueData} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisitData} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenueData} />
      </div>
    </div>
  );
};

export default Home;
