import React from "react";

const UserTables = props =>{
    const handleDeleteUser = id => {
        let answer = window.confirm('Вы действительно хотите удалить?')

        if (answer) {
            props.deleteUser(id)
        }
    }

    return(
    <table>
        <thead>
        <tr>
            <th>Имя</th>
            <th>Ник</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {props.users.length > 0 ? (
            props.users.map( user =>(
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <button className="button muted-button" onClick={() => props.editRow(user)}>Редактировать</button>
                        <button className="button muted-button" onClick={() => handleDeleteUser(user.id)}>Удалить</button>
                    </td>
                </tr>
                ))
        ) : (
            <tr>
                <td colSpan={3}>Нет пользователей</td>
            </tr>
        )}
        </tbody>
    </table>
    )
}
export {UserTables}
