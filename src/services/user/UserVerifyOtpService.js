const UserVerifyOtpService = async (Request, DataModel) => {
    try {
        let email = Request.params.email;
        let OTPCode = Request.params.otp;
        let status = 0;
        let statusUpdate = 1;
        let OTPCount = await DataModel.aggregate([{
            $match: {
                email: email,
                otp: OTPCode,
                status: status
            }
        }, {$count: "total"}])
        if (OTPCount.length > 0) {
            // Second Process
            let OTPUpdate = await DataModel.updateOne({email: email, otp: OTPCode, status: status}, {
                email: email,
                otp: OTPCode,
                status: statusUpdate
            })
            return {status: "success", data: OTPUpdate}
        } else {
            return {status: "Failed", data: "Invalid Code"}
        }
    } catch (error) {
        return {status: "Failed", data: error.toString()}
    }
}

module.exports = UserVerifyOtpService