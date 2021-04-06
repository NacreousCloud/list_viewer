import styles from '../styles/FilterComponent.module.css'


export default function FilterComponent(props) {
  const onSubmit = props.onSubmit;
  const filter = {};
  const handleChange = (e) => {
    const category = e.target.name;
    const value = e.target.value;
    filter[category] = value;
  }
  const applyFilter = () => {
    onSubmit(filter)
  }

  const clearFilter = () => {
    const clearData = {
      ethnicity: "---",
      gender: "---",
      race: "---",
      maxAge: -1,
      minAge: -1,
      isDeath: "---",
    }
    // TODO : 초기화 시 리턴 컴포넌트 값들도 초기화 되어야함
    onSubmit(clearData);
  }

  return (
    <ul onChange={handleChange} className={styles.filter}>
      {Object.entries(props.category).map(data => (
        <li key={data[0]}>
          <label>{data[0]} : </label>
          <select name={data[0]}>
            {data[1].map((item, id) => (
              <option value={item} key={id}>{item}</option>
            ))}
          </select>
        </li>
      ))}
      <li key="age"><label>나이 : </label> 
        <input type="number" placeholder="최소나이" name="age_min" min="0"></input> ~ 
        <input type="number" placeholder="최대나이" name="age_max" min="0"></input>
      </li>
      <li key="isDeath"><label>사망여부</label>
              <select name="isDeath">
                <option value="---">---</option>
                <option value={true}>Dead</option>
                <option value={false}>Alive</option>
              </select>
      </li>
      <li><button onClick={applyFilter}>필터 적용</button></li>
      <li><button onClick={clearFilter}>초기화</button></li>
    </ul>
  )
}