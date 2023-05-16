import http from 'k6/http';
import { check } from 'k6';
import { Trend } from 'k6/metrics';

const myTrend1= new Trend('waiting_time');
const myTrend2 = new Trend('my_custom_trend');

export const options = {
  stages: [
    { duration: '30s', target: 50 },
    { duration: '30s', target: 20 },
    { duration: '20s', target: 0 },
  ],

  thresholds: {
    http_req_duration: ['p(95)<220'], 
    http_req_failed: ['rate<0.01'],
    'my_custom_trend': ['p(90)<300', 'p(95)<300', 'avg<400', 'med<300', 'min<300'],
  },
};


export default function () {
  const res = http.get('https://reqres.in/api/users/2');

  check(res,
    {
        'status was 200': (r) => r.status == 200 ,

        'verify body text': (r) =>r.body.includes('Janet'),

        'body size is in bytes': (r) => r.body.length == 280,
    }
    );

    myTrend1.add(res.timings.waiting);
    const customStat = res.body.length;
    myTrend2.add(customStat);

}