module.exports = class UploadService {
static async create({ fileName }) {

    const upload = await Order.insert({ fileName, });

    return upload;
}
};