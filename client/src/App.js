import "./App.scss";

import StoreProvider from "./store/Store";

import Navigation from "./components/navigation/Navigation";
import LoginForm from "./components/loginForm/LoginForm";
import RegisterForm from "./components/registerForm/RegisterForm";
import DisplayData from "./components/displayData/DisplayData";
import CreateBookForm from "./components/createBookForm/CreateBookForm";

const App = () => {
  return (
    <div className="app">
      <StoreProvider>
        <Navigation />
        <LoginForm />
        <RegisterForm />
        <DisplayData />
        <CreateBookForm />
      </StoreProvider>
    </div>
  );
};

export default App;
