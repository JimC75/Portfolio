export default function Carrier() {
    const filePath = '/CVJeanMarieChateaux.pdf';

    function handleDownload() {
        const link = document.createElement('a');
        link.href = '/CVJeanMarieChateaux.pdf';
        link.download = 'CVJeanMarieChateaux.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section className="carrier">
            <h2 className="carrier-title">Mon Parcours</h2>
            <p className="carrier-presentation">   Avec un bac pro vente en poche, je suis directement entré dans le monde du travail. J’ai commencé comme vendeur en magasin, puis j’ai connu quelques expériences comme prospecteur en porte-à-porte, télé prospecteur et conseiller clientèle en Freelance.
                Ce n’est qu’après avoir passé, avec succès, les sélections de l’école 42 à Paris que je me suis découvert une vraie passion pour le code !
                Cette expérience inoubliable m’a poussé, quelques années plus tard, à me former au développement web puis à décrocher un diplôme dans le but d’enfin pouvoir en faire ma vraie carrière !
                Après avoir acquis de l’experience comme développeur front-end, je vais débuter ma formation de Développeur Full-Stack en alternance de Septembre 2024 à Juillet 2025.</p>
            <div className="button-background">
                <button className='download-button' onClick={handleDownload}>
                    Télécharger mon CV
                </button>
            </div>
        </section>
    )
}