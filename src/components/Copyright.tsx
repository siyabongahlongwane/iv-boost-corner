const Copyright = () => {
    const YEAR = new Date().getFullYear();
    return (
        <div className="align-center white-bg copyright">
            <small className="black-col ">&copy; {YEAR} IV Boost Corner | Designed by <a className="no-decoration dark-blue-col" href="https://webgooru.co.za" target="_blank">WEBGOORU</a></small>
        </div>
    );
}

export default Copyright;