import appointmentModel from "../models/appointment.model.js";


const generateRandomString = (length = 10) => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const updateLinkMeet = async (req, res) => {
  const { slotId } = req.body;

  if (!slotId) {
    return res.status(400).json({ success: false, message: 'slotId is required' });
  }

  const randomString = generateRandomString(10);
  const linkMeet = `${process.env.VIDEO_CALL_SERVER}/` + randomString;

  try {
    const appointment = await appointmentModel.findOneAndUpdate(
      { slotId },
      { linkMeet },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Meeting link updated successfully',
      appointment,
    });
  } catch (error) {
    console.error("Error updating linkMeet:", error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
};
