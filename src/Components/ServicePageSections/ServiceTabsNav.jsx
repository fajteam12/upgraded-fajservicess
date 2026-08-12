import { memo } from "react";
import { NavLink } from "react-router-dom";
import ServiceIcon from "./ServiceIcon";

function ServiceTabsNav({ content }) {
  if (!content?.items?.length) return null;

  return (
    <nav className="service-landing__tabs" aria-label={content.label}>
      <div className="service-landing__tabs-inner">
        {content.items.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `service-landing__tab ${isActive || item.active ? "is-active" : ""}`
            }
            end={item.end}
            key={item.label}
            to={item.href}
          >
            <ServiceIcon name={item.icon} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default memo(ServiceTabsNav);
