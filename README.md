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

