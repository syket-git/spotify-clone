export const userAction = (data) => {
    return{
        type: 'SET_USER',
        user: data
    }
}

export const userToken = (data) => {
    return{
        type: 'SET_TOKEN', 
        token: data
    }
}

export const userPlaylist = (data) => {
    return{
        type: 'SET_PLAYLIST', 
        playlist: data
    }
} 

export const discover_weekly = (data) => {
    return{
        type: 'SET_DISCOVER_WEEKLY', 
        user_discover_weekly: data
    }
}