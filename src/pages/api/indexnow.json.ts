import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const indexNowData = {
    host: 'jichangshouce.com',
    key: 'jichangshouce2026indexnowkey',
    keyLocation: 'https://jichangshouce.com/indexnow-key.txt',
    urlList: [
      'https://jichangshouce.com/',
      'https://jichangshouce.com/recommendations/',
      'https://jichangshouce.com/beginner/',
      'https://jichangshouce.com/plans/',
      'https://jichangshouce.com/nodes/',
      'https://jichangshouce.com/clients/',
      'https://jichangshouce.com/reviews/',
      'https://jichangshouce.com/coupons/',
      'https://jichangshouce.com/faq/',
      'https://jichangshouce.com/service/',
      'https://jichangshouce.com/encyclopedia/'
    ]
  };

  return new Response(JSON.stringify(indexNowData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
