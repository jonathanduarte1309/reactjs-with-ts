import React from 'react';

const LoginCard: React.FC = () => {
    return (
        <div>
            <span> This is the Login Component. </span>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginCard;