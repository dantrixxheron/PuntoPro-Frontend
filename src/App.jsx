
import './App.css'
import Login from './Components/Login'
import Sales from './Components/Sales'
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
