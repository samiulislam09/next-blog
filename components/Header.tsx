import Link from "next/link";

function Header() {
    return (
        <div>
            <header className="mx-auto flex justify-between p-10 max-w-7xl">
                <Link href='/'><img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" alt="" /></Link>
                <div className="flex">
                    <menu className="hidden md:inline-flex space-x-5 items-center">
                        <Link href='/our-story'><a>Our story</a></Link>
                        <Link href='/'><a>Membership</a></Link>
                        <Link href='/'><a>Write</a></Link>
                        <Link href='/'><a>Sign In</a></Link>
                    </menu>
                    <Link href='/'><a className="rounded-full bg-black text-white py-2 px-4 mx-4">Get Started</a></Link>
                </div>
            </header>
        </div>
    );
}

export default Header;