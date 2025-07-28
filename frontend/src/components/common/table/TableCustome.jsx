import Title from "../title/title";
import styles from "./TableCustome.module.scss";

function TableCustome({theadList , tbodyList}) {
  return (
    <div className={styles.tableContainer}>
      <Title title="Danh mục" />
      <table className={styles.table}>
         {theadList}
        {tbodyList}
      </table>
    </div>
  );
}

export default TableCustome;
