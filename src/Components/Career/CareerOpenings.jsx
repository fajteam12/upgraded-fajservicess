import { memo } from "react";
import { Link } from "react-router-dom";
import { CareerIcon } from "./CareerIcons";

function CareerOpenings({ jobs = [], content = {} }) {
	return (
		<section
			className="career-openings"
			aria-labelledby="career-openings-title"
		>
			<div className="container">
				<header className="career-openings__header career-reveal">
					{content.introEyebrow && (
						<p className="career-eyebrow">{content.introEyebrow}</p>
					)}
					{content.introTitle && (
						<h2 id="career-openings-title">{content.introTitle}</h2>
					)}
					{content.introDescription && <p>{content.introDescription}</p>}
				</header>

				<div className="career-openings__list">
					{jobs.map((job, index) => (
						<article
							className="career-job-card career-reveal"
							style={{ "--career-delay": `${Math.min(index * 90, 360)}ms` }}
							key={job.slug}
						>
							<div className="career-job-card__content">
								<div className="career-job-card__badges">
									<span>{job.employmentType}</span>
									<span>
										<CareerIcon name="location" size={15} />
										{job.location}
									</span>
								</div>

								<h3>{job.title}</h3>
								<p>{job.summary}</p>

								<div className="career-job-card__department">
									<CareerIcon name="briefcase" size={17} />
									<span>{job.department}</span>
								</div>
							</div>

							<div className="career-job-card__footer">
								<Link
									className="career-job-card__action"
									to={`/career/${job.slug}/`}
									aria-label={`View and apply for ${job.title}`}
								>
									View Position
									<CareerIcon name="arrow" size={16} />
								</Link>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default memo(CareerOpenings);
