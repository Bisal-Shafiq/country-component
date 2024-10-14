import Link from "next/link";

export default function Page() {
    return (
        <div>
            <ul>
                <li><Link href="/countryname/pakistan">Pakistan</Link></li>
                <li><Link href="/countryname/korea">Korea</Link></li>
                <li><Link href="/countryname/japan">Japan</Link></li>
                <li><Link href="/countryname/india">India</Link></li>
                <li><Link href="/countryname/iran">Iran</Link></li>
                <li><Link href="/countryname/iraq">Iraq</Link></li>
            </ul>
        </div>
    );
}