import { useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import { AppNavLink } from "../UI/AppNavLink";
import { Flex } from "../UI/Flex";

export const Menu = () => {
  const [burger_class, setBurgerClass] = useState(
    `${styles.bar} ${styles.unclicked}`
  );
  const [menu_class, setMenuClass] = useState(
    `${styles.menu} ${styles.hidden}`
  );
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass(`${styles.bar} ${styles.clicked}`);
      setMenuClass(`${styles.menu} ${styles.visible}`);
    } else {
      setBurgerClass(`${styles.bar} ${styles.unclicked}`);
      setMenuClass(`${styles.menu} ${styles.hidden}`);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuClicked ? "hidden" : "auto";
  }, [isMenuClicked]);

  return (
    <div>
      <div className={styles["burger-menu"]} onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>

      <div className={menu_class}>
        <Flex options={{ direction: "column", gap: 2 }}>
          <AppNavLink onClick={updateMenu} to="/">
            Home
          </AppNavLink>
          <AppNavLink onClick={updateMenu} to="/card">
            XEPPT Card
          </AppNavLink>
          <AppNavLink onClick={updateMenu} to="/statements">
            Statements
          </AppNavLink>
        </Flex>
      </div>
    </div>
  );
};
