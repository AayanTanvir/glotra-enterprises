'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

type NavbarLinkProps = {
    to: string;
    className?: string;
    children?: React.ReactNode;
}

const NavbarLink = ({ to, className, children }: NavbarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === to;

    return (
        <Link href={to} className={`navbar-link ${isActive ? 'navbar-link-active' : ''} ${className}`}>
            {children}
        </Link>
    )
}

export default NavbarLink
