import React from "react";

const OrderConfirmationModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white p-8 rounded-lg z-50">
        <p className="text-lg font-semibold mb-4">Yaay,  Your order has been placed successfully! 🎉</p>
        <button
          className="px-4 py-2 bg-red-300 text-white rounded hover:bg-slate-500"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;




