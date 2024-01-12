import { NavLink, NavLinkProps } from 'react-router-dom'
import styles from './AppNavLink.module.scss'
import classNames from 'classnames'

export const AppNavLink: React.FC<NavLinkProps> = ({ children, to, ...props }) => {
  return (
    <NavLink
      {...props}
      to={to}
      className={({ isActive }) =>
        classNames(styles.link, {
          [styles.active]: isActive,
        })
      }
    >
      {children}
    </NavLink>
  )
}

