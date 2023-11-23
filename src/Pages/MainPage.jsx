import { Link } from "react-router-dom";

import { useAuth } from "hooks/useAuth";

const MainPage = () => {
	const { isLoggedIn } = useAuth();
	return (
    <>
      <p>MainPage</p>
      {isLoggedIn && <Link to="add-news">Form</Link>}
    </>
  );
};

export default MainPage;
