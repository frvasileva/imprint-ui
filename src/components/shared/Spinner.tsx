import "./spinner.scss";


const Spinner = () => {
    return (<div className="spinner-wrapper">
        <div className="spinner-grow spinner-size" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        {/* <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
            <span className="visually-hidden">Loading...</span>
        </div> */}
    </div>)
}

export default Spinner;