import { useEffect, useState } from 'react';

// 컴포넌트 간 로직 공유
// 사용자 정의 훅을 작성
export default function useFetchData(endpoint) {
  // 훅의 규칙 (컴포넌트 또는 다른 훅 내부에서만 사용 가능)
  // custom hook 내부에서 built-in hook 사용 가능
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    // 중단(abort) 컨트롤러(controller)생성
    const controller = new AbortController();

    setIsLoading(true);

    async function fetchProducts() {
      // const response = await fetch(
      //   'http://127.0.0.1:8090/api/collections/products/records'
      // );
      // const responseData = await response.json();
      // setData(responseData);
      // setIsLoading(false);

      try {
        const response = await fetch(endpoint, {
          signal: controller.signal,
        });
        const responseData = await response.json();
        console.log(responseData);
        setData(responseData);
      } catch (error) {
        // 통신 중단에 따른 오류가 아니라면 오류 설정
        if (!(error instanceof DOMException)) {
          setErr(error);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();

    // StrictMode(x2, detect impure function component)
    // mount(1, 요청 1) → unmount (취소 1) → mount(2, 요청 1) -> 응답 1
    return () => {
      controller.abort();
    };
  }, [endpoint]);

  return { data, isLoading, err };
}
