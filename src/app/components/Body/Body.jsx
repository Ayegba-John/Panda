import styles from "./Body.module.css";

const body = () => {
  return (
    <div className={styles.Main}>
      <div className={styles.wrap}>
        <div className={styles.wrap_left}>
          <div>
            <span className={styles.fill}>
              A Uniquely Structured <br /> Marketplace For Digital <br />{" "}
              Assets.
            </span>{" "}
            <br />
            Choosing an exchange platform with great services and security is
            often more important than the trade itself. Pandar is one of the
            best Cryptocurrency and Gift Card Exchanges in Nigeria and has
            everything you need rolled into one platform. You can trade your
            favorite coins including Bitcoin, Ethereum, USDT and Litecoin as
            well as Gift cards such as Amazon, Google Play, Steam, etc.
          </div>
          <div>
            <p>Available on</p>
          </div>
          <div className={styles.store}>
            <div>
              <img src="app.svg" alt="logo for appstore" />
            </div>
            <div>
              <img src="google.svg" alt="logo for google stote" />
            </div>
          </div>
        </div>
        <div className={styles.wrap_right}>
          <img className={styles.img} src="Hero.png" alt="mobile image" />
        </div>
      </div>
    </div>
  );
};
export default body;
