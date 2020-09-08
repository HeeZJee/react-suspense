import React, { useEffect, useState } from 'react'
import axios from 'axios'


const User = () => {
    const [state, setState] = useState({})



    useEffect(() => {
        (async () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const user = await axios.get(`https://randomuser.me/api/`)
            setState(user)
        })()

    }
        , [setState])

    console.log(state)
    return (
        <div>
            User
        </div>
    )
}

export default User
