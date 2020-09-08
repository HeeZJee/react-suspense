import axios from 'axios'

const fetchUser = async () => {
    const { data: { results } } = await axios.get('https://randomuser.me/api/')
    return results[0]
}


export const wrapPromise = promise => {
    let status = 'pending'
    let result = ''

    let suspender = promise.then(
        res => {
            status = 'success';
            result = res;
        },
        err => {
            status = 'error';
            result = err;
        }
    )

    return {
        read() {
            if (status === 'pending') {
                throw suspender
            }
            else if (status === 'error') {
                throw result
            }
            return result

        }
    }
}




export const createResource = () => {
    return {
        person: wrapPromise(fetchUser()),
    }
}