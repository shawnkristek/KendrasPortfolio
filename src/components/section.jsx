import styles from "styles/section.module.css";

export default function Section({ id, children, darktheme = true, contentClassNames, ...props }) {
  return (
    <div id={id} className={`${styles.section} ${darktheme ? "" : "bg-[#c5cdcd]"} ${props.className || ""}`} >
      <div className={`${styles.sectionContent} ${contentClassNames}`}>
        {children}
      </div>
    </div>
  );
}
