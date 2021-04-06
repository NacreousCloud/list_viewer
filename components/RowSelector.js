import styles from '../styles/RowSelector.module.css'

export default function RowSelector(props) {
  const onChange = props.onChange;

  // 테이블 Row 정의.
  const rowCase = [10, 20, 30, 40, 50];
  const rowItems = rowCase.map((row, id) =>
    <option key={id} value={row}>{row}</option>
  );

  return (
    <div className={styles.row_selector}>
      <label>Rows : </label>
      <select onChange={onChange} className={styles.select}>
          {rowItems}
      </select>
    </div>
  )
}