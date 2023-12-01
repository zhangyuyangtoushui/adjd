
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://pdg2pdf.com/api/user/daily_checkin`;
const method = `POST`;
const headers = {
'Origin' : `https://pdg2pdf.com`,
'Cookie' : `_ga=GA1.1.1818182123.1701415988; _ga_8D6C3296E1=GS1.1.1701415987.1.0.1701415987.0.0.0; session=Fe26.2*1*d0c944a29cb09277b1cf415b22338d662cbbc5bd20406f45278f00de12b3fd9f*Qnfz9E4kN_GjGwzBpRmxRQ*HWaZed4ySYMLRC60BkNQoua0bgO_x71fNRkZSliFJy9wWbb_KDQWA1gfFIWxzm6wVuE9SqM028eKbUf8s9m0A5ce5ss56hbccxbHDk9fZDDizxaooA3jZpdEln-AQ0LP8HmluYWaw33Z9xkKTpb_F1vy7WCqmY83tPZwUZ_Bew2DVwwLZt2g7-2mhCVT3ZAvK7IAri4h56Flk-0MD-GFCQQLauwA3eqS1RqmAkHoH9QYerPzIVx-Nnyv7gAZhljvLxHbQjFEF-JnjyVnLIhlgb798PisGtsEP4ULqYdh3kJTSkfVzvPFMBDckR4NjNEoNmSLX5wKE_4v2OSR2XTgutAF4mnGG46Pup7oKrZDCVU*1702020780952*21077c915d63de4d37c96136bd2e8e283eb73e681d63c77591396addc46205d1*cC2NBiG_FxHlTzcyHkmsnVPuZVWmVdJUcR2IsuJzbeo~2`,
'Connection' : `keep-alive`,
'Accept' : `application/json, text/plain, */*`,
'Referer' : `https://pdg2pdf.com/user`,
'Host' : `pdg2pdf.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept-Encoding' : `gzip, deflate, br`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
