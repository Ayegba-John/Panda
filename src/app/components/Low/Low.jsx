import styles from "./Low.module.css";

const low = () => {
  return (
    <div>
      <div className={styles.Main}>
        <div className={styles.fisayo}>
          <div>
            <img className={styles.mation} src="Fisayo.png" alt="animation" />
          </div>
          <div>
            <div>
              <p>
                Here's Fisayo Fisayo enjoys taking risks, but the type of risks
                one would call ‘Calculated Risks’. At barely 22, Fisayo’s
                fascination about Crypto grew by over 85% and at about 23,
                Fisayo was convinced enough to question google on “How he can
                own cryptocurrencies and crypto wallets in Nigeria”.
              </p>
            </div>
            <div>
              Trust Google to provide a million and one answers for Fisayo,
              including the most relatable answers from Fisayo’s present ‘go-to
              bestie’; Pandar.
            </div>
          </div>
        </div>
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
