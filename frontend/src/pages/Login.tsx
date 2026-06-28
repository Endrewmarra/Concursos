import '../Styles/Login.css';
const Login = () => {
    return (
        <main className="login-page">
            <form>
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
