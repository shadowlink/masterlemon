import * as React from "react";
const image = require("../src/content/logo_1.png");

export class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1 className={"helloWorld"}>Hola mundo</h1>
                <h2>{`Entorno: ${process.env.NODE_ENV}`}</h2>
                <h2>{`Nombre: ${process.env.APP_NAME}`}</h2>
                <img src={image} />
            </div>
        )
    }
}