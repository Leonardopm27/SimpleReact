import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const navigate = useNavigate();

  async function fazerLogin(event) {
    event.preventDefault();
    setMensagem('');

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );

      navigate('/principal');
    } catch (erro) {
      setMensagem('Usuário não cadastrado.');
    }
  }

  return (
    <section
      className="vh-100"
      style={{ backgroundColor: '#508bfc' }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow"
              style={{ borderRadius: '1rem' }}
            >
              <div className="card-body p-5">
                <h3 className="text-center mb-5">
                  Login
                </h3>

                <form onSubmit={fazerLogin}>
                  <div className="mb-4">
                    <label className="form-label">
                      E-mail
                    </label>

                    <input
                      type="email"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">
                      Senha
                    </label>

                    <input
                      type="password"
                      className="form-control form-control-lg"
                      value={senha}
                      onChange={(event) => setSenha(event.target.value)}
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
                    className="btn btn-primary btn-lg w-100"
                  >
                    Acessar
                  </button>
                </form>

                <div className="text-center mt-4">
                  <span>Não possui uma conta? </span>

                  <Link to="/cadastro">
                    Cadastre-se
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

export default Login;