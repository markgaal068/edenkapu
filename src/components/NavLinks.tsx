import Link from 'next/link'

type NavLink = [string, string]

export function NavLinks({ links }: { links?: NavLink[] }) {
  const linksToRender = links || []

  return (
    <>
      {linksToRender.map(([label, href]) => (
        <Link
          key={label}
          href={href}
          className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-white transition-colors hover:bg-gray-800"
        >
          {label}
        </Link>
      ))}
    </>
  )
}
