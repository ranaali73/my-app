import Link from "next/link";

const Navbar = () => {
    return (
        <div className="menu">
            <ul className="menu-list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/components/blog">Blog</Link></li>
                <li>
                    <Link href="#">Dashboard</Link>
                    <ul className="submenu">
                        <li><Link href="/components/dashboard/analytics">Analytics</Link></li>
                        <li>
                            <Link href="#">Settings</Link>
                            <ul className="submenu">
                                <li><Link href="/components/dashboard/settings/password">Password</Link></li>
                                <li><Link href="/components/dashboard/settings/profile">Profile</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><Link href="/components/about-us">About Us</Link></li>
                <li><Link href="/components/contact-us">Contact Us</Link></li>
            </ul>
        </div>


    );
};

export default Navbar;
