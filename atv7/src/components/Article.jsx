export default function Article(props) {
    return (
        <article>
            <h2 id="historia">{props.titulo}</h2>
            <p><strong>Autor:</strong> {props.autor} | <strong>Data:</strong> {props.data}</p>
            <p style={{ whiteSpace: 'pre-line' }}>{props.conteudo}</p>
            {props.imagem && (
                <figure>
                    <img src={props.imagem} alt="Imagem do Post" width="600" height="400" />
                    <figcaption>{props.legenda}</figcaption>
                </figure>
            )}
        </article>
    );
}