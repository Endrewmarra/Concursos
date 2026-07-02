import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

const Login = () => {
    //cria a variável que vai redirecionar para as paginas usando o hook useNavigate
    const navigate = useNavigate();

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        //envia o formulário para a API
        e.preventDefault();

        const form = e.currentTarget; //seleciona o formulário
        const formData = new FormData(form); //pega o conteúdo dos campos do formulário

        // separa os dados do formulário em constantes
        const login = formData.get('Nome');
        const password = formData.get('Senha');

        // envia os dados para API post no backend
        const response = await fetch('http://localhost:8000/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // passa no formato JSON
            body: JSON.stringify({ login: login, password: password }),
        });

        //aguarda resposta do backend referente ao login e senha enviados
        const data = await response.json();

        // valida a resposta recebida e redireciona a partir do que recebeu
        if (!response.ok) {
            return alert('Login ou senha incorretos!');
        }
        console.log('Login successful:', data);
        if (data.user.role === 'Admin') {
            navigate('/admin');
        }
        if (data.user.role === 'Judge') {
            navigate('/judge');
        }
    }

    return (
        <main className="login-page">
            <form onSubmit={handleSubmit}>
                <input type="text" name="Nome" placeholder="Nome..." />
                <input type="password" name="Senha" placeholder="Senha..." />
                <button className="btn" type="submit">
                    Entrar
                </button>
            </form>
        </main>
    );
};

export default Login;
