import styles from "styles/section.module.css";

export default function Section({ id, children, darktheme = true, ...props }) {
  return (
    <div id={id} className={`${darktheme ? "" : "bg-[#c5cdcd] ring-2 ring-[#c5cdcd]"} ${props.className} ${styles.section}`} >
      <div className={styles.sectionContent}>
        {children}
      </div>
    </div>
  );
}
