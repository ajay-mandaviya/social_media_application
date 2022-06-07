import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  BookMark,
  Explore,
  getAllPost,
  Home,
  Login,
  PostModal,
  PrivateRoute,
  Profile,
  Signup,
  UsersProfile,
} from "./features";
import { Toaster } from "react-hot-toast";
import { Container } from "./components";
import { useEffect } from "react";
import { useAuth } from "./features/auth/authSlice";
import { getBookMarks, getUserPostThunk } from "./features/Home/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserThunk } from "./features/profile/userProfileSlice";
import { SinglePostPage } from "./features/SinglePostPage/SinglePostPage";

function App() {
  const dispatch = useDispatch();
  const { isModalVisible } = useSelector((state) => state.postModal);
  const { token, user } = useAuth();

  useEffect(() => {
    if (token) {
      dispatch(getAllUserThunk());
      dispatch(getAllPost());
      dispatch(getUserPostThunk(user?.username));
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      dispatch(getBookMarks(token));
    }
  }, [token, user]);

  return (
    <div className="bg-gray-100 min-h-screen	">
      {isModalVisible && <PostModal />}
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
            <PrivateRoute>
              <Container>
                <Home />
              </Container>
            </PrivateRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <Container>
                <Explore />
              </Container>
            </PrivateRoute>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <PrivateRoute>
              <Container>
                <BookMark />
              </Container>
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Container>
                <Profile />
              </Container>
            </PrivateRoute>
          }
        />
        <Route
          path="/user/:username"
          element={
            <PrivateRoute>
              <Container>
                <UsersProfile />
              </Container>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/post/:id"
          element={
            <PrivateRoute>
              <Container>
                <SinglePostPage />
              </Container>
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
