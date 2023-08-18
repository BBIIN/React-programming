import Spinner from '@/components/Spinner';
import useFetchData from '@/hooks/useFetchData';
import ProductItem from './ProductItem';

const PRODUCTS_ENDPOINT = `http://127.0.0.1:8090/api/collections/products/records`;

function ProductList() {
  const { data, isLoading, err } = useFetchData(PRODUCTS_ENDPOINT);

  // 로딩 중인 경우 화면
  if (isLoading) {
    return <Spinner size={160} title="데이터 가져오는 중이에요." />;
  }
  // 오류가 발생한 경우 화면
  if (err) {
    return (
      <div role="alert">
        <h2>{err.type}</h2>
        <p>{err.message}</p>
      </div>
    );
  }
  // javascript statement

  // if (data) {
  //   if ('items' in data) {
  //     if (Array.isArray(data.items)) {
  //       return data.items.map((item) => (
  //         <ProductItem key={item.id} item={item} />
  //       ));
  //     }
  //   }
  // }

  return (
    <ul className="grid grid-cols-3 m-10">
      {data &&
        data.items &&
        data.items?.map((item) => <ProductItem key={item.id} item={item} />)}
    </ul>
  );
}

export default ProductList;
