import styles from "./Low.module.css";

const low = () => {
  return (
    <div>
      <div className={styles.Main}>
        <div>
          The Only Cryptocurrency Exchange You Need Our trading platform has
          zero fees, instant payment feature, device authorization for added
          security, allows you to communicate 24/7 with our exceptional customer
          support, has an incomparable help center that answers all your
          questions, and real-time price update. What's not to love?
        </div>
        <div></div>
      </div>

      <div></div>
      <div className={styles.bill}>
        <div>
          <p>
            Use Dollar card in-app The Pandar Virtual Dollar Card allows you to
            send and receive money from anywhere outside the country, but you
            can also use it as a digital wallet, by funding it with your bank
            account or debit card. Owning a Virtual Dollar card is super easy
            and easy to process. With the Pandar app, you can manage your card
            the way you want, with maximum security.
          </p>
        </div>
        <div>
          <img
            className={styles.climb}
            src="climb.jpeg"
            alt="someone on the stries"
          />
        </div>
      </div>
    </div>
  );
};
export default low;
