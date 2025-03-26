// index.js (Tổng hợp tất cả models)
 export default{
    User: require("./user.model"),
    Doctor: require("./doctor.model"),
    Appointment: require("./appointment.model"),
    MedicalRecord: require("./medicalRecord.model"),
    Review: require("./review.model"),
    Payment: require("./payment.model"),
    Notification: require("./notification.model"),
    EmailReminder: require("./emailReminder.model"),
    LoginHistory: require("./loginHistory.model"),
  };