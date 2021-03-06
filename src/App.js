import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getUsers, removeUser } from "./store/users/userActions";
 
function App(props){
    console.log(props.users)
    useEffect(()=>{
        props.getUsers();
    }, [])
    return(
        <div>
          <h2>Name List:</h2>
            {props.isLoading && <h3>Loading...</h3>}
            {props.users.map(item => <div key={item.id} onClick={() => props.removeUser(item)}>{item.name}</div>)}
        </div>
    )
}


const mapStateToProps = (state) => ({
   users: state.users.data,
   isLoading: state.users.isLoading,
   isError: state.users.isError
})

const mapDispatchToProps = {
    getUsers,
    removeUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

