import React, { useState } from "react";
import { Container, Form, Button } from './Style';
import { Modal } from './../../components/Components';

import { useTheme } from "../../context/Theme";


export default function Cadastro(){

    const { themePage } = useTheme()
    const [nome, setNome] = useState ("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    //Email
    function validarEmail(email){
        var validacao =  /\S+@\S+.\S+/;
        return validacao.test(email)
    }

    //Data
 

    function valicacaoCadastro(e){
        if(nome=="" || email=="" || senha==""){
            setMensagem("Preencha todos os campos abaixo.")
            e.preventDefault();
        }else{
            return (
                <div>
                     <Modal color="#FE6688" 
                        nomeBotao="teste" 
                        img="https://i.pinimg.com/originals/1f/a8/d9/1fa8d907a5cc6e1fa22f431929ebc12a.gif"  
                        botaoPop="testePOP"
                        mensagem="Boas-Vindas ao PanimE"
                        mensagem2="ようこそ"
                    /> 
                </div>
            )
            
        }
    }

    return(
        <div>
<<<<<<< HEAD
            <Container theme={themePage}>
                <Form>    
                    <h1>Cadastro</h1>
                    <div className="campos-form">
                        <p className="mensagem">{mensagem}</p>
                        <input type="text" placeholder="Nome" id="nome"  />
                    </div>
                    <div className="campos-form">
                        <input type="email"  placeholder="Email" id="email" />
                    </div>
                    <div className="campos-form">
                        <input type="password"  placeholder="Senha" id="senha" />
                        <p className="mensagem">Senha maior que 6 dígitos*</p>   
                    </div>
                    <div className="campos-form">
                        <label htmlFor="data"> Data de Nascimento</label>
                        <input type="date" id="date" className="date" max="2021-12-31"/>
                    </div>
                    <Button color="#FE6688" onClick={valicacaoCadastro}> Cadastrar </Button>
                </Form>
=======
            <ContainerForm theme={themePage}>
                <Formulario>    
                    <div className="container">
                        <h1>Cadastro</h1>
                        <div className="campos-form">
                            <p className="mensagem">{mensagem}</p>
                            <input type="text" placeholder="Nome" id="nome" onChange={(e)=>{setNome(e.target.value)}} />
                        </div>
                        <div className="campos-form">
                            <input type="email"  placeholder="Email" id="email" onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>
                        <div className="campos-form">
                            <input type="password"  placeholder="Senha" id="senha" onChange={(e)=>{setSenha(e.target.value)}} />
                            <p className="mensagem">Senha maior que 6 dígitos*</p>   
                        </div>
                        <div className="campos-form">
                            <label htmlFor="data"> Data de Nascimento</label>
                            <input type="date" id="date" className="date" max="2021-12-31" />
                        </div>
                        <Botao type="button" color="#FE6688" onClick={valicacaoCadastro}> Cadastrar </Botao>
                        
                        <Modal
                            color="#FE6688" 
                            nomeBotao="teste" 
                            img="https://i.pinimg.com/originals/1f/a8/d9/1fa8d907a5cc6e1fa22f431929ebc12a.gif"  
                            botaoPop="testePOP"
                            mensagem="Boas-Vindas ao PanimE"
                            mensagem2="ようこそ"
                        /> 
                    
                    </div>
                    
                </Formulario>
>>>>>>> f5753aee27d9972e4d6806a08b94e4497d99fb0d
                <Modal color="#FE6688" 
                        nomeBotao="teste" 
                        img="https://i.pinimg.com/originals/1f/a8/d9/1fa8d907a5cc6e1fa22f431929ebc12a.gif"  
                        botaoPop="testePOP"
                        mensagem="Boas-Vindas ao PanimE"
                        mensagem2="ようこそ"
                    /> 
            </Container>
            
        </div>
    );

};


// function valicacaoCadastro(e){

//     const nome = document.getElementById("nome").value;
//     const email = document.getElementById("email").value;
//     const senha = document.getElementById("senha").value;
        
//     if(nome == "" && email == "" && senha == ""){
//         document.getElementById("nome").style.boxShadow = "1px 1px 5px red"
//         document.getElementById("email").style.boxShadow = "1px 1px 5px red"
//         document.getElementById("senha").style.boxShadow = "1px 1px 5px red"
//         e.preventDefault()
        
//     }else{
//         e.preventDefault();
//         document.getElementById("nome").style.boxShadow = "1px 1px 5px green"
//         document.getElementById("email").style.boxShadow = "1px 1px 5px green"
//         document.getElementById("senha").style.boxShadow = "1px 1px 5px green" 
//     }
// }
