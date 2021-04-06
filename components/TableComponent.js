import Patient from "./Patient"
import styles from "../styles/TableComponent.module.css"

export default function TableComponent(props) {
  const onClick = props.onClick;
  
  return (
    <table className={styles.patient_table}>
      <tbody>
        <tr onClick={onClick}>
          <th id="person_id">ID</th>
          <th id="gender">gender</th>
          <th id="birth">BirthDay</th>
          <th>Age</th>
          <th id="race">Race</th>
          <th id="ethnicity">Ethnicity</th>
          <th id="death">Death</th>
        </tr>
        {props.value.map((patient, id) => (
          <Patient key={id} value={patient}></Patient>
        ))}
      </tbody>
    </table>
  )
}