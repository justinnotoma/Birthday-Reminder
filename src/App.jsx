import { useState } from 'react'
import './App.css'
import { WrapperReminder } from './components/WrapperReminder'
import { WrapperAddUser } from './components/WrapperAddUser'

function App() {
  const [reminderState, setReminderState] = useState(true) // When 'reminderState' is set to true, then "WrapperReminder" is shown. When 'reminderState' is set to false, then "WrapperReminder" is hidden
  const [addUserState, setAddUserState] = useState(false) // When 'addUserState' is set to true, then "WrapperAddUser" is shown. When 'addUserState' is set to false, then "WrapperAddUser" is hidden

  const [users, setUser] = useState([{'name': 'Justin', 'age': '17', 'profile': 'J', 'isBirthday': true}])

  const hideReminder = () => {
    setReminderState(false)
    setAddUserState(true)
  }
  const hideAddUser = () => {
    setAddUserState(false)
    setReminderState(true)
  }

  const clearAll = () => {
    setUser([])
  }

  return (
      (reminderState && !addUserState ? (<WrapperReminder hideWrapper={hideReminder} clearAll={clearAll} listOfUsers={users}/>): (<WrapperAddUser hideWrapper={hideAddUser}/>)) 
  )
}

export default App
