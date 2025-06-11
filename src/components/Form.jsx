import { useState } from "react";

function Formulario(){
    const [ndu, setNdu] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [email, setEmail] = useState("")
    const [edad, setEdad] = useState("")
    const [modo, setModo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!ndu || !contrasena || !email || !edad) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        

    }
    return (
        <>
        <form onSubmit={handleSubmit} className={modo === "oscuro" ? "dark-mode" : "light-mode"}>
            <h2>Formulario de Registro</h2>
            <label>
                NDU:
                <input type="text" value={ndu} onChange={(e) => setNdu(e.target.value)} />
            </label>
            <label>
                Contraseña:
                <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Edad:
                <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} />
            </label>
            <div className="btns">
            <button type="submit">Enviar</button>
            <button type="button" onClick={() => setModo(modo === "oscuro" ? "claro" : "oscuro")}>
                Modo oscuro
            </button>
            </div>
        </form>
        </>
    )
}
export default Formulario;