import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appstore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByRole("button");
  
  //Another way
  //const loginButton = screen.getByText("Login");

  //Another way of finding specifically login button even if there are multiple buttons
  const loginButton = screen.getByRole("button", { name: "Login"})

  expect(loginButton).toBeInTheDocument();
});
