import { useMap } from "react-leaflet";
function SetViewOnChange({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());


}
export default SetViewOnChange;