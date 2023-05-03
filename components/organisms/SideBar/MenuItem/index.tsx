import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  active?: boolean;
  icon:
    | "ic-menu-overview"
    | "ic-menu-card"
    | "ic-menu-logout"
    | "ic-menu-message"
    | "ic-menu-reward"
    | "ic-menu-setting"
    | "ic-menu-transaction";
  href?: string;
  title: string;
  onClick?: () => void;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { active, icon, href, title, onClick } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={classItem} onClick={onClick}>
      <Image
        src={`/icon/${icon}.svg`}
        width={25}
        height={25}
        alt=""
        className="icon me-3"
      />
      <p className="item-title m-0">
        {onClick ? (
          <a href="" className="text-lg text-decoration-none">
            {title}
          </a>
        ) : (
          <Link href={href} className="text-lg text-decoration-none">
            {title}
          </Link>
        )}
      </p>
    </div>
  );
}
