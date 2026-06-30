import '../Styles/Login.css';
const Login = () => {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const login = formData.get('Nome');
        const password = formData.get('Senha');

        const response = await fetch('http://localhost:8000/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login: login, password: password }),
        });
        const data = await response.json();


        if (!response.ok) {return alert('Login ou senha incorretos!')}
        console.log('Login successful:', data);
        if (data.user.role === 'Admin') {
                window.location.href = '/adm';
        };
        if (data.user.role === 'Judge'){
                window.location.href = '/judge';
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
