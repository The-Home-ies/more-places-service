import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: '60s', target: 200 },
    { duration: '30s', target: 200 },
    { duration: '60s', target: 400 },
    { duration: '30s', target: 400 },
    { duration: '60s', target: 600 },
    { duration: '30s', target: 600 },
    { duration: '60s', target: 800 },
    { duration: '30s', target: 800 },
    { duration: '60s', target: 1000 },
    { duration: '30s', target: 1000}
  ],
  thresholds: {
    errors: ['rate<0.01']
  }
};

export default function() {
  http.get(`http://localhost:3004/api/${Math.floor(Math.random() * 10000000 + 1)}/places`);
  sleep(1);
};