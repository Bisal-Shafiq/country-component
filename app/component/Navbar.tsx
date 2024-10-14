import Link from "next/link";

export default function Navbar(){
    return (
        <div>
            <Link href="/">Home</Link>&nbsp;&nbsp;| &nbsp;&nbsp;
            <Link href="/aboutus">About Us</Link>&nbsp;&nbsp;| &nbsp;&nbsp;
            <Link href="/contactus">Contact Us</Link>&nbsp;&nbsp;| &nbsp;&nbsp;
            <Link href="/countryname">Country Name</Link>
        </div>
    )
}