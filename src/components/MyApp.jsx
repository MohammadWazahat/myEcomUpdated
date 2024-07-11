import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import UpdateData from "./UpdateData";
// import TestRedux from "./TestRedux/TestRedux";
import AddProduct from "./addProduct/AddProduct";
import GetAllProduct from "./getAllProducts/GetAllProduct";
import ReadSingleProduct from "./getAllProducts/ReadSingleProduct";
import UploadProduct from "./updateProduct/UploadProduct";

const MyApp = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <GetAllProduct />,
    },
    {
      path: "/read/:id",
      element: <ReadSingleProduct />,
    },
    {
      path: "/addProduct",
      element: <AddProduct />,
    },
    {
      path: "/updateProduct/:id",
      element: <UploadProduct/>,
    },
   
    // {
    //   path: "/testRedux",
    //   element: <TestRedux />,
    // },
  ]);

  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
};

export default MyApp;
