import React, {useState} from 'react'
import {AddUserForm} from "./forms/AddUserForms";
import {EditUserForm} from "./forms/EditUserForm";
import {UserTables} from "./tables/UserTables";

const App = () => {

    const usersData = [
        { id: 1, name: 'Ренат', username: 'Renat' },
        { id: 2, name: 'Тимур', username: 'Jolla' },
        { id: 3, name: 'Руслан' , username: 'Rusline' },
        { id: 4, name: 'Марат', username: 'Marat' },
        { id: 5, name: 'Кирилл', username: 'Kirbi96' },
    ]

    const [users, setUsers] = useState(usersData)

    const [editing, setEditing] = useState(false)

    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const addUser = user => {
        user.id = users.length + 1
        setUsers([ ...users, user ])
    }

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const editRow = user => {
        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }



    return (
        <div className="container">
            <h1>CRUD приложение на Реакте</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <div>
                            <h2>Редактировать пользователя</h2>
                            <EditUserForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Добавить пользователя</h2>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )}
                </div>
                <div className="flex-large">
                    <h2>Просмотор пользователей</h2>
                    <UserTables users={users} editRow={editRow} deleteUser={deleteUser} />
                </div>
            </div>
        </div>
    )
}

export default App;