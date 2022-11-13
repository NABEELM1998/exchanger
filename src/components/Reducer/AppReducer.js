export const initialState  = {
    loader:true,
}
export const reducer = (state,action)=> {
    switch (action.type){
        case "LOAD_RATES":
            return {...state,loader:false}
        default:
            return state
    }

}