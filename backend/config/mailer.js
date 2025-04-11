import nodemailer from 'nodemailer';

const receiptHtml = `
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
.t196{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t197{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t27{padding-bottom:20px!important}.t26{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t257{padding:40px 30px!important}.t240{padding-bottom:36px!important}.t236{text-align:center!important}.t207,.t209,.t213,.t215,.t219,.t221,.t225,.t227,.t231,.t233,.t53,.t55,.t75,.t77{display:revert!important}.t137,.t188,.t189{display:block!important}.t211,.t217,.t223,.t229,.t235{vertical-align:top!important;width:44px!important}.t80{text-align:left!important}.t57{vertical-align:middle!important;width:221px!important}.t13,.t17{vertical-align:top!important}.t18{text-align:right!important}.t17{width:80px!important}.t15{padding-bottom:50px!important}.t13{width:370px!important}.t49{width:353px!important}.t79{vertical-align:middle!important;width:820px!important}.t185,.t59,.t65,.t71{padding-left:0!important}.t188{text-align:left!important}.t137{mso-line-height-alt:15px!important;line-height:15px!important}.t138,.t187{vertical-align:top!important;display:inline-block!important;width:100%!important;max-width:800px!important}.t135{padding-bottom:15px!important;padding-right:0!important}
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
<body id="body" class="t263" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class="t262" style="background-color:#242424;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t261" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#242424"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t196" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t200" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t199" style="background-color:#F8F8F8;width:600px;">
<table class="t198" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t197" style="padding:0 50px 60px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t25" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t24" style="width:800px;">
<table class="t23" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t22"><div class="t21" style="width:100%;text-align:right;"><div class="t20" style="display:inline-block;"><table class="t19" role="presentation" cellpadding="0" cellspacing="0" align="right" valign="top">
<tr class="t18"><td></td><td class="t13" width="370" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t12" style="width:100%;"><tr><td class="t11" style="padding:35px 0 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t5" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="370" class="t4" style="width:600px;">
<table class="t3" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t2"><p class="t1" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t0" style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">Order confirmation</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t10" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="370" class="t9" style="width:600px;">
<table class="t8" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t7" style="padding:0 0 22px 0;"><p class="t6" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Date: Dec 23 2022</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td><td class="t17" width="130" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t16" style="width:100%;"><tr><td class="t15" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t14" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="130" alt="" src="https://455dd1ee-4446-46fc-b976-3a1f213d3104.b-cdn.net/e/49aa4f8a-43f7-42ea-8eac-a71a697bcecd/bcc02253-4c80-4f7b-b0b4-f99bb6f40722.jpeg"/></div></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t29" style="width:600px;">
<table class="t28" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t27" style="padding:0 0 15px 0;"><h1 class="t26" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Hello Max,</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t35" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t34" style="width:600px;">
<table class="t33" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t32" style="padding:0 0 22px 0;"><p class="t31" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">We appreciate it very much that you contacted us about your Flash-product. We would love to be of service regarding your past purchase.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t40" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t39" style="width:600px;">
<table class="t38" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t37" style="padding:0 0 22px 0;"><p class="t36" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Send the product within 30 days (else the order will be canceled).</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t45" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t44" style="width:600px;">
<table class="t43" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t42" style="padding:0 0 22px 0;"><p class="t41" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Depending on the availability we will send the replacement product as soon as the returned product has been received and approved by us. You will receive an email with a confirmation when the new product is on its way to you.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="left">
<table class="t50" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="250" class="t49" style="background-color:#181818;overflow:hidden;width:250px;border-radius:44px 44px 44px 44px;">
<table class="t48" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t47" style="text-align:center;line-height:44px;mso-line-height-rule:exactly;mso-text-raise:10px;"><span class="t46" style="display:block;margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:44px;font-weight:800;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;letter-spacing:2.4px;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:10px;">OPEN the label</span></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t51" style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t87" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t86" style="background-color:#F0F0F0;width:800px;">
<table class="t85" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t84" style="padding:20px 20px 20px 20px;"><div class="t83" style="width:100%;text-align:left;"><div class="t82" style="display:inline-block;"><table class="t81" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="middle">
<tr class="t80"><td></td><td class="t57" width="112.36763" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t56" style="width:100%;"><tr><td class="t53" style="width:10px;" width="10"></td><td class="t54"><div style="font-size:0px;"><img class="t52" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="92.36763236763237" height="120.28125" alt="" src="https://455dd1ee-4446-46fc-b976-3a1f213d3104.b-cdn.net/e/49aa4f8a-43f7-42ea-8eac-a71a697bcecd/98cd2f12-c7f7-4d69-9670-54c8da95cb97.png"/></div></td><td class="t55" style="width:10px;" width="10"></td></tr></table>
</td><td class="t79" width="387.63237" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t78" style="width:100%;"><tr><td class="t75" style="width:10px;" width="10"></td><td class="t76"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t62" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="367.6323676323676" class="t61" style="width:600px;">
<table class="t60" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t59" style="padding:0 0 0 10px;"><h1 class="t58" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Flash HAND WARMERS - Series 2</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t63" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t68" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="367.6323676323676" class="t67" style="width:600px;">
<table class="t66" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t65" style="padding:0 0 0 10px;"><h1 class="t64" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">ORANGE</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t70" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t74" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="367.6323676323676" class="t73" style="border-top:1px solid #CCCCCC;width:600px;">
<table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="padding:15px 0 0 10px;"><h1 class="t69" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">QUANTITY: 1</h1></td></tr></table>
</td></tr></table>
</td></tr></table></td><td class="t77" style="width:10px;" width="10"></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t88" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t195" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t194" style="background-color:#F0F0F0;width:600px;">
<table class="t193" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t192" style="padding:40px 40px 40px 40px;"><div class="t191" style="width:100%;text-align:left;"><div class="t190" style="display:inline-block;"><table class="t189" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t188"><td></td><td class="t138" width="210" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t136" style="width:100%;"><tr><td class="t135" style="padding:0 5px 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t118" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t117" style="width:800px;">
<table class="t116" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t115"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t93" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t92" style="width:600px;">
<table class="t91" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t90"><h1 class="t89" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">DELIVERY ADDRESS</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t94" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t99" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t98" style="width:600px;">
<table class="t97" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t96"><p class="t95" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Max Doe</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t104" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t103" style="width:600px;">
<table class="t102" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t101"><p class="t100" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Waterview Lane</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t109" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t108" style="width:600px;">
<table class="t107" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t106"><p class="t105" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Santa Fe, NM</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t114" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t113" style="width:600px;">
<table class="t112" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t111"><p class="t110" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">New Mexico 87500</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t130" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t134" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t133" style="width:800px;">
<table class="t132" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t131"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t123" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t122" style="width:600px;">
<table class="t121" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t120"><h1 class="t119" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">DELIVERY METHOD</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t124" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t129" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t128" style="width:600px;">
<table class="t127" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t126"><p class="t125" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">EU STANDARD SHIPPING</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
<!--[if !mso]>-->
<div class="t137" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;&nbsp;</div>
<!--<![endif]-->
</td><td class="t187" width="210" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t186" style="width:100%;"><tr><td class="t185" style="padding:0 0 0 5px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t168" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t167" style="width:800px;">
<table class="t166" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t165"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t143" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t142" style="width:600px;">
<table class="t141" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t140"><h1 class="t139" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">BILLING ADDRESS</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t144" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t149" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t148" style="width:600px;">
<table class="t147" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t146"><p class="t145" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Max Doe</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t154" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t153" style="width:600px;">
<table class="t152" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t151"><p class="t150" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Waterview Lane</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t159" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t158" style="width:600px;">
<table class="t157" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t156"><p class="t155" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Santa Fe, NM</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t164" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t163" style="width:600px;">
<table class="t162" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t161"><p class="t160" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">New Mexico 87500</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t180" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t184" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t183" style="width:800px;">
<table class="t182" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t181"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t173" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t172" style="width:600px;">
<table class="t171" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t170"><h1 class="t169" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">PAYMENT METHOD</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t174" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t179" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="204.99999999999997" class="t178" style="width:600px;">
<table class="t177" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t176"><p class="t175" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">VISA — Credit Card</p></td></tr></table>
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
<table class="t260" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t259" style="background-color:#242424;width:600px;">
<table class="t258" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t257" style="padding:48px 50px 48px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t205" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t204" style="width:600px;">
<table class="t203" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t202"><p class="t201" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">Want updates through more platforms?</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t243" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t242" style="width:800px;">
<table class="t241" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t240" style="padding:10px 0 44px 0;"><div class="t239" style="width:100%;text-align:center;"><div class="t238" style="display:inline-block;"><table class="t237" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t236"><td></td><td class="t211" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t210" style="width:100%;"><tr><td class="t207" style="width:10px;" width="10"></td><td class="t208"><div style="font-size:0px;"><img class="t206" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://455dd1ee-4446-46fc-b976-3a1f213d3104.b-cdn.net/e/49aa4f8a-43f7-42ea-8eac-a71a697bcecd/0c116a35-fbdf-42b8-961d-bca50c318efe.png"/></div></td><td class="t209" style="width:10px;" width="10"></td></tr></table>
</td><td class="t217" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t216" style="width:100%;"><tr><td class="t213" style="width:10px;" width="10"></td><td class="t214"><div style="font-size:0px;"><img class="t212" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://455dd1ee-4446-46fc-b976-3a1f213d3104.b-cdn.net/e/49aa4f8a-43f7-42ea-8eac-a71a697bcecd/7d5c9206-9998-4c93-832a-c39df2a33955.png"/></div></td><td class="t215" style="width:10px;" width="10"></td></tr></table>
</td><td class="t223" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t222" style="width:100%;"><tr><td class="t219" style="width:10px;" width="10"></td><td class="t220"><div style="font-size:0px;"><img class="t218" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://455dd1ee-4446-46fc-b976-3a1f213d3104.b-cdn.net/e/49aa4f8a-43f7-42ea-8eac-a71a697bcecd/c6304793-3d32-43c6-8a62-b2ae06d61760.png"/></div></td><td class="t221" style="width:10px;" width="10"></td></tr></table>
</td><td class="t229" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t228" style="width:100%;"><tr><td class="t225" style="width:10px;" width="10"></td><td class="t226"><div style="font-size:0px;"><img class="t224" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://455dd1ee-4446-46fc-b976-3a1f213d3104.b-cdn.net/e/49aa4f8a-43f7-42ea-8eac-a71a697bcecd/56cbfed1-5e26-48a9-a864-7d463a1727b5.png"/></div></td><td class="t227" style="width:10px;" width="10"></td></tr></table>
</td><td class="t235" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t234" style="width:100%;"><tr><td class="t231" style="width:10px;" width="10"></td><td class="t232"><div style="font-size:0px;"><img class="t230" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://455dd1ee-4446-46fc-b976-3a1f213d3104.b-cdn.net/e/49aa4f8a-43f7-42ea-8eac-a71a697bcecd/aec4f700-b68f-41dc-ae4b-516c0528f284.png"/></div></td><td class="t233" style="width:10px;" width="10"></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t248" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t247" style="width:600px;">
<table class="t246" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t245"><p class="t244" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">4019 Waterview Lane, Santa Fe, NM, New Mexico 87500</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t256" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t255" style="width:600px;">
<table class="t254" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t253"><p class="t252" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;"><a class="t249" href="https://tabular.email" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;" target="_blank">Unsubscribe</a>&nbsp; •&nbsp; <a class="t250" href="https://tabular.email" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;" target="_blank">Privacy policy</a>&nbsp; •&nbsp; <a class="t251" href="https://tabular.email" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#878787;mso-line-height-rule:exactly;" target="_blank">Contact us</a></p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>
`;

// export async function sendEmail() {
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465, 
//     secure: true,
//     auth: {
//       user: 'minhduyle081003@gmail.com',
//       pass: 'tegm tgaa mukq wnwe' 
//     }
//   });

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
export async function sendReceiptEmail({ to, subject }) {
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
    from: 'minhduyle081003@gmail.com',
    to, 
    subject,
    html: receiptHtml
  })

  console.log('receipt sent: %s', info.messageId)
}
export async function sendOtpEmail({ to,otp }) {
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
    from: `Healthcare App minhduyle081003@gmail.com`,
    to, 
    subject:'Email Verification OTP',
    html:html
  })

  console.log('receipt sent: %s', info.messageId)
}