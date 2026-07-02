import '../styles/EventDisplay.css';

const EventDisplay = () => {
    return (
        <main className="event">
            <button id="init" className="btn">
                Iniciar concurso
            </button>
            <div className="show-candidates">Slider candidatos</div>
            <button id="next" className="btn">
                Proximo
            </button>
        </main>
    );
};

export default EventDisplay;
