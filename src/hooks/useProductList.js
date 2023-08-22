//# PocketBase SDK 활용편

import { useState } from 'react';
import pb from './pocketbase';

//# SDK 처리 함수를 포함한 사용자 정의 훅 작성
export function useProductList() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('pending');

  async function getProductList(query = {}) {
    setStatus('loading');
    try {
      const response = await pb.collection('products').getFullList(query);
      const data = await response.json();
      setData(data);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }
  return {
    data,
    status,
    getProductList,
  };
}
