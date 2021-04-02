const pool = require('../utils/pool');
module.exports = class Upload {
    id;
    fileName;


constructor(row) {
    this.id = row.id;
    this.file_name = row.fileName;
}

static async insert(upload) {
    const {
    rows,
    } = await pool.query(
      `INSERT INTO uploads (file_name) VALUES ($1) RETURNING *`,
    [upload.fileName]
    );

    return new Upload(rows[0]);
    }
};

// // POST function
// uploadFile = (fileName) => {
//     // Read content from the file
//     const fileContent = fs.readFileSync(fileName);

//     // Setting up S3 upload parameters
//     const params = {
//         Bucket: BUCKET_NAME,
//         fileName: 'a-plant-photo.png', // File name you want to save as in S3
//         fileBody: fileContent
//     };

//     // Uploading files to the bucket
//     s3.upload(params, function(err, data) {
//         if (err) {
//             throw err;
//         }
//         console.log(`File uploaded successfully. ${data.Location}`);
//     });
