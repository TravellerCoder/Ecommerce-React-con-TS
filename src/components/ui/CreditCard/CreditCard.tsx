import React from "react";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import styles from "./CreditCard.module.css";

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
    <form className={styles.creditCard}>
      <div {...wrapperProps} className={styles.cardWrapper}>
        <svg {...getCardImageProps({ images })} className={styles.cardImage} />
        <input
          {...getCardNumberProps()}
          placeholder="Card Number"
          className={ styles.cardNumber}
        />
      </div>

      <div className="flex gap-4">
        <input
          {...getExpiryDateProps()}
          placeholder="MM/YY"
          className={styles.expiryDate}
        />
        <input
          {...getCVCProps()}
          placeholder="CVC"
          className={styles.cvc}
        />
      </div>

      {meta.error && (
        <span className={styles.errorMsj}>{meta.error}</span>
      )}

      <button
        type="submit"
        className={styles.paymentButton}
      >
        Pagar
      </button>
    </form>
  );
};

export default CreditCardForm;