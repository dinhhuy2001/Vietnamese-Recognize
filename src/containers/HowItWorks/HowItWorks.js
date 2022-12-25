import Draw from '../../components/Draw/Draw';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <section id="haycungve" class="section">
            <div class="title">
                <h2>
                    Hãy cùng <span>vẽ</span>
                </h2>
            </div>
            <div className="howitworks--canvas">
                <Draw />
            </div>
        </section>
    );
};

export default HowItWorks;
