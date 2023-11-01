import { useContext } from "react"
import { ColorContext } from "./App";

export function ComponentTwo(){

const myColor = useContext(ColorContext);

const newColorIdeas = {
    backgroundColor: myColor ? "green" : "purple",
    margin: "100px",
    padding: "100px",
    color: myColor ? "white" : "black"
}

    return(<div style={newColorIdeas}>
        <p>ComponentTwo</p>
    </div>)
}