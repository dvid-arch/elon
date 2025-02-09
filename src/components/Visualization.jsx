import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const MemeCoinChart = () => {
  // Dummy Data (Meme Coin Price Over Time)
  const data = [
    // { date: "Jan", price: 0.05 },
    // { date: "Feb", price: 0.08 },
    // { date: "Mar", price: 0.12 },
    // { date: "Apr", price: 0.2 },
    // { date: "May", price: 0.35 },
    { date: "Jun", price: 0.5 },
    { date: "Jul", price: 0.75 },
    { date: "Aug", price: 1.2 },
    { date: "Sep", price: 1.5 },
    { date: "Oct", price: 2.0 },
    { date: "Nov", price: 2.8 },
    { date: "Dec", price: 3.5 },
  ];

  return (
    <div className="pr-4 bg-gradient-to-br from-blue-900 to-black rounded-lg shadow-lg">
      <h2 className="text-lg font-bold text-white mb-4 text-center">Meme Coin Value Growth</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          {/* Define Gradient */}
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#10B981" stopOpacity={0.2} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.2)" />
          <XAxis dataKey="date" stroke="#ffffff" />
          <YAxis domain={[0, "dataMax + 1"]} stroke="#ffffff" />
          <Tooltip contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", borderRadius: "8px", color: "#ffffff" }} />

          {/* Line with Gradient */}
          <Line type="monotone" dataKey="price" stroke="url(#lineGradient)" strokeWidth={3} dot={{ fill: "#10B981", r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MemeCoinChart;
