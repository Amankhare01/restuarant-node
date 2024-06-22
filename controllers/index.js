const DB = [];

const register = async (req, res) => {
  const { restaurant_name, fullname, mobile, password } = req.body;

  if (!restaurant_name || !mobile || !password || !fullname) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter all filieds" });
  }
  try {
    const registerUser = DB.push({
      restaurant_name,
      mobile,
      password,
      fullname,
    });

    // Implement JWT for session management

    res.status(200).json({ success: true, user: req.body });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchRes = async (req, res) => {
  const { restaurant_name } = req.body;

  if (!restaurant_name) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter restaurant name" });
  }
  try {
    const getRest = DB.includes(restaurant_name);

    if (!getRest) {
      return res.status(404).json({
        success: false,
        message: "No restaurant found",
      });
    }

    res.status(200).json({
      success: true,
      message: "We have found a restaurant according to your search",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const bookTable = async (req, res) => {
  const { restaurant_id, timeslot, guest } = req.body;

  if (!restaurant_id) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter restaurant ID" });
  }

  if (!timeslot) {
    return res.status(400).json({ success: false, message: "Please enter timeslot" });
  }

  try {
    const getRest = DB.includes(restaurant_id);

    if (!getRest) {
      return res.status(404).json({
        success: false,
        message: "No restaurant found",
      });
    }

    const getTimeslot = DB.includes(timeslot);

    if (!getTimeslot) {
      return res.status(404).json({
        success: false,
        message: "Resturant is not accepting booking for this timeslot",
      });
    }

    const getBooking = DB.push({
      restaurant_id,
      timeslot,
      guest,
    });

    res.status(200).json({
      success: true,
      message: "Your booking is successful",
      booking: getBooking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addSlot = async (req, res) => {
  const { restaurant_id, timeslot } = req.body;

  if (!restaurant_id) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter restaurant ID" });
  }

  if (!timeslot) {
    return res.status(400).json({ success: false, message: "Please enter timeslot" });
  }

  // Implement authentication

  try {
    const getRest = DB.includes(restaurant_id);

    if (!getRest) {
      return res.status(404).json({
        success: false,
        message: "No restaurant found",
      });
    }

    const addTimeSlot = DB.push({
      restaurant_id,
      timeslot,
    });

    res.status(200).json({
      success: true,
      message: "Timeslot added successfully",
      time_slot: addTimeSlot,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, searchRes, bookTable, addSlot };
