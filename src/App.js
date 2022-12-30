import "./App.css"
import { AuthProvider } from "./contexts/Auth";
import Routes from "./routes/index";

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
