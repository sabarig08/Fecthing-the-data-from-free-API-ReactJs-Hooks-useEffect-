import ReactDOM from 'react-dom';
import { useEffect, useState } from "react";
function Userdemo() {
    const [users, setUser] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setloading(false);
            })
            .catch(error => {
                console.error("if it is not loading,will be error message");
                setloading(false);
            });
    }, []);

    if (loading) {
        return <h1>loading</h1>
    }
    return (
        <div>
            <h1>
                List out the users in API
            </h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
ReactDOM.render(<Userdemo />, document.getElementById('root'));

