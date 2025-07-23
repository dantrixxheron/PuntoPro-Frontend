
import './App.css'
import Login from './Components/Pages/Login'
import Sales from './Components/Pages/Sales'
import { UserProvider} from './Context/UserContext'

function App() {

  return (
      <UserProvider>
          <Login />
          <Sales />
      </UserProvider>
  )
}

export default App
