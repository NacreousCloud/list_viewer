import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import FilterComponent from '../components/FilterComponent';
import GraphComponent from '../components/GraphComponent';
import PageSeeker from '../components/PageSeeker';
import RowSelector from '../components/RowSelector';
import TableComponent from '../components/TableComponent';
import styles from '../styles/Home.module.css'
import * as api from './api/api'

export const DataDispatch = React.createContext({});

export default function Home() {
  // 환자 정보 배열
  const [patientData, setPatientData] = useState([]) 

  // 현재 테이블 상태 객체 (필수정보)
  const [tableParams, setTableParams] = useState({
    page: 1,
    "length": 10,
    order_column: "person_id",
    order_desc: "true",
  })

  // 현재 필터 상태 객체
  const [filterParams, setFilterParams] = useState({
    // --- 이거나 -1일 경우 조건 미입력으로 인식
    ethnicity: "---",
    gender: "---",
    race: "---",
    maxAge: -1,
    minAge: -1,
    isDeath: "---",
  })

  // 환자 정보에 기반한 최대 페이지
  const [maxPage, calcMaxPage] = useState(1)

  // 필터 컴포넌트에 사용되는 객체
  const [filterCategory, setFilterCategory] = useState({
    gender: [],
    ethnicity: [],
    race: [],
  });

  
  // 컴포넌트 하나에서 모든 상태를 관리
  // 함수를 나눠서 Provider로 관리하는 방법도 생각

  // 렌더링 후 처음 한번 실행
  // 필터 카테고리를 가져오는 과정은 여러번 할 필요가 없음
  useEffect(() => {
    // console.log("First Rendering!")
    api.getFilterCategory().then(res => {
      // 카테고리에 None 용도로 데이터 추가
      Object.values(res).map(element => {
        Object.values(element).map(arr => {
          arr.unshift("---");
        })
      })
      setFilterCategory({
        ethnicity: res.ethnicity.ethnicityList,
        gender: res.gender.genderList,
        race: res.race.raceList,
      })
      console.log(res)
    });

    api.getPatientsDatas(
      tableParams,
      (res) => {
        console.log(res.data.patient.list);
        setPatientData(res.data.patient.list);
        calcMaxPage(parseInt(res.data.patient.totalLength) / parseInt(tableParams["length"]));
      }
    )
  }, [])

  // 현재 테이블 상태가 바뀌면 테이블 렌더링
  useEffect(() => {
    const newObj = {};
    Object.entries(filterParams).map(item => {
      console.log(item);
      if(item[1] === "---" || item[1] < 1) ;
      else newObj[item[0]]=item[1];
    })
    const tempObj = Object.assign({}, tableParams, newObj);
    console.log(tempObj);

    api.getPatientsDatas(
      tempObj,
      (res) => {
        setPatientData(res.data.patient.list);
        calcMaxPage(parseInt(res.data.patient.totalLength) / parseInt(tableParams["length"]));
      }
    )
  }, [tableParams, filterParams])

  const moveIndex = (e) => {
    const toIndex = e.target.value;
    if(toIndex === tableParams.page) return;
    if(toIndex === 0 || toIndex === undefined || toIndex === "") return;
    console.log(toIndex);
    setTableParams({
      ...tableParams,
      page: toIndex,
    })
  }

  // 페이지 당 row 변경시 현재 페이지를 1로 초기화.
  const changeRow = (e) => {
    const row = e.target.value
    setTableParams({
      ...tableParams,
      page: 1,
      "length": row,
    })
  }

  const changeFilter = (prop) => {
    console.log("prop", );
    const objForSetting = {};
    Object.entries(prop).map(item => {
      objForSetting[item[0]] = item[1];
    })

    setFilterParams({
      ...filterParams,
      ...objForSetting
    })
  }

  const clickToOrder = (e) => {
    if(e.target.id == "") {
      console.warn("정렬을 지원하지않습니다.");
      return;
    }
    const setOrder = e.target.id;
    setTableParams({
      ...tableParams,
      order_column: setOrder,
      order_desc: tableParams.order_desc == "true" ? "false" : "true"
    })
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>React Data Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Home 에 전역변수를? */}

      <main className={styles.main}>

        <div className={styles.graph_section}>
          {/* 그래프 */}
          <GraphComponent></GraphComponent>
        </div>

        {/* 필터 */}
        <FilterComponent category={filterCategory} onSubmit={changeFilter}></FilterComponent>

        {/* 페이지당 Row 갯수 선택 */}
        <RowSelector onChange={changeRow}></RowSelector>

        {/* 테이블 */}
        <TableComponent value={patientData} onClick={clickToOrder}></TableComponent>

        {/* 페이지 탐색바 */}
        <PageSeeker currentPage={tableParams.page}
        maxPage={maxPage} onClick={moveIndex}></PageSeeker>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

// Home.getInitialProps = async (ctx) => {
//   const reqEthnicity = instanse.get("/api/ethnicity/list");
//   const reqGender = instanse.get("/api/gender/list");
//   const reqRace = instanse.get("/api/race/list");

//   const data = await axios.all([reqEthnicity, reqGender, reqRace]).then(axios.spread((...responses) => {
//     const resEthnicity = responses[0].data
//     const resGender = responses[1].data
//     const resRace = responses[2].data

//     return {
//       ethnicity: resEthnicity,
//       gender: resGender,
//       race: resRace,
//     }
//   })).catch(err => {})
//   console.log(data);
  
  
//   // const getPatientsDatas = (params, success, fail) => {
//   //   instanse.get("/api/patient/list", {
//   //     params: params
//   //   })
//   //     .then(success)
//   //     .catch(fail);
//   // }

//   // const getFilterCategory = async () => {
    
  
    
  
//   //   return await data;
//   // }
// }