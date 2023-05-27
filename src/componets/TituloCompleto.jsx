import { useState } from "react";

const tituloCompleto = () => {
    let [msj, setMsj] = useState("");

    return (
        <>
        <h3>{msj}</h3>
        <br />
        <button onClick={() => setMsj(msj = "(from changed state!)")}>On click Me!</button>
        </>
    );
};

export default tituloCompleto;