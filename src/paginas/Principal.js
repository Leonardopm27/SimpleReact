import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import { auth, db } from '../firebase';

function Principal() {
  const [dados, setDados] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const verificarUsuario = onAuthStateChanged(auth, async (usuario) => {
      if (usuario) {
        const documento = doc(db, 'usuarios', usuario.uid);
        const resultado = await getDoc(documento);

        if (resultado.exists()) {
          setDados(resultado.data());
        }
      } else {
        navigate('/login');
      }
    });

    return () => verificarUsuario();
  }, [navigate]);

  return (
    <section
      className="vh-100"
      style={{ backgroundColor: '#508bfc' }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6">
            <div
              className="card shadow"
              style={{ borderRadius: '1rem' }}
            >
              <div className="card-body p-5">
                <h3 className="text-center mb-4">
                  Página Principal
                </h3>

                {dados ? (
                  <>
                    <p>
                      <strong>Nome:</strong> {dados.nome}
                    </p>

                    <p>
                      <strong>Sobrenome:</strong> {dados.sobrenome}
                    </p>

                    <p>
                      <strong>Data de nascimento:</strong>{' '}
                      {dados.dataNascimento.split('-').reverse().join('/')}
                    </p>
                  </>
                ) : (
                  <p className="text-center">
                    Carregando dados...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Principal;