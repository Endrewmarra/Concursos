import '../Styles/ScoreSection.css';

type ScoreSectionProps = {
    name: string;
    character: string;
    from: string;
};

const scoreFields = [
    { id: 'A', name: 'categoryA', label: 'Categoria A' },
    { id: 'B', name: 'categoryB', label: 'Categoria B' },
    { id: 'C', name: 'categoryC', label: 'Categoria C' },
    { id: 'D', name: 'categoryD', label: 'Categoria D' },
];

const ScoreSection = ({ name, character, from }: ScoreSectionProps) => {
    return (
        <div className="score-section">
            <div className="candidate">
                <h1>{name}</h1>
                <h2>{character} / {from}</h2>
            </div>
            <form className="score">
                <div className="score-fields">
                    {scoreFields.map((field) => (
                        <label className="score-field" htmlFor={field.id} key={field.id}>
                            <span>{field.label}</span>
                            <input
                                type="number"
                                id={field.id}
                                name={field.name}
                                min="1"
                                max="10"
                                required
                            />
                        </label>
                    ))}
                </div>
                <button type='submit' className='enviar'>Enviar</button>
            </form>
        </div>
    );
};

export default ScoreSection;
