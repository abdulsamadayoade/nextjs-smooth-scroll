import { useRef, useEffect } from "react";
import SmoothScrollbar from "smooth-scrollbar";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Scroller({ children, ...rest }) {
	let content = useRef();
	let scrollbar = useRef();

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const el = content.current;

		scrollbar.current = SmoothScrollbar.init(el, {
			damping: 0.075,
			delegateTo: document,
			alwaysShowTracks: false,
		});

		scrollbar.current.setPosition(0, 0);
		scrollbar.current.track.xAxis.element.remove();

		ScrollTrigger.scrollerProxy(el, {
			scrollTop(value) {
				if (arguments.length) {
					scrollbar.current.scrollTop = value;
				}
				return scrollbar.current.scrollTop;
			},
		});

		scrollbar.current.addListener(ScrollTrigger.update);

		gsap.to(".box", {
			opacity: 0,
			scrollTrigger: {
				trigger: ".box",
				start: "top top",
				end: "bottom top",
				pin: true,
				pinType: "transform",
				scrub: true,
				pinSpacing: false,
			},
		});

		return () => {
			if (scrollbar.current) {
				scrollbar.current.destroy();
				scrollbar.current = null;
			}
		};
	}, []);

	return (
		<div data-scrollbar ref={content} {...rest}>
			<div className="container">{children}</div>
		</div>
	);
}
