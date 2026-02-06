import Link from "next/link";

export default function MainNav({ links }: { links: Link[] }): JSX.Element {
  return (
    <nav className="w-full flex items-center justify-end">
      <ul className="flex list-none mb-0 pl-0">
        {links?.map((link: Link, idx: number) => (
          <li key={idx} className="mb-0">
            <Link
              className="m-1 md:m-3 no-underline text-white text-xl"
              href={link.href}
              target={link.target}
              rel={link.rel}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}