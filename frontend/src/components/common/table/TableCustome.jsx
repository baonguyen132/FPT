import styles from "./TableCustome.module.scss";

function TableCustome({theadList , tbodyList}) {
  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.title}>Danh sách danh mục</h2>
      <table className={styles.table}>
         {theadList}
        {tbodyList}
      </table>
    </div>
  );
}

export default TableCustome;
