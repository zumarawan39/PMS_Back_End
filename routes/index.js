let express=require("express");
let multer=require("multer")
let route=express.Router();


let{postData,loginData}=require("../controllers/sign_in_up")
let {student_Signup,login_std,findAllStd,verifyToken,delStd,editStd,findStd}=require("../controllers/student_signup_in")

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  const upload = multer({ storage: storage });
route.get("/Allget",verifyToken ,findAllStd)
route.post("/tSignin",postData);
route.post("/Tlogin",loginData);
route.post("/stdSignup",verifyToken,upload.single('image'),student_Signup);
route.delete('/student/:id',verifyToken,delStd);
route.put('/student/:id',verifyToken,editStd);
route.post("/std_login",login_std);
route.post("/getStd",findStd)
module.exports={route}; 
 