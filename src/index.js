import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import IMG_DOCTOR from "./img/dr_joao_da_silva.jpg";

const App = () => {
    const styleContainer = () => {
        return {
            display: 'flex',
            flexDirection: "column",
            backgroundColor: '#eee',
            width: 900,
            margin: 'auto',
            border: "1px solid #111",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            paddingRight: 10,
            paddingLeft: 10
        }
    }

    const medicos = [
        {
            nome: "Dr. João da Silva",
            imagem: IMG_DOCTOR,
        },

        {
            nome: "Dra. Maria da Silva",
            imagem: process.env.PUBLIC_URL + "/dra_maria_da_silva.jpg",
        },

        {
            nome: "Dra. Jaqueline Mendes",
            imagem: "https://images.unsplash.com/photo-1643297654416-05795d62e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzg0fHxkb2N0b3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
    ]

    return (
        <div style={styleContainer()}>

            <h4>PROFISSIONAIS DA SAÚDE</h4>
            <div
                style={{
                    width: "100%", display: "flex", border: "1px solid #fff", borderRadius: 10, marginBottom: 10, alignItems: "center", justifyContent: "space-around", padding: 10,
                    }}>

                {medicos.map(medico => {
                    return (
                        <div className="card">
                            <div className="card-img">
                                <img src={medico.imagem} alt="" />
                            </div>
                            <p className="card-title">{medico.nome}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

ReactDOM.createRoot
(document.getElementById("root"))
.render
(<App />);
