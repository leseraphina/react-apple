/* eslint-disable */

import { useState } from 'react';
import './App.css';
// props-> 속성에 데이터를 전달하는 방식


function Modal(){
  return (
    <div className="modal">
    <h4>제목</h4>
    <p></p>
    <p> 상세내용</p>
  </div>
  )
}
function App() {
  // 디스트럿션
  let [name , setName] = useState(['여자코트','남자코트','파이센자료']);
  let [count,setCount] = useState(0);

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
        {/*  */}
      <div className='list'>
        <h4>{name[0]}
        <span onClick={()=>{
          setCount(count ++)
        }}>좋아요</span> {count}
        </h4>
        <p>2월 17일 발행</p>
      </div>
        {/*  */}
      <div className='list'>
        <h4>{name[1]}
        <span onClick={()=>{
          setCount(count ++)
        }}>좋아요</span> {count}
        </h4>
        <p>2월 17일 발행</p>
      </div>
        {/*  */}
      <div className='list'>
        <h4>{name[2]}
        <span onClick={()=>{
          setCount(count ++)
        }}>좋아요</span> {count}
        </h4>
        <p>2월 17일 발행</p>
      </div>
     <Modal />
    
    </div>
  );
}

export default App;
