import { fetchUserEmail } from "../api/actions";
import NavBar from "./navbar";

const NavBarWrapper = async () => {
  const email = await fetchUserEmail();

  return <NavBar email={email} />;
};

export default NavBarWrapper;
