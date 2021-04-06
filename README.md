이 문서는 React api Data Viewer 에 대해 설명합니다.

## Guide

```bash
git clone https://github.com/NacreousCloud/list_viewer.git
cd list_viewer
yarn install
yarn dev
# port 3000
```
## 사용 라이브러리
- react
- next.js
- axios
- rechart

## 구현 내용
- API DATA 기반 정보 탐색 테이블 컴포넌트
  - 받아온 데이터를 확인할 수 있다.
  - 페이징 기능을 수행할 수 있다.
    - Row 개수 선택
    - 페이지 이동 
  - 특정 컬럼 정렬이 가능하다
    - 해당 컬럼의 th 태그를 클릭하면 기능이 수행된다.

- 테이블 컴포넌트의 필터링 기능 수행이 가능하다
  - 초기화 기능을 추가하였다.

- 목록에서 아이템 클릭시 상세 정보를 보여준다.
  - 다시 클릭시 상세 정보창을 닫는다.

- 테이블 컴포넌트 위에 그래프를 추가하였다.
  - 그래프는 총 다섯가지 종류가 있다.
  - 구현된 필터 기능을 수정할 경우, 그래프 값이 수정된다.

## 부족한 내용
- 테이블 필터링 초기화 시 input 에 데이터가 지워지지않은채로 유지된다.
- 그래프 컴포넌트의 사용경험 미숙으로 제대로 구현하는데 시간이 많이 소요되었다.
- Design이 많이 부족하다.

