import styles from "styles/section.module.css";

export default function Section({ id, children, darktheme = true, ...props }) {
  return (
    <div id={id} className={`${darktheme ? "" : "bg-[#c5cdcd] ring-2 ring-[#c5cdcd]"} min-h-[100vh] ${props.className} ${styles.section}`} >
      {children}
    </div>
  );
}
