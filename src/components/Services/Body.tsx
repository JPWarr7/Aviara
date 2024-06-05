import EventsBody from "./Events/Body";
import FacialBody from "./Facial/Body";
import HairBody from "./Hair/Body";
import MassageBody from "./Massage/Body";
import NailBody from "./Nail/Body";
import WaxingBody from "./Waxing/Body";
import Container from "../Container";

export default function Body() {
  return (
    <>
      <Container>
        <div className="sm:content-left xs:content-center pt-10 sm:px-10">
          <p className="text-blue-400 text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6">
            <b>
              <i>All Services</i>
            </b>
          </p>
        </div>
        <div className="justify-center border-t-4 border-blue-300 m-6 px-10" />
      </Container>
      <HairBody />
      <FacialBody />
      <MassageBody />
      <WaxingBody />
      <NailBody />
      <EventsBody />
    </>
  );
}
