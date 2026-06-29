import { useEffect, useState } from 'react';

type ReferenceImage = {
    src: string;
    alt: string;
};

export type Candidate = {
    name: string;
    character: string;
    origin: string;
    referenceImages: ReferenceImage[];
};

export function useCandidates() {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCandidates() {
            try {
                const response = await fetch('http://localhost:8000/candidates/');

                if (!response.ok) {
                    throw new Error('Erro ao buscar candidatos');
                }

                const data: Candidate[] = await response.json();
                setCandidates(data);
            } catch {
                setError('Não foi possível carregar os candidatos');
            } finally {
                setLoading(false);
            }
        }

        fetchCandidates();
    }, []);

    return { candidates, loading, error };
}
