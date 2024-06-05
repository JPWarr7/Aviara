import Container from "../../Container";
import "../Body.css";

export default function Body() {
  return (
    <Container>
      <div className="sm:content-left xs:content-center pt-10 sm:px-10">
        <p className="text-blue-400 text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6">
          <b>
            <i>Weddings/Special Events</i>
          </b>
        </p>
      </div>
      <div className="justify-center border-t-4 border-blue-300 m-6 px-10" />
      <div className="space-y-4 w-full px-10 sm:px-6 lg:px-8 py-10 justify-between">
        <div className="grid md:items-start justify-center gap-8 sm:px-0 md:px-10">
          <div className="content-center">
            <table>
              <thead>
                <th
                  colSpan="2"
                  className="text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6"
                >
                  <i>Bridal Services</i>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="text-blue-400">Trial Hair Design</p>
                  </td>
                  <td>
                    <b>$60+</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Wedding Day Hair Design</p>
                  </td>
                  <td>
                    <b>$100+</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Trial Make-up Application</p>
                  </td>
                  <td>
                    <b>$60+</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">
                      Wedding Day Make-up Application
                    </p>
                  </td>
                  <td>
                    <b>$70+</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Bridal Party</p>
                  </td>
                  <td>
                    <b>Consultation</b>
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
