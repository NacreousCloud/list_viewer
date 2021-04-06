import { DataDispatch } from "../pages"
import Patient from "./Patient"

export default function TableComponent(props) {
  return (
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>gender</th>
          <th>BirthDay</th>
          <th>Age</th>
          <th>Race</th>
          <th>Ethnicity</th>
          <th>Death</th>
        </tr>
        {props.value.map((patient, id) => (
          <Patient key={id} value={patient}></Patient>
        ))}
      </tbody>
    </table>
  )
}