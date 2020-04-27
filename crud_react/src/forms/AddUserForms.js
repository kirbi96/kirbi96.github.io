import React,{useState} from "react";

const AddUserForm = (props) => {

    const initialFormState = { id: null, name: '', username: '' }

    const [user, setUser] = useState(initialFormState)

    const handleInputChange = e => {
        const { name, value } = e.currentTarget
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if (!user.name || !user.username)  return
        props.addUser(user)
        setUser(initialFormState)

    }

    return(
       <form onSubmit={handleSubmit}>
           <label>Имя</label>
           <input  type="text" name="name" value={user.name} onChange={handleInputChange} />
           <label>Ник</label>
           <input  type="text" name="username" value={user.username} onChange={handleInputChange} />
           <button>Добавить нового пользователя</button>
       </form>
    )
}
export {AddUserForm}

