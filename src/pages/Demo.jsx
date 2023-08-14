import React from 'react';
import Switcher from '@/components/Switcher/Switcher';

function Demo() {
  /*   // 로컬 변수
  let myName = '로컬 변수'; // 기억되지 않음(함수 실행 후 가비지 컬렉터가 수거)

  // 로컬 뮤테이션
  function handleUpdateMyName() {
    myName += '!';
    console.log(myName);
  }

  console.log('컴포넌트 렌더링 myName = ', myName);
 */

  // 상태 관리는 페이지 컴포넌트에서 진행

  // React.useState() 훅으로 선언된 상태로 제어
  //  on / off 상태 변수 (관리할 데이터 타입 Boolean)

  /*   const readyState = React.useState(false);
  const isReady = readyState[0]; // 상태 : state
  const setIsREady = readyState[1]; // 상태 업데이트 함수 : setState */

  const [isReady, setIsReady] = React.useState(false);

  // 리액트가 요구하는 방법대로 상태를 업데이트 하면?
  // 렌더링 트리거 -> 컴포넌트 렌더링 -> DOM 커밋 순으로 진행

  const handleTogleReady = () => {
    setIsReady(!isReady); // 클릭마다 isReady 상태 변화
  };
  return (
    <div
      style={{
        padding: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 8,
      }}
    >
      {/* <p>{myName}</p>
      <button type="button" onClick={handleUpdateMyName}>
        나의 이름 바꾸기
      </button> */}
      {/* Atomic Component */}
      <Switcher
        on={isReady}
        onLabel="on"
        offLabel="off"
        onClick={handleTogleReady}
      />
      <Switcher
        on={isReady}
        onLabel="on"
        offLabel="off"
        onClick={handleTogleReady}
      />
    </div>
  );
}

export default Demo;
