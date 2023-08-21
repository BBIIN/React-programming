import { useParams } from 'react-router-dom';

function ProductEdit() {
  const routeParams = useParams();

  console.log(routeParams);

  return <div>ProductEdit</div>;
}

export default ProductEdit;
