import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import Breadcrumb from "../../Components/Common/BreadCumb";
import PageHero from "../../Components/PageHero/PageHero";
import { CareerIcon } from "../../Components/Career/CareerIcons";
import JobDescription from "../../Components/Career/JobDescription";
import WhatsAppApplicationForm from "../../Components/Career/WhatsAppApplicationForm";
import { getCareerJobBySlug } from "../../data/careerJobsData";
import "./css/career.css";

const JobDetails = () => {
  const { jobSlug } = useParams();
  const job = getCareerJobBySlug(jobSlug);

  if (!job) {
    return <Navigate to="/career/" replace />;
  }

  const title = `${job.title} Job in Dubai | FAJ Careers`;
  const canonical = `https://www.fajservices.ae/career/${job.slug}/`;

  const jobPostingSchema = job.datePosted
    ? {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: job.title,
        description: job.summary,
        datePosted: job.datePosted,
        ...(job.validThrough ? { validThrough: job.validThrough } : {}),
        employmentType: job.employmentType,
        hiringOrganization: {
          "@type": "Organization",
          name: "FAJ Technical Services L.L.C",
          sameAs: "https://www.fajservices.ae/",
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
        },
        url: canonical,
      }
    : null;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={job.summary} />
        <meta name="author" content="FAJ Technical Services L.L.C" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={job.summary} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={job.summary} />
        {jobPostingSchema && (
          <script type="application/ld+json">
            {JSON.stringify(jobPostingSchema)}
          </script>
        )}
      </Helmet>

      <PageHero
        eyebrow={job.department}
        title={job.title}
        description={job.summary}
        minHeight="clamp(330px, 34vw, 440px)"
        backgroundImage={{
          id: "new-career-page-images/job-detail-hero",
          src: "/img/new-career-page-images/job-detail-hero.webp",
          alt: `${job.title} career opportunity at FAJ Technical Services`,
          width: 1920,
          height: 760,
        }}
        overlay={0.86}
      />
      <Breadcrumb />

      <main className="career-job-detail">
        <div className="container">
          <Link className="career-job-detail__back" to="/career/">
            <CareerIcon name="back" size={17} />
            Back to all positions
          </Link>

          <header className="career-job-detail__summary career-reveal">
            <div>
              <p className="career-eyebrow">Current Opportunity</p>
              <h2>{job.title}</h2>
            </div>
            <div className="career-job-detail__badges" aria-label="Job information">
              <span>{job.employmentType}</span>
              <span>{job.location}</span>
              <span>{job.experience}</span>
              <span>{job.salary}</span>
            </div>
          </header>

          <div className="career-job-detail__layout">
            <JobDescription sections={job.sections} />
            <div className="career-job-detail__sidebar">
              <WhatsAppApplicationForm job={job} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default JobDetails;
