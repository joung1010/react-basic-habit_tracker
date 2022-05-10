## React
Components 들로 이루어진 UI 라이브러리
### Components
한가지 기능을 수행하는 UI 단위   
서로 독립적이며, 고립되어있고, 재사용이 가능하다.   
   
리엑트 어플리케이션은 하나의 컴포넌트로 이루어져있다.   
최상위에 존재하는 컴포넌트를 **Root**라고  한다.   
<pre>
React
    Root
     |
     |
     ----->  Navbar (Component)     
     |          |
     |          |
     |          ----->  Logo(component)  
     |          |
     |          |
     |          -----> button(component) 
     |          |
     |          |
     |          -----> button(component) 
     ----->  Content (Component)
                |
                |
                ----->  Article(Component)

이렇게 독립적인 Component 들을 조합해서 만들어 놓은 것을 리액트 어플리케이션이라고 한다.
</pre>
이 리엑트의 Component 들도 DOM Tree 와 마찬가지로 Tree 형식으로 만들어져 있다.
   
--> 리엑트는 UI 만들 수 있는 라이브러리 이고, 이 리액트를 이용해서 웹어플리케이션을 만든다는 것은   
컴포넌트들을 만든다 라고 말할 수 도 있다.

### 형태
react 에서 제공하는 컴포넌트라는 클래스를 상속해야 된다.
<pre>
<code>
import React from 'react';

class Button extends Component{
    state = {
        numberOfLikes: 0
    }l
    render(){
    return &lt;button&gt;
        {this.state.numberOfLikes}
    &lt;/button&gt;;
    }

}
</code>
</pre>
### 1.State
컴포넌트에 들어있는 데이터를 나타내는 오브젝트
### 2.render
render 함수는 사용자에게 어떻게 표기될 건지 JSX로 표기   
--> 데이터가 변경이 되면 이 render 함수가 자동적으로 다시 호출(변경된 State 값이 화면에 나타날 수 있게)   
   
만약 최상위 컴퍼넌트인 Root 가 변경이되면 그 하위 자식요소의 render함수도 같이 호출된다.   
그러면 state 가 변깅이 될때 마다 모든 render함수가 다시 호출 되는건 서능에 안좋은게 아닐까??   
### Virtual Dom Tree
브라우저의 DOM Tree 처럼 리액트도 리액트만의 Virtual Dom Tree 가 존재   
가상의 돔 트리로 메모리상에 보관이 되어져있다.   
그래서 컴포넌트에 변경이 생겨서 자식 컴퍼넌트의 render 함수가 호출이되면   
**previous tree** 와 (이전의 Virtual Dom Tree) 와 비교해서   
정말 실질적으로 어떤 부분이 업데이트 돼야 되는지 계산을 한다음에 정말 필요한 부분만   
Dom Tree 에 업데이트 를 한다   
그래서 render함수가 많이 호출되어도 실질적으로 보여지는 데이터가 변동되지 않으면   
DOM Tree 에는 영향을 주지 않는다.   
이때 매번 업데이트를 하는 것이 아니라 업데이트해야 되는 내용들을 모았다가   
한 번에 다같이 업데이트를 한다.
1. 컴포넌트 변경, render 함수 호출
2. 이전 Virtual Dom Tree 현재 Virtual Dom Tree 를 비교
3. 실질적으로 보여지는 화면에 데이터가 변동이 되면 DOM Tree 업데이트
   
### Re-render the whole app on every update
리엑트는 데이터가 변경이 될때마다 어플리케이션 전체를 다시 렌더링  
그래서 state 에 맞게 render 함수가에서 어떻게 표기될 건지 한 번만 정리를 해 놓으면   
 react 가 알아서 render함수를 호출 해준다.

### 공식 사이트
[React](https://reactjs.org/docs/getting-started.html)   
[Create React App](https://create-react-app.dev/docs/getting-started)   

### 필요한 Tool
1. 터미널   
1.1 window: [cmder](https://cmder.net/)   
1.2 mac: [iterm](https://iterm2.com/downloads.html) [iTerm 셋팅](https://gist.github.com/kevin-smets/8568070)
2. 노드: [NodeJS](https://nodejs.org/en/)
3. yarn : [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable), npm install yarn --global
   
NodeJs : 자바스크립트를 실행할 수 있는 환경   
예전에는 자바스크립트를 브라우저 위에서 동작하는 웹페이지나    
웹 어플리케이션을 위해서 작성하는 언어였다.   
하지만 NodeJs 덕분에 웹브라우저 밖에서도, 즉 운영체제 위에서나 노드JS 환경이 있다면   
우리가 작성한 자바스크립트 코드를 실행할 수 있다.   
--> 어느 곳에서나 자바스크립트로 프로그래밍이 가능하게 하는 프레임 워크   
   
npm : 패키지 매니저   
라이브러리, 패키지들 쉽게 관리할 수 있게 도와주는 것이 npm   
npm을 이용하면 package.json 파일이 생기는데 이패지키 안에 우리가 사용하고 있는   
외부 라이브러리들과 그들의 버전정보들이 들어 있다.   
--> 설치 및 업데이트 (실행할 수는 없음)
   
npx: 우리가 원하는 라이브러리를 실행할 수 있게 도와줌   
ex) npx 원하는라이브러리 이름
   
yarn : 페이스북에서 만들어진 패키지 매니저   
npm에서 서능, 보안 등을 개선해서 만든 패키지 매니저   
--> npm 위에서 동작하기 때문에 npm 에서 쓰는 package.json 파일 그대로 사용가능   
npm과 호환이 가능하게 사용 가능
   
설치확인   
1. node -v
2. npm -v
3. yarn -v

### Create React App
<pre>
npx create-react-app my-app(프로젝트 이름)   
cd my-app   
npm start
</pre>
<pre>
npm init react-app my-app
</pre>
<pre>
yarn create react-app my-app
</pre>
<pre>
yarn start : 작성한 코드를 실행
yarn build : 실행 x, 배포 빌드
yarn test : 테스트 성공 여부 확인
yarn eject : React App을 이용해서 다운로드 받은 패키지들을 확인하고 수정할 수 있다.
</pre>
### Babel
바벨은 자바스크립트 튼랜스 컴파일러   
convert ECMAScript 2015+ -> older version   
TypeScript, JSX -> JavaScript   
-> 예전 버전의 브라우저가 이해할 수 있는 소스코드로 변환해줌   
### Webpack
우리가 작성한 소스코드, 이미지들을 한 번에 묶어서 번들 단위로 사용자가에게 제공을 도와줌   
메인 페이지를 열었을때 자바스크립트 abc 가 필요하고 특정 이미지가 필요하면   
이것을 잘 묶어서 사용자에게 보내주고 사용자가 다시 다른페이지를 열어서 그페이지에   
필요한 Javascript 이미지 등을 잘 묶어서 다시 보내준다.   
또한 우리가 작성한 자바스크립트를 소스코드를 조금 줄여주고   
긴변수나 함수의 이름을 다른사람들이 알아 보지 못하도록 이름을 조금 이상하게 만들어 놓는   
그런일 도 하고 있음
### ESLint
즉각적으로 우리의 코드가 잘못된 것이 있다면 경고 사인을 보내줌
### Jest
유닛 테스트를 할 수 있게 도와주는 테스팅 프레임워크
### PostCSS
CSS 전처리기중 하나   
expandable CSS libraries tool for transforming CSS with Javascript
### 브라우저 개발툴
크롬브라우저 확장프로그램 : React Developer Tools   
***
## About Component
1. Class   
1.1. React 에서 제공하는 Component Class를 상속해서 만들 수 있음   
1.2. state 라는 object 가 있음(스테이트가 변경되면 render 함수가 호출)   
1.3. lifecycle mehtods : 사용자에게 보여질떄, DOM Tree 올라갔을 때 , 나왔을때, 컴포넌트가 업데이트   
가 되었을때 등 컴포넌트의 상태에 따라서 우리가 함수를 구현하면 리액트가 알아서 불러줌
<pre>
<code>
import React from 'react';

class Button extends Component{
    state = {
        numberOfLikes: 0
    }l
    render(){
    return &lt;button&gt;
        {this.state.numberOfLikes}
    &lt;\button&gt;;
    }

}
</code>
</pre>
2. Function   
2.1. 함수로 구현(한가지를 일을 수행하는 작은 단위)   
2.2. 상태나, 라이프사이클 메소드 X
<pre>
App component
<code>
function App(){
 return &lt;h1&gt;Hello &lt;\h1&gt;; 
}
</code>
</pre>
내 컴포넌트가 상태에 따라서 주기적으로 업데이트 되어야한다면 Class 컴포넌트를 사용   
내 컴포넌트가 상태가 없고 항상 정적으로 데이터가 표기 된다면 함수 컴포넌트를 사용   
### React Hook (React. 16.8)
React Hook 을 이용하면 함수 컴포넌트 안에서도 스태이트를 가질 수 있고   
라이프사이클 메소드도 사용 가능

***
## JSX
Javascript 에서 문법적,구문적 확장을 한 것   
사실 리엑트는 JSX 없이 JS 만으로 구현이 가능하지만   
JS 익숙하지않은 다른 사람과의 협업 , 시각적인 보조 등으로 JSX가 유용하다   

## Embedding Expressions 
<pre>
<code>
const name = 'mason';
const element = &lt;h1&gt;Hello, {name}&lt;/h1&gt;
</code>
</pre>
<pre>
<code>
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  &lt;h1&gt;
    Hello, {formatName(user)}!
  &lt;/h1&gt;
);
</code>
</pre>
주의점   
React 에서 render 함수나 function 함수에서 이 JSX를 리턴하게 되면   
형제 노드를 쓸 수가 없다
<pre>
<code>
function App() {
  const name = 'mason';
  return  &lt;h1&gt;Hello {name}:)  &lt;/h1&gt;
       &lt;h1&gt;Hello&lt;/h1&gt;;
}
//Parsing error:
//Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...&lt;/>?
</code>
</pre>
그래서 JSX 는 다수의 태그를 리턴할 수 없기때문에   
<React.Fragment>태그를 사용하거나 <> </>  사용해서 묶어줘야한다.
<pre>
<code>
import React from "react";

function App() {
  const name = 'mason';
  
  return &lt;React.Fragment&gt;
    &lt;h1&gt;Hello {name}:)&lt;/h1&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;/React.Fragment&gt;;
}
</code>
</pre>
<pre>
<code>
import React from "react";

function App() {
  const name = 'mason';
  
  return &lt;&gt;
    &lt;h1&gt;Hello {name}:)&lt;/h1&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;/&gt;;
}
</code>
</pre>
또 JSX 안에서 자바스크립트 코드 작성 가능
<pre>
<code>
function App() {
  const name = 'mason';
  
  return &lt;&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
   {name && &lt;h1&gt;Hello {name}:)&lt;/h1&gt;}
          {
                ['apple','banana'].map(item => &lt;h1&gt;{item}&lt;/h1&gt;)
            }
  &lt;/&gt;;
</code>
</pre>
[Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
React.createElement(component, props, ...children)
<pre>
<code>
const element = (
  &lt;h1 className="greeting"&gt;
    Hello, world!
  &lt;/h1&gt;
);
// 동일
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

// 속성이 많을 때
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
</code>
</pre>
### JSX 심화
근본 적으로 JSX 는 React.createElement 함수에 syntactic sugar 를 제공하는 것이다   
이런식으로 코드를 작성해도
<pre>
<code>
const element = (
  &lt;h1 className="greeting"&gt;
    Hello, world!
  &lt;/h1&gt;
);
</code>   
</pre>
실제로 컴파일은 React.createElement 함수를 통해서 이루어진다.
<pre>
<code>
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
</code>
</pre>
## React 요소 지정
JSX 태그의 첫번째 문자로 리액트 요소의 타입인지를 결정한다   
즉 대문자로 시작하는 JSX 태그는 리액트 컴포넌트를 참조함을 나타낸다.   
그래서 컴파일할때 해당 변수명으로 직접 참조해서 컴파일하기때문에 만약   
JSX 안에서 &lt;Foo/&gt; 표현식을 사용한다면  사용하는 스코프 내에 반드시 Foo 가 존재 해야한다.
## React Must Be in Scope
JSX 는  React.createElement 호출해서 컴파일 하기때문에    
리액트 라이브러리가 반드시 JSX 코드 스코프에 존재해야한다.   
   
예를 들어 Javascript 에서 직접적으로 React 와 CustomButton 을 직접적으로 참조하지 않지만   
코드 상에서 이 둘의 imports 는 필요하다
<pre>
<code>
import React from 'react';
import CustomButton from './CustomButton';

function WarningButton() {
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return &lt;CustomButton color="red" /&gt;;
}
</code>
</pre>
Javascript bundler 를 사용하지않고 &lt;script&gt; 테그를 이용해서 React 로드했다면   
이미 React global scope에 포함되어 있다
## Using Dot Notation
JSX 에서 Dot Notation(.)을 이용해서 리액트 컴포넌트를 참조할 수 있다.
<pre>
<code>
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return &lt;div&gt;Imagine a {props.color} datepicker here.&lt;/div&gt;
  }
}

function BlueDatePicker() {
  return &lt;MyComponents.DatePicker color="blue" /&gt;;
}
</code>
</pre>
### 사용자 정의 컴포넌트는 대문자로!
태그가 소문자로 시작하면, 즉 이미 만들어져있는 컴포넌트를 참조한다   
&lt;div&gt;,&lt;span&gt; 등과 같은 태그는 React.createElement 에 전달 될때   
문자열 'div'와 'span' 으로 전달 된다.  React.createElement('div')   
하지만 대문자로 시작하면 , &lt;Foo&gt; 는 컴파일시 React.createElement(Foo) 로   
해당 태그 이름과 동일한 컴포넌트나 Javascript 파일을 참조하게 된다.   
잘못된 예시
<pre>
<code>
import React from 'react';

// Wrong! 컴포넌트는 반드시 대문자로 시작
function hello(props) {
  // Correct! This use of &lt;div&gt; is legitimate because div is a valid HTML tag:
  return &lt;div&gt;Hello {props.toWhat}&lt;/div&gt;;
}

function HelloWorld() {
  // Wrong! 리엑트는 이 태그를 &lt;hello /&gt; HTML 태그로 생각함 
  //왜냐하면 대문자가 아니기 때문에
  return &lt;hello toWhat="World" /&gt;;
}
</code>
</pre>
<pre>
<code>
function Hello(props) {
  return &lt;div&gt;Hello {props.toWhat}&lt;/div&gt;;
}

function HelloWorld() {
  return &lt;Hello toWhat="World" /&gt;;
}
</code>
</pre>
## 동적으로 타입결정(props)
해당 컴포넌트 속성에 따라 동적으로 표시할 수 있음
<pre>
<code>
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // Correct! JSX type can be a capitalized variable.
  const SpecificStory = components[props.storyType];
  return &lt;SpecificStory story={props.story} /&gt;
}
</code>
</pre>

<pre>
<code>
const MyComponents = {
    DatePicker: function DatePicker(props) {
        return &lt;div&gt;Imagine a {props.name} datepicker here.&lt;/div&gt;;
    }
}
function App() {
    const name = 'mason';

    return (
        &lt;&gt;
        &lt;h1&gt;Hello&lt;/h1&gt;
            &lt;MyComponents.DatePicker color="blue" name="mason"/&gt;
        &lt;/&gt;
    );
}
</code>
</pre>
### 다양한 props 사용 방법
1. JavaScript Expressions
<pre>
<code>
&lt;MyComponent foo={1 + 2 + 3 + 4} /&gt;
</code>
결과 : 10 
</pre>
2. String Literals
<pre>
<code>
&lt;MyComponent message="hello world" /&gt;
&lt;MyComponent message={'hello world'} /&gt;

&lt;MyComponent message="& lt; 3" /&gt;
&lt;MyComponent message={'<3'} /&gt;

</code>
</pre>
3.Props Default
<pre>
<code>
// 아무 값도 넘기지 않으면 기본값으로 true 가 넘어간다.
&lt;MyTextBox autocomplete /&gt;

&lt;MyTextBox autocomplete={true} /&gt;
</code>
</pre>
4.Spread Attributes
<pre>
<code>
function App1() {
  return &lt;Greeting firstName="Ben" lastName="Hector" /&gt;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return &lt;Greeting {...props} /&gt;;
}
</code>
</pre>
<pre>
<code>
const Button = props => {
    const { kind, ...other } = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return &lt;button className={className} {...other} /&gt;
};


function App() {
    const name = 'mason';

    return (
        &lt; &gt;
            &lt;Button kind="primary" other="other" test="test" onClick={() =&gt; console.log("clicked!")}&gt;
                Hello World!
            &lt;/Button&gt;
        &lt;/>
    );
}
</code>
결과 :  &lt;button class="PrimaryButton" other="other" test="test"&gt;Hello World!&lt;/button&gt;
</pre>


[JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)