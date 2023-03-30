const generatePassword = () => {
  let password = '';
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            + 'abcdefghijklmnopqrstuvwxyz'
            + '1234567890'
            + '!@#$%^&()_+~`|}{[]:;?><,./-=';
  for (let i = 1; i <= 10; i++) {
    const char = Math.floor(Math.random() * str.length + 1);
    password += str.charAt(char);
  }
  return password;
};

export default generatePassword;
