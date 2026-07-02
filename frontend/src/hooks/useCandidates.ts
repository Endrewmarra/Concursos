import { useEffect, useState } from 'react';

// define o tipo e formato que as imagens devem chegar
type ReferenceImage = {
    src: string;
    alt: string;
};

// define o tipo e formato que os candidatos devem chegar
export type Candidate = {
    name: string;
    character: string;
    origin: string;
    referenceImages: ReferenceImage[];
};

// cria o hook useCandidates
export function useCandidates() {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    //recebe os dados do backend via API
    useEffect(() => {
        async function fetchCandidates() {
            try {
                // chama API
                const response = await fetch('http://localhost:8000/candidates/');

                // retorna erro se a API não responder
                if (!response.ok) {
                    throw new Error('Erro ao buscar candidatos');
                }

                // passa os dados da API para constantes criadas
                const data: Candidate[] = await response.json();
                setCandidates(data);
            } catch {
                // passa o erro
                setError('Não foi possível carregar os candidatos');
            } finally {
                // avisa se ja terminou a requisição
                setLoading(false);
            }
        }

        fetchCandidates();
    }, []);

    // envia os dados recebidos para onde for chamado
    return { candidates, loading, error };
}
