import Container from "../../Container";
import "../Body.css";
// import AviaraLogo from '../../assets/AviaraLogoDarkGrey.jpg'

export default function Body() {
  return (
    <Container>
      <div className="sm:content-left xs:content-center pt-10 sm:px-10">
        <p className="text-blue-400 text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6">
          <b>
            <i>Massage Services</i>
          </b>
        </p>
      </div>
      <div className="justify-center border-t-4 border-blue-300 m-6 px-10" />
      <div className="space-y-4 w-full px-10 sm:px-6 lg:px-8 py-10 justify-between">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 md:items-start justify-between gap-8 sm:px-0 md:px-10">
          <div className="content-center">
            <table>
              <thead>
                <th
                  colSpan="2"
                  className="text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6"
                >
                  <i>Massage Therapies</i>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="text-blue-400">Swedish Massage</p>
                    <p className="text-xs">
                      Pure essential oils are used during this massage to
                      stimulate the senses and promote a feeling of overall well
                      being. (50-80 min)
                    </p>
                  </td>
                  <td>
                    <b>$100 - $140</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Deep Tissue Massage</p>
                    <p className="text-xs">
                      An intense massage therapy that alleviates stress, tension
                      and pain from the body. (50-80 min)
                    </p>
                  </td>
                  <td>
                    <b>$120 - $160</b>
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
                  <i>Therapeutic Treatments</i>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="text-blue-400">Detox Seaweed Body Wrap</p>
                    <p className="text-xs">
                      Choose either a detoxifying or remineralization treatment
                      that hydrates, energizes and releases fluid for an overall
                      slimming effect. (60 min)
                    </p>
                  </td>
                  <td>
                    <b>$150</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Sea Salt Glow</p>
                    <p className="text-xs">
                      Sea salt and warm oils are massaged vigorously over the
                      body. This stimulating exfoliation is designed to reveal a
                      vibrant new layer of skin. (60 min)
                    </p>
                  </td>
                  <td>
                    <b>$130</b>
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
