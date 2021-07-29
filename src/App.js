import { useEffect, useState } from "react";
import { fetchHistory } from "./api";
import MissionsCard from "./components/MissionCard";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const getHistory = async () => {
    console.log("getting History");
    const history = await fetchHistory({
      start: startDate,
      end: endDate
    });
    setData(history);
  };
  useEffect(() => {
    getHistory();
  }, [startDate, endDate]);
  console.log(data);
  return (
    <div>
      <label>Start Date</label>
      <input type="date" onChange={(e) => setStartDate(e.target.value)} />
      <br />
      <label>End Date</label>
      <input type="date" onChange={(e) => setEndDate(e.target.value)} />
      <div className="mission-list">
        {data.map((item, idx) => {
          return <MissionsCard key={idx} mission={item} />;
        })}
      </div>
    </div>
  );
}
