import { memo } from "react";
import { Link } from "react-router-dom";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";

function Description({ value }) {
	if (!value) return null;

	if (typeof value === "string") {
		return <p>{value}</p>;
	}

	if (value.parts?.length) {
		return (
			<p>
				{value.parts.map((part, index) => {
					if (typeof part === "string") {
						return part;
					}

					if (!part?.href) {
						return part?.text || null;
					}

					if (part.external) {
						return (
							<a
								key={`${part.text}-${index}`}
								href={part.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{part.text}
							</a>
						);
					}

					return (
						<Link key={`${part.text}-${index}`} to={part.href}>
							{part.text}
						</Link>
					);
				})}
			</p>
		);
	}

	return null;
}

function NumberedGridSection({ content, tone = "white", columns = "four" }) {
	if (!content?.items?.length) return null;

	return (
		<section className={`service-landing__section is-${tone}`}>
			<div className="service-landing__container">
				<SectionHeader content={content} light={tone === "dark"} />

				<div className={`service-landing__number-grid is-${columns}`}>
					{content.items.map((item, index) => (
						<ScrollSlide
							direction="up"
							delay={(index % 4) * 0.05}
							key={`${item.title}-${index}`}
						>
							<article className="service-landing__number-card">
								<span aria-hidden="true">
									{String(index + 1).padStart(2, "0")}
								</span>

								<h3>{item.title}</h3>

								<Description value={item.description} />
							</article>
						</ScrollSlide>
					))}
				</div>
			</div>
		</section>
	);
}

export default memo(NumberedGridSection);
