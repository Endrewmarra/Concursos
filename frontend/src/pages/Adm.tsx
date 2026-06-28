import '../Styles/Adm.css'

const Adm = () => {
    return (
        <div className='adm-page'>
            <main className='event'>
                <button id="init" className='btn'>Iniciar concurso</button>
                <div className="show-candidates">Slider candidatos</div>
                <button id="next" className='btn'>Proximo</button>
            </main>
            <footer className='footer'>
                <section id='candidates' >
                    <h2>Candidatos</h2>
                    <ul id='candidates-list'>

                    </ul>
                </section>
                <section id='classification'>
                    <h2>classificação</h2>
                    <ul id='classification-list'></ul>
                </section>
                <div className="options">
                    <button id="register" className='btn'>Cadastra candidato</button>
                    <button id="select" className='btn'>Selecionar candidatos</button>
                    <button id="clear" className='btn'>Limpar candidatos</button>
                </div>
            </footer>
        </div>
    );
};

export default Adm;
