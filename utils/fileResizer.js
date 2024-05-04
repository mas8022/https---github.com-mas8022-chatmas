import React from "react";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import sharp from "sharp";
export default async function FileResize(file) {
  const s3 = await new S3Client({
    region: "default",
    endpoint: process.env.LIARA_ENDPOINT,
    credentials: {
      accessKeyId: process.env.LIARA_ACCESS_KEY,
      secretAccessKey: process.env.LIARA_SECRET_KEY,
    },
  });
  const fileName = Date.now() + "_" + file.name;
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const resizeFile = await sharp(buffer)
    .resize({ width: 800 })
    .jpeg({ quality: 50 })
    .toBuffer();
  const params = {
    Body: resizeFile,
    Bucket: process.env.LIARA_BUCKET_NAME,
    Key: fileName,
  };
  await s3.send(new PutObjectCommand(params));
  return { fileName };
}
