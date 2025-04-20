import Payment from "../models/payment.model.js";

export const createPayment = async (req, res) => {
  try {
    const {
      slotId,
      amount,
      invoiceNumber, // đảm bảo phía client gửi lên số hóa đơn
      status,        // optional, mặc định là "completed"
      paymentMethod, // optional, mặc định là "VNPAY"
    } = req.body;

    if ( !slotId || !amount || !invoiceNumber) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const newPayment = new Payment({
     
      slotId,
      amount,
      invoiceNumber,
      status,
      paymentMethod,
    });

    await newPayment.save();

    res.status(201).json({
      message: "Payment created successfully.",
      payment: newPayment,
    });
  } catch (error) {
    console.error("Create payment error:", error);
    res.status(500).json({ message: "Server error." });
  }
};
