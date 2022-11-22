
export default function Section({id, children, darktheme=true, ...props}){
    return (
        <div id={id} className={`${darktheme ? "" : "bg-[#c5cdcd]"} section min-h-[100vh]`}>
            {children}
        </div>
    )
}