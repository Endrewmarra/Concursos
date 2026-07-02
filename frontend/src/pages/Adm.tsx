import '../Styles/Adm.css';
import AdmFooter from '../components/AdmFooter';
import EventDisplay from '../components/EventDisplay';

const Adm = () => {
    return (
        <main className="adm-page">
            <EventDisplay />
            <AdmFooter />
        </main>
    );
};

export default Adm;
