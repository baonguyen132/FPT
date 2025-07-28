import { useState } from "react";
import CategoriesList from "./CategoriesList";
import CategoriesAdd from "./CategoriesAdd";
import ButtonSwitchScreen from "../../components/common/button/buttonSwitchScreen";

function Categories() {
  const [screen, setScreen] = useState(true);
  return (
    <>
      {screen ? <CategoriesList /> : <CategoriesAdd />}
      <ButtonSwitchScreen onClickHandle={() => {setScreen(!screen)}} />
    </>
  );
}

export default Categories;
