// React 모듈 불러오기
import * as React from "react";

// ReactDOM 모듈 불러오기
import * as ReactDOM from "react-dom";

// 버전확인
// console.log(`React version : ${React.version}`);

// console.log(`ReactDOM version : ${ReactDOM.version}`);

// React 요소 작성 (React API)
const appElement = React.createElement(
  /* type */ "div",
  /* props {}*/ {
    className: "App",
    id: "reactAppElement",
    "data-type": "React.ReactElement",
  }
);

console.log(appElement);

// React 요소 작성 (with JSX)
const appElementJSX = (
  <div
    className="App"
    id="reactAppElement"
    data-type="React.ReactElement"
  ></div>
);
console.log(appElementJSX);

// app 함수 컴포넌트 만들기

// ReactDOM.createRoot() 사용해서 DOM 요소를 ReactDOMRoot 객체로 생성
// ReactDOMRoot.render() 메서드로 App을 화면에 표시
