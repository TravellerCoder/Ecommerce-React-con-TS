import React from "react";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";

const CreditCardForm: React.FC = () => {
  const {
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    wrapperProps,
    meta,
  } = usePaymentInputs();

  return (
    <form className="p-4 max-w-sm mx-auto border rounded-xl shadow space-y-4">
      <div {...wrapperProps} className="flex items-center gap-2 border p-2 rounded">
        <svg {...getCardImageProps({ images })} className="h-6 w-auto" />
        <input
          {...getCardNumberProps()}
          placeholder="Card Number"
          className="flex-1 outline-none"
        />
      </div>

      <div className="flex gap-4">
        <input
          {...getExpiryDateProps()}
          placeholder="MM/YY"
          className="w-1/2 border p-2 rounded"
        />
        <input
          {...getCVCProps()}
          placeholder="CVC"
          className="w-1/2 border p-2 rounded"
        />
      </div>

      {meta.error && (
        <span className="text-red-500 text-sm block">{meta.error}</span>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Pagar
      </button>
    </form>
  );
};

export default CreditCardForm;