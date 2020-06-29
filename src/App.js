import React from "react";
import "./App.css";
import StyledButton from "./stories/Button";

function App() {
    return (
        <div className="App">
            {/* To be updated */}
            <form>
                <p> Hello world! </p>
                <input type="text"></input>
                <StyledButton>Submit</StyledButton>
            </form>
        </div>
    );
}

export default App;
