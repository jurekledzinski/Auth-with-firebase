import "./App.scss";

import StoreProvider from "./store/Store";

import Navigation from "./components/navigation/Navigation";
import LoginForm from "./components/loginForm/LoginForm";
import RegisterForm from "./components/registerForm/RegisterForm";
import DisplayData from "./components/displayData/DisplayData";
import CreateBookForm from "./components/createBookForm/CreateBookForm";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
    <div className="app">
      <StoreProvider>
        <Navigation />
        <LoginForm />
        <RegisterForm />
        <DisplayData />
        <CreateBookForm />
        <Profile />
      </StoreProvider>
    </div>
  );
};

export default App;
