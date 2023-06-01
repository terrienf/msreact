import '../src/styles/Banner.css'
import logo from '../src/assets/logo.png'
import Banner from "./Component/Banner"
import Client from './Component/Client'
import Login from "./Pages/Auth/Login";

function App() {

  return (
      <div>
          <Banner>
              <img src={logo} alt='La maison jungle' className='MS-logo' />
              <h1 className='MS-title'>MédiaSofts</h1>
          </Banner>
          <div>
          <Client />
          </div>
          <div>
              <Login/>
          </div>
      </div>

  );
}

export default App;
