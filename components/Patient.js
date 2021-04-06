export default function Patient(props) {
  if(props.value) {
    return (
      <tr>
        <td>{props.value.personID}</td>
        <td>{props.value.gender}</td>
        <td>{props.value.birthDatetime}</td>
        <td>{props.value.age}</td>
        <td>{props.value.race}</td>
        <td>{props.value.ethnicity}</td>
        <td>{props.value.isDeath ? "Dead" : "Alive"}</td>
      </tr>
    )
  } else return null;
}