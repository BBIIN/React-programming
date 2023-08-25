import { numberWithComma } from '@/utils';
import PropTypes from '@/utils/propTypes';
import { useState } from 'react';
import { string, number, bool, arrayOf, shape } from 'prop-types';

function ComponentPropTypes() {
  const [screencast, setScreencast] = useState({
    id: 'castetdfh',
    title: '화면공유',
    tags: [
      {
        id: 1,
        content: 'zoom',
      },
      {
        id: 2,
        content: 'screen share',
      },
      {
        id: 3,
        content: 'online lecture',
      },
    ],
    isOnline: true,
    price: 180000,
  });

  const { id, title, tags, isOnline, price } = screencast;

  return (
    <div>
      <h2>ComponentPropTypes</h2>
      <ScreenCast
        id={id}
        title={title}
        tags={tags}
        isOnline={isOnline}
        price={price}
      />
    </div>
  );
}

function ScreenCast(props) {
  return (
    <dl>
      <dt>ID</dt>
      <dd>{props.id}</dd>
      <dt>title</dt>
      <dd>{props.title}</dd>
      <dt>online</dt>
      <dd>{props.online ? '💚' : '❤'}</dd>
      <dt>price</dt>
      <dd>{numberWithComma(props.price)}</dd>
      <dt>tags</dt>
      <dd>
        <ul>
          {props.tags.map((tag) => {
            <li key={tag}>{tag}</li>;
          })}
        </ul>
      </dd>
    </dl>
  );
}

// PropTypes
// 컴포넌트 속성(props) 유효성 검사 도구
// 컴포넌트.propTypes = {}
ScreenCast.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  isOnline: bool.isRequired,
  price: number.isRequired,
  tags: arrayOf(
    shape({
      id: number,
      content: string,
    })
  ).isRequired,
  // 문자 유형으로만 구성된 배열
  // tags: PropTypes.arrayOf(PropTypes.string), // string[] | Array<string>

  // 숫자, 문자, 불리언으로 구성된 배열
  // tags: PropTypes.arrayOf(
  //   PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  // ), // (string|number|boolean)[] | Array<string|number|boolean>
};

export default ComponentPropTypes;
