const objectConverter = (actualState, newState) => { return JSON.parse( JSON.stringify( Object.assign(actualState, newState) ) ) }
const initialState = { accessState : false }

const access = (state = initialState, action) => {
    switch (action.type) {
        case 'GRANTUSERACCESS':
            state = objectConverter(state, {accessState: true}) 
            return state

        default:
            return state

    }
}
export default access