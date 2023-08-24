// 컨텍스트
// 1. 컨텍스트 생성 (React.createContext)
// 2. 컨텍스트 프로바이더를 앱을 감쌈
// 3. 컨텍스트 프로바이더를 사용해 값 공급

// 컴포넌트
// 1. useContext 훅을 사용해서 공급된 컨텍스트 값을 주입(injection)
// 2. JSX 또는 이벤트 핸들러 내부에서 값을 사용

/* ---------------------------------------------------------------- */

import pb from '@/api/pocketbase';
import { useEffect } from 'react';
import { useState, createContext } from 'react';

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
  const secession = async (id) => {
    return await pb.collection('users').delete(id);
  };

  const authValue = {
    // authInfo: authState,
    ...authState,
    signUp,
    signIn,
    signOut,
    secession,
  };

  return (
    <AuthContext.Provider value={authValue} displayName={displayName}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
