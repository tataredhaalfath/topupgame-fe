import cx from "classnames";
import Image from "next/image";

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
  title: string;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { active, icon, title } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={classItem}>
      <Image
        src={`/icon/${icon}.svg`}
        width={25}
        height={25}
        alt=""
        className="icon me-3"
      />
      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}
