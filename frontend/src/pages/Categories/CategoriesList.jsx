import { useEffect, useState } from "react";
import ButtonCustome from "../../components/common/button/ButtonCustome.jsx";
import BtnDelete from "../../components/common/table/btnDelete.jsx";
import BtnEdit from "../../components/common/table/btnEdit.jsx";
import BtnTable from "../../components/common/table/btnTable.jsx";
import TableCustome from "../../components/common/table/TableCustome.jsx";
import useFetchCategories from "../../hooks/useCategories.js";
import { handleDeleteCategories } from "../../services/categoryService.js";
import getToken, { linkAPI } from "../../utils/data.jsx";
function CategoriesList() {
  const accessToken = getToken();
  const [data, setData] = useState([]);

  const { categories, loading, error } = useFetchCategories({
    url: linkAPI + "categories",
    accessToken: accessToken,
  });

  useEffect(() => {
    if (categories?.data) {
      setData(categories.data);
    }
  }, [categories]);

  const deleteHandle = (id) => {
    handleDeleteCategories({ id }); // ✅ dùng đúng biến id

    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  return (
    <TableCustome
      theadList={
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Truy cập</th>
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
                <td>
                  <BtnTable
                    onClick={() => {
                      window.location.href = `products/${item.id}`;
                    }}
                  />
                </td>
                <td>
                  <BtnEdit onClick={() => {}} />
                </td>
                <td>
                  <BtnDelete
                    onClick={() => {
                      deleteHandle(item.id);
                    }}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Không có dữ liệu.</td>
            </tr>
          )}
        </tbody>
      }
    />
  );
}

export default CategoriesList;
