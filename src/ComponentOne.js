import { useContext } from "react"
import { ColorContext } from "./App";

export function ComponentOne(){

const myColor = useContext(ColorContext);

const ThemeIdeas = {
    backgroundColor: myColor ? "pink" : "blue",
    padding: "100px",
    color: myColor ? "black" : "white",
    margin: "100px"
}

    return(<div style={ThemeIdeas}>
        <p>ComponentOne</p>
    </div>)
}