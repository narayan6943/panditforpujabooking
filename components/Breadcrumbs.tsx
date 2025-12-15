import Link from 'next/link'
import { useRouter } from 'next/router'
import { generateBreadcrumbSchema } from '@/lib/schemas'

export const Breadcrumbs = () => {
    const router = useRouter()
    const pathSegments = router.asPath.split('?')[0].split('/').filter((segment) => segment)

    // Generate breadcrumb items
    const breadcrumbItems = [
        { name: 'Home', url: 'https://panditforpujabooking.com' },
        ...pathSegments.map((segment, index) => {
            const url = `https://panditforpujabooking.com/${pathSegments.slice(0, index + 1).join('/')}`
            // Format segment name (replace hyphens with spaces and capitalize)
            const name = segment
                .replace(/-/g, ' ')
                .replace(/\b\w/g, (char) => char.toUpperCase())

            return { name, url }
        }),
    ]

    // Generate Schema
    const schema = generateBreadcrumbSchema(breadcrumbItems)

    // Don't render on home page
    if (pathSegments.length === 0) return null

    return (
        <nav aria-label="Breadcrumb" className="container-custom py-3 text-sm text-gray-500">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <ol className="list-none p-0 inline-flex flex-wrap">
                <li className="flex items-center">
                    <Link href="/" className="hover:text-maroon-600 transition-colors">
                        Home
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                </li>
                {pathSegments.map((segment, index) => {
                    const isLast = index === pathSegments.length - 1
                    const href = `/${pathSegments.slice(0, index + 1).join('/')}`

                    // Format name
                    const name = segment
                        .replace(/-/g, ' ')
                        .replace(/\b\w/g, (char) => char.toUpperCase())

                    return (
                        <li key={href} className="flex items-center">
                            {isLast ? (
                                <span className="text-maroon-900 font-medium" aria-current="page">
                                    {name}
                                </span>
                            ) : (
                                <>
                                    <Link href={href} className="hover:text-maroon-600 transition-colors">
                                        {name}
                                    </Link>
                                    <span className="mx-2 text-gray-400">/</span>
                                </>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
