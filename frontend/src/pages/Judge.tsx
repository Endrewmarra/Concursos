import '../Styles/Judge.css';
import Card from '../components/Card';
import { useCandidates } from '../hooks/useCandidates';

export default function Judge() {
    // separa os dados do useCandidates
    const { candidates, loading, error } = useCandidates();
    const currentCandidate = candidates[0];

    //renderiza a pagina do jurado apenas se os dados chegarem pelo hook useCandidates
    if (loading) {
        return (
            <main className="judge-page">
                <h3 className="message">Carregando candidatos...</h3>
            </main>
        );
    }

    if (error) {
        return (
            <main className="judge-page">
                <h3 className="message">{error}</h3>
            </main>
        );
    }

    if (!currentCandidate) {
        return (
            <main className="judge-page">
                <h3 className="message">Nenhum candidato disponível.</h3>
            </main>
        );
    }
    return (
        <main className="judge-page">
            <Card
                name={currentCandidate.name}
                character={currentCandidate.character}
                origin={currentCandidate.origin}
                referenceImages={currentCandidate.referenceImages}
            />
        </main>
    );
}
