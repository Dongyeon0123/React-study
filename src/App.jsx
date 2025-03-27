import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // 대충 서버에서 가져온 실제 데이터
  let post = '강남 우동 맛집';
  // JSX문법 2 - 변수 넣을 땐 {중괄호}
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '자바스크립트 독학']);
  let logo = 'ReactBlog';
  // 자료랑 비슷한 state 사용 법
  // 1. import {useState}
  // 2. useState(보관할 자료)
  // 3. let [작명, 작명]
  // 바로 위 코드에서, a는 state에 보관했던 자료가 나옴.
  // b는 state 변경을 도와주는 함수
  // 작명은 직관적인게 좋음

// 참고 - Destructuring 문법
  let [c, d] = [1, 2];

  // @@ State를 써야하는 이유 ?
  // 변수와의 차이점이 존재함.
  // 일반 변수는 갑자기 변경되면, html에 자동으로 반영이 안됨.
  // State의 경우에는 자동으로 html이 재 렌더링됨.
  // 바뀌는 데이터는 state를 사용하는것이 좋음
  // 무조건 State를 쓰기에는, 바뀌지 않는 데이터는 그냥 변수가 좋을듯

  let [좋아요, 좋아요변경] = useState(0);

  // let [modal, setModal] = useState(0);
  let [modal, setModal] = useState(false);
  // setModal은 오른쪽에 state 변경 함수는 set ~ 로 작명하는게 약간 관습느낌.
  // 형식은 자유 ex) 0, 1 / false, true / '닫힘', '열림'

  return (
    <div className="App">
      {/* JSX문법 1 - class 넣을 때는 className */}
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>

      <button onClick={() => {
        // 글제목변경(['여자 코트 추천', '역삼 우동 맛집', '자바스크립트 독학'])
        // 이렇게 해도 되는데,
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
        // copy변수를 만드는 이유 - 원래 데이터를 보존시키기 위해.
        // let copy부분에 ...이 들어가는 이유
        // 기존 state == 신규 state인 경우,
        // 값을 변경해주지 않음. / 자원 절약
        // 그래서 copy라는 변수를 만들어 기존 state와 신규 state를 다르게 한 후,
        // 값을 집어넣는 것.
        // ... 세개 문법은, 괄호를 벗기고, 다시 씌워달라는 뜻.
        // 화살표도 달라지기 때문에 새로운 state로 인식을 한다. 즉, state가 바뀜.

        // @ 이해가 안될 경우 @
        // State가 array & object일 경우,
        // 독립적 카피본을 따로 만들어서 수정해야함
        }}>버튼</button>

        <button onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}>가나다순정렬</button>

      <div className="list">
        <h4>{ 글제목[0] } <span onClick={() => {
          좋아요변경(좋아요 + 1)
          }}>👍</span>  { 좋아요 } </h4>
        <p>3월 26일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>3월 26일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => {
          // setModal(modal + 1);
          setModal(!modal)
        }}>{ 글제목[2] }</h4>
        <p>3월 26일 발행</p>
      </div>
      {/* <Modal></Modal> */}
      {
        // 조건식 ? 참일 때 코드 : 거짓일 때 코드 - html안에서는 if 대용으로 사용.
        // modal % 2 == 1 ? <Modal/> : null
        modal == true ? <Modal/> : null
      }
      {/* 동적인 UI 만드는 step */}
      {/* 1. html, css 미리 디자인 만들기,
          2. UI의 현재 상태를 State로 저장.
          3. state에 따라 UI가 어떻게 보일지 작성 (조건문 등으로) */}
    </div>

    // JSX문법 3 - Style넣을 땐 style={ { 스타일명 : '값' } }
    // *주의* 자바스크립트기 때문에, 스타일을 줄 때 뺄셈기호를 사용하지 않음.
  )
}
// 컴포넌트 만들 때,
// Modal () => {} 이렇게 만들어도 됨.
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
  // 1. component 작명할 땐 영어대문자로 보통 작명함.
  // 2. return () 안엔 html 태그들이 평행하게 여러개 들어갈 수 없음.
  // 3. function App(){} 내부에서 만들면 안됨.
  // 왜냐면 function App(){} 이것도 다시보니 컴포넌트 생성문법이기때문.

  // component 안에 component 를 만들진 않는다.
  // 4. <컴포넌트></컴포넌트> 이렇게 써도 되고 <컴포넌트/> 이렇게 써도 됨.
}

// 어떤 HTML을 Component로 만드는 것이 좋은가 ?
// - 사이트에 반복해서 출현하는 HTML 덩어리들은 Component로 만들면 좋다.

// - 내용이 매우 자주 변경될 것 같은 HTML 부분을 잘라서 Component로 만들면 좋다.

// - 다른 페이지를 만들고 싶다면 그 페이지의 HTML 내용을 하나의 Component로 만드는게 좋음.

// - 또는 다른 팀원과 협업할 때 웹페이지를 Component 단위로 나눠서 작업을 분배하기도 함.

export default App
