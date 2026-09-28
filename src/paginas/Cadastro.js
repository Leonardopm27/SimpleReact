import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { auth, db } from '../firebase';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [mensagem, setMensagem] = useState('');

  const navigate = useNavigate();

  async function cadastrarUsuario(event) {
    event.preventDefault();

    try {
      const resultado = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );

      const usuario = resultado.user;

      await setDoc(doc(db, 'usuarios', usuario.uid), {
        uid: usuario.uid,
        nome: nome,
        sobrenome: sobrenome,
        dataNascimento: dataNascimento
      });

      await signOut(auth);

      navigate('/login');
    } catch (erro) {
      setMensagem('Não foi possível realizar o cadastro.');
    }
  }

  return (
    <section
      className="min-vh-100"
      style={{ backgroundColor: '#508bfc' }}
    >
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow"
              style={{ borderRadius: '1rem' }}
            >
              <div className="card-body p-5">
                <h3 className="text-center mb-4">
                  Cadastro
                </h3>

                <form onSubmit={cadastrarUsuario}>
                  <div className="mb-3">
                    <label className="form-label">
                      E-mail
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Senha
                    </label>

                    <input
                      type="password"
                      className="form-control"
                      value={senha}
                      onChange={(event) => setSenha(event.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Nome
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={nome}
                      onChange={(event) => setNome(event.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Sobrenome
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={sobrenome}
                      onChange={(event) => setSobrenome(event.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">
                      Data de nascimento
                    </label>

                    <input
                      type="date"
                      className="form-control"
                      value={dataNascimento}
                      onChange={(event) =>
                        setDataNascimento(event.target.value)
                      }
                      required
                    />
                  </div>

                  {mensagem && (
                    <div className="alert alert-danger">
                      {mensagem}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    Cadastrar
                  </button>
                </form>

                <div className="text-center mt-4">
                  <span>Já possui uma conta? </span>

                  <Link to="/login">
                    Entrar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cadastro;