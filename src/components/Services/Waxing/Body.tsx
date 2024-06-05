import Container from "../../Container";
import "../Body.css";

export default function Body() {
  return (
    <Container>
      <div className="sm:content-left xs:content-center pt-10 sm:px-10">
        <p className="text-blue-400 text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6">
          <b>
            <i>Waxing Services</i>
          </b>
        </p>
      </div>
      <div className="justify-center border-t-4 border-blue-300 m-6 px-10" />
      <div className="space-y-4 w-full px-10 sm:px-6 lg:px-8 py-10 justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-start justify-between gap-8 sm:px-0 md:px-10">
          <div className="content-center ">
            <table>
              <thead>
                <th
                  colSpan="2"
                  className="text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6"
                >
                  <i>Body Waxing</i>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="text-blue-400">Half Arms</p>
                  </td>
                  <td>
                    <b>$40+</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Full Arms</p>
                  </td>
                  <td>
                    <b>$50+</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Back</p>
                  </td>
                  <td>
                    <b>$65+</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Abdomen</p>
                  </td>
                  <td>
                    <b>$25</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Bikini</p>
                  </td>
                  <td>
                    <b>$45+</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Brazilian</p>
                  </td>
                  <td>
                    <b>$65+</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Half Legs</p>
                  </td>
                  <td>
                    <b>$50+</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Full Legs</p>
                  </td>
                  <td>
                    <b>$70+</b>
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
                  <i>Facial Waxing</i>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="text-blue-400">Eyebrow</p>
                  </td>
                  <td>
                    <b>$20</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Lip</p>
                  </td>
                  <td>
                    <b>$15</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Chin</p>
                  </td>
                  <td>
                    <b>$20</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Full Face</p>
                  </td>
                  <td>
                    <b>$60</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Ear Wax</p>
                  </td>
                  <td>
                    <b>$30</b>
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
