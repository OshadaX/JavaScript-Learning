
function UserGreeting(props) {

    const WelcomeMessage = <h1>Welcome {props.username}</h1>
    const LoginMessage = <h1>Please Login</h1>

    if (props.isLogin) {
        return WelcomeMessage
    }
    else {
        return LoginMessage
    }
}

export default UserGreeting
