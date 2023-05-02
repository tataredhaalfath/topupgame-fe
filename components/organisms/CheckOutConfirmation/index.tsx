import { setCheckOut } from "@/services/player";
import { useRouter } from "next/router";
import { useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-toastify";

export default function CheckOutConfirmation() {
  const [checkBox, setCheckBox] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    const dataItemLocal: any = secureLocalStorage.getItem("data-item");
    const dataTopUpLocal: any = secureLocalStorage.getItem("data-topup");

    const dataItem = JSON.parse(dataItemLocal);
    const dataTopUp = JSON.parse(dataTopUpLocal);
    if (!checkBox) {
      toast.error("Pastikan anda telah melakukan pembayaran");
    } else {
      const data = {
        voucher: dataItem._id,
        nominal: dataTopUp.nominalItem?._id,
        payment: dataTopUp.paymentItem?.payment?._id,
        bank: dataTopUp.paymentItem?.bank?._id,
        name: dataTopUp.bankAccountName,
        accountUser: dataTopUp.verifyID,
      };

      const response = await setCheckOut(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("Checkout Berhasil");
        setTimeout(() => {
          router.push("/complete-checkout");
        }, 1500);
      }
    }
  };
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkBox}
          onChange={() => setCheckBox(!checkBox)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
