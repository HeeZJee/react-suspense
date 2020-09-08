import React from 'react'

const User2 = ({ resource }) => {


    // console.log(resource.person.read())
    const person = resource.person.read()
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{person.name.first + ' ' + person.name.last} </h1>
        </div>
    )
}

export default User2
