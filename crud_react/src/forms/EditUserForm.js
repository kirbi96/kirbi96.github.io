import React, {useState} from "react";

const EditUserForm = (props) => {
const [user, setUser] = useState(props.currentUser)

    const handleInputChange = e =>{
    const{ name, value } = e.target

    setUser({...user, [name]: value})
}

    const handleSubmit = e =>{
    e.preventDefault()
    if(!user.name || !user.username) return
    props.updateUser(user.id, user)
}

    return (
        <form onSubmit={handleSubmit}>
            <label>Имя</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
            <label>НИК</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange}/>
            <button>Изменить пользователя</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">Отмена</button>
        </form>
    )
}

export {EditUserForm}