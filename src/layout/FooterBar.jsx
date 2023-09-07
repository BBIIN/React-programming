import { memo } from 'react';
import { useState } from 'react';

const FooterBar = memo(function FooterBar() {
  //  현재 년도를 화면에 출력하는 상태 설정
  const [currentyear] = useState(() => new Date().getFullYear());

  return (
    // <footer className='container'>
    <footer className="p-5 grid place-content-center bg-slate-200">
      <small className="text-base text-slate-700">
        Copyright {currentyear} &copy; 모든 저작권은 이듬(EUID)에 있습니다.
      </small>
    </footer>
  );
})

export default FooterBar;
