import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  BookMark,
  Explore,
  getAllPost,
  Home,
  Login,
  PostModal,
  Profile,
  Signup,
} from "./features";
import { Toaster } from "react-hot-toast";
import { Container } from "./components";
import { useEffect } from "react";
import { useAuth } from "./features/auth/authSlice";
import { getUserPostThunk } from "./features/Home/postSlice";
import { useDispatch } from "react-redux";
import { getAllUserThunk } from "./features/profile/userProfileSlice";

function App() {
  const dispatch = useDispatch();

  const {
    token,
    user: { username },
  } = useAuth();

  useEffect(() => {
    if (token) {
      dispatch(getAllUserThunk());
      dispatch(getAllPost());
      dispatch(getUserPostThunk(username));
    }
  }, [token]);

  return (
    <div className="bg-gray-100">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Home />
            </Container>
          }
        />
        <Route
          path="/explore"
          element={
            <Container>
              <Explore />
            </Container>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <Container>
              <BookMark />
            </Container>
          }
        />
        <Route
          path="/profile"
          element={
            <Container>
              <Profile />
            </Container>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <PostModal />
    </div>
  );
}

export default App;
