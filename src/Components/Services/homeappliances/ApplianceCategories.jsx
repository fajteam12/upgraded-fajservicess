import { memo } from 'react';
import { Link } from 'react-router-dom';
import { getCloudflareImageUrl } from '../../../utils/cloudflareImages';
import SectionHeader from '../../ServicePageSections/SectionHeader';
import './ApplianceCategories.css';

const categories = [
  { name: 'Hob Repair', icon: 'hobrepaircat', link: '/services/home-appliances-repair/hob-repair-service/' },
  { name: 'Oven Repair', icon: 'ovenrepaircat', link: '/services/home-appliances-repair/oven-repair-service/' },
  { name: 'Gas Range Repair', icon: 'gasrangerepaircat', link: '/services/home-appliances-repair/gas-cooker-repair-service/' },
  { name: 'Refrigerator Repair', icon: 'fridgecat', link: '/services/home-appliances-repair/refrigerator-repair-service/' },
  { name: 'Dishwasher Repair', icon: 'dishwasherrepaircat', link: '/services/home-appliances-repair/dishwasher-repair-service/' },
  { name: 'BBQ Repair Service', icon: 'bbqrepairrcat', link: '/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/' },
  { name: 'Cigar Humidor Repair', icon: 'cigarhumidorcat', link: '/services/home-appliances-repair/cigar-humidor-repair/' },
  { name: 'Vacuum Repair', icon: 'vacuumcleanercat', link: '/services/home-appliances-repair/robot-vacuum-cleaner-repair/' },
  { name: 'Small Appliances Repair', icon: 'smallappliancesrepair', link: '/services/home-appliances-repair/small-home-appliances-service-center-in-dubai/' },
  { name: 'Washing Machine Repair', icon: 'washingmachinerepair', link: '/services/home-appliances-repair/washing-machine-repair-service-dubai/' },
  { name: 'Integrated Appliances Repair', icon: 'integratedappliancesrepair', link: '/services/home-appliances-repair/built-in-appliances-repair-service/' },
  { name: 'AMC Contract', icon: 'amccontractcat', link: '/services/home-appliances-repair/appliances-amc-service/' },
  { name: 'Free Standing Appliances Repair', icon: 'freestandingappliancesrepair', link: '/services/home-appliances-repair/appliances-repair-service/' },
];

function ApplianceCategories() {
  return (
    <section className="service-landing__section is-white" id="explore-services">
      <div className="service-landing__container">
        <SectionHeader
          content={{
            title: "EXPLORE OUR SERVICES",
          }}
        />
        <div className="appliance-pills-grid">
          {categories.map((category, index) => (
            <Link
              to={category.link}
              key={index}
              className="appliance-pill-card"
            >
              <span className="appliance-pill-icon">
                <img
                  src={getCloudflareImageUrl(category.icon, "mobile")}
                  alt={category.name}
                  width="26"
                  height="26"
                  loading="lazy"
                />
              </span>
              <span className="appliance-pill-text">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ApplianceCategories);
