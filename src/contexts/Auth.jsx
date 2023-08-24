// 컨텍스트
// 1. 컨텍스트 생성 (React.createContext)
// 2. 컨텍스트 프로바이더를 앱을 감쌈
// 3. 컨텍스트 프로바이더를 사용해 값 공급

// 컴포넌트
// 1. useContext 훅을 사용해서 공급된 컨텍스트 값을 주입(injection)
// 2. JSX 또는 이벤트 핸들러 내부에서 값을 사용

/* ---------------------------------------------------------------- */

import pb from '@/api/pocketbase';
import { useState, createContext, useEffect, useContext } from 'react';

const AuthContext = createContext();
const initialAuthState = {
  isAuth: false,
  user: null,
  token: '',
};

// Context.Provider 래퍼 컴포넌트 작성
function AuthProvider({ displayName = 'AuthProvider', children }) {
  // 인증 상태
  const [authState, setAuthState] = useState(initialAuthState);

  useEffect(() => {
    const unsub = pb.authStore.onChange((token, model) => {
      console.log({ token, model });
      setAuthState((state) => ({
        ...state,
        isAuth: !!model,
        user: model,
        token,
      }));
    });

    return () => {
      unsub?.();
    };
  }, []);

  // 메서드: 할 수 있는 기능
  // 회원가입, 로그인, 로그아웃, 가입탈퇴
  const signUp = async (registerUser) => {
    pb.collection('users').create(registerUser);
  };
  const signIn = async (usernameOrEmail, password) => {
    return await pb
      .collection('users')
      .authWithPassword(usernameOrEmail, password);
  };
  const signOut = async () => {
    return await pb.collection('users').clear();
  };
  const cancelMembership = async (id) => {
    return await pb.collection('users').delete(id);
  };

  const authValue = {
    // authInfo: authState,
    ...authState,
    signUp,
    signIn,
    signOut,
    cancelMembership,
  };

  return (
    <AuthContext.Provider value={authValue} displayName={displayName}>
      {children}
    </AuthContext.Provider>
  );
}

const PropTypes = {
  string(props, propName, componentName) {
    const propValue = props[propName];
    const propType = typeof propValue;

    if (propType !== 'string' && propType !== 'undefined') {
      throw new Error(`
        ${componentName} 컴포넌트 ${propName} 속성(prop) 타입의 기댓값은 string 또는 undefined 입니다.
        하지만 전달된 ${propName} 속성 타입은 ${propType.toString()} 입니다.
      `);
    }
  },
};

AuthProvider.propTypes = {
  // manual prop validation
  displayName: PropTypes.string,
};

export default AuthProvider;

// 커스텀 훅
// 인증 정보를 앱 어디서나 손쉽게 주입 받아 쓸 수 있도록 하는 함수
export const useAuth = () => {
  const authValue = useContext(AuthContext);
  if (!authValue) {
    throw new Error('useAuth 혹은 AuthProvider 내부에서만 사용할 수 있습니다');
  }
  return authValue;
};
