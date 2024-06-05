import Container from "../../Container";
import "../Body.css";
// import AviaraLogo from '../../assets/AviaraLogoDarkGrey.jpg'

export default function Body() {
  return (
    <Container>
      <div className="sm:content-left xs:content-center pt-10 sm:px-10">
        {/* <p className="pageHead text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6"> */}
        <p className="text-blue-400 text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6">
          <b>
            <i>Facial Services</i>
          </b>
        </p>
      </div>
      <div className="justify-center border-t-4 border-blue-300 m-6 px-10" />
      <div className="space-y-4 w-full px-10 sm:px-6 lg:px-8 py-10 justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-start justify-between gap-8 sm:px-0 md:px-10">
          <div className="content-center">
            <table>
              <thead>
                <th
                  colSpan="2"
                  className="text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6"
                >
                  <i>Facials</i>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="text-blue-400">Hydral Essence</p>
                    <p className="text-xs">
                      High Performance treatment will help hydrate and restore
                      balance (60 min)
                    </p>
                  </td>
                  <td>
                    <b>$125</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Le Grand Classique</p>
                    <p className="text-xs">
                      Deep cleansing, healing and relaxing treatment. (60-70
                      min)
                    </p>
                  </td>
                  <td>
                    <b>$120+</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Teen Treatment</p>
                    <p className="text-xs">
                      This facial balances, cleanses and unblocks pores leaving
                      it smoother and rehydrated. (45 min)
                    </p>
                  </td>
                  <td>
                    <b>$120</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Microdermabrasion</p>
                    <p className="text-xs">
                      This advanced technique restores smooth texture and
                      minimizing imperfections. Correcting fine lines, wrinkled,
                      sun-damaged skin and mild acne scarring. A series of 3 or
                      5 treatments is recommended to achieve optimal results.
                      (75 min)
                    </p>
                  </td>
                  <td>
                    <b>$130</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Back Facial</p>
                    <p className="text-xs">
                      Cleanse and remove impurities from the back/shoulders.
                      Ideal for those prone to problem skin and acne. (50 min)
                    </p>
                  </td>
                  <td>
                    <b>$120</b>
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
                  <i>Anti-Aging</i>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="text-blue-400">Vital Defense</p>
                    <p className="text-xs">
                      Anti-aging, anti-oxidant and anti-pollution prevention.
                      (75 min)
                    </p>
                  </td>
                  <td>
                    <b>$125</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Alpha Vital</p>
                    <p className="text-xs">
                      Brightening anti-wrinkle renewing treatment. (75 min)
                    </p>
                  </td>
                  <td>
                    <b>$125</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Vital Elastine</p>
                    <p className="text-xs">
                      Smoothing / restructuring for fine lines and deep
                      wrinkles. (75 min)
                    </p>
                  </td>
                  <td>
                    <b>$125</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-blue-400">Optimizer</p>
                    <p className="text-xs">
                      Lifting and firming treatment. (75 min)
                    </p>
                  </td>
                  <td>
                    <b>$125</b>
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
