export default function Footer(props) {
    return (
        <footer>
            <p>{props.copyright || "© 2026 Minha Banda Favorita. Todos os direitos reservados."}</p>
        </footer>
    );
}