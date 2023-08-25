import { useAuth } from '@/contexts/Auth';
import { NavLink } from 'react-router-dom';

function Nav() {
  const { isAuth } = useAuth();
  console.log(isAuth);

  return (
    <nav>
      <ul className="flex gap-4 p-5 font-extralight">
        <li>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-rose-600' : ''
            }
          >
            Sign In
          </NavLink>
        </li>
        {isAuth && (
          <li>
            <NavLink
              to="/product/new"
              className={({ isActive }) =>
                isActive ? 'font-semibold text-rose-600' : ''
              }
            >
              NEW
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-rose-600' : ''
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-rose-600' : ''
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
