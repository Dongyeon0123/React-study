import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // 대충 서버에서 가져온 실제 데이터
  let post = '강남 우동 맛집';
  // JSX문법 2 - 변수 넣을 땐 {중괄호}

  return (
    <div className="App">
      {/* JSX문법 1 - class 넣을 때는 className */}
      <div className="black-nav">
        <h4 style={ {fontSize : '30px', color: 'blue'}} >블로그입니다.</h4>
      </div>
      <h4>{ post }</h4>
    </div>

    // JSX문법 3 - Style넣을 땐 style={ { 스타일명 : '값' } }
    // *주의* 자바스크립트기 때문에, 스타일을 줄 때 뺄셈기호를 사용하지 않음.
  )
}

export default App
