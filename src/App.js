import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "2d536cf0544ca3f7caa8a9142d9abebd";

class App extends React.Component {
    render() {
        return(
            <div>
                <Titles />
                <Form />
                <Weather />
            </div>
        );
    }
};

export default App;
