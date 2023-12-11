/*잘안됨..  보류
import axios from 'axios';
import {useAppSelector} from '../redux/store';
import AWS from 'aws-sdk';

export const UploadImageToS3 = async () => {
  const representaiveImage = useAppSelector(
    state => state.reviewData,
  ).representativeImage;
  const representaiveImageType = useAppSelector(
    state => state.reviewData,
  ).representativeImageType;
  const representaiveImageName = useAppSelector(
    state => state.reviewData,
  ).representativeImageName;

  //아래 변수들은 추후 env로 이동
  const bucketName = 'api-dev.dump-in.co.kr';
  const region = 'ap-northeast-2';
  const accessKeyID = "AKIA2MDWSFM6EEDYYNMZ";
  const secretAccessKey = "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";

  const formdata = new FormData();
  if (representaiveImageName) {
    formdata.append('name', representaiveImageName);
  }
  if (representaiveImage) {
    formdata.append('image', representaiveImage);
  }
  if (representaiveImageType) {
    formdata.append('type', representaiveImageType);
  }

  AWS.config.update({
    region: region,
    accessKeyId: accessKeyID,
    secretAccessKey: secretAccessKey,
  });

  const upload = new AWS.S3.ManagedUpload({
    params: {
      ACL: 'public-read',
      Bucket: bucketName,
      Key: 'test',
      Body: formdata,
    },
  });

  axios
    .post('https://s3.ap-northeast-2.amazonaws.com/api-dev.dump-in.co.kr', formdata, {
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
    })
    .then(response => {
      if (response) {
        console.log(response.data);
      }
    })
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    });
};

*/
