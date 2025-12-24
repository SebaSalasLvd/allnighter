


export default function NavBar() {
    const items = [
        { name: 'Tienda', href: '#' },
        { name: 'Tienda', href: '#' },
        { name: 'Tienda', href: '#' },
        { name: 'Tienda', href: '#' },
        { name: 'Tieada', href: '#' },
    ]

    return (
        <nav className="flex h-8 px-4 shadow-xl w-full bg-neutral-800 text-white sticky top-0">
            <h1 className="text-xl">AllNighter</h1>
            <ul className="flex justify-center w-full">
                {items.map((item, i) => (
                    <NavItem name={item.name} href={item.href} />
                ))}
            </ul>
        </nav>
    )
}


function NavItem(props: { name: string, href: string }) {
    return <li className="px-6 font-bold"><a href={props.href}>{props.name}</a></li>
}