import { useState } from "react";
import { getPatientDetail } from "../pages/api/api";

export default function Patient(props) {
  const [isClicked, setClicked] = useState(false);
  const [detailData, setDetailData] = useState({});
  const reqDetail = () => {
    setClicked(isClicked ? false : true)
    if(!detailData.visitCount) {
      const id = props.value.personID;
      getPatientDetail(id).then(res => {
        setDetailData(res);
      })
    }
    console.log(detailData);
  }

  if(props.value) {
    return (
      <>
        <tr id={props.value.personID} onClick={reqDetail}>
          <td>{props.value.personID}</td>
          <td>{props.value.gender}</td>
          <td>{props.value.birthDatetime.split(" ")[0]}</td>
          {/* birth day 표현방식이 Date.parse로 파싱 호환이 안됨 */}
          <td>{props.value.age}</td>
          <td>{props.value.race}</td>
          <td>{props.value.ethnicity}</td>
          <td>{props.value.isDeath ? "Dead" : "Alive"}</td>
        </tr>
        <tr style={{display: isClicked ? "table-row" : "none"}}>
          <th colSpan="2">visitCount</th>
          <th colSpan="6">brief</th>
        </tr>
        <tr style={{display: isClicked ? "table-row" : "none"}}>
          <td colSpan="2">visitCount : {detailData.visitCount}</td>
          <td colSpan="6">{detailData.conditionList}</td>
        </tr>
      </>
    )
  } else return null;
}