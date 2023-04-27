import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}
export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            href="/member"
            title="Overview"
            icon="ic-menu-overview"
            active={activeMenu == "overview"}
          />
          <MenuItem
            href="/member/transaction"
            title="Transactions"
            icon="ic-menu-transaction"
            active={activeMenu == "transactions"}
          />
          <MenuItem href="/member" title="Messages" icon="ic-menu-message" />
          <MenuItem href="/member" title="Card" icon="ic-menu-card" />
          <MenuItem href="/member" title="Rewards" icon="ic-menu-reward" />
          <MenuItem
            href="/member/edit-profile"
            title="Settings"
            icon="ic-menu-setting"
            active={activeMenu == "settings"}
          />
          <MenuItem href="/sign-in" title="Logo Out" icon="ic-menu-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
