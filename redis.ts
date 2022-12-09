import Redis from "ioredis";

let redis = new Redis(process.env.REDIS_URL!, {
  tls: {
    rejectUnauthorized: false,
  },
});

export default redis;
