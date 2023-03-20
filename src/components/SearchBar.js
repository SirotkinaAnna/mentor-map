import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm, actionSearch } from '../store'
import { GoChevronRight } from "react-icons/go";
import ShowInfo from "./ShowInfo";
import axios from "axios";

function SearchBar({ ip }) {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => {
        return state.search.searchTerm
    })
    const handleChange = (event) => {
        dispatch(changeSearchTerm(event.target.value))
        console.log(searchTerm)
    }

    const location = useSelector((state) => {
        return state.search.location
    })
    const mapKey = process.env.REACT_APP_MAP_KEY;
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('1');
        const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${mapKey}&ipAddress=${searchTerm}`);
        console.log(response);
        dispatch(actionSearch(response.data))
    }
    return <div className="search-bar">

        <div className="row justify-content-center w-100 m-0">
            <div className="col-md-5 px-4">
                <h1 className="text-light fs-3 text-center my-4">IP Address Tracker</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input className="myInput form-control py-3 px-4" type="text" onChange={handleChange} value={searchTerm} placeholder="Search for any IP address or Domain" />
                        <button className="myButton btn btn-dark px-4 fs-5" type="button" id="button" onClick={handleSubmit}><GoChevronRight /></button>
                    </div>
                </form>
            </div>
        </div>
        <div className="row bg-light myRow mx-auto mt-5 p-4 rounded-4 shadow-sm">
            <div className="col-md-3 ">
                <ShowInfo title="IP ADDRESS">{location.ip}</ShowInfo>
            </div>
            <div className="col-md-3">
                <ShowInfo title="LOCATION">{location.city}, {location.region} {location.postalCode}</ShowInfo>
            </div>
            <div className="col-md-3">
                <ShowInfo title="TIMEZONE">UTC {location.timezone}</ShowInfo>
            </div>
            <div className="col-md-3">
                <ShowInfo title="ISP">{location.isp}</ShowInfo>
            </div>
        </div>
    </div>
}
export default SearchBar;