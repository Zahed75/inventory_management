const CreateService = async (Request, DataModel) => {
    try {
        let PostBody = Request.body;
        PostBody = UserEmail = Request.headers['email']
        let data = await DataModel.create(PostBody)
        return {status: "Success", data: data}
    } catch (error) {
        return {status: "Failed", data: error.toString()}
    }
}

module.exports = CreateService