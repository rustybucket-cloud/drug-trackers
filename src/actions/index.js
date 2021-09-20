export const add = (medicine) => {
    return {
        type: 'ADD',
        payload: medicine
    }
}

export const remove = (medicine) => {
    return {
        type: 'REMOVE',
        payload: medicine
    }
}