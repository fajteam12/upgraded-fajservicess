import { memo, useState } from "react";
import {
	getCloudflareImageSrcSet,
	getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import { ScrollSlide, ScrollZoomText } from "../Animations/ScrollAnimation";
import "./ContentImageSplit.css";

function CheckIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
			<path
				d="m5 12 4 4L19 6"
				stroke="currentColor"
				strokeWidth="2.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ContentImageSplit({
	eyebrow = "",
	title = "",
	paragraphs = [],
	items = [],
	image = {},
	imageSide = "right",
	imageHeight = "clamp(380px, 38vw, 520px)",
	className = "",
}) {
	const [useFallback, setUseFallback] = useState(false);

	const cloudflareSrc = image.id
		? getCloudflareImageUrl(image.id, "public")
		: "";

	const cloudflareSrcSet = image.id
		? getCloudflareImageSrcSet(image.id)
		: undefined;

	const imageSrc = useFallback ? image.src : cloudflareSrc || image.src;

	const imageSrcSet = useFallback
		? image.srcSet
		: cloudflareSrcSet || image.srcSet || undefined;

	const hasImage = Boolean(imageSrc);

	return (
		<section
			className={`content-image-split content-image-split--image-${imageSide} ${className}`.trim()}
			style={{ "--content-image-split-image-height": imageHeight }}
		>
			<div className="container">
				<div className="content-image-split__inner">
					<div className="content-image-split__content">
						{eyebrow && (
							<ScrollSlide direction="up">
								<p className="content-image-split__eyebrow">{eyebrow}</p>
							</ScrollSlide>
						)}

						{title && (
							<ScrollZoomText delay={0.08}>
								<h2 className="content-image-split__title">{title}</h2>
							</ScrollZoomText>
						)}

						{paragraphs.map((paragraph, index) => (
							<ScrollZoomText delay={0.16 + index * 0.08} key={paragraph}>
								<p className="content-image-split__paragraph">{paragraph}</p>
							</ScrollZoomText>
						))}

						{items.length > 0 && (
							<div className="content-image-split__list">
								{items.map((item, index) => (
									<ScrollSlide
										direction="up"
										delay={0.22 + index * 0.06}
										key={item}
									>
										<div className="content-image-split__item">
											<span
												className="content-image-split__item-icon"
												aria-hidden="true"
											>
												<CheckIcon />
											</span>
											<span>{item}</span>
										</div>
									</ScrollSlide>
								))}
							</div>
						)}
					</div>

					{hasImage && (
						<div className="content-image-split__media-wrap">
							<ScrollSlide direction="left" delay={0.12}>
								<div className="content-image-split__media">
									<img
										src={imageSrc}
										srcSet={imageSrcSet}
										sizes="(max-width: 991px) 100vw, 55vw"
										alt={image.alt || ""}
										width={image.width}
										height={image.height}
										loading="lazy"
										decoding="async"
										style={{ objectPosition: image.position || "center" }}
										onError={() => {
											if (!useFallback && image.src) {
												setUseFallback(true);
											}
										}}
									/>
								</div>
							</ScrollSlide>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

export default memo(ContentImageSplit);
