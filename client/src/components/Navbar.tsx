import tw from "twin.macro"
import { NavLink } from "react-router-dom";

const NavContainer = tw.nav`

`;

const LinkContainer = tw.ul`
  flex
  flex-row
  sm:gap-2 lg:gap-4 xl:gap-6 2xl:gap-8
`;

const Link = tw.li`
  hover:text-blue-500
  hover:duration-300
`;



const Navbar = () => {

  return (
    <NavContainer>
      <LinkContainer>
        <Link>
          <NavLink to="/">Insights</NavLink>
        </Link>
        <Link>
          <NavLink to="/charts">Charts</NavLink>
        </Link>
        <Link>
          <NavLink to="/API">API & Docs</NavLink>
        </Link>
      </LinkContainer>
    </NavContainer>
  )
}

export default Navbar