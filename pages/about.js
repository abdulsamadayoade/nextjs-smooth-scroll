import Link from "next/link";
import Scroller from "../components/Scroller";
import Content from "../components/Content";

export default function AboutPage() {
	return (
		<Scroller>
			<h1>About us</h1>
			<Link href="/">
				<a>home</a>
			</Link>
			<hr />
			<Content />
		</Scroller>
	);
}
