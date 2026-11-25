import { memo } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../../ServicePageSections/SectionHeader";
import "./KitchenEquipmentCategories.css";

const categories = [
  {
    name: "Kitchen Equipment AMC",
    link: "/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-amc/",
  },
  {
    name: "Oven Repair",
    link: "/services/kitchen-equipment-maintenance/oven-repair/",
  },
  {
    name: "Meat Grinder Repair",
    link: "/services/kitchen-equipment-maintenance/meat-grinder-repair/",
  },
  {
    name: "Kitchen Equipment Repair",
    link: "/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-maintenance-services/",
  },
  {
    name: "Cooking Equipment Service",
    link: "/services/kitchen-equipment-maintenance/commercial-cooking-appliances-repair-service/",
  },
];

const firstRowCategories = categories.slice(0, 3);
const secondRowCategories = categories.slice(3);

const CupIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

function KitchenEquipmentCategories({ tone = "white" }) {
  return (
    <section className={`kitchen-categories-section is-${tone}`} id="explore-services">
      <div className="service-landing__container">
        <SectionHeader
          content={{
            title: "EXPLORE OUR SERVICES",
          }}
        />
        <div className="kitchen-pills-container">
          <div className="kitchen-pills-row">
            {firstRowCategories.map((category) => (
              <Link
                to={category.link}
                key={category.name}
                className="kitchen-pill-card"
              >
                <span className="kitchen-pill-icon">
                  <CupIcon />
                </span>
                <span className="kitchen-pill-text">{category.name}</span>
              </Link>
            ))}
          </div>
          <div className="kitchen-pills-row">
            {secondRowCategories.map((category) => (
              <Link
                to={category.link}
                key={category.name}
                className="kitchen-pill-card"
              >
                <span className="kitchen-pill-icon">
                  <CupIcon />
                </span>
                <span className="kitchen-pill-text">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(KitchenEquipmentCategories);
