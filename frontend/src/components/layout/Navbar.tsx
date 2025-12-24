import { Shirt, type LucideIcon } from "lucide-react"

export default function NavBar() {
    const items = [
        {icon: Shirt, name: 'Tienda', href: '#' },
        {icon: Shirt, name: 'Tienda', href: '#' },
        {icon: Shirt, name: 'Tienda', href: '#' },
        {icon: Shirt, name: 'Tienda', href: '#' },
        {icon: Shirt, name: 'Tieada', href: '#' },
    ]

    return (
        <nav className="flex h-8 px-4 shadow-xl w-full bg-neutral-900 text-white sticky top-0">
            <h1 className="text-xl">AllNighter</h1>
            <ul className="flex justify-center w-full">
                {items.map((item) => (
                    <NavItem icon={item.icon} name={item.name} href={item.href} />
                ))}
            </ul>
        </nav>
    )
}


function NavItem(props: { icon: LucideIcon, name: string, href: string }) {
    return (
        <li className="px-6 font-bold flex items-center">
            <props.icon size={17} className=""/>
            <a href={props.href} className="px-2">
                {props.name}
            </a>
        </li>
    )
}