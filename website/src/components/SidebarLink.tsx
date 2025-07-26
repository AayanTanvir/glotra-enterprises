'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

type SidebarLinkProps = {
    to: string;
    className?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

const SidebarLink = ({ to, className, icon, children }: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === to;

    return (
        <Link href={to} className={`sidebar-link ${isActive ? 'sidebar-link-active' : ''} ${className}`}>
            {icon && <>{icon}</>}
            {children}
        </Link>
    )
}

export default SidebarLink
