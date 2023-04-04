/* eslint-disable import/prefer-default-export */
const employeeSignupTemplate = (info) => `
<!DOCTYPE html>
<html>
  <head>
    <title>Welcome to Fly Right</title>
  </head>
  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
    <table cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4;">
      <tr>
        <td align="center" style="padding: 20px 0 10px 0;">
          <h1>Welcome to Fly Right ${info.fullName}!</h1>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 10px 0 20px 0; text-decoration: none;">
          <p>You have been registered for ${info.jobTitle} at Fly Right. Your account has been created with the following credentials:</p>
          <p>You can update any of these credentials or use the existing ones.</p>
          <p>Keep them and don't share them with anyone for your security.</p>
          <p><strong>Email: </strong> ${info.email}</p>
          <p><strong>Password: </strong> ${info.password}</p>
          <p style="padding-top: 5px;"><strong>WE ARE HAPPY TO HAVE YOU!</strong></p>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

export {
  employeeSignupTemplate
};
