import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


export default function GraphComponent (props) {
  
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={200} height={200}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="10%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="30%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="70%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="90%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}