import picture from '../assets/mugshot.jpeg'

function About() {
    return (
        <section className="about">
            <div className='container'>
                <img src={picture} alt="jean-marie chateaux picture" />
                <div>
                    <h1>Jean-Marie <span className='blue'>CHATEAUX</span></h1>
                    <h3>Développeur Web</h3>
                </div>
            </div>
        </section>
    )
}

export default About