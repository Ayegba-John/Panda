import styles from "./Gift.module.css";

const Gift = ({ pic, text }) => {
  return (
    <div>
      <div>
        <img className={styles.pic} src={pic} />
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default Gift;
