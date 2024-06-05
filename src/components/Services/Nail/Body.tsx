import Container from "../../Container";
import "../Body.css";

export default function Body() {
  return (
    <Container>
      <div className="sm:content-left xs:content-center pt-10 sm:px-10">
        <p className="text-blue-400 text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6">
          <b>
            <i>Nail Services</i>
          </b>
        </p>
      </div>
      <div className="justify-center border-t-4 border-blue-300 m-6 px-10" />
      <div className="space-y-4 w-full px-10 sm:px-6 lg:px-8 py-10 justify-between">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 md:items-start justify-between gap-8 sm:px-0 md:px-10">
          <div className="content-center">
            <table>
              <thead>
                <th
                  colSpan="2"
                  className="text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6"
                >
                  <i>Manicures</i>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="text-blue-400">Classic Manicure</p>
                  </td>
                  <td>
                    <b>$20</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">French Manicure</p>
                  </td>
                  <td>
                    <b>$30</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Gel Manicure</p>
                  </td>
                  <td>
                    <b>$40</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Deluxe Manicure</p>
                  </td>
                  <td>
                    <b>$30</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="content-center">
            <table>
              <thead>
                <th
                  colSpan="2"
                  className="text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6"
                >
                  <i>Pedicures</i>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="text-blue-400">Classic Pedicure</p>
                  </td>
                  <td>
                    <b>$40</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">French Pedicure</p>
                  </td>
                  <td>
                    <b>$45</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Gel Pedicure</p>
                  </td>
                  <td>
                    <b>$50</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">French Gel Pedicure</p>
                  </td>
                  <td>
                    <b>$50</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Deluxe Pedicure</p>
                  </td>
                  <td>
                    <b>$70</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="content-center">
            <table>
              <thead>
                <th
                  colSpan="2"
                  className="text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6"
                >
                  <i>Additional Nail Services</i>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="text-blue-400">Polish Change</p>
                  </td>
                  <td>
                    <b>$12</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Soak Off</p>
                  </td>
                  <td>
                    <b>$20</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Nail Design / Add Luminary</p>
                  </td>
                  <td>
                    <b>$15+</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Calluses Removal</p>
                  </td>
                  <td>
                    <b>$10</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
}
