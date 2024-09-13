import { useState } from "react"
import { InputUser } from "../features/users/types"
import { useAddUserMutation } from "../features/users/users.api"

export const AddUSer = () => {
  const [user, setUser] = useState<InputUser>({
    name: "",
    salary: 150000,
  })
  const [addUser, result] = useAddUserMutation()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addUser(user)
    .then(()=>{
        setUser({name:"", salary:90000})
    })
  }
  return (
    <>
      <h2>Add user</h2>
      <form style={{marginLeft:'10px'}} onSubmit={handleSubmit}>
        <input style={{borderRadius:'10%',backgroundColor:'whitesmoke'}}
          type="text"
          value={user.name}
          onChange={e => setUser({ ...user, name: e.target.value })}
        />
        <input style={{borderRadius:'10%',backgroundColor:'whitesmoke'}}
          type="text"
          value={user.salary}
          onChange={e => setUser({ ...user, salary: +e.target.value })}
        />
        <button style={{backgroundColor:'pink',borderRadius:'10%'}}>save</button>
      </form>
    </>
  )
}
