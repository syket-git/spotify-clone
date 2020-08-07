const initialState = {
    user:null,
    playlist: [],
    playing: false,
    item: null, 
    discover_weekly: null
    //token: 'BQB9i-dOxQcu4FjfjmdGvPjzw69s24EoExHizPPzgmbOymvfNjB9tqdTs3AEpTfPb679vZ5u05syeBw5Slo_EgwuiS7ehloO2nLcDPoLZCDj7H0WAh7X9rLVnMjxf9ZFrY7p3iACE_l0zCuqL7HKxZHpKD0iIeYOzHZLCoja52S2rwJt'
}
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_USER' :
            return {
                ...state, 
                user: action.user
            }
        case 'SET_TOKEN': 
            return{
                ...state, 
                token: action.token
            }
        case 'SET_PLAYLIST':
            return{
                ...state, 
                playlist: action.playlist
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state, 
                discover_weekly: action.user_discover_weekly
            }

        default:
            return state;
    }
}
export default userReducer;