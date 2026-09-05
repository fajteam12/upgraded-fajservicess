import { memo, useState } from "react";
import SectionHeader from "./SectionHeader";

function AnswerContent({ answer }) {
	if (Array.isArray(answer)) {
		return answer.map((block, index) => {
			if (typeof block === "string") {
				return <p key={index}>{block}</p>;
			}

			if (block?.type === "bullets") {
				return (
					<ul key={index}>
						{block.items?.map((item, itemIndex) => (
							<li key={itemIndex}>{item}</li>
						))}
					</ul>
				);
			}

			return <p key={index}>{block?.text}</p>;
		});
	}

	if (typeof answer !== "string") return null;

	const blocks = answer.split(/\n\s*\n/);

	return blocks.map((block, index) => {
		const lines = block
			.split("\n")
			.map((line) => line.trim())
			.filter(Boolean);
		const bulletLines = lines.filter((line) => /^[-*•]\s+/.test(line));

		if (lines.length > 0 && bulletLines.length === lines.length) {
			return (
				<ul key={index}>
					{lines.map((line, itemIndex) => (
						<li key={itemIndex}>{line.replace(/^[-*•]\s+/, "")}</li>
					))}
				</ul>
			);
		}

		return <p key={index}>{lines.join(" ")}</p>;
	});
}

function AccordionSection({ content, tone = "soft" }) {
	const [activeIndex, setActiveIndex] = useState(0);

	if (!content?.items?.length) return null;

	return (
		<section className={`service-landing__section is-${tone}`}>
			<div className="service-landing__narrow">
				<SectionHeader content={content} light={tone === "dark"} />
				<div className="service-landing__faq-list">
					{content.items.map((item, index) => {
						const isOpen = activeIndex === index;

						return (
							<article
								className={`service-landing__faq ${isOpen ? "is-open" : ""}`}
								key={item.question}
							>
								<h3>
									<button
										type="button"
										aria-expanded={isOpen}
										onClick={() => setActiveIndex(isOpen ? -1 : index)}
									>
										<span>{item.question}</span>
										<span aria-hidden="true">{isOpen ? "\u2212" : "+"}</span>
									</button>
								</h3>
								<div className="service-landing__faq-answer">
									<div>
										<AnswerContent answer={item.answer} />
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default memo(AccordionSection);
