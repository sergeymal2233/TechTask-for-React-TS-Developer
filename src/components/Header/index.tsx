import logo from "@/assets/logo.svg";
import styles from "./Header.module.scss";
import { Container } from "@/components/UI/Container";
import { Flex } from "@/components/UI/Flex";
import { AppNavLink } from "@/components/UI/AppNavLink";
import { Notification } from "../UI/Icons/Icons";
import { HeaderUserSection } from "../HeaderUserSection";
import { Typography } from "../UI/Typography";
import { useTabletMediaQuery } from "@/utils/queries";
import { Menu } from "../Menu";

export const Header = () => {
  const isTablet = useTabletMediaQuery();

  return (
    <header className={styles.header}>
      <Container>
        <Flex options={{ align: "center", justify: "space-between" }}>
          {isTablet && <Menu />}
          <div className={styles.nav}>
            <img className={styles["nav-image"]} src={logo} alt="logo" />

            {!isTablet && (
              <nav>
                <div className={styles.links}>
                  <AppNavLink to="/">Home</AppNavLink>
                  <AppNavLink to="/card">XEPPT Card</AppNavLink>
                  <AppNavLink to="/statements">Statements</AppNavLink>
                </div>
              </nav>
            )}
          </div>

          <div className={styles["user-section"]}>
            <Typography textColor="primary-p-50" variant="body-2">
              FR
            </Typography>
            <Notification />
            {!isTablet && <HeaderUserSection />}
          </div>
        </Flex>
      </Container>
    </header>
  );
};
