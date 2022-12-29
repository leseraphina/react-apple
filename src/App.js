/* eslint-disable */

import { useState } from 'react';
import './App.css';
// props-> 속성에 데이터를 전달하는 방식

// const Modal = () =>{}
function Modal({name}){
  return (
    <div className="modal">
    <h4>{name[0]}</h4>
    <p></p>
    <p> 상세내용</p>
  </div>
  )
}
function App() {
  // 디스트럿션
  let [name , setName] = useState(['여자코트','남자코트','파이센자료']);
  let [count,setCount] = useState(0);
  let [modal,setModal] = useState(false);
  let [text,setText] = useState('')
  // 함수

  return ( 
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
        </div>
        <div className='btn'>
            <button>가나다순 정리</button>
            <button> 수정</button>
        </div>
    {
      name.map((item,i)=> {
        return (
          <div className='list' key={i}>
          <h4 onClick = {() =>{
              setModal(!modal)
            }}>
              {/* name[i] */}
            {item}
          <span>좋아요</span> {count}
          </h4>
          <p>2월 17일 발행</p>
          <button>글수정</button>
        </div>
        )
      })
    }
    {/* onInput onMouseOver, onScroll */}
    <input type="text" onChange={(e) => {
      // console.log(e.target.value)
      setText(e.target.value);

    }} /> 
    <button>추가</button>
    { 
    // 조건식 ? 참일때의 실행문 : 거짓일때의 실행문
    modal === true ? <Modal  name={name}/> : null 
    }
    
    </div>
  );
}
//  span click 하면 버블링이 온다.-> e.stopPropagation();
export default App;
