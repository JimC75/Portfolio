export default function Carrier() {
    const filePath = '/CVJeanMarieChateaux.pdf';

    function handleDownload() {
        const link = document.createElement('a');
        link.href = 'CVJeanMarieChateaux.pdf';
        link.download = 'CVJeanMarieChateaux.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section className="carrier">
            <h2 className="carrier-title">Mon Parcours</h2>
            <p className="carrier-presentation">   Après avoir passé, avec succès, les sélections de l’école 42 à Paris, je me suis découvert une vraie passion pour le code !
                Cette expérience inoubliable m’a poussé, quelques années plus tard, à me former au développement web puis à décrocher un diplôme dans le but d’enfin pouvoir en faire ma vraie carrière !
            </p>

            <div className="button-background">
                <img src="webdevbg3.jpg" alt="" className="button-image" />
                <button className='download-button' onClick={handleDownload}>
                    Télécharger mon CV
                </button>
            </div>
        </section>
    )
}