import Container from "../Container";
import "./ImageGallery.css";
import Gallery1 from "../../assets/gallery1.jpeg";
import Gallery2 from "../../assets/gallery2.jpeg";
import Gallery3 from "../../assets/gallery3.jpeg";
import Gallery4 from "../../assets/gallery4.jpeg";
import Gallery5 from "../../assets/gallery5.jpeg";
import Gallery6 from "../../assets/gallery6.jpeg";

export default function ImageGallery() {
  return (
    <>
      <Container>
        <div className="sm:content-left xs:content-center pt-10 sm:px-10">
          <p className="text-blue-400 text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6">
            <b>
              <i>Gallery</i>
            </b>
          </p>
        </div>
        <div className="justify-center border-t-4 border-blue-300 m-6 px-10" />
        <div className="space-y-4 w-full px-10 sm:px-6 lg:px-8 py-10 justify-between">
          <div className="md:items-start justify-between gap-8 sm:px-0 md:px-10">
            <div className="content-center ">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <img
                    className="h-auto w-full rounded-lg"
                    src={Gallery1}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto w-full rounded-lg"
                    src={Gallery2}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto w-full rounded-lg"
                    src={Gallery3}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto w-full rounded-lg"
                    src={Gallery4}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto w-full rounded-lg"
                    src={Gallery5}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto w-full rounded-lg"
                    src={Gallery6}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
