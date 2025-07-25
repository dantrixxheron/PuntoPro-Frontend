
import './App.css'
import Login from './Components/Pages/Login'
import Sales from './Components/Pages/Sales'
import { UserProvider} from './Context/UserContext'

function App() {

  return (
    <div className='h-screen bg-background text-text'>
      <UserProvider>
          <Login />
          <Sales />
      </UserProvider>
    </div>
  )
}

export default App
