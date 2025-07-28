import BtnDelete from "../../components/common/table/btnDelete.jsx";
import BtnEdit from "../../components/common/table/btnEdit.jsx";
import TableCustome from "../../components/common/table/TableCustome.jsx";
import useFetchCategories from "../../hooks/useCategories.js";
import getToken, { linkAPI } from "../../utils/data.jsx";
function CategoriesList() {
  const accessToken = getToken();

  const { categories, loading, error } = useFetchCategories({
    url: linkAPI + "categories",
    accessToken: accessToken,
  });
  const data = categories.data;

  return (
    <TableCustome
      theadList={
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
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
                <td><BtnEdit onClick={() => {}} /></td>
                <td><BtnDelete onClick={() => {}}/></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" >
                Không có dữ liệu.
              </td>
            </tr>
          )}
        </tbody>
      }
    />
  );
}

export default CategoriesList;
