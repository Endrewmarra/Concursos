import '../Styles/Card.css';
import ScoreSection from '../components/ScoreSection';
import Slider from '../components/Slider';


// define os parâmetros do componente
interface CardProps{
    name: string;
    character: string;
    origin: string;
    referenceImages: Array<{ src: string; alt: string }>;
}

const Card = (Props: CardProps) => {
    return (
        <section id="card" aria-label="Avaliação do candidato">
            <Slider referenceImages={Props.referenceImages} />
            <ScoreSection name={Props.name} character={Props.character} from={Props.origin} />
        </section>
    );
};

export default Card;
