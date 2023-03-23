export default {
  async fetch(request) {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const textarea = formData.get('textarea');
                const today = new Date();

    let send_request = new Request('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'xxxxxxxx@zzzzzzzz.com', name: 'Test Recipient' }],
          },
        ],
        from: {
          email: 'yyyyyyyy@zzzzzzzz.com',
          name: name,
        },
        subject: 'Contact request received through the site',
        content: [
          {
            type: 'text/plain',
            value: 'The following message has been received through the site: \n\n' + textarea + '.\n\nFrom: ' + name +'.\n'+ email + '.\n\n\n\n ' + today +'.',
          },
        ],
      }),
    })
  const response = await fetch(send_request);
        const responseHeaders = new Headers(response.headers)
        responseHeaders.set('Access-Control-Allow-Origin', '*')
        return new Response(response.body, {
            headers: responseHeaders,
            status: response.status,
            statusText: response.statusText
        })

  },
}
