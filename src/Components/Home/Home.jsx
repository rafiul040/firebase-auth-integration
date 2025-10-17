import React, { use } from 'react';
import { AuthContext } from '../../Context/Auth Context/AuthContext';

const Home = () => {

    const authInfo = use(AuthContext)
    console.log("Home", authInfo)

    return (
        <div>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;