const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return {...state, currentUser: action.payload}
        case 'OPEN_LOGIN':
            return {...state, openLogin: true}
        case 'CLOSE_LOGIN':
            return {...state, openLogin: false}
        case 'UPDATE_ALERT':
            return {...state, alert: action.payload}
        default:
            throw new Error('No matched action!')
    }
}

export default reducer