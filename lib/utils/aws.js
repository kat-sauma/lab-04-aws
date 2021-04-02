const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-west-1'});

const s3Client = AWS(
  process.env.AWS_KEY_ID,
  process.env.AWS_SECRET_KEY_ID,
  process.env.BUCKET_NAME
);

module.exports = {
  s3Client 
};