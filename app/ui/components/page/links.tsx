import store from "@/app/lib/store";
import Link from "next/link";

export default function Links() {
  return (
    <div className="grid-area:links z-index-20">
      <div className="position-sticky p-container flex-column justify-end gap-3 text-right">
        {store.menuLinks.map((link, index) => (
          <div className="menu-item mb-2" key={index}>
            <Link className="menu-link" href={link.linkTo}>
              {link.name}
            </Link>
            <div className="menu-tooltip">
              <p>{link.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
