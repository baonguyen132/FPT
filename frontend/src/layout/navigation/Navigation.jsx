import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";

function NavigationCustome() {
  const location = useLocation();
  const navigate = useNavigate();

  const listMenu = [
    { icon: "bxr bx-home-circle", link: "/" },
    { icon: "bxr bx-equal-square", link: "/page1" },
    { icon: "bxr bx-arrow-from-bottom-stroke", link: "/page2" },
    { icon: "bxr bx-cog", link: "/page3" },
  ];

  // Tính toán vị trí của liquid_glass dựa trên route hiện tại
  const activeIndex = listMenu.findIndex(item => item.link === location.pathname);
  const activeTop = activeIndex !== -1 ? activeIndex * 85 : 0;

  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <h3>BAE</h3>
      </div>
      <div className={styles.menu}>
        <div className={styles.menu_item}>
          <ul>
            <li className={styles.liquid_glass} style={{ top: `${activeTop}px` }}></li>
            {
              listMenu.map((item, index) => (
                <li key={index} className={styles.menu_item_li} onClick={() => navigate(item.link)}>
                  <a>
                    <i className={item.icon}></i>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className={styles.menu_logout}>
          <i className="bxr bx-arrow-left-stroke-square"></i>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(NavigationCustome);
