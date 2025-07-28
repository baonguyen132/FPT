import useFetchProducts from "../../hooks/useProducts";
import getToken, { linkAPI } from "../../utils/data";
import TableCustome from "../../components/common/table/TableCustome";
import BtnEdit from "../../components/common/table/btnEdit";
import BtnDelete from "../../components/common/table/btnDelete";
import { handleDeleteProducts } from "../../services/productService";
import { useEffect, useState } from "react";

function ProductList({ idCategories }) {
  const accessToken = getToken();
  const [data, setData] = useState([]);

  const { products, loading, error } = useFetchProducts({
    url: linkAPI + `products?categoryId=${idCategories}`,
    accessToken: accessToken,
  });

  useEffect(() => {
    if (products?.data) {
      setData(products.data);
    }
  }, [products]);

  const deleteHandle = (id) => {
    handleDeleteProducts({ id });

    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  console.log(products);
  

  return (
    <TableCustome
      theadList={
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>quantity</th>
            <th>price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
      }
      tbodyList={
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                  <BtnEdit onClick={() => {}} />
                </td>
                <td>
                  <BtnDelete onClick={() => {deleteHandle(item.id)}} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Không có dữ liệu.</td>
            </tr>
          )}
        </tbody>
      }
    />
  );
}

export default ProductList;
