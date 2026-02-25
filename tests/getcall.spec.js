import{test,expect}from '@playwright/test'

test('Test Get Api',async function ({request}) {
    const resp=await request.get('https://jsonplaceholder.typicode.com/posts/1');
    //console.log(resp);
    const responceBody=await resp.body();
    //console.log(responceBody);
    //Get The Response As JSON Body
    const responceInJsonFormat=await resp.json();
    //console.log(responceInJsonFormat);

    const responceHeader=await resp.headers();
    //console.log(responceHeader);
    const responceHeaderAsArray=await resp.headersArray();
    //console.log(responceHeaderAsArray);

    const status=resp.status();
    console.log(status);

    const statusText=resp.statusText();
    console.log(statusText);

    expect(status).toBe(200);
    expect(statusText).toBe('OK');
    expect(resp.ok()).toBeTruthy();
    expect(responceInJsonFormat).toHaveProperty('userId',1);
    expect(responceInJsonFormat).toHaveProperty('title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    expect(responceInJsonFormat.body).toContain('quia et suscipit');
})