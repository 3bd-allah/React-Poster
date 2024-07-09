import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Posts, {loader as postsLoader} from "./routes/Posts";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, {action as newPostAction} from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import PostDetails,{loader as postDetailsLoader} from "./routes/PostDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: (
      <div style={{ textAlign: "center", margin: "auto" }}>
        {" "}
        <h1>Error happened! </h1> <p>this page is not found </p>{" "}
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader, 
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction }, 
          {path:":postId", element: <PostDetails />, loader: postDetailsLoader }
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
