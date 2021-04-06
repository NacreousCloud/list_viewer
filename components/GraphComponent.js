import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, Label } from 'recharts';


export default function GraphComponent (props) {
  const tempArr = [];
    Object.entries(props.stats).map((item, id) => {
      const arr = [];
      Object.entries(item[1]).map((data, idx) => {
        arr.push({
          name: data[0],
          value: data[1]
        })
      })
      
      tempArr.push(arr);
    })
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#fbceb1', '#bce2f8', '#8d192b'];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={200} height={200}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={tempArr[0]}
          cx="10%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          <Legend verticalAlign="bottom" height={36}/>
          <Label value="성별" offset={0} position="bottom"></Label>
          {tempArr[0].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={tempArr[1]}
          cx="30%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {tempArr[1].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={tempArr[2]}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        > 
          {tempArr[2].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={tempArr[3]}
          cx="70%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {tempArr[3].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={tempArr[4]}
          cx="90%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {tempArr[4].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}