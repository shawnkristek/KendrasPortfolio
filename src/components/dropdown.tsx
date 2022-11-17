import Link from 'next/link';
import { ReactNode, useState } from 'react';

const list = [
  {text: "Settings", href: "url/stuff/here"},
  {text: "Settings", href: "url/stuff/here"},
  {text: "Settings", href: "url/stuff/here"},
  {text: "Settings", href: "url/stuff/here"},
]

type Props = {
  children: ReactNode,
  urls: {
    text: string,
    href: string
  } []
}

export default function DropDown({children, urls}: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <div className="dropdown">
      <button type="button" className="drop-btn">
        {children}
      </button>

      {/* <div className={(open ? "" : "hidden") + " bg-[#173738] rounded absolute"}> */}
      <div className="bg-[#173738] rounded drop-content">
        <ul className="" >
          { urls.map((item) => (
            <Link href={item.href}>
              <li className="drop-link">
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}