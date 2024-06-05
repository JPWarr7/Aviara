import Container from "../Container";
// import AviaraLogo from '../../assets/AviaraLogoDarkGrey.jpg'

export default function Body() {
  return (
    <Container>
      <div className="sm:content-left xs:content-center pt-10 sm:px-10">
        <p className="text-blue-400 text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6">
          <b>
            <i>About Us</i>
          </b>
        </p>
      </div>
      <div className="justify-center border-t-4 border-blue-300 m-6 px-10" />
      <div className="space-y-4 w-full px-10 sm:px-6 lg:px-8 py-10 justify-between">
        <div className="grid md:grid-cols-2 justify-between gap-8 sm:px-0 md:px-10">
          <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg justify-start">
            {/* <img
                    src = {HomeImg}
                    alt=""
                    className='aspect-square rounded-md object-cover'/> */}
          </div>
          <div className="content-center">
            {/* <img
                    src = {AviaraLogo}
                    className = "pb-6"
                    /> */}
            <p className="text-sm xs:text-md sm:text-lg md:text-lg px-6 sm:px-0">
              <div className="text-3xl xs:text-xl sm:text-3xl md:text-3xl pb-4">
                <p className="text-blue-400 text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left">
                  <i>Commitment to Service</i>
                </p>
              </div>
              Our salon is dedicated to service and value. All of our licensed
              specialists sincerely enjoy what they do and it is reflected in
              the loyalty of our clients. We promise individual attention and
              great value for all of our customers.
              <div className="text-3xl xs:text-xl sm:text-3xl md:text-3xl pt-8 pb-4">
                <p className="text-blue-400 text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left">
                  <i>Appointments</i>
                </p>
              </div>
              <div className="pb-2" />
              Please arrive 10 minutes prior to your appointment. We schedule
              appointments according to our specialists' availability and
              specialty. If you are running late, please let us know and we will
              do our best to accommodate you. Arriving late will likely limit
              the time allocated for your service; it will lessen the
              effectiveness and most importantly your pleasure and enjoyment. As
              a courtesy to all clients, our treatments are completed as
              scheduled. Cancellations of all salon and spa services require a
              24-hour notice. Thank you for your consideration and
              understanding. Gratuities are not included in the price of service
              and are greatly appreciated. Suggestions are always welcomed.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
