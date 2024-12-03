import LoginActions from "../components/LoginActions/LoginActions";

const Login: React.FC<{}> = ({}) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>SpaceTwo</p>
      </header>
      <main>
        <LoginActions />
      </main>
    </div>
  );
};

export default Login;
