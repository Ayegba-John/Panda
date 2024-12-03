import styles from "./Navbar.module.css";

const navbar = () => {
  return (
    <div>
      <div className={styles.Main}>
        <div className={styles.Wrapper}>
          <div>
            <img className={styles.image} src="Pandar logo.png" alt="logo" />
          </div>
          <div className={styles.list}>
            <ul>Products</ul>
            <ul>Help Centre</ul>
            <ul>Company</ul>
          </div>
          <div>
            <button className={styles.btn}>Get the App</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default navbar;
