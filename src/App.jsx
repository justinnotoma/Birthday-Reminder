import { useState } from 'react'
import './App.css'
import { WrapperReminder } from './components/WrapperReminder'
import { WrapperAddUser } from './components/WrapperAddUser'

function App() {
  const [reminderState, setReminderState] = useState(true) // When 'reminderState' is set to true, then "WrapperReminder" is shown. When 'reminderState' is set to false, then "WrapperReminder" is hidden
  const [addUserState, setAddUserState] = useState(false) // When 'addUserState' is set to true, then "WrapperAddUser" is shown. When 'addUserState' is set to false, then "WrapperAddUser" is hidden

  const [users, setUser] = useState([{'name': 'Justin', 'age': '17', 'profile': 'J', 'birthday': '2024-02-24', 'isBirthday': false}])

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

    // Check to see if it is the user birthday
    const currentMonth = ()  => {
      let currentMonth = currentDate.getMonth()
      currentMonth = currentMonth + 1

      if(currentMonth < 10) currentMonth = `0${currentMonth}`
      return currentMonth
    }
    const isBirthday = `${dateParts[1]}-${dateParts[2]}` === `${currentMonth()}-${currentDate.getDate()}`
    console.log(isBirthday)
    
    // Add user to "users" array
    setUser([...users, {'name': name, 'profile': profile, 'age': age, 'isBirthday': isBirthday}])
    console.log(users)

  }

  return (
      (reminderState && !addUserState ? (<WrapperReminder hideWrapper={hideReminder} clearAll={clearAll} listOfUsers={users}/>): (<WrapperAddUser hideWrapper={hideAddUser} addUser={addUser}/>)) 
  )
}

export default App
