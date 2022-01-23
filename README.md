# React & Next

## 간략하게 적어보는 학습순서..
React -> Hook -> Next -> Redux Ts 등..
계속수정될 예정


## Goal
* JSX가 무엇이고, 우리가 어떻게 사용할 수 있는가

* Props의 유효성검사는 어떻게 할 수 있는가

* CSS사용에는 어떤종류가 있는가(4가지+a)
	* 방식의 이름
	* 방식의 사용방법

* 일반 JS의 변수로 선언된 Counter의 증가함수가 버튼요소에서 onclick으로 동작된다고 할때, 버튼 클릭 시 Counter를 표시하는 UI에 반영되지 않는 이유와 반영이 될 수 있는 방법에 대해 설명할 수 있는가
	* 기존의 일반 JS의 변수 Counter를 사용하며 개선할 때
	* State를 사용할 때

* setState를 사용하면 어떤일이 일어나는지 컴포넌트의 관점에서 설명할 수 있는가

* setState에 기존 state의 값을 사용하는것은 '최근State의값'을 사용하려는 의도이다. 그를위해 state값을 직접적으로 사용하곤 하는데, state값을 직접적으로 사용할 때 일어날 수 있는 위험요소와 이를 해결할 수 있는 방법에 대해 설명할 수 있는가?

* JSX는 HTML과 다르다. 따라서 JSX에서는 쓸 수 없는 HTML의 속성들이있다. 몇가지 예시를 들 수 있는가?

* PROPS의 목적과 사용방법을 설명할 수 있는가

* React MEMO를 왜 사용하는가?

* 


## React Info
-전세계 상위1만개 웹사이트 중 44%는 React를 사용한다. (에어비앤비, 인스타, 페북, 어쩌구 등)   
-페북이 만들고 투자   
-큰 커뮤니티를 가지고 있음   


### 구성을 위해
-react & react-dom 이 필요   
-react와 react-dom을 import해서 사용할 수 있다   
-create-react-app을 이용하면 많은 스크립트와 기본설정이 잡힌 상태로 reactApp을 개발할 수 있다.   
(코드압축, 속도개선, 코드변환, 자동새로고침 등)

npx create-react-app project-name   

본인은 노드버전이낮아서 오류발생   
1)node -v (버전확인)   
2)npm cache clean -f (npm 캐쉬삭제)   
3)npm install -g n (노드 버전관리 플러그인 n)   
4)n lts (n을 사용하여 설치 lts-lts버전)   

ceate-react-app의 프로젝트네이밍 컨벤션이 있는듯   
-movieApp (X)   
-movie-app (O)   

### JSX
-React요소생성코드를 HTML과 비슷한 방식으로 생성할 수 있게 해주는 문법   
-React요소생성코드 -> JSX로 바꿔주는것은 Babel

### CSS
1)css파일을 import해오던가.   
2)css-prop을 사용하던가. (inner-style 방식과 유사)   
3)css modules를 사용하던가 (ex Component.module.css 이 방식 사용 시 random-class-name을 가지게 됨)    
4)styled-component 라이브러리를 사용하던가.

### State
State - 리액트가 관리하는 데이터가 저장되는 곳 

#### State-More
counter을 변수로만 설정하고 counter+1을 아무리 해준다 해도 UI는 변함이 없다.   
그 이유는, 렌더링에 영향을 주지 않기 때문.   
결과적으로, counter+1을 해준 후 rerendering해주면 된다.   
그렇지만 개발할 때마다 이렇게 해줘야할까?   
더 좋은 방법은 없을까?   
==> React에서 데이터를 관리하며, 데이터가 변경될 때 마다 리렌더링을 해주는 State를 이용하자. 

```javascript
const data = React.useState(default_value);
console.log(data);
data = Array. 
data = [default_value, func]
constt [counter, setCounter] = React.useState(0);
````

Vanila는 업데이트 시 업데이트되는 요소의 부모까지 업데이트하는 반면, React는 대상이 되는 요소만 업데이트를 시켜준다.   
==> 이 부분이 Virtual Dom 인듯?

setCounter을 사용해서 state를 바꾸면, 컴포넌트가 재생성되고 컴포넌트의 코드도 재 실행된다. 바뀐 State의 값을 사용해서!   
그러나 바뀌지않은 부분은 그대로 두고, 바뀌는 부분만 재생성한다. 

### State Function
setCounter(counter+1)의 방법으로 이전의 값+1을 해줄수는있지만, 안전하지는 않다.   
왜냐하면 counter 가 항상 이전의값을 보장하지는 않기때문이다.   
(다른곳에서도 수정가능하기 때문)   
따라서   
setCounter(counter+1) (X)   
setCounter((current)=>current+1) (O)   
setState에 함수를넘기면, 첫 인자는 이전값을 의미(보장)한다.   
따라서 이 방식으로 해주는게 더 안전하다. 


```javascript
if (e.target.id === "minutes") {
      setMinutes(e.target.value);
      setHours(minutes / 60);
    }

```
위의 코드는 에러를 유발한다.   
setMinutes로 minute값을 설정했다 하더라도   
바로 state의 minute값을 사용할때는 지연시간이 발생한다.   
즉, 한템포 늦게 반영이되는 현상을 겪게됨.   
따라서 아래처럼 코드를 바꿔줬다.

```javascript
if (e.target.id === "minutes") {
      const thisMinutes = e.target.value;
      setMinutes(thisMinutes);
      setHours(thisMinutes / 60);
    }

```
사용자의 입력값만을 사용하면 된다.   
괜히 state값에 적용했다해서 그 값을 그대로 사용하면 안됨.


### JSX
for은 사용하면 안된다. => htmlfor사용   
class도 사용하면 안된다. => className사용

### PROPS
부모컴포넌트가 자식컴포넌트에게 데이터를 넘긴다.   
Btn컴포넌트에게 key:banana value="Hello"를 담긴 객체를 넘긴다.   
여러개여도 상관없음.   

```javascript
<Btn banana="Hello" />
<Btn banana="World" />


//How to get parent component props?
//Way1
function Btn({banana}){
	console.log(banana);
}

//Way2
function Btn(props){
	console.log(props.banana);
}
```

### React MEMO
const MemorizedBtn = React.memo();
부모컴포넌트가 변경사항이있으면, 자식컴포넌트는 모두 그려지게된다(re-render).   
==>어플리케이션이 느려지는 원인이 될 수 있다.   

#### Memo의 기능   
-자식 컴포넌트의 props가 바뀐게 아니면,   
부모 컴포넌트가 변경되었다 하더라도 자식컴포넌트를 re-render하지마세요!😄   

### PropTypes
-npm install prop-types   
-PropTypes 라이브러리를 이용하면 Props로 넘어온 데이터의 타입 및 필수유무를 지정할 수 있다(+a)   
(그러나 이 부분은 TypeScript로 더 개선시킬 수 있지않을까 싶다)

### Effects
ReactJS의 동작방식   

ex)   
state가 변화할때 컴포넌트를 Re-render시킨다.   
그런데 특정 코드는, Re-render시 마다 실행되어도 되지만,   
다른 코드는, Re-render시 마다 실행되지 않기를 원할 수 있다.   
ex)   
1. API를통해 데이터를 가져올때, 처음에만 가져오고 싶은 경우   
2. Input의 Value-state값을 변경 시 마다 api가 호출되는 경우   

#### useEffect
우리코드가 한번만 실행되도록 도와준다.   
useEffect는 두 가지의 인자를 가진다.   
1. 첫번째 인자 - 실행할 함수
2. 두번째 인자 - 추적할 State값이 담긴 변수, dependencies   

```javascript
  console.log("I always run");

  useEffect(() => { //비어있다면 한번만 실행
    console.log("I run only once");
  }, []);

  useEffect(() => {
    console.log('I run when "keyword" changes');
  }, [keyword]);

  useEffect(() => {
    console.log('I run when "counter" changes');
  }, [count]);
```
위 코드는 Btn클릭 시 State값이 수정된다.   
State값이 수정될 시 컴포넌트가 Re-render되기 때문에 'I always run'은 하지만,   
'I run only once'는 반복하지않는다. 

#### Cleanup Function  
컴포넌트가 사라질때 실행되는 로직   
useEffect의 첫 번째 인자에 들어갈 함수의 return에서 수행된다.   

사용 ex).  
1. 이벤트 리스너 삭제
2. 로그 출력
3. ...

