import CardSm from "./components/common/cardSm";
import Card from "./components/common/card";
import React from "react";
import Trending from "./components/trending";
import BlogList from "./components/blogList";
import ProfileRight from "./components/common/profileRight";

import AuthorProfile from "./components/authorProfile";
import TagProfile from "./components/tagProfile";
import BlogFull from "./components/blogFull";
import Comment from "./components/comments";
import HomePage from "./components/homePage";
import TagStack from "./components/common/tagStack";
import RegisterForm from "./components/registerForm";
import SearchBox from "./components/searchBox";
import { getCurrentUser } from "./services/authService";
import {
  BrowserRouter as Router,
  Route,
  route,
  Routes,
  routes,
} from "react-router-dom";
import LoginForm from "./components/loginForm";

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const author = getCurrentUser();
    console.log(author);
    setUser(author);
  }, []);
  return (
    <React.Fragment>
      {/* <SearchBox />
      
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/tags/:tag" element={<TagProfile />} />
        <Route path="/blogs/:id" element={<BlogFull />} />
        <Route path="/author/:id" element={<AuthorProfile />} />
      </Routes> */}
      {user && <p>{user.username}</p>}
      <LoginForm />
    </React.Fragment>
  );
}

export default App;
