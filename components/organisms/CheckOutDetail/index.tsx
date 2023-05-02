import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import secureLocalStorage from "react-secure-storage";

export default function CheckOutDetail() {
  const [dataTopUp, setDataTopUp] = useState({
    veridyID: "",
    bankAccountName: "",
    nominalItem: {
      price: 0,
      coinName: "",
      coinQuantity: 0,
      _id: "",
    },
    paymentItem: {
      payment: {
        type: "",
        _id: "",
      },
      bank: {
        bankName: "",
        name: "",
        noRekening: "",
        _id: "",
      },
    },
  });
  useEffect(() => {
    const dataFromLocal: any = secureLocalStorage.getItem("data-topup");
    const dataTopUpLocal = JSON.parse(dataFromLocal);
    setDataTopUp(dataTopUpLocal);
    console.log("toptup", dataTopUpLocal);
  }, []);

  const itemPrice = dataTopUp.nominalItem?.price;
  const itemTax = (dataTopUp.nominalItem?.price * 10) / 100;
  const totalPrice = itemPrice + itemTax;
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID{" "}
          <span className="purchase-details">{dataTopUp.veridyID}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item{" "}
          <span className="purchase-details">
            {dataTopUp.nominalItem?.coinQuantity}{" "}
            {dataTopUp.nominalItem?.coinName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price{" "}
          <span className="purchase-details">
            <NumberFormat
              value={itemPrice}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%){" "}
          <span className="purchase-details">
            <NumberFormat
              value={itemTax}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{" "}
          <span className="purchase-details color-palette-4">
            <NumberFormat
              value={totalPrice}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
      </div>

      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name{" "}
          <span className="purchase-details">{dataTopUp.bankAccountName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type{" "}
          <span className="payment-details">
            {dataTopUp.paymentItem?.payment?.type}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name{" "}
          <span className="payment-details">
            {dataTopUp.paymentItem?.bank?.bankName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name{" "}
          <span className="payment-details">
            {dataTopUp.paymentItem?.bank?.name}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number{" "}
          <span className="payment-details">
            {dataTopUp.paymentItem?.bank?.noRekening}
          </span>
        </p>
      </div>
    </>
  );
}
