import '../Styles/Card.css';
import ScoreSection from '../components/ScoreSection';
import Slider from '../components/Slider';
import { character, from, name, referenceImages } from '../data/mock-candidate.json';

const Card = () => {
    return (
        <section id="card" aria-label="Avaliacao do candidato">
            <Slider data={referenceImages} />
            <ScoreSection name={name} character={character} from={from} />
        </section>
    );
};

export default Card;
