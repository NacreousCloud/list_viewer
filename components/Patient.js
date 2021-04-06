export default function Patient(props) {
  if(props.value) {
    return (
      <tr>
        <td>{props.value.personID}</td>
        <td>{props.value.gender}</td>
        <td>{props.value.birthDatetime.split(" ")[0]}</td>
        {/* birth day 표현방식이 Date.parse로 파싱 호환이 안됨 */}
        <td>{props.value.age}</td>
        <td>{props.value.race}</td>
        <td>{props.value.ethnicity}</td>
        <td>{props.value.isDeath ? "Dead" : "Alive"}</td>
      </tr>
    )
  } else return null;
}