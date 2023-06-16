import { Component } from "react";
import Form from "./components/Form/Form";
import ExampleUseEffect from "./components/hooks/ExampleUseEffect";
import MyComponent from "./components/MyComponent";
import MyStateFullComponent from "./components/MyStateFullComponent";

export class App extends Component {
    render() {
        return <>
            <ExampleUseEffect />
            {/* <Form /> */}
            {/* <MyStateFullComponent /> */}
            {/* <MyComponent type="password" id={"password"} labelText={"Enter Password"} />
            <MyComponent type="email" id={"email"} labelText={"Enter Email"} />
            <MyComponent type="number" id={"number"} labelText={"Enter Number"} />
            <MyComponent type="submit" labelText={"Submit Button"} />
            <MyComponent type="button" labelText={"Submit Button"} />
            <MyComponent type="range" labelText={"Submit Button"} /> */}
        </>
    }
}