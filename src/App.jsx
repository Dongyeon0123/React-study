import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // 대충 서버에서 가져온 실제 데이터
  let post = '강남 우동 맛집';
  // JSX문법 2 - 변수 넣을 땐 {중괄호}
  let [글제목1, b] = useState('남자 코트 추천');
  let [글제목2, e] = useState('강남 우동 맛집');
  let [글제목3, f] = useState('자바스크립트 독학');
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
  return (
    <div className="App">
      {/* JSX문법 1 - class 넣을 때는 className */}
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>

      <div className="list">
        <h4>{ 글제목1 }</h4>
        <p>3월 26일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목2 }</h4>
        <p>3월 26일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목3 }</h4>
        <p>3월 26일 발행</p>
      </div>
    </div>

    // JSX문법 3 - Style넣을 땐 style={ { 스타일명 : '값' } }
    // *주의* 자바스크립트기 때문에, 스타일을 줄 때 뺄셈기호를 사용하지 않음.
  )
}

export default App
