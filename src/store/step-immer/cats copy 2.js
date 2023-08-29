import { produce } from 'immer';
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
        // Javascript 불변, 객체 업데이트 방식
        state.cats.push({
          id: crypto.randomUUID(),
          ...catInfo,
        });
      });
    },

    // 제거
    removeCat(removeCatName) {
      return set(
        produce((state) => {
          const removeCatIndex = state.cats.findIndex(
            (cat) => cat.name === removeCatName
          );
          if (removeCatIndex > 0) {
            state.cats.splice(removeCatIndex, 1);
          }
        })
      );
    },
  };
};

// 2. use 훅 생성 (내보내기)
export const useCatsStore = create(catsStore);
