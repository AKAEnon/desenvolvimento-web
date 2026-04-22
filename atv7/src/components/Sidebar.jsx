export default function Sidebar() {
    const albuns = [
        { nome: "Adrenaline (1995)", link: "https://open.spotify.com/intl-pt/album/30YN03R4Bjl8Qwz8wPRoXG" },
        { nome: "Around the Fur (1997)", link: "https://open.spotify.com/intl-pt/album/7o4UsmV37Sg5It2Eb7vHzu" },
        { nome: "White Pony (2000)", link: "https://open.spotify.com/intl-pt/album/5LEXck3kfixFaA3CqVE7bC" },
        { nome: "Deftones (2003)", link: "https://open.spotify.com/intl-pt/album/6252G7bGCVijXlqAjtjeDP" },
        { nome: "B-Sides & Rarities (2005)", link: "https://open.spotify.com/intl-pt/album/6lYtFcxdbPrdFAg6UUoc5W?si=5cgJXCp8QfeIA3y1yd6jTg" },
        { nome: "Saturday Night Wrist (2006)", link: "https://open.spotify.com/intl-pt/album/4ilqDlqD37nilewk9x8tyZ" },
        { nome: "Diamond Eyes (2010)", link: "https://open.spotify.com/intl-pt/album/1GjjBpY2iDwSQs5bykQI5e?si=0T_CdmiGSoacbfxwajaWmw" },
        { nome: "Koi No Yokan (2012)", link: "https://open.spotify.com/intl-pt/album/4PIVdqvL1Rc7T7Vfsr8n8Q" },
        { nome: "Gore (2016)", link: "https://open.spotify.com/intl-pt/album/3tsXyEbUQehXPaRFCS8K1n?si=Yvdf276kRAuuKnh5pG-8xw" },
        { nome: "Ohms (2020)", link: "https://open.spotify.com/intl-pt/album/0VEFy5MsBiq0u2lWL0OwOd?si=TRJSJ8vjRLKtg7QNeXKOGA" },
        { nome: "Private Music (2025)", link: "https://open.spotify.com/intl-pt/album/1gmWnG5TeRj91Tdm2lpEvJ?si=DZG0ym9kSVab89aPtG7akg" }
    ];

    return (
        <aside className="sidebar">
            <h3 id="albuns">Álbuns</h3>
            <ul>
                {albuns.map((album, index) => (
                    <li key={index}>
                        <a href={album.link} target="_blank" rel="noopener noreferrer">
                            {album.nome}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
}