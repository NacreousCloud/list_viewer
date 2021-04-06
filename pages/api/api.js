import axios from 'axios';

const instanse = axios.create({
  baseURL: "http://49.50.167.136:9871",
  responseType: "json",
});

// 환자 정보 받아오는 api
// 성공, 실패 함수를 직접 선언하도록.
export const getPatientsDatas = (params, success, fail) => {
  instanse.get("/api/patient/list", {
    params: params
  })
    .then(success)
    .catch(fail);
}

// 필터 카테고리 받아오는 api
// 한번만 실행하면 되는 함수
export const getFilterCategory = async () => {
  const reqEthnicity = instanse.get("/api/ethnicity/list");
  const reqGender = instanse.get("/api/gender/list");
  const reqRace = instanse.get("/api/race/list");

  // 한번에 다 받아오도록 하였다
  const data = axios.all([reqEthnicity, reqGender, reqRace]).then(axios.spread((...responses) => {
    const resEthnicity = responses[0].data
    const resGender = responses[1].data
    const resRace = responses[2].data

    return {
      ethnicity: resEthnicity,
      gender: resGender,
      race: resRace,
    }
  })).catch(err => {})

  return await data;

}