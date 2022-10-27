const OTPSModel = require("../../models/Users/OTPSModel");
const SendEmailUtility = require("../../utility/SendEmailUtility");

const UserVerifyEmailService = async (Request, DataModel) => {
    try {

        //Email Account Query
        let email = Request.params.email;
        let OTPCode = Math.floor(100000 + Math.random() * 900000)

        let UserCount = (await DataModel.aggregate([{$match: {email: email}}, {$count: "total"}]))
        if (UserCount > 0) {
            // OTP Insert
            await OTPSModel.create({email: email, otp: OTPCode})

            //Email Send after Create OTP

            let sendEmail = await SendEmailUtility(email, "Your OTP Code is=" + OTPCode, "Inventory Management OTP Verifications")
            return {status: "success", data: SendEmail}
        } else {
            return {status: "success", data: "No User Found"}
        }

    } catch (error) {
        return {status: "Fail", data: error.toString()}
    }
}

module.exports = UserVerifyEmailService