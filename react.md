## 블로그
class -> className
변수 -> {}

1. JSX 설명
2. {} 설명
3. 플라그먼트 설명


4. Destructuring문법
``` javascript
let num = [1,2];
let a = num[1]
let b = num[2]

-> let [a,b] = [1,2]
//  왜 state를 쓰나?
새로운 데이터나 수정이 되었을때 -> 변경이 자동으로 되지는 않는다.-> state는 html안의 변경 시 자동으로 된다.
state는 변경을 할 경우 기존의 값과 변경되는 것을 비교해서 다른다고 생각할 때만 변경된다.
```

onClick -> 함수가 들어가야 한다.
state변경 -> setState()


컴포넌트
1. 반복적인 html 축약할 때
2. 페이지를 만들어야 할 경우
3. 자주 변경되는 것들

동적인 UI 만들기
HTML CSS로 미리 디자인 완성
UI 현재 상태를 state로 저장한다.
State에 따라 어떻게 보일지 작성한다.