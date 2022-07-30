import Link from "next/link";
import Scroller from "../components/Scroller";
import Content from "../components/Content";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Box = () => {
	const boxRef = useRef();

	useEffect(() => {
		gsap.to(boxRef.current, {
			x: 400,
			duration: 2,
			// scrollTrigger: {
			// 	trigger: boxRef.current,
			// 	start: "top top",
			// 	end: "bottom top",
			// 	pin: true,
			// 	pinType: "transform",
			// 	scrub: true,
			// 	pinSpacing: false,
			// },
		});
	}, []);

	return <div className="box" ref={boxRef} />;
};

export default function IndexPage() {
	return (
		<Scroller>
			<h1>Home</h1>
			<Link href="/about">
				<a>About</a>
			</Link>
			<hr />
			<Box />
			<Content />
		</Scroller>
	);
}
