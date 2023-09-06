export type Path = {
    path: string
}
const BreadCrumbsJumbotron = ({path}: Path) => {
    return (
        <div className="jumbotron-wrapper block d-flex flex-col gap-std align-items-center">
            <h1 className="white-col">{path}</h1>
            <b className="white-col">Home / <span className="primary-col">{path}</span></b>
        </div>
    );
}

export default BreadCrumbsJumbotron;