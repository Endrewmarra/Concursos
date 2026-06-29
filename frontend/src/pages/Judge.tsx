import '../Styles/Judge.css';
import Card from '../components/Card';
import { useCandidates } from '../hooks/useCandidates';

export default function Judge() {
    const { candidates, loading, error } = useCandidates();
    const currentCandidate = candidates[0];


    if (loading) {
        return <p>Carregando candidatos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!currentCandidate) {
        return <p>Nenhum candidato disponível.</p>;
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
