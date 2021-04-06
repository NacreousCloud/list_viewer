import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import FilterComponent from '../components/FilterComponent';
import TableComponent from '../components/TableComponent';
import styles from '../styles/Home.module.css'
import * as api from './api/api'

export const DataDispatch = React.createContext({});

export default function Home() {
  const [patientData, setPatientData] = useState([]) 
  const [tableParams, setTableParams] = useState({
    page: 1,
    "length": 10,
    order_column: "person_id",
    order_desc: "true",
  })
  const [filterParams, setFilterParams] = useState({
    // --- 이거나 -1일 경우 조건 미입력으로 인식
    ethnicity: "---",
    gender: "---",
    race: "---",
    maxAge: -1,
    minAge: -1,
    isDeath: "---",
  })
  const [maxPage, calcMaxPage] = useState(1)
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
      }, (err) => {

      }
    )
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>React Data Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Home 에 전역변수를? */}

      <main className={styles.main}>
            
          {/* 그래프 */}

          {/* 필터 */}
          <FilterComponent category={filterCategory}></FilterComponent>

          {/* 테이블 */}
          <TableComponent value={patientData}></TableComponent>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
