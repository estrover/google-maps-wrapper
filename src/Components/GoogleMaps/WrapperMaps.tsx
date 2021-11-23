import { Wrapper } from "@googlemaps/react-wrapper";
import GoogleMaps from './GoogleMaps';

interface Props {
  children: false | JSX.Element[];
}

const MapsWrapper = ({children}: Props) => {
    return (
      <div style={{ display: "flex" }}> 
        <Wrapper apiKey={"GOOGLE_MAPS_API_KEY"}>
          <GoogleMaps style={{ flexGrow: "1", width: '98%', height: "calc(90vh)" }} center={{ lat: 13.736717, lng: 100.523186 }} zoom={7}>
            {children}
          </GoogleMaps>
        </Wrapper>
      </div>
    )
}

export default MapsWrapper;
