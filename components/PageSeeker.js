import styles from '../styles/PageSeeker.module.css'

export default function PageSeeker(props) {
  const currentPage = props.currentPage;
  const maxPage = props.maxPage;
  const onClick = props.onClick;

  const indexArr = [];
  const BLOCK_RANGE = 4;
  // 현재 페이지 기준 4블럭씩 양쪽으로 두기
  for(let i = currentPage-BLOCK_RANGE; i <= currentPage+BLOCK_RANGE; i++) {
    if(i < 1) continue;
    if(i > maxPage) break;
    indexArr.push({
      index: i,
      title: i,
    });
  }

  // TODO : 좀 더 보기 좋은 방법을 찾아볼것.
  if(props.currentPage > 5) {
    indexArr.unshift({
      index: 0,
      title: "...",
    })
    indexArr.unshift({
      index: 1,
      title: 1,
    });
  }
  if(props.currentPage < maxPage - 4) {
    indexArr.push({
      index: 0,
      title: "...",
    })
    indexArr.push({
      index: maxPage,
      title: maxPage,
    });
  }

  const indexItemList = indexArr.map((element, id) => (
    <IndexBlock key={id} value={element.index}
    isCurrent={element.index===currentPage}>
      {element.title}
    </IndexBlock>
  ))

  return (
    <ul className={styles.seeker} onClick={onClick}>
      {indexItemList}  
    </ul>
  )
}

function IndexBlock (props) {
  if(props.isCurrent) {
    return (
      <li value={props.value}><b>{props.children}</b></li>
    )
  }
  return (
    <li value={props.value}>{props.children}</li>
  )
}
