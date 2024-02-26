import { useState } from 'react'
import './App.css'
import { WrapperReminder } from './components/WrapperReminder'
import { WrapperAddUser } from './components/WrapperAddUser'

function App() {
  const [reminderState, setReminderState] = useState(true) // When 'reminderState' is set to true, then "WrapperReminder" is shown. When 'reminderState' is set to false, then "WrapperReminder" is hidden
  const [addUserState, setAddUserState] = useState(false) // When 'addUserState' is set to true, then "WrapperAddUser" is shown. When 'addUserState' is set to false, then "WrapperAddUser" is hidden

  const [users, setUser] = useState([])

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

  const addUser = (name, date) => {
    // Getting the user profile
    const nameSpit = name.split('')
    const profile = nameSpit[0].toUpperCase()

    // Getting the user age
    const currentDate = new Date
    const currentYear = currentDate.getFullYear()

    const dateParts = date.split('-')
    let birthYear = dateParts[0]

    let age = currentYear - birthYear
    
    // Add user to "users" array
    setUser([...users, {'name': name, 'profile': profile, 'age': age, 'birthday': date}])
    console.log(users)

  }

  return (
      (reminderState && !addUserState ? (<WrapperReminder hideWrapper={hideReminder} clearAll={clearAll} listOfUsers={users}/>): (<WrapperAddUser hideWrapper={hideAddUser} addUser={addUser}/>)) 
  )
}

export default App
