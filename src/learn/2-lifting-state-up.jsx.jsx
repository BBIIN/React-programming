import debounce from '@/utils/debounce';
import { useState } from 'react';

function LiftingStateUp() {
  // 상태
  const [color, setColor] = useState('#999');

  // 상태 업데이트 이벤트 핸들러
  const handleChangeBgColor = (newColor) => setColor(newColor);

  return (
    <div className="PassingProps">
      <Parent color={color} onChangeColor={handleChangeBgColor} />
      <OtherParent color={color} />
    </div>
  );
}

export default LiftingStateUp;

/* -------------------------------------------------------------------------- */

function OtherParent({ color }) {
  return (
    <div
      className="Parent flex justify-center items-center bg-slate-200 p-4"
      style={{ backgroundColor: color }}
    >
      <p className="=">change Background Color</p>
    </div>
  );
}

export function Parent({ color, onChangeColor }) {
  return (
    <div className="Parent">
      <Child color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

export function Child({ color, onChangeColor }) {
  return (
    <div className="Child flex items-center justify-center gap-8">
      <p className="text-4xl font-extralight uppercase" style={{ color }}>
        Child
      </p>
      <input
        type="color"
        aria-label="글자 색상 변경"
        onChange={debounce((e) => onChangeColor(e.target.value), 500)}
      />
    </div>
  );
}
