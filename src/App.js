import './App.css';
import './app.scss';
//import SSOAuth from './components/SSOAuth/SSOAuth';
import { GoogleOAuthProvider } from "@react-oauth/google"


import Welcome from './components/Welcome/Welcome';


const App = () => {

  return (
    <GoogleOAuthProvider clientId="583796361446-v199f9q7sbambqhhtpkhfnaq52emfrlt.apps.googleusercontent.com">
    <div className="App" suppressContentEditableWarning={false}>
      <Welcome />
    </div>
    </GoogleOAuthProvider>
  )

}

export default App;
