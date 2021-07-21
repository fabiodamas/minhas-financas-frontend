import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";

class CadastroUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
    senha: "",
    senhaRepeticao: "",
  };

  cadastrar = () => {
    console.log(this.state.nome);
  }

  render() {
    return (
      <div className="container">
        <Card title="Cadastro de usuario">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="Nome: *" htmlFor="inputNome">
                  <input
                    className="form-control"
                    type="text"
                    id="inputNome"
                    name="nome"
                    placeholder="Digite o Nome"
                    onChange={(e) => this.setState({ nome: e.target.value })}
                  />
                </FormGroup>

                <FormGroup label="E-mail: *" htmlFor="inputEmail">
                  <input
                    className="form-control"
                    type="email"
                    id="inputEmail"
                    name="email"
                    placeholder="Digite o Email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </FormGroup>

                <FormGroup label="Senha: *" htmlFor="inputSenha">
                  <input
                    className="form-control"
                    type="password"
                    id="inputSenha"
                    name="inputSenha"
                    placeholder="Digite a senha"
                    onChange={(e) => this.setState({ senha: e.target.value })}
                  />
                </FormGroup>                

                <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                  <input
                    className="form-control"
                    type="password"
                    id="inputRepitaSenha"
                    name="inputRepitaSenha"
                    placeholder="Repita a senha"
                    onChange={(e) => this.setState({ senhaRepeticao: e.target.value })}
                  />
                </FormGroup>                

                <button onClick={this.cadastrar} type="button" className="btn btn-success">
                  Salvar
                </button>
                <button type="button" className="btn btn-danger">
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default CadastroUsuario;
