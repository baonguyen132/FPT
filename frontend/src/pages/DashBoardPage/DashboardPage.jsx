import styles from "./DashboardPage.module.scss";
import NavigationCustome from "../../../src/layout/navigation/Navigation.jsx";
import { Outlet } from "react-router-dom";
import getToken from "../../utils/data.jsx";
function DashboardPage() {

  const accessToken = getToken();
  if (!accessToken) {
    window.location.href = "/login";
  }

  return (
    <div className={styles.dashboard_page}>
      <div className={styles.navigation}>
        <NavigationCustome />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardPage;
