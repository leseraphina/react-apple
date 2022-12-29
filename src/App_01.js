
import './App.css';
let post = '강남 우동 맛집';
let mid = 'main';
// 데이터 바인딩

function App() {
  return (
    <div className="App">
      <div>
        {/*  스타일은 객체로 넣어야 한다. */}
        {/*  카멜케이스로 작성해야 한다. */}
        <h4 id={mid} style={{color:'red',fontSize:'30px'}}>
          블로그
        </h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
