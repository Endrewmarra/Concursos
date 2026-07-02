import '../styles/AdmFooter.css';

const AdmFooter = () =>{
    return(
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
    );
};

export default AdmFooter;
