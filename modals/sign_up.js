const mongoose = require("mongoose");

let schema = mongoose.Schema({
    name: String,
    email: String,
    phoneno: Number,
    password: String,
});

let modal = mongoose.model("PMSsignIn", schema);
let Url = "mongodb+srv://seebizbpt0623evdev41:l2Be11O5zei97LtK@tasks.fkxsczr.mongodb.net/";

const savedata = async (data) => {
    try {
        await mongoose.connect(Url);
        const user = new modal({
            name: data.name,
            email: data.email,
            phoneno: data.phone,
            password: data.password,
        });
        let data1 = await user.save();
        console.log("DB data saved =>", data1);
        return data1;
    } catch (error) {
        console.error("Error saving data to the database:", error.message);
        throw new Error("Failed to save data");
    }
};

const teacher_login = async (data) => {
    try {
        await mongoose.connect(Url);
        let result = await modal.findOne({ email: data.email, password: data.password });
        if (!result) {
            console.log("Login failed: Invalid credentials");
            return false;
        } else {
            console.log("Login successful:", result);
            return result;
        }
    } catch (error) {
        console.error("Error during login:", error.message);
        throw new Error("Login failed");
    }
};

module.exports = { savedata, teacher_login };
