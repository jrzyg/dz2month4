import {About} from "../components/About";
import {Title} from "../components/Title";

export function MainPage () {
    const info = {
        title: "Some Title",
        body:"Some body"
    }
    return (
        <>
            <About props={info}/>
            <Title text='"Hello world"'/>
        </>
    )
}