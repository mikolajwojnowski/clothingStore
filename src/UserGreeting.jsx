

function UserGreeting({isLoggedIn = false, name="Name"}){


    // if(isLoggedIn){
    //     return <h2>Welcome {name}</h2>
    // }
    
    // return <h2>Plase log in to continue</h2>
    
    return(isLoggedIn ? <h2>Welcome {name}</h2> : <h2>Please log in to continue</h2>)
    
}

export default UserGreeting