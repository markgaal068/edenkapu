import logo from '/public/assets/logo/logo.png'

const MagicLink = (params: { url: string }) => {
  const { url } = params

  return `
<body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;margin:0 auto;padding:20px 25px 48px;background-image:url(&quot;/assets/raycast-bg.png&quot;);background-position:bottom;background-repeat:no-repeat, no-repeat">
      <tbody>
        <tr style="width:100%">
          <td>
            <h1 style="font-size:28px;font-weight:bold;margin-top:48px">🪄 Mindset Meetup magic link</h1>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin:24px 0">
              <tbody>
                <tr>
                  <td>
                    <p style="font-size:16px;line-height:26px;margin:16px 0"><a href="${url}" style="color:#FF6363;text-decoration:none" target="_blank">👉 Kattins ide a belépéshez 👈</a></p>
                    <p style="font-size:16px;line-height:26px;margin:16px 0">Ha nem próbáltál bejelentkezni, akkor nyugodtan hagyd figyelmen kívül ezt az e-mailt.</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
`
}

export default MagicLink
