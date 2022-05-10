import './app.css';
import React from "react";

const MyComponents = {
    DatePicker: function DatePicker(props) {
        return <div>Imagine a {props.name} datepicker here.</div>;
    }
}
const Button = props => {
    const { kind, ...other } = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <button className={className} {...other} />;
};


function App() {
    const name = 'mason';

    return (
        <>
            <Button kind="primary" other="other" test="test" onClick={() => console.log("clicked!")}>
                Hello World!
            </Button>
        <h1>Hello</h1>
            <MyComponents.DatePicker color="blue" name="mason"/>
            {name && <h1>Hello {name}:)</h1>}
            {
                ['apple','banana'].map(item => <h1>{item}</h1>)
            }
        </>
    );
}

export default App;
