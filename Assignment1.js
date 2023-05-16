import http from 'k6/http';
import { check } from 'k6';
import { Trend} from 'k6/metrics';

const myTrend1= new Trend('waiting_time');
const myTrend2 = new Trend('my_custom_trend');

export const options = {
  stages: [
    { duration: '30s', target: 50 },
    { duration: '30s', target: 20 },
    { duration: '20s', target: 0 },
  ],
};


export default function () {
  const res = http.get('https://reqres.in/api/users/2');
  check(res, { 'status was 200': (r) => r.status == 200 }
  );
  myTrend1.add(res.timings.waiting);
  const customStat = res.body.length;
  myTrend2.add(customStat);
}








