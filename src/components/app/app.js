import React from 'react';
import * as axios from "axios";

function App() {
    let data = axios(`https://yalantis-react-school-api.yalantis.com/api/task0/users`).then(res => {
        console.log(res.data);
    })
    return (
    <div className="App">
        app
    </div>
  );
}

export default App;
