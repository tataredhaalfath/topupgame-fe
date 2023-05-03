import { CategoryTypes, HistoryTransactionTypes } from "@/services/data-types";
import { getMemberOverview } from "@/services/player";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Category from "./Category";
import TableRow from "./TableRow";

export default function OverViewContent() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  const GetMemberOverviewAPI = useCallback(async () => {
    const response = await getMemberOverview();
    if (response.error) {
      toast.error(response.message);
    } else {
      setCount(response.data.count);
      setData(response.data.data);
    }
  }, [getMemberOverview]);

  useEffect(() => {
    GetMemberOverviewAPI();
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map((count: CategoryTypes) => {
                const icon = `ic-${count.name.toLowerCase()}`;
                return (
                  <Category key={count._id} icon={icon} nominal={count.value}>
                    Game
                    <br /> {count.name}
                  </Category>
                );
              })}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data: HistoryTransactionTypes) => {
                  return (
                    <TableRow
                      key={data._id}
                      image={`${IMG}/${data.historyVoucherTopup?.thumbnail}`}
                      title="Mobile Legends: The New Battle 2021"
                      category={data.category?.name}
                      item={`${data.historyVoucherTopup?.coinQuantity} ${data.historyVoucherTopup?.coinName}`}
                      price={data.value}
                      status={data.status}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
