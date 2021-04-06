import { DataDispatch } from "../pages"
import Patient from "./Patient"

export default function TableComponent(props) {

  return (
    <table>
      <tbody>
        <Patient></Patient>
      </tbody>
    </table>
  )
}