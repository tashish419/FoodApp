import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";
import Cart from "./components/Cart";
import SearchRestaurants from "./components/Search";
import Offers from "./components/Offers";
import Help from "./components/Help";
// import Grocery from "./components/Grocery";

//chunking, code splitting , Dynamic Bundling, lazy loading, on demand loading, dynamic import(different names)

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication logic
  useEffect(() => {
    //make an api call and send username and password
    const data = {
      name: "Ashish Tomar",
    };
    setUserName(data.name);
  }, []);

  //i want this name into my footer in place of context name, so for this i have <usercontext.provider>

  return (
    //  {/*default - @ashishtom*/}
    // <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
    //   {/**this is how i can update my whole app by wrapping the whole app inside <context.provider> */}
    //   {/* Ashish */}
    //   <div className="app">
    //     <Header />
    //     <Outlet />
    //     {/* <UserContext.Provider value={{ loggedInUser: "Ashish" }}> */}
    //     {/**this is how i can update inside my footer by wrapping footer inside context.provider */}
    //     {/*footer user name: whatever i type in input box*/}
    //     <Footer />
    //     {/* </UserContext.Provider> */}
    //   </div>
    // </UserContext.Provider>

    //Actual code inside return starts from here....

    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/search",
        element: <SearchRestaurants />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:restId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
