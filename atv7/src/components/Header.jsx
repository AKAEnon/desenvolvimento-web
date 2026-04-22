export default function Header(props) {
    return (
        <header>
            <h1>{props.title || "Blog sobre Deftones"}</h1>
        </header>
    );
}