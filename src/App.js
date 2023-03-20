import { useState, useEffect } from "react";
import MapComponent from "./components/MapComponent";
import SearchBar from "./components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { firstSearch } from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './index.css'


function App() {
    const dispatch = useDispatch();
    const [ip, setIP] = useState('');
    const [myLatLan, setLatLan] = useState([0, 0])
    //creating function to load ip address from the API
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        dispatch(firstSearch(res.data))
        setIP(res.data.IPv4);

    }

    const { search } = useSelector(({ search: { location } }) => {
        return {
            search: location
        }
    })

    //43.4256055,-80.322739
    useEffect(() => {
        //passing getData method to the lifecycle method
        getData()
    }, [])

    useEffect(() => {
        const lat = search.lat || 34.04915;
        const lng = search.lng || -118.09462;
        setLatLan([lat, lng]);
    }, [search.lat, search.lng])

    return <div role="main">
        <SearchBar ip={ip} />
        <MapComponent position={myLatLan} search={search} />
        <footer className="">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
            Coded by <a href="https://github.com/SirotkinaAnna">Anna Sirotkina</a>.
        </footer>
    </div>
}
export default App;