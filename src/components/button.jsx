export default function Button({ text, ...props }) {
  return (
    <button
      type="button"
      className={`bg-[#835f02] focus:ring-1 focus:outline-none ring-[#c5cdcd] shadow-sm shadow-[#835f02]/50 rounded-lg text-sm px-5 py-2.5 text-center hover:scale-105 hover:ring-2 transition duration-200 font-semibold ${props.className}`}
    > {text} </button>
  );
}
