/* eslint-disable no-unused-vars */

import DisplayingData from "./parts/DisplayingData";
import ConditionalRendering from "./parts/ConditionalRendering";
import ConditionalDisplay from "./parts/ConditionalDisplay";
import RenderingLists from "./parts/RenderingLists";

/* 데이터 ---------------------------------------------------------------------- */

let imageType = "react"; // 'react' | 'vite'

let isShowReactImage = true;

const statusMessage = [
  "⌛️ 대기", // pending
  "⏳ 로딩 중...", // loading
  "✅ 로딩 성공!", // success (resolve)
  "❌ 로딩 실패.", // error (fail, reject)
];

const reactLibrary = {
  name: "React",
  author: "조던 워케(Jordan Walke)",
  writtenIn: "JavaScript",
  type: "JavaScript 라이브러리",
  license: "MIT",
};

/* 컴포넌트 ---------------------------------------------------------------------- */

function DefinitionList() {
  const renderList = () => {
    return null;
  };

  return (
    <dl className="descriptionList">
      <DisplayingData statusMessage={statusMessage} />
      <ConditionalRendering imageType={"react"} />
      <ConditionalDisplay />
      <RenderingLists renderList={renderList} />
    </dl>
  );
}

export default DefinitionList;
