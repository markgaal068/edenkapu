import Link from 'next/link'

type NavLink = [string, string]

export function NavLinks({ links }: { links?: NavLink[] }) {
  const defaultLinks: [string, string][] = [
    ['Desszertek', '/desszertek'],
    ['Macaronok', '/macaronok'],
    ['Sós sütemények', '/sos-sutemenyek'],
    ['Fagylaltok', '/fagylaltok'],
    ['Bejglik', '/bejglik'],
    ['Rendezvények', '/rendezvenyek'],
    ['Esküvő', '/eskuvo'],
  ]

  const linksToRender = links || defaultLinks

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
