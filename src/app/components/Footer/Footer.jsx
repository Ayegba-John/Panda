import Gift from "../Gift/Gift";
import styles from "./Footer.module.css";

const footer = () => {
  return (
    <div>
      <div className={styles.main}>
        <Gift pic="globe.svg" text="great mind build legacy" />
        <Gift pic="climb.jpeg" text="That is how we climb" />
        <Gift pic="globe.svg" text="great mind build legacy" />
      </div>

      <div>
        <div>
          <p>
            Pandar is a registered trademark of Pandar Resources Ltd with RC
            1711476 as a duly registered legal entity in Nigeria, with the
            Nigerian Corporate Affairs Commission. Any unauthorized
            redistribution or reproduction of any copyrighted materials on this
            website is strictly prohibited. Other product and company names are
            trademarks of their respective owners. 1309 Coffeen Avenue STE 1200,
            Sheridan, Wyoming, 82801.
          </p>
        </div>
      </div>
    </div>
  );
};
export default footer;
