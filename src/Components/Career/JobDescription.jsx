import { memo } from "react";
import { CareerIcon } from "./CareerIcons";

function JobDescription({ sections = [] }) {
	return (
		<div className="career-job-description">
			{sections.map((section, sectionIndex) => (
				<section
					className="career-job-section career-reveal"
					style={{ "--career-delay": `${Math.min(sectionIndex * 80, 320)}ms` }}
					key={section.title}
				>
					<h2>{section.title}</h2>

					{section.paragraphs?.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}

					{section.items?.length > 0 && (
						<ul>
							{section.items.map((item) => (
								<li key={item}>
									<span aria-hidden="true">
										<CareerIcon name="check" size={15} />
									</span>
									<span>{item}</span>
								</li>
							))}
						</ul>
					)}

					{section.details?.length > 0 && (
						<dl className="career-job-section__details">
							{section.details.map(([label, value]) => (
								<div key={label}>
									<dt>{label}</dt>
									<dd>{value}</dd>
								</div>
							))}
						</dl>
					)}

					{section.links?.length > 0 && (
						<div className="career-job-section__links">
							{section.links.map((link) => (
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									key={link.href}
								>
									<CareerIcon name="external" size={14} />
									{link.label}
								</a>
							))}
						</div>
					)}
				</section>
			))}
		</div>
	);
}

export default memo(JobDescription);
