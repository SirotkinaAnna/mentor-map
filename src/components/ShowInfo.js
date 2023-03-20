function ShowInfo({ title, children }) {
    const myClass = <div className="myDiv ms-auto my-auto"></div>;

    return <div className="d-flex h-100 w-100 justify-content-center justify-content-md-start"><div className=""><p className="my-text fw-semibold text-center text-md-start">{title}</p>
        <p className="fw-bold fs-5 text-center text-md-start">{children}</p></div>
        {title !== "ISP" ? myClass : ''}</div>
}
export default ShowInfo;