import { memo, useMemo, useState } from "react";
import { getCloudflareImageUrl } from "../../utils/cloudflareImages";
import { ScrollSlide, ScrollZoomText } from "../Animations/ScrollAnimation";
import "./LandmarkProjects.css";

function Icon({ name }) {
	const props = {
		fill: "none",
		viewBox: "0 0 24 24",
		"aria-hidden": true,
		focusable: false,
	};

	const paths = {
		search: (
			<>
				<circle
					cx="11"
					cy="11"
					r="6.5"
					stroke="currentColor"
					strokeWidth="1.8"
				/>
				<path
					d="m16 16 4 4"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
				/>
			</>
		),
		pin: (
			<>
				<path
					d="M12 21s6-4.8 6-10a6 6 0 1 0-12 0c0 5.2 6 10 6 10Z"
					stroke="currentColor"
					strokeWidth="1.8"
				/>
				<circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.8" />
			</>
		),
		calendar: (
			<>
				<rect
					x="4"
					y="5.5"
					width="16"
					height="14"
					rx="2"
					stroke="currentColor"
					strokeWidth="1.8"
				/>
				<path
					d="M8 3.5v4M16 3.5v4M4 10h16"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
				/>
			</>
		),
		layers: (
			<>
				<path
					d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinejoin="round"
				/>
				<path
					d="m4 12 8 4.5 8-4.5M4 16.5 12 21l8-4.5"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</>
		),
		check: (
			<>
				<circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
				<path
					d="m8.5 12 2.2 2.2 4.8-5"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</>
		),
		chevron: (
			<path
				d="m7 10 5 5 5-5"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	};

	return <svg {...props}>{paths[name]}</svg>;
}

function ProjectLogo({ project, failedLogos, onError }) {
	const initials = project.title
		.split(" ")
		.slice(0, 3)
		.map((word) => word[0])
		.join("")
		.toUpperCase();

	if (!project.logoId || failedLogos[project.id]) {
		return <span className="landmark-projects__logo-fallback">{initials}</span>;
	}

	return (
		<img
			src={getCloudflareImageUrl(project.logoId, "public")}
			alt={`${project.title} logo`}
			width="150"
			height="90"
			loading="lazy"
			decoding="async"
			onError={() => onError(project.id)}
		/>
	);
}

function LandmarkProjects({
	eyebrow = "",
	title = "",
	description = "",
	categories = [],
	projects = [],
	className = "",
}) {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [query, setQuery] = useState("");
	const [openProjectId, setOpenProjectId] = useState(projects[0]?.id || "");
	const [failedLogos, setFailedLogos] = useState({});

	const filteredProjects = useMemo(() => {
		const searchValue = query.trim().toLowerCase();

		return projects.filter((project) => {
			const categoryMatch =
				selectedCategory === "All" || project.category === selectedCategory;

			if (!searchValue) {
				return categoryMatch;
			}

			const searchableText = [
				project.title,
				project.location,
				project.duration,
				project.category,
				project.description,
				...(project.services || []),
				...(project.tags || []),
			]
				.join(" ")
				.toLowerCase();

			return categoryMatch && searchableText.includes(searchValue);
		});
	}, [projects, query, selectedCategory]);

	const resetFilters = () => {
		setSelectedCategory("All");
		setQuery("");
	};

	return (
		<section className={`landmark-projects ${className}`.trim()}>
			<div className="container">
				<header className="landmark-projects__header">
					{eyebrow && (
						<ScrollSlide direction="up">
							<p className="landmark-projects__eyebrow">{eyebrow}</p>
						</ScrollSlide>
					)}

					{title && (
						<ScrollZoomText delay={0.08}>
							<h2 className="landmark-projects__title">{title}</h2>
						</ScrollZoomText>
					)}

					{description && (
						<ScrollSlide direction="up" delay={0.16}>
							<p className="landmark-projects__description">{description}</p>
						</ScrollSlide>
					)}
				</header>

				<ScrollSlide direction="up" delay={0.2}>
					<div className="landmark-projects__toolbar">
						<div
							className="landmark-projects__categories"
							aria-label="Project categories"
						>
							{categories.map((category) => (
								<button
									type="button"
									key={category}
									className={
										selectedCategory === category
											? "landmark-projects__category landmark-projects__category--active"
											: "landmark-projects__category"
									}
									onClick={() => setSelectedCategory(category)}
								>
									{category}
								</button>
							))}
						</div>

						<label className="landmark-projects__search">
							<Icon name="search" />
							<input
								type="search"
								value={query}
								onChange={(event) => setQuery(event.target.value)}
								placeholder="Search by client, system, or tag"
								aria-label="Search projects"
							/>
							{query && (
								<button type="button" onClick={() => setQuery("")}>
									Clear
								</button>
							)}
						</label>
					</div>
				</ScrollSlide>

				<div className="landmark-projects__results">
					<span>
						Showing {filteredProjects.length} of {projects.length} projects
					</span>

					{(selectedCategory !== "All" || query) && (
						<button type="button" onClick={resetFilters}>
							Reset filters
						</button>
					)}
				</div>

				{filteredProjects.length > 0 ? (
					<div className="landmark-projects__list">
						{filteredProjects.map((project, index) => {
							const isOpen = openProjectId === project.id;
							const detailsId = `project-details-${project.id}`;

							return (
								<ScrollSlide
									direction="up"
									delay={(index % 4) * 0.05}
									key={project.id}
								>
									<article
										className={
											isOpen
												? "landmark-projects__project landmark-projects__project--open"
												: "landmark-projects__project"
										}
									>
										<button
											type="button"
											className="landmark-projects__project-button"
											aria-expanded={isOpen}
											aria-controls={detailsId}
											onClick={() => setOpenProjectId(isOpen ? "" : project.id)}
										>
											<span className="landmark-projects__logo">
												<ProjectLogo
													project={project}
													failedLogos={failedLogos}
													onError={(id) =>
														setFailedLogos((current) => ({
															...current,
															[id]: true,
														}))
													}
												/>
											</span>

											<span className="landmark-projects__project-summary">
												<span className="landmark-projects__category-label">
													<Icon name="layers" />
													{project.category}
												</span>

												<strong>{project.title}</strong>

												<span className="landmark-projects__meta">
													<span>
														<Icon name="pin" />
														{project.location}
													</span>

													{project.duration && (
														<span>
															<Icon name="calendar" />
															{project.duration}
														</span>
													)}
												</span>
											</span>

											<span
												className="landmark-projects__chevron"
												aria-hidden="true"
											>
												<Icon name="chevron" />
											</span>
										</button>

										<div
											className="landmark-projects__details"
											id={detailsId}
											aria-hidden={!isOpen}
										>
											<div className="landmark-projects__details-inner">
												<div className="landmark-projects__details-main">
													<p>{project.description}</p>

													<div className="landmark-projects__services">
														{project.services.map((service) => (
															<span key={service}>
																<Icon name="check" />
																{service}
															</span>
														))}
													</div>
												</div>

												<div className="landmark-projects__tags">
													{project.tags.map((tag) => (
														<span key={tag}>{tag}</span>
													))}
												</div>
											</div>
										</div>
									</article>
								</ScrollSlide>
							);
						})}
					</div>
				) : (
					<div className="landmark-projects__empty">
						No projects match your selected filters.
					</div>
				)}
			</div>
		</section>
	);
}

export default memo(LandmarkProjects);
