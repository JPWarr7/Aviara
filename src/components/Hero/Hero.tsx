import Container from "../Container";
import CardGrid from "../CardGrid";

import Kemon from "../../assets/Kemon from Aviara Salon.jpg";
import Eufora from "../../assets/Eufora Home2.jpg";
import Yonka from "../../assets/Yonka Home.jpg";
import Employment from "../../assets/Career from Aviara Salon.jpg";
import HomeImg from "../../assets/Home 8.jpg";
import AviaraAward from "../../assets/AviaraAward.png";
import AviaraLogo from "../../assets/AviaraLogoDarkGrey.jpg";

const products = [
  {
    id: "1",
    name: "Kemon",
    images: [Kemon],
  },
  {
    id: "2",
    name: "Yonka",
    images: [Yonka],
  },
  {
    id: "3",
    name: "Eufora",
    images: [Eufora],
  },
  {
    id: "4",
    name: "Careers",
    images: [Employment],
  },
];

export default function Hero() {
  return (
    <>
      <Container>
        <div className="flex space-y-10 pb-10 justify-center">
          <div className="flex flex-col gap-y-8 px-10 sm:px-6 lg:px-8 space-y-4 w-full max-w-4xl justify-center pb-10">
            <CardGrid items={products} />
          </div>
        </div>

        <div className="justify-center border-t-4 border-blue-300 m-6 px-10" />
        <div className="space-y-4 w-full px-10 sm:px-6 lg:px-8 justify-between">
          <div className="grid md:grid-cols-2 justify-between gap-8 sm:px-0 md:px-10">
            {/* <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg justify-start"> */}
            <div className="rounded-lg justify-start">
              <img
                // src={HomeImg}
                src={AviaraAward}
                alt=""
                // className="aspect-square rounded-md object-cover"
                className="rounded-md object-cover"
              />
            </div>
            <div className="content-center">
              <img src={AviaraLogo} className="pb-6" />
              <p className="text-sm xs:text-md sm:text-lg md:text-lg px-6 sm:px-0">
                We would like to thank you for taking the time to explore our
                website. We hope your stay with us is an experience in learning
                more about our people, services, and the line of fine quality
                products that we offer.
                <div className="pb-2" />
                We consider each client as an individual with his or her own
                needs and desires. We strive to fulfill those needs and desires
                with the best talent available. Experience dedicated
                professionalism with our talented artists.
                <div className="pb-2" />
                Your appearance is our highest priority. Schedule your next
                appointment with us and find true satisfaction with any of the
                variety of services we offer.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
