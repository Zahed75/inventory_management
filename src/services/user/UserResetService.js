const OTPSModel = require("../../models/Users/OTPSModel")
const {model} = require("mongoose");

const UserResetService = async (Request, DataModel) => {
    let email = Request.body['email'];
    let OTPCode = Request.body['OTP'];
    let NewPass = Request.body['password'];
    let statusUpdate = 1;


    try {

        // First Process
        let OTPUsedCount = await OTPSModel.aggregate([{
            $match: {
                email: email,
                otp: OTPCode,
                status: statusUpdate
            }
        }, {$count: "total"}])

        if (OTPUsedCount.length > 0) {
            // Second Process
            let PassUpdate = await DataModel.updateOne({email: email}, {password: NewPass})
            return {status: "Success", data: "PassUpdated"}
        } else {
            return {status: "Failed", data: "Invalid Request"}
        }

    } catch (error) {
        return {status: "failed", data: error.toString()}
    }
}

module.exports = UserResetService