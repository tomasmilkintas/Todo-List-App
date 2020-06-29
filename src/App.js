import React from "react";
import "./App.css";
import StyledButton from "./stories/Button";

import { Placeholder } from "./stories/Input/component.stories";

function App() {
    return (
        <div className="App">
            {/* To be updated */}
            <form>
                <h1>Magical List</h1>
                <Placeholder />
                <StyledButton>Submit</StyledButton>
            </form>
        </div>
    );
}

export default App;
