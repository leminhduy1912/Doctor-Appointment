// // import jwt from "jsonwebtoken"

// // // admin authentication middleware
// // const authAdmin = async (req, res, next) => {
// //     try {
// //         const { atoken } = req.headers
// //         console.log("admin token",atoken)
// //         if (!atoken) {
// //             return res.json({ success: false, message: 'Not Authorized Login Again' })
// //         }
// //         const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)
// //         if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
// //             return res.json({ success: false, message: 'Not Authorized Login Again' })
// //         }
// //         next()
// //     } catch (error) {
// //         console.log(error)
// //         res.json({ success: false, message: error.message })
// //     }
// // }

// // export default authAdmin;




// import jwt from "jsonwebtoken";
// import adminModel from "../models/admin.model.js";


// const authAdmin = async (req, res, next) => {
//   try {
//     const { atoken } = req.headers;
//     if (!atoken) {
//       return res.json({ success: false, message: "Not Authorized. Please login again." });
//     }
// console.log(atoken)
//     const decoded = jwt.verify(atoken, process.env.JWT_SECRET);
//     const {id } = decoded;

//     const admin = await adminModel.findOne({ email, password });
// console.log(id)
//     if (!admin) {
//       return res.json({ success: false, message: "Not Authorized. Invalid credentials." });
//     }

//     req.admin = admin; // Nếu muốn dùng ở các route sau
//     next();
//   } catch (error) {
//     console.log("Admin Auth Error:", error.message);
//     res.json({ success: false, message: error.message });
//   }
// };

// export default authAdmin;
import jwt from "jsonwebtoken";
import adminModel from "../models/admin.model.js";

const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;
    if (!atoken) {
      return res.json({ success: false, message: "Not Authorized. Please login again." });
    }

    console.log("Token received:", atoken);

    const decoded = jwt.verify(atoken, process.env.JWT_SECRET);
    const { id } = decoded;

    console.log("Decoded admin ID:", id);

    const admin = await adminModel.findById(id); // sửa ở đây

    if (!admin) {
      return res.json({ success: false, message: "Not Authorized. Invalid credentials." });
    }

    req.admin = admin;
    next();
  } catch (error) {
    console.log("Admin Auth Error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;
