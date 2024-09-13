import { Link } from "react-router-dom"
import { AddUSer } from "../../utils/addUser"
import { useGetUsersQuery, useDelUSerMutation } from "./users.api"
import { useState } from "react"
import { EditUser } from "../../utils/editUser"

export const Users = () => {
  const { data: users, isLoading, error } = useGetUsersQuery(null)
  const [delUser] = useDelUSerMutation() // Mutation to delete user
  const [editing, setEditing] = useState(null)

  const handleDelete = (user: string) => {
    delUser(user).then(() => {
      // console.log(`User ${user} deleted`);
      delUser(user)
    })
  }

  return (
    <>
      <h3>UserList</h3>
      <AddUSer />
      {isLoading && <p>Loading...</p>}

      {users && (
        <>
          {users.map(user => (
            <div style={{backgroundColor:'whitesmoke',maxWidth:'250px',borderRadius:'10%',marginLeft:'20px',}} key={user.id}>
              <p>
                {user.name} {user.salary} AMD
              </p>
              <button
                style={{ color: "red", background: "white" }}
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
              <button
                style={{ color: "blue", background: "white" }}
                onClick={() => setEditing(user)}
              >
                Edit
              </button>
            </div>
          ))}
        </>
      )}

      {editing && <EditUser user={editing} onClose={() => setEditing(null)} />}
    </>
  )
}
