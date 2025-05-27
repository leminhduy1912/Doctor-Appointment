import nodemailer from 'nodemailer';





const otpEmailHtml=
`
<!--
* This email was built using Tabular.
* For more information, visit https://tabular.email
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t34,.t56{text-align:center!important}.t33,.t55{vertical-align:top!important;width:600px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t66" style="min-width:100%;Margin:0px;padding:0px;background-color:#F0F0F0;"><div class="t65" style="background-color:#F0F0F0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t64" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#F0F0F0;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#F0F0F0"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td align="center">
<table class="t41" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t40" style="background-color:#FFFFFF;width:600px;">
<table class="t39" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t38"><div class="t37" style="width:100%;text-align:center;"><div class="t36" style="display:inline-block;"><table class="t35" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t34"><td></td><td class="t33" width="600" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t32" style="width:100%;"><tr><td class="t31" style="background-color:transparent;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td><div class="t1" style="mso-line-height-rule:exactly;mso-line-height-alt:125px;line-height:125px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t5" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="40" class="t4" style="width:40px;">
<table class="t3" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t2"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="40" height="39.34375" alt="" src="https://455dd1ee-4446-46fc-b976-3a1f213d3104.b-cdn.net/e/49aa4f8a-43f7-42ea-8eac-a71a697bcecd/c0a336bc-77d8-4903-ad95-7385dce0be7e.png"/></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t7" style="mso-line-height-rule:exactly;mso-line-height-alt:55px;line-height:55px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t11" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="315" class="t10" style="width:315px;">
<table class="t9" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t8"><h1 class="t6" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:52px;font-weight:700;font-style:normal;font-size:48px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">OTP Confirmation</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t12" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t17" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="350" class="t16" style="width:350px;">
<table class="t15" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t14"><p class="t13" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;direction:ltr;color:#666666;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">To verify your email address, please use the OTP code below:</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t19" style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t23" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="308" class="t22" style="background-color:#0055FF;overflow:hidden;width:308px;border-radius:14px 14px 14px 14px;">
<table class="t21" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t20" style="text-align:center;line-height:58px;mso-line-height-rule:exactly;mso-text-raise:11px;"><a class="t18" href="https://tabular.email" style="display:block;margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:58px;font-weight:600;font-style:normal;font-size:21px;text-decoration:none;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:11px;" target="_blank">123456</a></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t24" style="mso-line-height-rule:exactly;mso-line-height-alt:60px;line-height:60px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t29" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="350" class="t28" style="width:350px;">
<table class="t27" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t26"><p class="t25" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:25px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#BBBBBB;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">If you didn’t request to verify your email or sign up, you can safely ignore and delete this email.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t30" style="mso-line-height-rule:exactly;mso-line-height-alt:125px;line-height:125px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t63" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t62" style="background-color:transparent;width:600px;">
<table class="t61" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t60"><div class="t59" style="width:100%;text-align:center;"><div class="t58" style="display:inline-block;"><table class="t57" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t56"><td></td><td class="t55" width="600" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t54" style="width:100%;"><tr><td class="t53" style="background-color:transparent;padding:40px 0 40px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t46" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="350" class="t45" style="width:350px;">
<table class="t44" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t43"><p class="t42" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:19px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#BBBBBB;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Flash is a webtool that is a free open source JavaScript framework that can be accessed from a browser or mobile device in a Web browser.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t47" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t52" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="350" class="t51" style="width:350px;">
<table class="t50" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t49"><p class="t48" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:19px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#BBBBBB;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Flash Inc. All rights reserved</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>
`

export async function sendOtpRegisterEmail({ to,otp }) {
  const   html= `
  <!--
  * This email was built using Tabular.
  * For more information, visit https://tabular.email
  -->
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  <head>
  <title></title>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <!--[if !mso]>-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!--<![endif]-->
  <meta name="x-apple-disable-message-reformatting" content="" />
  <meta content="target-densitydpi=device-dpi" name="viewport" />
  <meta content="true" name="HandheldFriendly" />
  <meta content="width=device-width" name="viewport" />
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
  <style type="text/css">
  table {
  border-collapse: separate;
  table-layout: fixed;
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt
  }
  table td {
  border-collapse: collapse
  }
  .ExternalClass {
  width: 100%
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
  line-height: 100%
  }
  body, a, li, p, h1, h2, h3 {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  }
  html {
  -webkit-text-size-adjust: none !important
  }
  body, #innerTable {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
  }
  #innerTable img+div {
  display: none;
  display: none !important
  }
  img {
  Margin: 0;
  padding: 0;
  -ms-interpolation-mode: bicubic
  }
  h1, h2, h3, p, a {
  line-height: inherit;
  overflow-wrap: normal;
  white-space: normal;
  word-break: break-word
  }
  a {
  text-decoration: none
  }
  h1, h2, h3, p {
  min-width: 100%!important;
  width: 100%!important;
  max-width: 100%!important;
  display: inline-block!important;
  border: 0;
  padding: 0;
  margin: 0
  }
  a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important
  }
  u + #body a {
  color: inherit;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  }
  a[href^="mailto"],
  a[href^="tel"],
  a[href^="sms"] {
  color: inherit;
  text-decoration: none
  }
  </style>
  <style type="text/css">
  @media (min-width: 481px) {
  .hd { display: none!important }
  }
  </style>
  <style type="text/css">
  @media (max-width: 480px) {
  .hm { display: none!important }
  }
  </style>
  <style type="text/css">
  @media (max-width: 480px) {
  .t34,.t56{text-align:center!important}.t33,.t55{vertical-align:top!important;width:600px!important}
  }
  </style>
  <!--[if !mso]>-->
  <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet" type="text/css" />
  <!--<![endif]-->
  <!--[if mso]>
  <xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  </head>
  <body id="body" class="t66" style="min-width:100%;Margin:0px;padding:0px;background-color:#F0F0F0;"><div class="t65" style="background-color:#F0F0F0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t64" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#F0F0F0;" valign="top" align="center">
  <!--[if mso]>
  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
  <v:fill color="#F0F0F0"/>
  </v:background>
  <![endif]-->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td align="center">
  <table class="t41" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t40" style="background-color:#FFFFFF;width:600px;">
  <table class="t39" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t38"><div class="t37" style="width:100%;text-align:center;"><div class="t36" style="display:inline-block;"><table class="t35" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
  <tr class="t34"><td></td><td class="t33" width="600" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t32" style="width:100%;"><tr><td class="t31" style="background-color:transparent;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td><div class="t1" style="mso-line-height-rule:exactly;mso-line-height-alt:125px;line-height:125px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t5" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="40" class="t4" style="width:40px;">
  <table class="t3" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t2"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="40" height="39.34375" alt="" src="https://455dd1ee-4446-46fc-b976-3a1f213d3104.b-cdn.net/e/49aa4f8a-43f7-42ea-8eac-a71a697bcecd/c0a336bc-77d8-4903-ad95-7385dce0be7e.png"/></div></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td><div class="t7" style="mso-line-height-rule:exactly;mso-line-height-alt:55px;line-height:55px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t11" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="315" class="t10" style="width:315px;">
  <table class="t9" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t8"><h1 class="t6" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:52px;font-weight:700;font-style:normal;font-size:48px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">OTP Confirmation</h1></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td><div class="t12" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t17" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="350" class="t16" style="width:350px;">
  <table class="t15" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t14"><p class="t13" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;direction:ltr;color:#666666;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">To verify your email address, please use the OTP code below:</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td><div class="t19" style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t23" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="308" class="t22" style="background-color:#0055FF;overflow:hidden;width:308px;border-radius:14px 14px 14px 14px;">
  <table class="t21" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t20" style="text-align:center;line-height:58px;mso-line-height-rule:exactly;mso-text-raise:11px;"><a class="t18" href="https://tabular.email" style="display:block;margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:58px;font-weight:600;font-style:normal;font-size:21px;text-decoration:none;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:11px;" target="_blank">${otp}</a></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td><div class="t24" style="mso-line-height-rule:exactly;mso-line-height-alt:60px;line-height:60px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t29" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="350" class="t28" style="width:350px;">
  <table class="t27" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t26"><p class="t25" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:25px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#BBBBBB;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">If you didn’t request to verify your email or sign up, you can safely ignore and delete this email.</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td><div class="t30" style="mso-line-height-rule:exactly;mso-line-height-alt:125px;line-height:125px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td></tr></table>
  </td>
  <td></td></tr>
  </table></div></div></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t63" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t62" style="background-color:transparent;width:600px;">
  <table class="t61" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t60"><div class="t59" style="width:100%;text-align:center;"><div class="t58" style="display:inline-block;"><table class="t57" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
  <tr class="t56"><td></td><td class="t55" width="600" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t54" style="width:100%;"><tr><td class="t53" style="background-color:transparent;padding:40px 0 40px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
  <table class="t46" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="350" class="t45" style="width:350px;">
  <table class="t44" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t43"><p class="t42" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:19px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#BBBBBB;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Flash is a webtool that is a free open source JavaScript framework that can be accessed from a browser or mobile device in a Web browser.</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td><div class="t47" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t52" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="350" class="t51" style="width:350px;">
  <table class="t50" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t49"><p class="t48" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:19px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#BBBBBB;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Flash Inc. All rights reserved</p></td></tr></table>
  </td></tr></table>
  </td></tr></table></td></tr></table>
  </td>
  <td></td></tr>
  </table></div></div></td></tr></table>
  </td></tr></table>
  </td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
  </html>
  `
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD 
    }
  })

  const info = await transporter.sendMail({
    from: `Healthcare Booking System`,
    to, 
    subject:'Email Verification OTP',
    html:html
  })

  console.log('receipt sent: %s', info.messageId)
}


export async function sendOtpResetPassword({ to,otp }) {
  const   html= `
  <!--
  * This email was built using Tabular.
  * For more information, visit https://tabular.email
  -->
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  <head>
  <title></title>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <!--[if !mso]>-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!--<![endif]-->
  <meta name="x-apple-disable-message-reformatting" content="" />
  <meta content="target-densitydpi=device-dpi" name="viewport" />
  <meta content="true" name="HandheldFriendly" />
  <meta content="width=device-width" name="viewport" />
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
  <style type="text/css">
  table {
  border-collapse: separate;
  table-layout: fixed;
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt
  }
  table td {
  border-collapse: collapse
  }
  .ExternalClass {
  width: 100%
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
  line-height: 100%
  }
  body, a, li, p, h1, h2, h3 {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  }
  html {
  -webkit-text-size-adjust: none !important
  }
  body, #innerTable {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
  }
  #innerTable img+div {
  display: none;
  display: none !important
  }
  img {
  Margin: 0;
  padding: 0;
  -ms-interpolation-mode: bicubic
  }
  h1, h2, h3, p, a {
  line-height: inherit;
  overflow-wrap: normal;
  white-space: normal;
  word-break: break-word
  }
  a {
  text-decoration: none
  }
  h1, h2, h3, p {
  min-width: 100%!important;
  width: 100%!important;
  max-width: 100%!important;
  display: inline-block!important;
  border: 0;
  padding: 0;
  margin: 0
  }
  a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important
  }
  u + #body a {
  color: inherit;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  }
  a[href^="mailto"],
  a[href^="tel"],
  a[href^="sms"] {
  color: inherit;
  text-decoration: none
  }
  </style>
  <style type="text/css">
  @media (min-width: 481px) {
  .hd { display: none!important }
  }
  </style>
  <style type="text/css">
  @media (max-width: 480px) {
  .hm { display: none!important }
  }
  </style>
  <style type="text/css">
  @media (max-width: 480px) {
  .t34,.t56{text-align:center!important}.t33,.t55{vertical-align:top!important;width:600px!important}
  }
  </style>
  <!--[if !mso]>-->
  <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet" type="text/css" />
  <!--<![endif]-->
  <!--[if mso]>
  <xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  </head>
  <body id="body" class="t66" style="min-width:100%;Margin:0px;padding:0px;background-color:#F0F0F0;"><div class="t65" style="background-color:#F0F0F0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t64" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#F0F0F0;" valign="top" align="center">
  <!--[if mso]>
  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
  <v:fill color="#F0F0F0"/>
  </v:background>
  <![endif]-->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td align="center">
  <table class="t41" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t40" style="background-color:#FFFFFF;width:600px;">
  <table class="t39" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t38"><div class="t37" style="width:100%;text-align:center;"><div class="t36" style="display:inline-block;"><table class="t35" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
  <tr class="t34"><td></td><td class="t33" width="600" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t32" style="width:100%;"><tr><td class="t31" style="background-color:transparent;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td><div class="t1" style="mso-line-height-rule:exactly;mso-line-height-alt:125px;line-height:125px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t5" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="40" class="t4" style="width:40px;">
  <table class="t3" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t2"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="40" height="39.34375" alt="" src="https://455dd1ee-4446-46fc-b976-3a1f213d3104.b-cdn.net/e/49aa4f8a-43f7-42ea-8eac-a71a697bcecd/c0a336bc-77d8-4903-ad95-7385dce0be7e.png"/></div></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td><div class="t7" style="mso-line-height-rule:exactly;mso-line-height-alt:55px;line-height:55px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t11" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="315" class="t10" style="width:315px;">
  <table class="t9" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t8"><h1 class="t6" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:52px;font-weight:700;font-style:normal;font-size:48px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">OTP Reset Password </h1></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td><div class="t12" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t17" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="350" class="t16" style="width:350px;">
  <table class="t15" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t14"><p class="t13" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;direction:ltr;color:#666666;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">To reset your password, please use the OTP code below:

</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td><div class="t19" style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t23" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="308" class="t22" style="background-color:#0055FF;overflow:hidden;width:308px;border-radius:14px 14px 14px 14px;">
  <table class="t21" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t20" style="text-align:center;line-height:58px;mso-line-height-rule:exactly;mso-text-raise:11px;"><a class="t18" href="https://tabular.email" style="display:block;margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:58px;font-weight:600;font-style:normal;font-size:21px;text-decoration:none;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:11px;" target="_blank">${otp}</a></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td><div class="t24" style="mso-line-height-rule:exactly;mso-line-height-alt:60px;line-height:60px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t29" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="350" class="t28" style="width:350px;">
  <table class="t27" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t26"><p class="t25" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:25px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#BBBBBB;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">If you did not request a password reset, you can safely ignore and delete this email.

</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td><div class="t30" style="mso-line-height-rule:exactly;mso-line-height-alt:125px;line-height:125px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td></tr></table>
  </td>
  <td></td></tr>
  </table></div></div></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t63" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t62" style="background-color:transparent;width:600px;">
  <table class="t61" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t60"><div class="t59" style="width:100%;text-align:center;"><div class="t58" style="display:inline-block;"><table class="t57" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
  <tr class="t56"><td></td><td class="t55" width="600" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t54" style="width:100%;"><tr><td class="t53" style="background-color:transparent;padding:40px 0 40px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
  <table class="t46" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="350" class="t45" style="width:350px;">
  <table class="t44" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t43"><p class="t42" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:19px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#BBBBBB;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Flash is a webtool that is a free open source JavaScript framework that can be accessed from a browser or mobile device in a Web browser.</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td><div class="t47" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t52" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="350" class="t51" style="width:350px;">
  <table class="t50" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t49"><p class="t48" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:19px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#BBBBBB;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Flash Inc. All rights reserved</p></td></tr></table>
  </td></tr></table>
  </td></tr></table></td></tr></table>
  </td>
  <td></td></tr>
  </table></div></div></td></tr></table>
  </td></tr></table>
  </td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
  </html>
  `
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD 
    }
  })

  const info = await transporter.sendMail({
    from: `Healthcare Booking System`,
    to, 
    subject:'Email Reset Password OTP',
    html:html
  })

  console.log('receipt sent: %s', info.messageId)
}



export async function sendNotiNewBookingToDoctor(to,date,timeStart,timeEnd,docName,patientName,patientImage) {
  const htmlUserBookingToDoctor = 
  `
  
<!--
* This email was built using Tabular.
* For more information, visit https://tabular.email
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t105{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t106{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t27{padding-bottom:20px!important}.t26{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t70{text-align:left!important}.t42,.t44,.t65,.t67{display:revert!important}.t97,.t98{display:block!important}.t46{vertical-align:middle!important;width:221px!important}.t13,.t17{vertical-align:top!important}.t18{text-align:right!important}.t17{width:80px!important}.t15{padding-bottom:50px!important}.t13{width:370px!important}.t69{vertical-align:middle!important;width:820px!important}.t48,.t55,.t61,.t94{padding-left:0!important}.t97{text-align:left!important}.t96{vertical-align:top!important;display:inline-block!important;width:100%!important;max-width:800px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t112" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class="t111" style="background-color:#242424;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t110" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#242424"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t105" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t109" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t108" style="background-color:#F8F8F8;width:600px;">
<table class="t107" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t106" style="padding:0 50px 60px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t25" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t24" style="width:800px;">
<table class="t23" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t22"><div class="t21" style="width:100%;text-align:right;"><div class="t20" style="display:inline-block;"><table class="t19" role="presentation" cellpadding="0" cellspacing="0" align="right" valign="top">
<tr class="t18"><td></td><td class="t13" width="370" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t12" style="width:100%;"><tr><td class="t11" style="padding:35px 0 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t5" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="370" class="t4" style="width:600px;">
<table class="t3" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t2"><p class="t1" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t0" style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">Booking notification</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t10" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="370" class="t9" style="width:600px;">
<table class="t8" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t7" style="padding:0 0 22px 0;"><p class="t6" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Date: ${date}</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td><td class="t17" width="130" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t16" style="width:100%;"><tr><td class="t15" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t14" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="129.078125" alt="" src="https://324864e0-7187-49b1-bc7c-a16f2f60f062.b-cdn.net/e/d5224007-a19b-43ce-b44e-51a08d779f9c/1a34215a-80aa-4b95-8f2e-b249d679a76a.jpeg"/></div></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t29" style="width:600px;">
<table class="t28" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t27" style="padding:0 0 15px 0;"><h1 class="t26" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Hello ${docName},</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t35" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t34" style="width:600px;">
<table class="t33" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t32" style="padding:0 0 22px 0;"><p class="t31" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">We would like to inform you that a new appointment has been booked through the online scheduling system.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t40" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t39" style="width:600px;">
<table class="t38" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t37" style="padding:0 0 22px 0;"><p class="t36" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Please review your schedule and prepare accordingly. You can view this appointment in your doctor dashboard.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t77" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t76" style="background-color:#F0F0F0;width:800px;">
<table class="t75" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t74" style="padding:20px 20px 20px 20px;"><div class="t73" style="width:100%;text-align:left;"><div class="t72" style="display:inline-block;"><table class="t71" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="middle">
<tr class="t70"><td></td><td class="t46" width="112.36763" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t45" style="width:100%;"><tr><td class="t42" style="width:10px;" width="10"></td><td class="t43"><div style="font-size:0px;"><img class="t41" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="92.36763236763237" height="84.328125" alt="" src="https://www.marketingmuses.com/wp-content/uploads/2018/01/invis-user.png"/></div></td><td class="t44" style="width:10px;" width="10"></td></tr></table>
</td><td class="t69" width="387.63237" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t68" style="width:100%;"><tr><td class="t65" style="width:10px;" width="10"></td><td class="t66"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t51" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="367.6323676323676" class="t50" style="width:600px;">
<table class="t49" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t48" style="padding:0 0 0 10px;"><h1 class="t47" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Patient Name: ${patientName}</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t52" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td><div class="t54" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t58" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="367.6323676323676" class="t57" style="border-top:1px solid #CCCCCC;width:600px;">
<table class="t56" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t55" style="padding:15px 0 0 10px;"><h1 class="t53" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Date: ${date}</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t60" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t64" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="367.6323676323676" class="t63" style="border-top:1px solid #CCCCCC;width:600px;">
<table class="t62" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t61" style="padding:15px 0 0 10px;"><h1 class="t59" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Time: ${timeStart} - ${timeEnd}</h1></td></tr></table>
</td></tr></table>
</td></tr></table></td><td class="t67" style="width:10px;" width="10"></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t78" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t104" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t103" style="background-color:#F0F0F0;width:600px;">
<table class="t102" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t101" style="padding:40px 40px 40px 40px;"><div class="t100" style="width:100%;text-align:left;"><div class="t99" style="display:inline-block;"><table class="t98" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t97"><td></td><td class="t96" width="420" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t95" style="width:100%;"><tr><td class="t94" style="padding:0 0 0 5px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t93" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="414.99999999999994" class="t92" style="width:800px;">
<table class="t91" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t90"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t83" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="414.99999999999994" class="t82" style="width:600px;">
<table class="t81" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t80"><h1 class="t79" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">PAYMENT METHOD</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t84" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t89" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="414.99999999999994" class="t88" style="width:600px;">
<table class="t87" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t86"><p class="t85" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">VNPAY</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>

  `
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD 
  }
})

const info = await transporter.sendMail({
  from: `Healthcare Booking System `,
  to, 
  subject:'📅 New Appointment Booking Received from a Patient',
  html:htmlUserBookingToDoctor
})

console.log('receipt sent: %s', info.messageId)
}

export async function sendConfirmationBookingAndPaymentRequestToUser(to,date,time,docName,patientName) {
  const htmlNotiPaymentToUser=`
  <!--
  * This email was built using Tabular.
  * For more information, visit https://tabular.email
  -->
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  <head>
  <title></title>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <!--[if !mso]>-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!--<![endif]-->
  <meta name="x-apple-disable-message-reformatting" content="" />
  <meta content="target-densitydpi=device-dpi" name="viewport" />
  <meta content="true" name="HandheldFriendly" />
  <meta content="width=device-width" name="viewport" />
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
  <style type="text/css">
  table {
  border-collapse: separate;
  table-layout: fixed;
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt
  }
  table td {
  border-collapse: collapse
  }
  .ExternalClass {
  width: 100%
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
  line-height: 100%
  }
  body, a, li, p, h1, h2, h3 {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  }
  html {
  -webkit-text-size-adjust: none !important
  }
  body, #innerTable {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
  }
  #innerTable img+div {
  display: none;
  display: none !important
  }
  img {
  Margin: 0;
  padding: 0;
  -ms-interpolation-mode: bicubic
  }
  h1, h2, h3, p, a {
  line-height: inherit;
  overflow-wrap: normal;
  white-space: normal;
  word-break: break-word
  }
  a {
  text-decoration: none
  }
  h1, h2, h3, p {
  min-width: 100%!important;
  width: 100%!important;
  max-width: 100%!important;
  display: inline-block!important;
  border: 0;
  padding: 0;
  margin: 0
  }
  a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important
  }
  u + #body a {
  color: inherit;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  }
  a[href^="mailto"],
  a[href^="tel"],
  a[href^="sms"] {
  color: inherit;
  text-decoration: none
  }
  </style>
  <style type="text/css">
  @media (min-width: 481px) {
  .hd { display: none!important }
  }
  </style>
  <style type="text/css">
  @media (max-width: 480px) {
  .hm { display: none!important }
  }
  </style>
  <style type="text/css">
  @media (max-width: 480px) {
  .t105,.t12,.t16,.t57,.t81,.t87,.t93,.t99{vertical-align:top!important}.t66{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t67{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t26{padding-bottom:20px!important}.t25{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t127{padding:40px 30px!important}.t110{padding-bottom:36px!important}.t106{text-align:center!important}.t101,.t103,.t77,.t79,.t83,.t85,.t89,.t91,.t95,.t97{display:revert!important}.t58,.t59{display:block!important}.t105,.t81,.t87,.t93,.t99{width:44px!important}.t17{text-align:right!important}.t16{width:80px!important}.t14{padding-bottom:50px!important}.t12{width:370px!important}.t58{text-align:left!important}.t57{display:inline-block!important;width:100%!important;max-width:800px!important}.t55{padding-left:0!important}
  }
  </style>
  <!--[if !mso]>-->
  <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
  <!--<![endif]-->
  <!--[if mso]>
  <xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  </head>
  <body id="body" class="t133" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class="t132" style="background-color:#242424;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t131" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign="top" align="center">
  <!--[if mso]>
  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
  <v:fill color="#242424"/>
  </v:background>
  <![endif]-->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t66" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t70" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t69" style="background-color:#F8F8F8;width:600px;">
  <table class="t68" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t67" style="padding:0 50px 60px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
  <table class="t24" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t23" style="width:800px;">
  <table class="t22" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t21"><div class="t20" style="width:100%;text-align:right;"><div class="t19" style="display:inline-block;"><table class="t18" role="presentation" cellpadding="0" cellspacing="0" align="right" valign="top">
  <tr class="t17"><td></td><td class="t12" width="370" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t11" style="width:100%;"><tr><td class="t10" style="padding:35px 0 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
  <table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="370" class="t3" style="width:600px;">
  <table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1"><p class="t0" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Booking notification</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t9" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="370" class="t8" style="width:600px;">
  <table class="t7" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t6" style="padding:0 0 22px 0;"><p class="t5" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Date: ${date}</p></td></tr></table>
  </td></tr></table>
  </td></tr></table></td></tr></table>
  </td><td class="t16" width="130" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t15" style="width:100%;"><tr><td class="t14" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t13" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="129.078125" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/3c6945dc-6b0f-4a7f-86ce-23cb0fc42212.jpeg"/></div></td></tr></table>
  </td>
  <td></td></tr>
  </table></div></div></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t29" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t28" style="width:600px;">
  <table class="t27" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t26" style="padding:0 0 15px 0;"><h1 class="t25" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Hello ${patientName},</h1></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t39" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t38" style="width:600px;">
  <table class="t37" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t36" style="padding:0 0 22px 0;"><p class="t35" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Your appointment with <span class="t30" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">${docName}</span> has been confirmed. Kindly visit our website, navigate to the &quot;<span class="t31" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">My Appointment</span>&quot; section, select your appointment scheduled for<span class="t32" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;"> ${date}</span> at <span class="t33" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">${time}</span>, and choose the &quot;<span class="t34" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Pay Online</span>&quot; option to complete the payment at your earliest convenience. We eagerly await your response.</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t65" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t64" style="background-color:#F0F0F0;width:600px;">
  <table class="t63" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t62" style="padding:40px 40px 40px 40px;"><div class="t61" style="width:100%;text-align:left;"><div class="t60" style="display:inline-block;"><table class="t59" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
  <tr class="t58"><td></td><td class="t57" width="420" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t56" style="width:100%;"><tr><td class="t55" style="padding:0 0 0 5px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
  <table class="t54" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="414.99999999999994" class="t53" style="width:800px;">
  <table class="t52" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t51"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
  <table class="t44" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="414.99999999999994" class="t43" style="width:600px;">
  <table class="t42" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t41"><h1 class="t40" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">PAYMENT METHOD</h1></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td><div class="t45" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t50" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="414.99999999999994" class="t49" style="width:600px;">
  <table class="t48" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t47"><p class="t46" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">VNPAY</p></td></tr></table>
  </td></tr></table>
  </td></tr></table></td></tr></table>
  </td></tr></table>
  </td></tr></table></td></tr></table>
  </td>
  <td></td></tr>
  </table></div></div></td></tr></table>
  </td></tr></table>
  </td></tr></table></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t130" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t129" style="background-color:#242424;width:600px;">
  <table class="t128" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t127" style="padding:48px 50px 48px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
  <table class="t75" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t74" style="width:600px;">
  <table class="t73" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t72"><p class="t71" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">Want updates through more platforms?</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t113" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t112" style="width:800px;">
  <table class="t111" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t110" style="padding:10px 0 44px 0;"><div class="t109" style="width:100%;text-align:center;"><div class="t108" style="display:inline-block;"><table class="t107" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
  <tr class="t106"><td></td><td class="t81" width="44" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t80" style="width:100%;"><tr><td class="t77" style="width:10px;" width="10"></td><td class="t78"><div style="font-size:0px;"><img class="t76" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/238994e3-e63d-463c-8294-9c1e41be5864.png"/></div></td><td class="t79" style="width:10px;" width="10"></td></tr></table>
  </td><td class="t87" width="44" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t86" style="width:100%;"><tr><td class="t83" style="width:10px;" width="10"></td><td class="t84"><div style="font-size:0px;"><img class="t82" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/f9284271-e6cd-429c-a733-642a62f1c710.png"/></div></td><td class="t85" style="width:10px;" width="10"></td></tr></table>
  </td><td class="t93" width="44" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t92" style="width:100%;"><tr><td class="t89" style="width:10px;" width="10"></td><td class="t90"><div style="font-size:0px;"><img class="t88" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/e0e5b823-7c9f-4c51-bd3b-b1dbf1dffea0.png"/></div></td><td class="t91" style="width:10px;" width="10"></td></tr></table>
  </td><td class="t99" width="44" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t98" style="width:100%;"><tr><td class="t95" style="width:10px;" width="10"></td><td class="t96"><div style="font-size:0px;"><img class="t94" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/646223c1-6bf9-4b68-a633-1c75c092c6a6.png"/></div></td><td class="t97" style="width:10px;" width="10"></td></tr></table>
  </td><td class="t105" width="44" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t104" style="width:100%;"><tr><td class="t101" style="width:10px;" width="10"></td><td class="t102"><div style="font-size:0px;"><img class="t100" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/10955565-efe6-47c3-b8c8-a713635831fc.png"/></div></td><td class="t103" style="width:10px;" width="10"></td></tr></table>
  </td>
  <td></td></tr>
  </table></div></div></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t118" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t117" style="width:600px;">
  <table class="t116" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t115"><p class="t114" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">4019 Waterview Lane, Santa Fe, NM, New Mexico 87500</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t126" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t125" style="width:600px;">
  <table class="t124" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t123"><p class="t122" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;"><a class="t119" href="https://tabular.email" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;" target="_blank">Unsubscribe</a>&nbsp; •&nbsp; <a class="t120" href="https://tabular.email" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;" target="_blank">Privacy policy</a>&nbsp; •&nbsp; <a class="t121" href="https://tabular.email" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#878787;mso-line-height-rule:exactly;" target="_blank">Contact us</a></p></td></tr></table>
  </td></tr></table>
  </td></tr></table></td></tr></table>
  </td></tr></table>
  </td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
  </html>
  `

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD 
  }
})

const info = await transporter.sendMail({
  from: `Healthcare Booking System `,
  to, 
  subject:'Appointment Confirmation and Payment Instructions',
  html:htmlNotiPaymentToUser
})

console.log('receipt sent: %s', info.messageId)
}
export async function sendConfirmationScheduleToUser(to,date,time,docName,emailDoc,linkMeet,slotId,patientName) {
const htmlConfirmBooking=
`
<!--
* This email was built using Tabular.
* For more information, visit https://tabular.email
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t88{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t89{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t6{padding-bottom:20px!important}.t5{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t136{padding:40px 30px!important}.t132{padding-bottom:36px!important}.t128{text-align:center!important}.t101,.t105,.t107,.t111,.t113,.t117,.t119,.t123,.t125,.t99{display:revert!important}.t103,.t109,.t115,.t121,.t127{vertical-align:top!important;width:44px!important}.t1{padding-bottom:50px!important}.t3{width:80px!important}.t86{width:353px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t142" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class="t141" style="background-color:#242424;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t140" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#242424"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t88" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t92" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t91" style="background-color:#F8F8F8;width:600px;">
<table class="t90" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t89" style="padding:0 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
<table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="130" class="t3" style="width:130px;">
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="129.078125" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/3c6945dc-6b0f-4a7f-86ce-23cb0fc42212.jpeg"/></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t9" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t8" style="width:600px;">
<table class="t7" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t6" style="padding:0 0 15px 0;"><h1 class="t5" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Hi ${patientName}, thank you for your booking.</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t14" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t13" style="width:600px;">
<table class="t12" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t11" style="padding:0 0 22px 0;"><p class="t10" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Thank you for scheduling your appointment with us. Your booking has been successfully received and is currently being processed.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t19" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t18" style="width:600px;">
<table class="t17" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t16" style="padding:0 0 22px 0;"><p class="t15" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">We will send you a confirmation with the full appointment details shortly. Should you have any questions or need to make changes, feel free to contact us at your convenience.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t24" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t23" style="width:600px;">
<table class="t22" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t21" style="padding:0 0 22px 0;"><p class="t20" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">We truly appreciate your trust in our medical care and look forward to seeing you soon.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t29" style="width:600px;">
<table class="t28" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t27"><p class="t26" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t25" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Slot Id</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t35" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t34" style="width:600px;">
<table class="t33" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t32" style="padding:0 0 22px 0;"><p class="t31" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${slotId}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t40" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t39" style="width:600px;">
<table class="t38" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t37"><p class="t36" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:700;font-style:normal;font-size:17px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Information Doctor &amp; Booking&nbsp;</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t47" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t46" style="width:600px;">
<table class="t45" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t44"><p class="t43" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t41" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Full Name Docto</span><span class="t42" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">r:</span> ${docName}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t53" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t52" style="width:600px;">
<table class="t51" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t50"><p class="t49" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t48" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Email Doctor:</span> ${emailDoc}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t59" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t58" style="width:600px;">
<table class="t57" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t56"><p class="t55" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t54" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Booking Date:</span> ${date}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t65" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t64" style="width:600px;">
<table class="t63" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t62"><p class="t61" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t60" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Booking Time:</span> ${time}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t66" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t74" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t73" style="width:600px;">
<table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Please ensure you have a working <span class="t67" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">microphone</span> and <span class="t68" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">camera</span>, and join the online meeting at least <span class="t69" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">5 minutes</span> before your scheduled time for the best experience.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t75" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t81" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t80" style="width:600px;">
<table class="t79" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t78"><p class="t77" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">To begin your online consultation, please click the <span class="t76" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">link</span> below:</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t82" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
<table class="t87" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="250" class="t86" style="background-color:#2720E6;overflow:hidden;width:250px;border-radius:44px 44px 44px 44px;">
<table class="t85" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t84" style="text-align:center;line-height:44px;mso-line-height-rule:exactly;mso-text-raise:10px;"><a class="t83" href=${linkMeet} style="display:block;margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:44px;font-weight:800;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;letter-spacing:2.4px;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:10px;" target="_blank">LiNK</a></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t139" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t138" style="background-color:#242424;width:600px;">
<table class="t137" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t136" style="padding:48px 50px 48px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t97" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t96" style="width:600px;">
<table class="t95" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t94"><p class="t93" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">Want updates through more platforms?</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t135" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t134" style="width:800px;">
<table class="t133" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t132" style="padding:10px 0 44px 0;"><div class="t131" style="width:100%;text-align:center;"><div class="t130" style="display:inline-block;"><table class="t129" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t128"><td></td><td class="t103" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t102" style="width:100%;"><tr><td class="t99" style="width:10px;" width="10"></td><td class="t100"><div style="font-size:0px;"><img class="t98" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/649a63fc-cd0a-4750-bbcc-79b1528b331b.png"/></div></td><td class="t101" style="width:10px;" width="10"></td></tr></table>
</td><td class="t109" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t108" style="width:100%;"><tr><td class="t105" style="width:10px;" width="10"></td><td class="t106"><div style="font-size:0px;"><img class="t104" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/f9284271-e6cd-429c-a733-642a62f1c710.png"/></div></td><td class="t107" style="width:10px;" width="10"></td></tr></table>
</td><td class="t115" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t114" style="width:100%;"><tr><td class="t111" style="width:10px;" width="10"></td><td class="t112"><div style="font-size:0px;"><img class="t110" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/e0e5b823-7c9f-4c51-bd3b-b1dbf1dffea0.png"/></div></td><td class="t113" style="width:10px;" width="10"></td></tr></table>
</td><td class="t121" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t120" style="width:100%;"><tr><td class="t117" style="width:10px;" width="10"></td><td class="t118"><div style="font-size:0px;"><img class="t116" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/646223c1-6bf9-4b68-a633-1c75c092c6a6.png"/></div></td><td class="t119" style="width:10px;" width="10"></td></tr></table>
</td><td class="t127" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t126" style="width:100%;"><tr><td class="t123" style="width:10px;" width="10"></td><td class="t124"><div style="font-size:0px;"><img class="t122" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/10955565-efe6-47c3-b8c8-a713635831fc.png"/></div></td><td class="t125" style="width:10px;" width="10"></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>
`
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD 
  }
})

const info = await transporter.sendMail({
  from: `Healthcare Booking System `,
  to, 
  subject:'Your Appointment is Confirmed – Join Link Inside',
  html:htmlConfirmBooking
})

console.log('receipt sent: %s', info.messageId)
}

export async function sendConfirmationCancelScheduleFromUserToDoctor(to,date,time,patientName,emailPatient,slotId,docName) {
  const html=
  `
  <!--
  * This email was built using Tabular.
  * For more information, visit https://tabular.email
  -->
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  <head>
  <title></title>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <!--[if !mso]>-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!--<![endif]-->
  <meta name="x-apple-disable-message-reformatting" content="" />
  <meta content="target-densitydpi=device-dpi" name="viewport" />
  <meta content="true" name="HandheldFriendly" />
  <meta content="width=device-width" name="viewport" />
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
  <style type="text/css">
  table {
  border-collapse: separate;
  table-layout: fixed;
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt
  }
  table td {
  border-collapse: collapse
  }
  .ExternalClass {
  width: 100%
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
  line-height: 100%
  }
  body, a, li, p, h1, h2, h3 {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  }
  html {
  -webkit-text-size-adjust: none !important
  }
  body, #innerTable {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
  }
  #innerTable img+div {
  display: none;
  display: none !important
  }
  img {
  Margin: 0;
  padding: 0;
  -ms-interpolation-mode: bicubic
  }
  h1, h2, h3, p, a {
  line-height: inherit;
  overflow-wrap: normal;
  white-space: normal;
  word-break: break-word
  }
  a {
  text-decoration: none
  }
  h1, h2, h3, p {
  min-width: 100%!important;
  width: 100%!important;
  max-width: 100%!important;
  display: inline-block!important;
  border: 0;
  padding: 0;
  margin: 0
  }
  a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important
  }
  u + #body a {
  color: inherit;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  }
  a[href^="mailto"],
  a[href^="tel"],
  a[href^="sms"] {
  color: inherit;
  text-decoration: none
  }
  </style>
  <style type="text/css">
  @media (min-width: 481px) {
  .hd { display: none!important }
  }
  </style>
  <style type="text/css">
  @media (max-width: 480px) {
  .hm { display: none!important }
  }
  </style>
  <style type="text/css">
  @media (max-width: 480px) {
  .t88{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t89{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t6{padding-bottom:20px!important}.t5{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t136{padding:40px 30px!important}.t132{padding-bottom:36px!important}.t128{text-align:center!important}.t101,.t105,.t107,.t111,.t113,.t117,.t119,.t123,.t125,.t99{display:revert!important}.t103,.t109,.t115,.t121,.t127{vertical-align:top!important;width:44px!important}.t1{padding-bottom:50px!important}.t3{width:80px!important}.t86{width:353px!important}
  }
  </style>
  <!--[if !mso]>-->
  <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
  <!--<![endif]-->
  <!--[if mso]>
  <xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  </head>
  <body id="body" class="t142" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class="t141" style="background-color:#242424;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t140" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign="top" align="center">
  <!--[if mso]>
  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
  <v:fill color="#242424"/>
  </v:background>
  <![endif]-->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t88" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t92" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t91" style="background-color:#F8F8F8;width:600px;">
  <table class="t90" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t89" style="padding:0 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
  <table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="130" class="t3" style="width:130px;">
  <table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="129.078125" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/3c6945dc-6b0f-4a7f-86ce-23cb0fc42212.jpeg"/></div></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t9" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t8" style="width:600px;">
  <table class="t7" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t6" style="padding:0 0 15px 0;"><h1 class="t5" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Hi ${docName}</h1></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t14" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t13" style="width:600px;">
  <table class="t12" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t11" style="padding:0 0 22px 0;"><p class="t10" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">We’re truly sorry to let you know that your appointment has been cancelled.
  Please accept our sincerest apologies for any inconvenience this may cause you.</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t19" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t18" style="width:600px;">
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t24" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t23" style="width:600px;">
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t29" style="width:600px;">
  <table class="t28" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t27"><p class="t26" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t25" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Slot Id</span></p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t35" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t34" style="width:600px;">
  <table class="t33" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t32" style="padding:0 0 22px 0;"><p class="t31" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${slotId}</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t40" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t39" style="width:600px;">
  <table class="t38" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t37"><p class="t36" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:700;font-style:normal;font-size:17px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Information Patient &amp; Booking&nbsp;</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t47" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t46" style="width:600px;">
  <table class="t45" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t44"><p class="t43" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t41" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Full Name Patien</span><span class="t42" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">t:</span> ${patientName}</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t53" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t52" style="width:600px;">
  <table class="t51" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t50"><p class="t49" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t48" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Email Patient:</span> ${emailPatient}</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t59" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t58" style="width:600px;">
  <table class="t57" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t56"><p class="t55" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t54" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Booking Date:</span> ${date}</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t65" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t64" style="width:600px;">
  <table class="t63" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t62"><p class="t61" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t60" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Booking Time:</span> ${time}</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td><div class="t66" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t74" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t73" style="width:600px;">
  <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">We deeply value your trust in our service, and we understand how important this appointment is to you.
  If you would like to reschedule or if there’s anything else we can assist you with, please don’t hesitate to reach out.
  Our team is always ready to support you and arrange a new appointment at your earliest convenience.
  
  
  </td></tr></table>
  <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
  Thank you once again for your understanding and patience.
  We look forward to welcoming you back soon and continuing to provide you with the best care possible.
  
  </td></tr></table>
  </td></tr><tr><td><div class="t75" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t81" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t80" style="width:600px;">
  </td></tr></table>
  </td></tr><tr><td><div class="t82" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
  <table class="t87" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="250" class="t86" style="background-color:#2720E6;overflow:hidden;width:250px;border-radius:44px 44px 44px 44px;">
  </td></tr></table>
  </td></tr></table></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t139" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t138" style="background-color:#242424;width:600px;">
  <table class="t137" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t136" style="padding:48px 50px 48px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
  <table class="t97" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t96" style="width:600px;">
  <table class="t95" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t94"><p class="t93" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">Want updates through more platforms?</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t135" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t134" style="width:800px;">
  <table class="t133" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t132" style="padding:10px 0 44px 0;"><div class="t131" style="width:100%;text-align:center;"><div class="t130" style="display:inline-block;"><table class="t129" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
  <tr class="t128"><td></td><td class="t103" width="44" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t102" style="width:100%;"><tr><td class="t99" style="width:10px;" width="10"></td><td class="t100"><div style="font-size:0px;"><img class="t98" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/649a63fc-cd0a-4750-bbcc-79b1528b331b.png"/></div></td><td class="t101" style="width:10px;" width="10"></td></tr></table>
  </td><td class="t109" width="44" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t108" style="width:100%;"><tr><td class="t105" style="width:10px;" width="10"></td><td class="t106"><div style="font-size:0px;"><img class="t104" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/f9284271-e6cd-429c-a733-642a62f1c710.png"/></div></td><td class="t107" style="width:10px;" width="10"></td></tr></table>
  </td><td class="t115" width="44" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t114" style="width:100%;"><tr><td class="t111" style="width:10px;" width="10"></td><td class="t112"><div style="font-size:0px;"><img class="t110" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/e0e5b823-7c9f-4c51-bd3b-b1dbf1dffea0.png"/></div></td><td class="t113" style="width:10px;" width="10"></td></tr></table>
  </td><td class="t121" width="44" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t120" style="width:100%;"><tr><td class="t117" style="width:10px;" width="10"></td><td class="t118"><div style="font-size:0px;"><img class="t116" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/646223c1-6bf9-4b68-a633-1c75c092c6a6.png"/></div></td><td class="t119" style="width:10px;" width="10"></td></tr></table>
  </td><td class="t127" width="44" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t126" style="width:100%;"><tr><td class="t123" style="width:10px;" width="10"></td><td class="t124"><div style="font-size:0px;"><img class="t122" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/10955565-efe6-47c3-b8c8-a713635831fc.png"/></div></td><td class="t125" style="width:10px;" width="10"></td></tr></table>
  </td>
  <td></td></tr>
  </table></div></div></td></tr></table>
  </td></tr></table>
  </td></tr></table></td></tr></table>
  </td></tr></table>
  </td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
  </html>
  `

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD 
    }
  })
  
  const info = await transporter.sendMail({
    from: `Healthcare Booking System `,
    to, 
    subject:'Important Update: Your Appointment Has Been Cancelled',
    html:html
  })
  
  console.log('receipt sent: %s', info.messageId)
  }
  

  export async function sendConfirmationCancelScheduleFromDoctorToUser(to,date,time,docName,emailDoc,slotId,patientName) {
    const html=
    `
    <!--
    * This email was built using Tabular.
    * For more information, visit https://tabular.email
    -->
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    <head>
    <title></title>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <!--[if !mso]>-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="x-apple-disable-message-reformatting" content="" />
    <meta content="target-densitydpi=device-dpi" name="viewport" />
    <meta content="true" name="HandheldFriendly" />
    <meta content="width=device-width" name="viewport" />
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
    <style type="text/css">
    table {
    border-collapse: separate;
    table-layout: fixed;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt
    }
    table td {
    border-collapse: collapse
    }
    .ExternalClass {
    width: 100%
    }
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
    line-height: 100%
    }
    body, a, li, p, h1, h2, h3 {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    }
    html {
    -webkit-text-size-adjust: none !important
    }
    body, #innerTable {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
    }
    #innerTable img+div {
    display: none;
    display: none !important
    }
    img {
    Margin: 0;
    padding: 0;
    -ms-interpolation-mode: bicubic
    }
    h1, h2, h3, p, a {
    line-height: inherit;
    overflow-wrap: normal;
    white-space: normal;
    word-break: break-word
    }
    a {
    text-decoration: none
    }
    h1, h2, h3, p {
    min-width: 100%!important;
    width: 100%!important;
    max-width: 100%!important;
    display: inline-block!important;
    border: 0;
    padding: 0;
    margin: 0
    }
    a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important
    }
    u + #body a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    }
    a[href^="mailto"],
    a[href^="tel"],
    a[href^="sms"] {
    color: inherit;
    text-decoration: none
    }
    </style>
    <style type="text/css">
    @media (min-width: 481px) {
    .hd { display: none!important }
    }
    </style>
    <style type="text/css">
    @media (max-width: 480px) {
    .hm { display: none!important }
    }
    </style>
    <style type="text/css">
    @media (max-width: 480px) {
    .t88{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t89{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t6{padding-bottom:20px!important}.t5{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t136{padding:40px 30px!important}.t132{padding-bottom:36px!important}.t128{text-align:center!important}.t101,.t105,.t107,.t111,.t113,.t117,.t119,.t123,.t125,.t99{display:revert!important}.t103,.t109,.t115,.t121,.t127{vertical-align:top!important;width:44px!important}.t1{padding-bottom:50px!important}.t3{width:80px!important}.t86{width:353px!important}
    }
    </style>
    <!--[if !mso]>-->
    <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
    <!--<![endif]-->
    <!--[if mso]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    </head>
    <body id="body" class="t142" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class="t141" style="background-color:#242424;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t140" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign="top" align="center">
    <!--[if mso]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
    <v:fill color="#242424"/>
    </v:background>
    <![endif]-->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t88" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
    <table class="t92" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t91" style="background-color:#F8F8F8;width:600px;">
    <table class="t90" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t89" style="padding:0 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
    <table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="130" class="t3" style="width:130px;">
    <table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="129.078125" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/3c6945dc-6b0f-4a7f-86ce-23cb0fc42212.jpeg"/></div></td></tr></table>
    </td></tr></table>
    </td></tr><tr><td align="center">
    <table class="t9" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t8" style="width:600px;">
    <table class="t7" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t6" style="padding:0 0 15px 0;"><h1 class="t5" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Hi ${patientName}</h1></td></tr></table>
    </td></tr></table>
    </td></tr><tr><td align="center">
    <table class="t14" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t13" style="width:600px;">
    <table class="t12" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t11" style="padding:0 0 22px 0;"><p class="t10" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">We’re truly sorry to let you know that your appointment has been cancelled.
    Please accept our sincerest apologies for any inconvenience this may cause you.</p></td></tr></table>
    </td></tr></table>
    </td></tr><tr><td align="center">
    <table class="t19" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t18" style="width:600px;">
    </td></tr></table>
    </td></tr><tr><td align="center">
    <table class="t24" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t23" style="width:600px;">
    </td></tr></table>
    </td></tr><tr><td align="center">
    <table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t29" style="width:600px;">
    <table class="t28" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t27"><p class="t26" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t25" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Slot Id</span></p></td></tr></table>
    </td></tr></table>
    </td></tr><tr><td align="center">
    <table class="t35" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t34" style="width:600px;">
    <table class="t33" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t32" style="padding:0 0 22px 0;"><p class="t31" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${slotId}</p></td></tr></table>
    </td></tr></table>
    </td></tr><tr><td align="center">
    <table class="t40" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t39" style="width:600px;">
    <table class="t38" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t37"><p class="t36" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:700;font-style:normal;font-size:17px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Information Doctor &amp; Booking&nbsp;</p></td></tr></table>
    </td></tr></table>
    </td></tr><tr><td align="center">
    <table class="t47" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t46" style="width:600px;">
    <table class="t45" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t44"><p class="t43" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t41" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Full Name Docto</span><span class="t42" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">r:</span> ${docName}</p></td></tr></table>
    </td></tr></table>
    </td></tr><tr><td align="center">
    <table class="t53" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t52" style="width:600px;">
    <table class="t51" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t50"><p class="t49" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t48" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Email Doctor:</span> ${emailDoc}</p></td></tr></table>
    </td></tr></table>
    </td></tr><tr><td align="center">
    <table class="t59" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t58" style="width:600px;">
    <table class="t57" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t56"><p class="t55" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t54" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Booking Date:</span> ${date}</p></td></tr></table>
    </td></tr></table>
    </td></tr><tr><td align="center">
    <table class="t65" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t64" style="width:600px;">
    <table class="t63" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t62"><p class="t61" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t60" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Booking Time:</span> ${time}</p></td></tr></table>
    </td></tr></table>
    </td></tr><tr><td><div class="t66" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
    <table class="t74" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t73" style="width:600px;">
    <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">We deeply value your trust in our service, and we understand how important this appointment is to you.
    If you would like to reschedule or if there’s anything else we can assist you with, please don’t hesitate to reach out.
    Our team is always ready to support you and arrange a new appointment at your earliest convenience.
    
    
    </td></tr></table>
    <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
    Thank you once again for your understanding and patience.
    We look forward to welcoming you back soon and continuing to provide you with the best care possible.
    
    </td></tr></table>
    </td></tr><tr><td><div class="t75" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
    <table class="t81" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t80" style="width:600px;">
    </td></tr></table>
    </td></tr><tr><td><div class="t82" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
    <table class="t87" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="250" class="t86" style="background-color:#2720E6;overflow:hidden;width:250px;border-radius:44px 44px 44px 44px;">
    </td></tr></table>
    </td></tr></table></td></tr></table>
    </td></tr></table>
    </td></tr><tr><td align="center">
    <table class="t139" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t138" style="background-color:#242424;width:600px;">
    <table class="t137" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t136" style="padding:48px 50px 48px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
    <table class="t97" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t96" style="width:600px;">
    <table class="t95" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t94"><p class="t93" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">Want updates through more platforms?</p></td></tr></table>
    </td></tr></table>
    </td></tr><tr><td align="center">
    <table class="t135" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t134" style="width:800px;">
    <table class="t133" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t132" style="padding:10px 0 44px 0;"><div class="t131" style="width:100%;text-align:center;"><div class="t130" style="display:inline-block;"><table class="t129" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
    <tr class="t128"><td></td><td class="t103" width="44" valign="top">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t102" style="width:100%;"><tr><td class="t99" style="width:10px;" width="10"></td><td class="t100"><div style="font-size:0px;"><img class="t98" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/649a63fc-cd0a-4750-bbcc-79b1528b331b.png"/></div></td><td class="t101" style="width:10px;" width="10"></td></tr></table>
    </td><td class="t109" width="44" valign="top">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t108" style="width:100%;"><tr><td class="t105" style="width:10px;" width="10"></td><td class="t106"><div style="font-size:0px;"><img class="t104" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/f9284271-e6cd-429c-a733-642a62f1c710.png"/></div></td><td class="t107" style="width:10px;" width="10"></td></tr></table>
    </td><td class="t115" width="44" valign="top">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t114" style="width:100%;"><tr><td class="t111" style="width:10px;" width="10"></td><td class="t112"><div style="font-size:0px;"><img class="t110" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/e0e5b823-7c9f-4c51-bd3b-b1dbf1dffea0.png"/></div></td><td class="t113" style="width:10px;" width="10"></td></tr></table>
    </td><td class="t121" width="44" valign="top">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t120" style="width:100%;"><tr><td class="t117" style="width:10px;" width="10"></td><td class="t118"><div style="font-size:0px;"><img class="t116" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/646223c1-6bf9-4b68-a633-1c75c092c6a6.png"/></div></td><td class="t119" style="width:10px;" width="10"></td></tr></table>
    </td><td class="t127" width="44" valign="top">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t126" style="width:100%;"><tr><td class="t123" style="width:10px;" width="10"></td><td class="t124"><div style="font-size:0px;"><img class="t122" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/10955565-efe6-47c3-b8c8-a713635831fc.png"/></div></td><td class="t125" style="width:10px;" width="10"></td></tr></table>
    </td>
    <td></td></tr>
    </table></div></div></td></tr></table>
    </td></tr></table>
    </td></tr></table></td></tr></table>
    </td></tr></table>
    </td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
    </html>
    `
  
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD 
      }
    })
    
    const info = await transporter.sendMail({
      from: `Healthcare Booking System `,
      to, 
      subject:'Important Update: Your Appointment Has Been Cancelled',
      html:html
    })
    
    console.log('receipt sent: %s', info.messageId)
    }
  



    export async function sendRequestConfirmationOfOnlineMedicalExamination(to,date,time,docName,emailDoc,slotId,patientName) {
      const html=
     `
  <!--
  * This email was built using Tabular.
  * For more information, visit https://tabular.email
  -->
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  <head>
  <title></title>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <!--[if !mso]>-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!--<![endif]-->
  <meta name="x-apple-disable-message-reformatting" content="" />
  <meta content="target-densitydpi=device-dpi" name="viewport" />
  <meta content="true" name="HandheldFriendly" />
  <meta content="width=device-width" name="viewport" />
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
  <style type="text/css">
  table {
  border-collapse: separate;
  table-layout: fixed;
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt
  }
  table td {
  border-collapse: collapse
  }
  .ExternalClass {
  width: 100%
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
  line-height: 100%
  }
  body, a, li, p, h1, h2, h3 {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  }
  html {
  -webkit-text-size-adjust: none !important
  }
  body, #innerTable {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
  }
  #innerTable img+div {
  display: none;
  display: none !important
  }
  img {
  Margin: 0;
  padding: 0;
  -ms-interpolation-mode: bicubic
  }
  h1, h2, h3, p, a {
  line-height: inherit;
  overflow-wrap: normal;
  white-space: normal;
  word-break: break-word
  }
  a {
  text-decoration: none
  }
  h1, h2, h3, p {
  min-width: 100%!important;
  width: 100%!important;
  max-width: 100%!important;
  display: inline-block!important;
  border: 0;
  padding: 0;
  margin: 0
  }
  a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important
  }
  u + #body a {
  color: inherit;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  }
  a[href^="mailto"],
  a[href^="tel"],
  a[href^="sms"] {
  color: inherit;
  text-decoration: none
  }
  </style>
  <style type="text/css">
  @media (min-width: 481px) {
  .hd { display: none!important }
  }
  </style>
  <style type="text/css">
  @media (max-width: 480px) {
  .hm { display: none!important }
  }
  </style>
  <style type="text/css">
  @media (max-width: 480px) {
  .t88{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t89{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t6{padding-bottom:20px!important}.t5{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t136{padding:40px 30px!important}.t132{padding-bottom:36px!important}.t128{text-align:center!important}.t101,.t105,.t107,.t111,.t113,.t117,.t119,.t123,.t125,.t99{display:revert!important}.t103,.t109,.t115,.t121,.t127{vertical-align:top!important;width:44px!important}.t1{padding-bottom:50px!important}.t3{width:80px!important}.t86{width:353px!important}
  }
  </style>
  <!--[if !mso]>-->
  <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
  <!--<![endif]-->
  <!--[if mso]>
  <xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  </head>
  <body id="body" class="t142" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class="t141" style="background-color:#242424;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t140" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign="top" align="center">
  <!--[if mso]>
  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
  <v:fill color="#242424"/>
  </v:background>
  <![endif]-->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t88" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t92" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t91" style="background-color:#F8F8F8;width:600px;">
  <table class="t90" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t89" style="padding:0 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
  <table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="130" class="t3" style="width:130px;">
  <table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="129.078125" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/3c6945dc-6b0f-4a7f-86ce-23cb0fc42212.jpeg"/></div></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t9" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t8" style="width:600px;">
  <table class="t7" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t6" style="padding:0 0 15px 0;"><h1 class="t5" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Hi ${patientName}</h1></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t14" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t13" style="width:600px;">
  <table class="t12" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t11" style="padding:0 0 22px 0;"><p class="t10" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">We sincerely hope you were satisfied with your recent online consultation. Please kindly confirm the completion of the appointment to receive your prescription (if applicable). Thank you for your trust and cooperation !</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t19" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t18" style="width:600px;">
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t24" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t23" style="width:600px;">
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t29" style="width:600px;">
  <table class="t28" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t27"><p class="t26" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t25" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Slot Id</span></p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t35" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t34" style="width:600px;">
  <table class="t33" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t32" style="padding:0 0 22px 0;"><p class="t31" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${slotId}</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t40" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t39" style="width:600px;">
  <table class="t38" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t37"><p class="t36" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:700;font-style:normal;font-size:17px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Information Doctor &amp; Booking&nbsp;</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t47" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t46" style="width:600px;">
  <table class="t45" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t44"><p class="t43" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t41" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Full Name Docto</span><span class="t42" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">r:</span> ${docName}</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t53" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t52" style="width:600px;">
  <table class="t51" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t50"><p class="t49" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t48" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Email Doctor:</span> ${emailDoc}</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t59" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t58" style="width:600px;">
  <table class="t57" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t56"><p class="t55" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t54" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Booking Date:</span> ${date}</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t65" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t64" style="width:600px;">
  <table class="t63" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t62"><p class="t61" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t60" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Booking Time:</span> ${time}</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td><div class="t66" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t74" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t73" style="width:600px;">
  <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
  
  
  
  </td></tr></table>
  <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">

  </td></tr></table>
  </td></tr><tr><td><div class="t75" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
  <table class="t81" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t80" style="width:600px;">
  </td></tr></table>
  </td></tr><tr><td><div class="t82" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
  <table class="t87" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="250" class="t86" style="background-color:#2720E6;overflow:hidden;width:250px;border-radius:44px 44px 44px 44px;">
  </td></tr></table>
  </td></tr></table></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t139" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t138" style="background-color:#242424;width:600px;">
  <table class="t137" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t136" style="padding:48px 50px 48px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
  <table class="t97" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t96" style="width:600px;">
  <table class="t95" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t94"><p class="t93" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">Want updates through more platforms?</p></td></tr></table>
  </td></tr></table>
  </td></tr><tr><td align="center">
  <table class="t135" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t134" style="width:800px;">
  <table class="t133" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t132" style="padding:10px 0 44px 0;"><div class="t131" style="width:100%;text-align:center;"><div class="t130" style="display:inline-block;"><table class="t129" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
  <tr class="t128"><td></td><td class="t103" width="44" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t102" style="width:100%;"><tr><td class="t99" style="width:10px;" width="10"></td><td class="t100"><div style="font-size:0px;"><img class="t98" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/649a63fc-cd0a-4750-bbcc-79b1528b331b.png"/></div></td><td class="t101" style="width:10px;" width="10"></td></tr></table>
  </td><td class="t109" width="44" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t108" style="width:100%;"><tr><td class="t105" style="width:10px;" width="10"></td><td class="t106"><div style="font-size:0px;"><img class="t104" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/f9284271-e6cd-429c-a733-642a62f1c710.png"/></div></td><td class="t107" style="width:10px;" width="10"></td></tr></table>
  </td><td class="t115" width="44" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t114" style="width:100%;"><tr><td class="t111" style="width:10px;" width="10"></td><td class="t112"><div style="font-size:0px;"><img class="t110" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/e0e5b823-7c9f-4c51-bd3b-b1dbf1dffea0.png"/></div></td><td class="t113" style="width:10px;" width="10"></td></tr></table>
  </td><td class="t121" width="44" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t120" style="width:100%;"><tr><td class="t117" style="width:10px;" width="10"></td><td class="t118"><div style="font-size:0px;"><img class="t116" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/646223c1-6bf9-4b68-a633-1c75c092c6a6.png"/></div></td><td class="t119" style="width:10px;" width="10"></td></tr></table>
  </td><td class="t127" width="44" valign="top">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t126" style="width:100%;"><tr><td class="t123" style="width:10px;" width="10"></td><td class="t124"><div style="font-size:0px;"><img class="t122" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/10955565-efe6-47c3-b8c8-a713635831fc.png"/></div></td><td class="t125" style="width:10px;" width="10"></td></tr></table>
  </td>
  <td></td></tr>
  </table></div></div></td></tr></table>
  </td></tr></table>
  </td></tr></table></td></tr></table>
  </td></tr></table>
  </td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
  </html>
  `
    
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD 
        }
      })
      
      const info = await transporter.sendMail({
        from: `Healthcare Booking System `,
        to, 
        subject:'Please Confirm Completion of Your Online Appointment',
        html:html
      })
      
      console.log('receipt sent: %s', info.messageId)
      }



      export async function sendPrescriptionNotificationToUser(to,date,time,docName,emailDoc,slotId,patientName) {
        const html=
        `
        <!--
        * This email was built using Tabular.
        * For more information, visit https://tabular.email
        -->
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
        <head>
        <title></title>
        <meta charset="UTF-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <!--[if !mso]>-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!--<![endif]-->
        <meta name="x-apple-disable-message-reformatting" content="" />
        <meta content="target-densitydpi=device-dpi" name="viewport" />
        <meta content="true" name="HandheldFriendly" />
        <meta content="width=device-width" name="viewport" />
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
        <style type="text/css">
        table {
        border-collapse: separate;
        table-layout: fixed;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt
        }
        table td {
        border-collapse: collapse
        }
        .ExternalClass {
        width: 100%
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height: 100%
        }
        body, a, li, p, h1, h2, h3 {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        }
        html {
        -webkit-text-size-adjust: none !important
        }
        body, #innerTable {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale
        }
        #innerTable img+div {
        display: none;
        display: none !important
        }
        img {
        Margin: 0;
        padding: 0;
        -ms-interpolation-mode: bicubic
        }
        h1, h2, h3, p, a {
        line-height: inherit;
        overflow-wrap: normal;
        white-space: normal;
        word-break: break-word
        }
        a {
        text-decoration: none
        }
        h1, h2, h3, p {
        min-width: 100%!important;
        width: 100%!important;
        max-width: 100%!important;
        display: inline-block!important;
        border: 0;
        padding: 0;
        margin: 0
        }
        a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important
        }
        u + #body a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
        }
        a[href^="mailto"],
        a[href^="tel"],
        a[href^="sms"] {
        color: inherit;
        text-decoration: none
        }
        </style>
        <style type="text/css">
        @media (min-width: 481px) {
        .hd { display: none!important }
        }
        </style>
        <style type="text/css">
        @media (max-width: 480px) {
        .hm { display: none!important }
        }
        </style>
        <style type="text/css">
        @media (max-width: 480px) {
        .t88{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t89{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t6{padding-bottom:20px!important}.t5{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t136{padding:40px 30px!important}.t132{padding-bottom:36px!important}.t128{text-align:center!important}.t101,.t105,.t107,.t111,.t113,.t117,.t119,.t123,.t125,.t99{display:revert!important}.t103,.t109,.t115,.t121,.t127{vertical-align:top!important;width:44px!important}.t1{padding-bottom:50px!important}.t3{width:80px!important}.t86{width:353px!important}
        }
        </style>
        <!--[if !mso]>-->
        <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
        <!--<![endif]-->
        <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        </head>
        <body id="body" class="t142" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class="t141" style="background-color:#242424;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t140" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign="top" align="center">
        <!--[if mso]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
        <v:fill color="#242424"/>
        </v:background>
        <![endif]-->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t88" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
        <table class="t92" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t91" style="background-color:#F8F8F8;width:600px;">
        <table class="t90" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t89" style="padding:0 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
        <table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="130" class="t3" style="width:130px;">
        <table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="129.078125" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/3c6945dc-6b0f-4a7f-86ce-23cb0fc42212.jpeg"/></div></td></tr></table>
        </td></tr></table>
        </td></tr><tr><td align="center">
        <table class="t9" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t8" style="width:600px;">
        <table class="t7" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t6" style="padding:0 0 15px 0;"><h1 class="t5" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Hi ${patientName}</h1></td></tr></table>
        </td></tr></table>
        </td></tr><tr><td align="center">
        <table class="t14" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t13" style="width:600px;">
        <table class="t12" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t11" style="padding:0 0 22px 0;"><p class="t10" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Your doctor has successfully sent your prescription following the recent consultation. Please check your account to view and download the prescription at your earliest convenience. Thank you for choosing our service and placing your trust in us.</p></td></tr></table>
        </td></tr></table>
        </td></tr><tr><td align="center">
        <table class="t19" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t18" style="width:600px;">
        </td></tr></table>
        </td></tr><tr><td align="center">
        <table class="t24" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t23" style="width:600px;">
        </td></tr></table>
        </td></tr><tr><td align="center">
        <table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t29" style="width:600px;">
        <table class="t28" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t27"><p class="t26" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t25" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Slot Id</span></p></td></tr></table>
        </td></tr></table>
        </td></tr><tr><td align="center">
        <table class="t35" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t34" style="width:600px;">
        <table class="t33" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t32" style="padding:0 0 22px 0;"><p class="t31" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${slotId}</p></td></tr></table>
        </td></tr></table>
        </td></tr><tr><td align="center">
        <table class="t40" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t39" style="width:600px;">
        <table class="t38" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t37"><p class="t36" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:700;font-style:normal;font-size:17px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Information Doctor &amp; Booking&nbsp;</p></td></tr></table>
        </td></tr></table>
        </td></tr><tr><td align="center">
        <table class="t47" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t46" style="width:600px;">
        <table class="t45" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t44"><p class="t43" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t41" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Full Name Docto</span><span class="t42" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">r:</span> ${docName}</p></td></tr></table>
        </td></tr></table>
        </td></tr><tr><td align="center">
        <table class="t53" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t52" style="width:600px;">
        <table class="t51" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t50"><p class="t49" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t48" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Email Doctor:</span> ${emailDoc}</p></td></tr></table>
        </td></tr></table>
        </td></tr><tr><td align="center">
        <table class="t59" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t58" style="width:600px;">
        <table class="t57" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t56"><p class="t55" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t54" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Booking Date:</span> ${date}</p></td></tr></table>
        </td></tr></table>
        </td></tr><tr><td align="center">
        <table class="t65" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t64" style="width:600px;">
        <table class="t63" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t62"><p class="t61" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t60" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Booking Time:</span> ${time}</p></td></tr></table>
        </td></tr></table>
        </td></tr><tr><td><div class="t66" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
        <table class="t74" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t73" style="width:600px;">
        <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
        
        
        
        </td></tr></table>
        <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
      
        </td></tr></table>
        </td></tr><tr><td><div class="t75" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
        <table class="t81" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t80" style="width:600px;">
        </td></tr></table>
        </td></tr><tr><td><div class="t82" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
        <table class="t87" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="250" class="t86" style="background-color:#2720E6;overflow:hidden;width:250px;border-radius:44px 44px 44px 44px;">
        </td></tr></table>
        </td></tr></table></td></tr></table>
        </td></tr></table>
        </td></tr><tr><td align="center">
        <table class="t139" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t138" style="background-color:#242424;width:600px;">
        <table class="t137" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t136" style="padding:48px 50px 48px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
        <table class="t97" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t96" style="width:600px;">
        <table class="t95" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t94"><p class="t93" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">Want updates through more platforms?</p></td></tr></table>
        </td></tr></table>
        </td></tr><tr><td align="center">
        <table class="t135" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t134" style="width:800px;">
        <table class="t133" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t132" style="padding:10px 0 44px 0;"><div class="t131" style="width:100%;text-align:center;"><div class="t130" style="display:inline-block;"><table class="t129" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
        <tr class="t128"><td></td><td class="t103" width="44" valign="top">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t102" style="width:100%;"><tr><td class="t99" style="width:10px;" width="10"></td><td class="t100"><div style="font-size:0px;"><img class="t98" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/649a63fc-cd0a-4750-bbcc-79b1528b331b.png"/></div></td><td class="t101" style="width:10px;" width="10"></td></tr></table>
        </td><td class="t109" width="44" valign="top">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t108" style="width:100%;"><tr><td class="t105" style="width:10px;" width="10"></td><td class="t106"><div style="font-size:0px;"><img class="t104" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/f9284271-e6cd-429c-a733-642a62f1c710.png"/></div></td><td class="t107" style="width:10px;" width="10"></td></tr></table>
        </td><td class="t115" width="44" valign="top">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t114" style="width:100%;"><tr><td class="t111" style="width:10px;" width="10"></td><td class="t112"><div style="font-size:0px;"><img class="t110" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/e0e5b823-7c9f-4c51-bd3b-b1dbf1dffea0.png"/></div></td><td class="t113" style="width:10px;" width="10"></td></tr></table>
        </td><td class="t121" width="44" valign="top">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t120" style="width:100%;"><tr><td class="t117" style="width:10px;" width="10"></td><td class="t118"><div style="font-size:0px;"><img class="t116" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/646223c1-6bf9-4b68-a633-1c75c092c6a6.png"/></div></td><td class="t119" style="width:10px;" width="10"></td></tr></table>
        </td><td class="t127" width="44" valign="top">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t126" style="width:100%;"><tr><td class="t123" style="width:10px;" width="10"></td><td class="t124"><div style="font-size:0px;"><img class="t122" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/10955565-efe6-47c3-b8c8-a713635831fc.png"/></div></td><td class="t125" style="width:10px;" width="10"></td></tr></table>
        </td>
        <td></td></tr>
        </table></div></div></td></tr></table>
        </td></tr></table>
        </td></tr></table></td></tr></table>
        </td></tr></table>
        </td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
        </html>
        `
      
      
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD 
          }
        })
        
        const info = await transporter.sendMail({
          from: `Healthcare Booking System `,
          to, 
          subject:'Online Consultation Completed – Prescription Sent',
          html:html
        })
        
        console.log('receipt sent: %s', info.messageId)
        }
  

        export async function sendDeactivateFromAdminToDoctor(to,docName,reason) {
          const html=
          `
          <!--
          * This email was built using Tabular.
          * For more information, visit https://tabular.email
          -->
          <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
          <head>
          <title></title>
          <meta charset="UTF-8" />
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <!--[if !mso]>-->
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <!--<![endif]-->
          <meta name="x-apple-disable-message-reformatting" content="" />
          <meta content="target-densitydpi=device-dpi" name="viewport" />
          <meta content="true" name="HandheldFriendly" />
          <meta content="width=device-width" name="viewport" />
          <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
          <style type="text/css">
          table {
          border-collapse: separate;
          table-layout: fixed;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt
          }
          table td {
          border-collapse: collapse
          }
          .ExternalClass {
          width: 100%
          }
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
          line-height: 100%
          }
          body, a, li, p, h1, h2, h3 {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          }
          html {
          -webkit-text-size-adjust: none !important
          }
          body, #innerTable {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale
          }
          #innerTable img+div {
          display: none;
          display: none !important
          }
          img {
          Margin: 0;
          padding: 0;
          -ms-interpolation-mode: bicubic
          }
          h1, h2, h3, p, a {
          line-height: inherit;
          overflow-wrap: normal;
          white-space: normal;
          word-break: break-word
          }
          a {
          text-decoration: none
          }
          h1, h2, h3, p {
          min-width: 100%!important;
          width: 100%!important;
          max-width: 100%!important;
          display: inline-block!important;
          border: 0;
          padding: 0;
          margin: 0
          }
          a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important
          }
          u + #body a {
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
          }
          a[href^="mailto"],
          a[href^="tel"],
          a[href^="sms"] {
          color: inherit;
          text-decoration: none
          }
          </style>
          <style type="text/css">
          @media (min-width: 481px) {
          .hd { display: none!important }
          }
          </style>
          <style type="text/css">
          @media (max-width: 480px) {
          .hm { display: none!important }
          }
          </style>
          <style type="text/css">
          @media (max-width: 480px) {
          .t88{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t89{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t6{padding-bottom:20px!important}.t5{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t136{padding:40px 30px!important}.t132{padding-bottom:36px!important}.t128{text-align:center!important}.t101,.t105,.t107,.t111,.t113,.t117,.t119,.t123,.t125,.t99{display:revert!important}.t103,.t109,.t115,.t121,.t127{vertical-align:top!important;width:44px!important}.t1{padding-bottom:50px!important}.t3{width:80px!important}.t86{width:353px!important}
          }
          </style>
          <!--[if !mso]>-->
          <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
          <!--<![endif]-->
          <!--[if mso]>
          <xml>
          <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          </head>
          <body id="body" class="t142" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class="t141" style="background-color:#242424;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t140" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign="top" align="center">
          <!--[if mso]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
          <v:fill color="#242424"/>
          </v:background>
          <![endif]-->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t88" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
          <table class="t92" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t91" style="background-color:#F8F8F8;width:600px;">
          <table class="t90" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t89" style="padding:0 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
          <table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="130" class="t3" style="width:130px;">
          <table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="129.078125" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/3c6945dc-6b0f-4a7f-86ce-23cb0fc42212.jpeg"/></div></td></tr></table>
          </td></tr></table>
          </td></tr><tr><td align="center">
          <table class="t9" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t8" style="width:600px;">
          <table class="t7" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t6" style="padding:0 0 15px 0;"><h1 class="t5" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Hi ${docName}</h1></td></tr></table>
          </td></tr></table>
          <p style="font-size: 15px; color: #333;">
      We regret to inform you that your account has been <strong style="color: red;">temporarily deactivated</strong> by our administration team.
    </p>
  
    <p style="font-size: 15px; color: #333; margin-top: 20px;">
      <strong>Reason for deactivation:</strong><br />
      <em>${reason}</em>
    </p>
  
    <p style="font-size: 15px; color: #333; margin-top: 20px;">
      First and foremost, we offer our <strong>sincere apologies</strong> for any inconvenience this decision may cause. Please know that this action was not taken lightly, but was carried out in accordance with our platform’s policies and standards, which are designed to uphold service quality and ensure a safe and trustworthy environment for all users.
    </p>
  
    <p style="font-size: 15px; color: #333;">
      If you believe this was a mistake or would like to discuss this matter further, we encourage you to reach out to our support team. We are more than willing to listen and work with you toward a clear and fair resolution.
    </p>
  
    <p style="font-size: 15px; color: #333;">
      Once again, we deeply regret the necessity of this action and sincerely hope to resolve this with your understanding and cooperation.
    </p>
  
    <p style="font-size: 15px; color: #333;">
      Thank you for your dedication, and we wish you continued health and success.
    </p>
  
    <p style="font-size: 15px; color: #333;">
      <strong>Warm regards,</strong><br />
      <em>The Admin Team</em>
    </p>
          </td></tr><tr><td align="center">
          <table class="t14" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t13" style="width:600px;">
          </td></tr></table>
          </td></tr><tr><td align="center">
          <table class="t19" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t18" style="width:600px;">
          </td></tr></table>
          </td></tr><tr><td align="center">
          <table class="t24" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t23" style="width:600px;">
          </td></tr></table>
          </td></tr><tr><td align="center">
          <table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t29" style="width:600px;">
          </td></tr></table>
          </td></tr><tr><td align="center">
          <table class="t35" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t34" style="width:600px;">
          </td></tr></table>
          </td></tr><tr><td align="center">
          <table class="t40" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t39" style="width:600px;">
          </td></tr></table>
          </td></tr><tr><td align="center">
          <table class="t47" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t46" style="width:600px;">
          </td></tr></table>
          </td></tr><tr><td align="center">
          <table class="t53" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t52" style="width:600px;">
          </td></tr></table>
          </td></tr><tr><td align="center">
          <table class="t59" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t58" style="width:600px;">
          </td></tr></table>
          </td></tr><tr><td align="center">
          <table class="t65" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t64" style="width:600px;">
          </td></tr></table>
          </td></tr><tr><td><div class="t66" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
          <table class="t74" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t73" style="width:600px;">
          <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
          
          
          
          </td></tr></table>
          <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
        
          </td></tr></table>
          </td></tr><tr><td><div class="t75" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
          <table class="t81" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t80" style="width:600px;">
          </td></tr></table>
          </td></tr><tr><td><div class="t82" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
          <table class="t87" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="250" class="t86" style="background-color:#2720E6;overflow:hidden;width:250px;border-radius:44px 44px 44px 44px;">
          </td></tr></table>
          </td></tr></table></td></tr></table>
          </td></tr></table>
          </td></tr><tr><td align="center">
          <table class="t139" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t138" style="background-color:#242424;width:600px;">
          <table class="t137" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t136" style="padding:48px 50px 48px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
          <table class="t97" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t96" style="width:600px;">
          <table class="t95" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t94"><p class="t93" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">Want updates through more platforms?</p></td></tr></table>
          </td></tr></table>
          </td></tr><tr><td align="center">
          <table class="t135" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t134" style="width:800px;">
          <table class="t133" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t132" style="padding:10px 0 44px 0;"><div class="t131" style="width:100%;text-align:center;"><div class="t130" style="display:inline-block;"><table class="t129" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
          <tr class="t128"><td></td><td class="t103" width="44" valign="top">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t102" style="width:100%;"><tr><td class="t99" style="width:10px;" width="10"></td><td class="t100"><div style="font-size:0px;"><img class="t98" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/649a63fc-cd0a-4750-bbcc-79b1528b331b.png"/></div></td><td class="t101" style="width:10px;" width="10"></td></tr></table>
          </td><td class="t109" width="44" valign="top">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t108" style="width:100%;"><tr><td class="t105" style="width:10px;" width="10"></td><td class="t106"><div style="font-size:0px;"><img class="t104" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/f9284271-e6cd-429c-a733-642a62f1c710.png"/></div></td><td class="t107" style="width:10px;" width="10"></td></tr></table>
          </td><td class="t115" width="44" valign="top">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t114" style="width:100%;"><tr><td class="t111" style="width:10px;" width="10"></td><td class="t112"><div style="font-size:0px;"><img class="t110" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/e0e5b823-7c9f-4c51-bd3b-b1dbf1dffea0.png"/></div></td><td class="t113" style="width:10px;" width="10"></td></tr></table>
          </td><td class="t121" width="44" valign="top">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t120" style="width:100%;"><tr><td class="t117" style="width:10px;" width="10"></td><td class="t118"><div style="font-size:0px;"><img class="t116" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/646223c1-6bf9-4b68-a633-1c75c092c6a6.png"/></div></td><td class="t119" style="width:10px;" width="10"></td></tr></table>
          </td><td class="t127" width="44" valign="top">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t126" style="width:100%;"><tr><td class="t123" style="width:10px;" width="10"></td><td class="t124"><div style="font-size:0px;"><img class="t122" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/10955565-efe6-47c3-b8c8-a713635831fc.png"/></div></td><td class="t125" style="width:10px;" width="10"></td></tr></table>
          </td>
          <td></td></tr>
          </table></div></div></td></tr></table>
          </td></tr></table>
          </td></tr></table></td></tr></table>
          </td></tr></table>
          </td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
          </html>
          `
        
        
        
          const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASSWORD 
            }
          })
          
          const info = await transporter.sendMail({
            from: `Healthcare Booking System `,
            to, 
            subject:'We Regret to Inform You – Doctor Account Temporarily Suspended',
            html:html
          })
          
          console.log('receipt sent: %s', info.messageId)
          }



          export async function sendActivateFromAdminToDoctor(to,docName) {
            const html=
            `
            <!--
            * This email was built using Tabular.
            * For more information, visit https://tabular.email
            -->
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
            <head>
            <title></title>
            <meta charset="UTF-8" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <!--[if !mso]>-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <!--<![endif]-->
            <meta name="x-apple-disable-message-reformatting" content="" />
            <meta content="target-densitydpi=device-dpi" name="viewport" />
            <meta content="true" name="HandheldFriendly" />
            <meta content="width=device-width" name="viewport" />
            <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
            <style type="text/css">
            table {
            border-collapse: separate;
            table-layout: fixed;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt
            }
            table td {
            border-collapse: collapse
            }
            .ExternalClass {
            width: 100%
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
            line-height: 100%
            }
            body, a, li, p, h1, h2, h3 {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            }
            html {
            -webkit-text-size-adjust: none !important
            }
            body, #innerTable {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
            }
            #innerTable img+div {
            display: none;
            display: none !important
            }
            img {
            Margin: 0;
            padding: 0;
            -ms-interpolation-mode: bicubic
            }
            h1, h2, h3, p, a {
            line-height: inherit;
            overflow-wrap: normal;
            white-space: normal;
            word-break: break-word
            }
            a {
            text-decoration: none
            }
            h1, h2, h3, p {
            min-width: 100%!important;
            width: 100%!important;
            max-width: 100%!important;
            display: inline-block!important;
            border: 0;
            padding: 0;
            margin: 0
            }
            a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important
            }
            u + #body a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
            }
            a[href^="mailto"],
            a[href^="tel"],
            a[href^="sms"] {
            color: inherit;
            text-decoration: none
            }
            </style>
            <style type="text/css">
            @media (min-width: 481px) {
            .hd { display: none!important }
            }
            </style>
            <style type="text/css">
            @media (max-width: 480px) {
            .hm { display: none!important }
            }
            </style>
            <style type="text/css">
            @media (max-width: 480px) {
            .t88{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t89{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t6{padding-bottom:20px!important}.t5{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t136{padding:40px 30px!important}.t132{padding-bottom:36px!important}.t128{text-align:center!important}.t101,.t105,.t107,.t111,.t113,.t117,.t119,.t123,.t125,.t99{display:revert!important}.t103,.t109,.t115,.t121,.t127{vertical-align:top!important;width:44px!important}.t1{padding-bottom:50px!important}.t3{width:80px!important}.t86{width:353px!important}
            }
            </style>
            <!--[if !mso]>-->
            <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
            <!--<![endif]-->
            <!--[if mso]>
            <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            </head>
            <body id="body" class="t142" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class="t141" style="background-color:#242424;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t140" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign="top" align="center">
            <!--[if mso]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
            <v:fill color="#242424"/>
            </v:background>
            <![endif]-->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t88" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
            <table class="t92" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t91" style="background-color:#F8F8F8;width:600px;">
            <table class="t90" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t89" style="padding:0 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
            <table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="130" class="t3" style="width:130px;">
            <table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="129.078125" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/3c6945dc-6b0f-4a7f-86ce-23cb0fc42212.jpeg"/></div></td></tr></table>
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t9" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t8" style="width:600px;">
            <table class="t7" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t6" style="padding:0 0 15px 0;"><h1 class="t5" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Hi ${docName}</h1></td></tr></table>
            </td></tr></table>
            <p style="font-size: 16px; color: #333;">
      <strong>Dear Doctor,</strong>
    </p>
  
    <p style="font-size: 15px; color: #333;">
      We are pleased to inform you that your account has been <strong style="color: green;">successfully reactivated</strong> by our administration team.
    </p>
  
   
  
    <p style="font-size: 15px; color: #333; margin-top: 20px;">
      We want to take this opportunity to sincerely apologize for any confusion or disruption caused during the deactivation period. Our primary goal is always to ensure the best service and environment for our users.
    </p>
  
    <p style="font-size: 15px; color: #333;">
      We truly appreciate your understanding and cooperation throughout this process, and we're excited to have you back on board. Should you have any questions or need further assistance, please do not hesitate to reach out to us.
    </p>
  
    <p style="font-size: 15px; color: #333;">
      Thank you for your commitment, and we look forward to your continued contributions to our platform.
    </p>
  
    <p style="font-size: 15px; color: #333;">
      <strong>Warm regards,</strong><br />
      <em>The Admin Team</em>
    </p>
            </td></tr><tr><td align="center">
            <table class="t14" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t13" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t19" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t18" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t24" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t23" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t29" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t35" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t34" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t40" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t39" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t47" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t46" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t53" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t52" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t59" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t58" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t65" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t64" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td><div class="t66" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
            <table class="t74" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t73" style="width:600px;">
            <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
            
            
            
            </td></tr></table>
            <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
          
            </td></tr></table>
            </td></tr><tr><td><div class="t75" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
            <table class="t81" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t80" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td><div class="t82" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
            <table class="t87" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="250" class="t86" style="background-color:#2720E6;overflow:hidden;width:250px;border-radius:44px 44px 44px 44px;">
            </td></tr></table>
            </td></tr></table></td></tr></table>
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t139" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t138" style="background-color:#242424;width:600px;">
            <table class="t137" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t136" style="padding:48px 50px 48px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
            <table class="t97" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t96" style="width:600px;">
            <table class="t95" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t94"><p class="t93" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">Want updates through more platforms?</p></td></tr></table>
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t135" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t134" style="width:800px;">
            <table class="t133" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t132" style="padding:10px 0 44px 0;"><div class="t131" style="width:100%;text-align:center;"><div class="t130" style="display:inline-block;"><table class="t129" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
            <tr class="t128"><td></td><td class="t103" width="44" valign="top">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t102" style="width:100%;"><tr><td class="t99" style="width:10px;" width="10"></td><td class="t100"><div style="font-size:0px;"><img class="t98" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/649a63fc-cd0a-4750-bbcc-79b1528b331b.png"/></div></td><td class="t101" style="width:10px;" width="10"></td></tr></table>
            </td><td class="t109" width="44" valign="top">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t108" style="width:100%;"><tr><td class="t105" style="width:10px;" width="10"></td><td class="t106"><div style="font-size:0px;"><img class="t104" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/f9284271-e6cd-429c-a733-642a62f1c710.png"/></div></td><td class="t107" style="width:10px;" width="10"></td></tr></table>
            </td><td class="t115" width="44" valign="top">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t114" style="width:100%;"><tr><td class="t111" style="width:10px;" width="10"></td><td class="t112"><div style="font-size:0px;"><img class="t110" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/e0e5b823-7c9f-4c51-bd3b-b1dbf1dffea0.png"/></div></td><td class="t113" style="width:10px;" width="10"></td></tr></table>
            </td><td class="t121" width="44" valign="top">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t120" style="width:100%;"><tr><td class="t117" style="width:10px;" width="10"></td><td class="t118"><div style="font-size:0px;"><img class="t116" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/646223c1-6bf9-4b68-a633-1c75c092c6a6.png"/></div></td><td class="t119" style="width:10px;" width="10"></td></tr></table>
            </td><td class="t127" width="44" valign="top">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t126" style="width:100%;"><tr><td class="t123" style="width:10px;" width="10"></td><td class="t124"><div style="font-size:0px;"><img class="t122" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/10955565-efe6-47c3-b8c8-a713635831fc.png"/></div></td><td class="t125" style="width:10px;" width="10"></td></tr></table>
            </td>
            <td></td></tr>
            </table></div></div></td></tr></table>
            </td></tr></table>
            </td></tr></table></td></tr></table>
            </td></tr></table>
            </td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
            </html>
            `
        
          
          
          
            const transporter = nodemailer.createTransport({
              host: 'smtp.gmail.com',
              port: 465,
              secure: true,
              auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD 
              }
            })
            
            const info = await transporter.sendMail({
              from: `Healthcare Booking System `,
              to, 
              subject:'Reactivation Complete – You May Now Access Your Account',
              html:html
            })
            
            console.log('receipt sent: %s', info.messageId)
            }

            export async function sendDeactivateFromAdminToPatient(to,patientName,reason) {
              const html=
              `
              <!--
              * This email was built using Tabular.
              * For more information, visit https://tabular.email
              -->
              <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
              <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
              <head>
              <title></title>
              <meta charset="UTF-8" />
              <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
              <!--[if !mso]>-->
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <!--<![endif]-->
              <meta name="x-apple-disable-message-reformatting" content="" />
              <meta content="target-densitydpi=device-dpi" name="viewport" />
              <meta content="true" name="HandheldFriendly" />
              <meta content="width=device-width" name="viewport" />
              <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
              <style type="text/css">
              table {
              border-collapse: separate;
              table-layout: fixed;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt
              }
              table td {
              border-collapse: collapse
              }
              .ExternalClass {
              width: 100%
              }
              .ExternalClass,
              .ExternalClass p,
              .ExternalClass span,
              .ExternalClass font,
              .ExternalClass td,
              .ExternalClass div {
              line-height: 100%
              }
              body, a, li, p, h1, h2, h3 {
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              }
              html {
              -webkit-text-size-adjust: none !important
              }
              body, #innerTable {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale
              }
              #innerTable img+div {
              display: none;
              display: none !important
              }
              img {
              Margin: 0;
              padding: 0;
              -ms-interpolation-mode: bicubic
              }
              h1, h2, h3, p, a {
              line-height: inherit;
              overflow-wrap: normal;
              white-space: normal;
              word-break: break-word
              }
              a {
              text-decoration: none
              }
              h1, h2, h3, p {
              min-width: 100%!important;
              width: 100%!important;
              max-width: 100%!important;
              display: inline-block!important;
              border: 0;
              padding: 0;
              margin: 0
              }
              a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: none !important;
              font-size: inherit !important;
              font-family: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important
              }
              u + #body a {
              color: inherit;
              text-decoration: none;
              font-size: inherit;
              font-family: inherit;
              font-weight: inherit;
              line-height: inherit;
              }
              a[href^="mailto"],
              a[href^="tel"],
              a[href^="sms"] {
              color: inherit;
              text-decoration: none
              }
              </style>
              <style type="text/css">
              @media (min-width: 481px) {
              .hd { display: none!important }
              }
              </style>
              <style type="text/css">
              @media (max-width: 480px) {
              .hm { display: none!important }
              }
              </style>
              <style type="text/css">
              @media (max-width: 480px) {
              .t88{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t89{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t6{padding-bottom:20px!important}.t5{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t136{padding:40px 30px!important}.t132{padding-bottom:36px!important}.t128{text-align:center!important}.t101,.t105,.t107,.t111,.t113,.t117,.t119,.t123,.t125,.t99{display:revert!important}.t103,.t109,.t115,.t121,.t127{vertical-align:top!important;width:44px!important}.t1{padding-bottom:50px!important}.t3{width:80px!important}.t86{width:353px!important}
              }
              </style>
              <!--[if !mso]>-->
              <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
              <!--<![endif]-->
              <!--[if mso]>
              <xml>
              <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
              </xml>
              <![endif]-->
              </head>
              <body id="body" class="t142" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class="t141" style="background-color:#242424;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t140" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign="top" align="center">
              <!--[if mso]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
              <v:fill color="#242424"/>
              </v:background>
              <![endif]-->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t88" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
              <table class="t92" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t91" style="background-color:#F8F8F8;width:600px;">
              <table class="t90" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t89" style="padding:0 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
              <table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="130" class="t3" style="width:130px;">
              <table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="129.078125" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/3c6945dc-6b0f-4a7f-86ce-23cb0fc42212.jpeg"/></div></td></tr></table>
              </td></tr></table>
              </td></tr><tr><td align="center">
              <table class="t9" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t8" style="width:600px;">
              <table class="t7" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t6" style="padding:0 0 15px 0;"><h1 class="t5" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Hi ${patientName}</h1></td></tr></table>
              </td></tr></table>
              <p style="font-size: 15px; color: #333;">
          We regret to inform you that your account has been <strong style="color: red;">temporarily deactivated</strong> by our administration team.
        </p>
      
        <p style="font-size: 15px; color: #333; margin-top: 20px;">
          <strong>Reason for deactivation:</strong><br />
          <em>${reason}</em>
        </p>
      
        <p style="font-size: 15px; color: #333; margin-top: 20px;">
          First and foremost, we offer our <strong>sincere apologies</strong> for any inconvenience this decision may cause. Please know that this action was not taken lightly, but was carried out in accordance with our platform’s policies and standards, which are designed to uphold service quality and ensure a safe and trustworthy environment for all users.
        </p>
      
        <p style="font-size: 15px; color: #333;">
          If you believe this was a mistake or would like to discuss this matter further, we encourage you to reach out to our support team. We are more than willing to listen and work with you toward a clear and fair resolution.
        </p>
      
        <p style="font-size: 15px; color: #333;">
          Once again, we deeply regret the necessity of this action and sincerely hope to resolve this with your understanding and cooperation.
        </p>
      
        <p style="font-size: 15px; color: #333;">
          Thank you for your dedication, and we wish you continued health and success.
        </p>
      
        <p style="font-size: 15px; color: #333;">
          <strong>Warm regards,</strong><br />
          <em>The Admin Team</em>
        </p>
              </td></tr><tr><td align="center">
              <table class="t14" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t13" style="width:600px;">
              </td></tr></table>
              </td></tr><tr><td align="center">
              <table class="t19" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t18" style="width:600px;">
              </td></tr></table>
              </td></tr><tr><td align="center">
              <table class="t24" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t23" style="width:600px;">
              </td></tr></table>
              </td></tr><tr><td align="center">
              <table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t29" style="width:600px;">
              </td></tr></table>
              </td></tr><tr><td align="center">
              <table class="t35" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t34" style="width:600px;">
              </td></tr></table>
              </td></tr><tr><td align="center">
              <table class="t40" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t39" style="width:600px;">
              </td></tr></table>
              </td></tr><tr><td align="center">
              <table class="t47" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t46" style="width:600px;">
              </td></tr></table>
              </td></tr><tr><td align="center">
              <table class="t53" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t52" style="width:600px;">
              </td></tr></table>
              </td></tr><tr><td align="center">
              <table class="t59" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t58" style="width:600px;">
              </td></tr></table>
              </td></tr><tr><td align="center">
              <table class="t65" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t64" style="width:600px;">
              </td></tr></table>
              </td></tr><tr><td><div class="t66" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
              <table class="t74" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t73" style="width:600px;">
              <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
              
              
              
              </td></tr></table>
              <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
            
              </td></tr></table>
              </td></tr><tr><td><div class="t75" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
              <table class="t81" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t80" style="width:600px;">
              </td></tr></table>
              </td></tr><tr><td><div class="t82" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
              <table class="t87" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="250" class="t86" style="background-color:#2720E6;overflow:hidden;width:250px;border-radius:44px 44px 44px 44px;">
              </td></tr></table>
              </td></tr></table></td></tr></table>
              </td></tr></table>
              </td></tr><tr><td align="center">
              <table class="t139" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t138" style="background-color:#242424;width:600px;">
              <table class="t137" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t136" style="padding:48px 50px 48px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
              <table class="t97" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t96" style="width:600px;">
              <table class="t95" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t94"><p class="t93" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">Want updates through more platforms?</p></td></tr></table>
              </td></tr></table>
              </td></tr><tr><td align="center">
              <table class="t135" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t134" style="width:800px;">
              <table class="t133" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t132" style="padding:10px 0 44px 0;"><div class="t131" style="width:100%;text-align:center;"><div class="t130" style="display:inline-block;"><table class="t129" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
              <tr class="t128"><td></td><td class="t103" width="44" valign="top">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t102" style="width:100%;"><tr><td class="t99" style="width:10px;" width="10"></td><td class="t100"><div style="font-size:0px;"><img class="t98" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/649a63fc-cd0a-4750-bbcc-79b1528b331b.png"/></div></td><td class="t101" style="width:10px;" width="10"></td></tr></table>
              </td><td class="t109" width="44" valign="top">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t108" style="width:100%;"><tr><td class="t105" style="width:10px;" width="10"></td><td class="t106"><div style="font-size:0px;"><img class="t104" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/f9284271-e6cd-429c-a733-642a62f1c710.png"/></div></td><td class="t107" style="width:10px;" width="10"></td></tr></table>
              </td><td class="t115" width="44" valign="top">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t114" style="width:100%;"><tr><td class="t111" style="width:10px;" width="10"></td><td class="t112"><div style="font-size:0px;"><img class="t110" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/e0e5b823-7c9f-4c51-bd3b-b1dbf1dffea0.png"/></div></td><td class="t113" style="width:10px;" width="10"></td></tr></table>
              </td><td class="t121" width="44" valign="top">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t120" style="width:100%;"><tr><td class="t117" style="width:10px;" width="10"></td><td class="t118"><div style="font-size:0px;"><img class="t116" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/646223c1-6bf9-4b68-a633-1c75c092c6a6.png"/></div></td><td class="t119" style="width:10px;" width="10"></td></tr></table>
              </td><td class="t127" width="44" valign="top">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t126" style="width:100%;"><tr><td class="t123" style="width:10px;" width="10"></td><td class="t124"><div style="font-size:0px;"><img class="t122" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/10955565-efe6-47c3-b8c8-a713635831fc.png"/></div></td><td class="t125" style="width:10px;" width="10"></td></tr></table>
              </td>
              <td></td></tr>
              </table></div></div></td></tr></table>
              </td></tr></table>
              </td></tr></table></td></tr></table>
              </td></tr></table>
              </td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
              </html>
              `
            
            
            
              const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                  user: process.env.EMAIL_USER,
                  pass: process.env.EMAIL_PASSWORD 
                }
              })
              
              const info = await transporter.sendMail({
                from: `Healthcare Booking System `,
                to, 
                subject:'We Regret to Inform You – Patient Account Temporarily Suspended',
                html:html
              })
              
              console.log('receipt sent: %s', info.messageId)
              }
              export async function sendActivateFromAdminToPatient(to,patientName) {
                const html=
                `
            <!--
            * This email was built using Tabular.
            * For more information, visit https://tabular.email
            -->
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
            <head>
            <title></title>
            <meta charset="UTF-8" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <!--[if !mso]>-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <!--<![endif]-->
            <meta name="x-apple-disable-message-reformatting" content="" />
            <meta content="target-densitydpi=device-dpi" name="viewport" />
            <meta content="true" name="HandheldFriendly" />
            <meta content="width=device-width" name="viewport" />
            <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
            <style type="text/css">
            table {
            border-collapse: separate;
            table-layout: fixed;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt
            }
            table td {
            border-collapse: collapse
            }
            .ExternalClass {
            width: 100%
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
            line-height: 100%
            }
            body, a, li, p, h1, h2, h3 {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            }
            html {
            -webkit-text-size-adjust: none !important
            }
            body, #innerTable {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
            }
            #innerTable img+div {
            display: none;
            display: none !important
            }
            img {
            Margin: 0;
            padding: 0;
            -ms-interpolation-mode: bicubic
            }
            h1, h2, h3, p, a {
            line-height: inherit;
            overflow-wrap: normal;
            white-space: normal;
            word-break: break-word
            }
            a {
            text-decoration: none
            }
            h1, h2, h3, p {
            min-width: 100%!important;
            width: 100%!important;
            max-width: 100%!important;
            display: inline-block!important;
            border: 0;
            padding: 0;
            margin: 0
            }
            a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important
            }
            u + #body a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
            }
            a[href^="mailto"],
            a[href^="tel"],
            a[href^="sms"] {
            color: inherit;
            text-decoration: none
            }
            </style>
            <style type="text/css">
            @media (min-width: 481px) {
            .hd { display: none!important }
            }
            </style>
            <style type="text/css">
            @media (max-width: 480px) {
            .hm { display: none!important }
            }
            </style>
            <style type="text/css">
            @media (max-width: 480px) {
            .t88{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t89{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t6{padding-bottom:20px!important}.t5{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t136{padding:40px 30px!important}.t132{padding-bottom:36px!important}.t128{text-align:center!important}.t101,.t105,.t107,.t111,.t113,.t117,.t119,.t123,.t125,.t99{display:revert!important}.t103,.t109,.t115,.t121,.t127{vertical-align:top!important;width:44px!important}.t1{padding-bottom:50px!important}.t3{width:80px!important}.t86{width:353px!important}
            }
            </style>
            <!--[if !mso]>-->
            <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
            <!--<![endif]-->
            <!--[if mso]>
            <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            </head>
            <body id="body" class="t142" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class="t141" style="background-color:#242424;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t140" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign="top" align="center">
            <!--[if mso]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
            <v:fill color="#242424"/>
            </v:background>
            <![endif]-->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t88" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
            <table class="t92" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t91" style="background-color:#F8F8F8;width:600px;">
            <table class="t90" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t89" style="padding:0 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
            <table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="130" class="t3" style="width:130px;">
            <table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="129.078125" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/3c6945dc-6b0f-4a7f-86ce-23cb0fc42212.jpeg"/></div></td></tr></table>
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t9" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t8" style="width:600px;">
            <table class="t7" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t6" style="padding:0 0 15px 0;"><h1 class="t5" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Hi ${patientName}</h1></td></tr></table>
            </td></tr></table>
            <p style="font-size: 16px; color: #333;">
      <strong>Dear Doctor,</strong>
    </p>
  
    <p style="font-size: 15px; color: #333;">
      We are pleased to inform you that your account has been <strong style="color: green;">successfully reactivated</strong> by our administration team.
    </p>
  
   
  
    <p style="font-size: 15px; color: #333; margin-top: 20px;">
      We want to take this opportunity to sincerely apologize for any confusion or disruption caused during the deactivation period. Our primary goal is always to ensure the best service and environment for our users.
    </p>
  
    <p style="font-size: 15px; color: #333;">
      We truly appreciate your understanding and cooperation throughout this process, and we're excited to have you back on board. Should you have any questions or need further assistance, please do not hesitate to reach out to us.
    </p>
  
    <p style="font-size: 15px; color: #333;">
      Thank you for your commitment, and we look forward to your continued contributions to our platform.
    </p>
  
    <p style="font-size: 15px; color: #333;">
      <strong>Warm regards,</strong><br />
      <em>The Admin Team</em>
    </p>
            </td></tr><tr><td align="center">
            <table class="t14" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t13" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t19" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t18" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t24" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t23" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t29" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t35" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t34" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t40" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t39" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t47" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t46" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t53" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t52" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t59" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t58" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t65" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t64" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td><div class="t66" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
            <table class="t74" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t73" style="width:600px;">
            <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
            
            
            
            </td></tr></table>
            <table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
          
            </td></tr></table>
            </td></tr><tr><td><div class="t75" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
            <table class="t81" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t80" style="width:600px;">
            </td></tr></table>
            </td></tr><tr><td><div class="t82" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
            <table class="t87" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="250" class="t86" style="background-color:#2720E6;overflow:hidden;width:250px;border-radius:44px 44px 44px 44px;">
            </td></tr></table>
            </td></tr></table></td></tr></table>
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t139" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t138" style="background-color:#242424;width:600px;">
            <table class="t137" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t136" style="padding:48px 50px 48px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
            <table class="t97" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t96" style="width:600px;">
            <table class="t95" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t94"><p class="t93" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">Want updates through more platforms?</p></td></tr></table>
            </td></tr></table>
            </td></tr><tr><td align="center">
            <table class="t135" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t134" style="width:800px;">
            <table class="t133" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t132" style="padding:10px 0 44px 0;"><div class="t131" style="width:100%;text-align:center;"><div class="t130" style="display:inline-block;"><table class="t129" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
            <tr class="t128"><td></td><td class="t103" width="44" valign="top">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t102" style="width:100%;"><tr><td class="t99" style="width:10px;" width="10"></td><td class="t100"><div style="font-size:0px;"><img class="t98" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/649a63fc-cd0a-4750-bbcc-79b1528b331b.png"/></div></td><td class="t101" style="width:10px;" width="10"></td></tr></table>
            </td><td class="t109" width="44" valign="top">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t108" style="width:100%;"><tr><td class="t105" style="width:10px;" width="10"></td><td class="t106"><div style="font-size:0px;"><img class="t104" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/f9284271-e6cd-429c-a733-642a62f1c710.png"/></div></td><td class="t107" style="width:10px;" width="10"></td></tr></table>
            </td><td class="t115" width="44" valign="top">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t114" style="width:100%;"><tr><td class="t111" style="width:10px;" width="10"></td><td class="t112"><div style="font-size:0px;"><img class="t110" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/e0e5b823-7c9f-4c51-bd3b-b1dbf1dffea0.png"/></div></td><td class="t113" style="width:10px;" width="10"></td></tr></table>
            </td><td class="t121" width="44" valign="top">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t120" style="width:100%;"><tr><td class="t117" style="width:10px;" width="10"></td><td class="t118"><div style="font-size:0px;"><img class="t116" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/646223c1-6bf9-4b68-a633-1c75c092c6a6.png"/></div></td><td class="t119" style="width:10px;" width="10"></td></tr></table>
            </td><td class="t127" width="44" valign="top">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t126" style="width:100%;"><tr><td class="t123" style="width:10px;" width="10"></td><td class="t124"><div style="font-size:0px;"><img class="t122" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/10955565-efe6-47c3-b8c8-a713635831fc.png"/></div></td><td class="t125" style="width:10px;" width="10"></td></tr></table>
            </td>
            <td></td></tr>
            </table></div></div></td></tr></table>
            </td></tr></table>
            </td></tr></table></td></tr></table>
            </td></tr></table>
            </td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
            </html>
            `
               
            
              
              
              
                const transporter = nodemailer.createTransport({
                  host: 'smtp.gmail.com',
                  port: 465,
                  secure: true,
                  auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD 
                  }
                })
                
                const info = await transporter.sendMail({
                  from: `Healthcare Booking System `,
                  to, 
                  subject:'Reactivation Complete – You May Now Access Your Account',
                  html:html
                })
                
                console.log('receipt sent: %s', info.messageId)
                }
export async function sendConfirmationScheduleToDoctor(to,date,time,docName,patientName,emailPatient,linkMeet,slotId) {
  const html=`
<!--
* This email was built using Tabular.
* For more information, visit https://tabular.email
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t88{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t89{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t6{padding-bottom:20px!important}.t5{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t136{padding:40px 30px!important}.t132{padding-bottom:36px!important}.t128{text-align:center!important}.t101,.t105,.t107,.t111,.t113,.t117,.t119,.t123,.t125,.t99{display:revert!important}.t103,.t109,.t115,.t121,.t127{vertical-align:top!important;width:44px!important}.t1{padding-bottom:50px!important}.t3{width:80px!important}.t86{width:353px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t142" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class="t141" style="background-color:#242424;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t140" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#242424"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t88" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t92" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t91" style="background-color:#F8F8F8;width:600px;">
<table class="t90" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t89" style="padding:0 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
<table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="130" class="t3" style="width:130px;">
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="129.078125" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/3c6945dc-6b0f-4a7f-86ce-23cb0fc42212.jpeg"/></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t9" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t8" style="width:600px;">
<table class="t7" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t6" style="padding:0 0 15px 0;"><h1 class="t5" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Hi ${docName}</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t14" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t13" style="width:600px;">
<table class="t12" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t11" style="padding:0 0 22px 0;"><p class="t10" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">You have a new appointment scheduled through our system. Please review the details below and prepare accordingly.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t19" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t18" style="width:600px;">
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t24" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t23" style="width:600px;">
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t29" style="width:600px;">
<table class="t28" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t27"><p class="t26" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t25" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Slot Id</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t35" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t34" style="width:600px;">
<table class="t33" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t32" style="padding:0 0 22px 0;"><p class="t31" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${slotId}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t40" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t39" style="width:600px;">
<table class="t38" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t37"><p class="t36" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:700;font-style:normal;font-size:17px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Information Patient &amp; Booking&nbsp;</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t47" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t46" style="width:600px;">
<table class="t45" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t44"><p class="t43" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t41" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Full Name Patient</span><span class="t42" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">r:</span> ${patientName}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t53" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t52" style="width:600px;">
<table class="t51" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t50"><p class="t49" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t48" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Email Patient:</span> ${emailPatient}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t59" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t58" style="width:600px;">
<table class="t57" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t56"><p class="t55" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t54" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Booking Date:</span> ${date}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t65" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t64" style="width:600px;">
<table class="t63" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t62"><p class="t61" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t60" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Booking Time:</span> ${time}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t66" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t74" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t73" style="width:600px;">
<table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:10px 0 0 0;"><p class="t70" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Please ensure you have a working <span class="t67" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">microphone</span> and <span class="t68" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">camera</span>, and join the online meeting at least <span class="t69" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">5 minutes</span> before your scheduled time for the best experience.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t75" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t81" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t80" style="width:600px;">
<table class="t79" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t78"><p class="t77" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">To begin your online consultation, please click the <span class="t76" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">link</span> below:</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t82" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
<table class="t87" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="250" class="t86" style="background-color:#2720E6;overflow:hidden;width:250px;border-radius:44px 44px 44px 44px;">
<table class="t85" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t84" style="text-align:center;line-height:44px;mso-line-height-rule:exactly;mso-text-raise:10px;"><a class="t83" href=${linkMeet} style="display:block;margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:44px;font-weight:800;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;letter-spacing:2.4px;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:10px;" target="_blank">LiNK</a></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t139" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t138" style="background-color:#242424;width:600px;">
<table class="t137" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t136" style="padding:48px 50px 48px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t97" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t96" style="width:600px;">
<table class="t95" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t94"><p class="t93" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">Want updates through more platforms?</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t135" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t134" style="width:800px;">
<table class="t133" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t132" style="padding:10px 0 44px 0;"><div class="t131" style="width:100%;text-align:center;"><div class="t130" style="display:inline-block;"><table class="t129" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t128"><td></td><td class="t103" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t102" style="width:100%;"><tr><td class="t99" style="width:10px;" width="10"></td><td class="t100"><div style="font-size:0px;"><img class="t98" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/649a63fc-cd0a-4750-bbcc-79b1528b331b.png"/></div></td><td class="t101" style="width:10px;" width="10"></td></tr></table>
</td><td class="t109" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t108" style="width:100%;"><tr><td class="t105" style="width:10px;" width="10"></td><td class="t106"><div style="font-size:0px;"><img class="t104" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/f9284271-e6cd-429c-a733-642a62f1c710.png"/></div></td><td class="t107" style="width:10px;" width="10"></td></tr></table>
</td><td class="t115" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t114" style="width:100%;"><tr><td class="t111" style="width:10px;" width="10"></td><td class="t112"><div style="font-size:0px;"><img class="t110" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/e0e5b823-7c9f-4c51-bd3b-b1dbf1dffea0.png"/></div></td><td class="t113" style="width:10px;" width="10"></td></tr></table>
</td><td class="t121" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t120" style="width:100%;"><tr><td class="t117" style="width:10px;" width="10"></td><td class="t118"><div style="font-size:0px;"><img class="t116" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/646223c1-6bf9-4b68-a633-1c75c092c6a6.png"/></div></td><td class="t119" style="width:10px;" width="10"></td></tr></table>
</td><td class="t127" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t126" style="width:100%;"><tr><td class="t123" style="width:10px;" width="10"></td><td class="t124"><div style="font-size:0px;"><img class="t122" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://8527de8c-2e2d-461a-8323-af2588c02fac.b-cdn.net/e/4ec395aa-4643-4b29-800d-7debde54016b/10955565-efe6-47c3-b8c8-a713635831fc.png"/></div></td><td class="t125" style="width:10px;" width="10"></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>
`
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD 
  }
})

const info = await transporter.sendMail({
  from: `Healthcare Booking System `,
  to, 
  subject:'New Appointment Confirmation – Please Review the Details',
  html:html
})

console.log('receipt sent: %s', info.messageId)
}
