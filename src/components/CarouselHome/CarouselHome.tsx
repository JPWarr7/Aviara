
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Container from "../Container"
import { Card, CardContent } from "../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

import Home_0 from "../../assets/Home 0.jpg";
import Home_1 from "../../assets/Home 1.jpg";
import Home_2 from "../../assets/Home 2.jpg";
import Home_3 from "../../assets/Home 3.jpg";

export default function CarouselHome() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Container>
      <div className="flex justify-center py-3">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-4xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="p-3">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <img src={Home_0} className=""/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-3">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <img src={Home_1} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-3">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <img src={Home_2} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-3">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <img src={Home_3} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
    </Container>
  )
}
