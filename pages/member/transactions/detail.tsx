import SideBar from "@/components/organisms/SideBar";
import TransactionsDetailContent from "@/components/organisms/TransactionDetailContent";

export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionsDetailContent />
    </section>
  );
}
