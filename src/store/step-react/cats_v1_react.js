import { create } from 'zustand';

// 1. 스토어 (상태관리 저장소) 작성
const catsStore = (set) => {
  // 상태 (state)
  // 명사(속성), 동사 (함수: 액션)
  return {
    cats: [
      { id: crypto.randomUUID(), name: '찐빵', age: 2, gender: 'male' },
      { id: crypto.randomUUID(), name: '뭉치', age: 2, gender: 'male' },
    ],
    // 추가 (쓰기 : set)
    addCat(catInfo) {
      // React의 방식 (객체 업데이트, 전개 구문)
      return set((state) => {
        // 다음 상태 반환
        /* ... 이전의 고양이들 */
        console.log(state.cats);
        /* 새로운 고양이 */
        const newCat = {
          id: crypto.randomUUID(),
          ...catInfo,
        };
        // 다음 상태 반환
        return {
          cats: [...state.cats, newCat],
        };
      });
    },
    // 제거
  };
};

// 2. use 훅 생성 (내보내기)
export const useCatsStore = create(catsStore);
