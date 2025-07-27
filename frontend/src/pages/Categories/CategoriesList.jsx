import useFetchCategories from "../../hooks/useCategories.js";
import getToken, { linkAPI } from "../../utils/data.jsx";
function CategoriesList() {
  
    const accessToken = getToken();
  
  const { categories, loading, error } = useFetchCategories({
    url: linkAPI + "categories",
    accessToken: accessToken,
  });

  console.log(categories);

  
  return <></>;
}

export default CategoriesList;
