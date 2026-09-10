import { NavLink } from "react-router-dom";
import { NavStyled } from "./Nav.styled"

interface NavProps {
  linksNav: Array<{name: string, path: string}>
}

export const Nav = (props: NavProps) => {
  const { linksNav } = props;
  return (
    <NavStyled>
      <ul>
        {linksNav.map((item) => {
          return (
            <li key={item.path}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          )
        })}
      </ul>
    </NavStyled>
  )
}
