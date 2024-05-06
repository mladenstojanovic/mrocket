import Link from 'next/link'
import { SingleNav } from '@/queries/navigations'
async function getNav(navId) {
  const res = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: SingleNav,
      variables: { navId: navId }
    })
  }).then((res) => res.json())

  if (res.errors) {
    console.error(res.errors)
    throw new Error(res.errors[0].message)
  }
  return res.data.navigation.link
}

export default async function NavList({ navId }) {
  const navItems = await getNav(navId)
  const navItemsStatic = [
    {
      displayText: 'Blog',
      externalUrl: '/blog',
      page: {
        id: '3-blog',
        slug: 'blog'
      }
    }
  ]
  return (
    <div className="flex items-center space-between gap-5 h-full">
      {navItems.concat(navItemsStatic).map((navItem) => {
        const url = navItem?.externalUrl
          ? navItem.externalUrl
          : `/${navItem.page.slug}`
        return (
          <Link
            href={`${url}`}
            key={navItem.id}
            className="h-full flex items-center"
          >
            {navItem.displayText}
          </Link>
        )
      })}
    </div>
  )
}
