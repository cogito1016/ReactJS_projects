# React & Next

간략하게 적어보는 학습순서..
React -> Hook -> Next -> Redux Ts 등..
계속수정될 예정

React
-전세계 상위1만개 웹사이트 중 44%는 React를 사용한다.
(에어비앤비, 인스타, 페북, 어쩌구 등)
-페북이 만들고 투자
-큰 커뮤니티를 가지고 있음


1.
-react & react-dom 이 필요
-react와 react-dom을 import해서 사용할 수 있다.
-create-react-app을 이용하면 많은 스크립트와 기본설정이 잡힌 상태로 reactApp을 개발할 수 있다.
(코드압축, 속도개선, 코드변환, 자동새로고침 등)

2.
npx create-react-app project-name

본인은 노드버전이낮아서 오류발생
2-1 node -v (버전확인)
2-2) npm cache clean -f (npm 캐쉬삭제)
2-3) npm install -g n (노드 버전관리 플러그인 n)
2-4) n lts (n을 사용하여 설치 lts-lts버전)

ceate-react-app의 프로젝트네이밍 컨벤션이 있는듯
movieApp (X)
movie-app (O)

3.
JSX
-React요소생성코드를 HTML과 비슷한 방식으로 생성할 수 있게 해주는 문법.
-React요소생성코드 -> JSX로 바꿔주는것은 Babel

4.
npm install prop-types
PropTypes 라이브러리를 이용하면 Props로 넘어온 데이터의 타입 및 필수유무를 지정할 수 있다(+a)
그러나 이 부분은 TypeScript로 더 개선시킬 수 있지않을까 싶다.

5.
CSS
css파일을 import해오던가.
css-prop을 사용하던가. (inner-style 방식과 유사)
css modules를 사용하던가 (ex Component.module.css 이 방식 사용 시 random-class-name을 가지게 됨)
styled-component 라이브러리를 사용하던가.

6.
State - 리액트가 관리하는 데이터가 저장되는 곳

6-1.
counter을 변수로만 설정하고 counter+1을 아무리 해준다 해도 UI는 변함이 없다.
그 이유는, 렌더링에 영향을 주지 않기 때문.
결과적으로, counter+1을 해준 후 rerendering해주면 된다.
그렇지만 개발할 때마다 이렇게 해줘야할까?
더 좋은 방법은 없을까?
==> React에서 데이터를 관리하며, 데이터가 변경될 때 마다 리렌더링을 해주는 State를 이용하자.

const data = React.useState(default_value);
console.log(data);
data = Array. 
data = [default_value, func]
constt [counter, setCounter] = React.useState(0);


6-2.
Vanila는 업데이트 시 업데이트되는 요소의 부모까지 업데이트하는 반면, React는 대상이 되는 요소만 업데이트를 시켜준다. ==> 이 부분이 Virtual Dom 인듯?

setCounter을 사용해서 state를 바꾸면, 컴포넌트가 재생성되고 컴포넌트의 코드도 재 실행된다. 바뀐 State의 값을 사용해서! 
그러나 바뀌지않은 부분은 그대로 두고, 바뀌는 부분만 재생성한다.

7.
State Function
setCounter(counter+1)의 방법으로 이전의 값+1을 해줄수는있지만, 안전하지는 않다.
왜냐하면 counter 가 항상 이전의값을 보장하지는 않기때문이다.
(다른곳에서도 수정가능하기 때문)
따라서
setCounter(counter+1) (X)
setCounter((current)=>current+1) (O)
setState에 함수를넘기면, 첫 인자는 이전값을 의미(보장)한다.
따라서 이 방식으로 해주는게 더 안전하다.


