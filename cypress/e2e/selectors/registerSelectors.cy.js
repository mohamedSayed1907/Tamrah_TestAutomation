module.exports = {
usernameField: '#register_username',
   emailField: '#register_email',
   phoneField: '#register_phonenumber',
   passwordField: '#register_password',

   registerButton: '.ant-btn',

   alertSuccessRegister:`.Toastify__toast-body > :nth-child(2)`,
 
   alertEmptyUsername:"#register_username_help > .ant-form-item-explain-error",
   alertInvalidEmail:"#register_email_help > .ant-form-item-explain-error",
 
   alertInvalidPassword:"#register_password_help > .ant-form-item-explain-error",
 
   tamrahLogo:"a > .cursor-pointer",
   changeLanguage:".ant-select-selector",
   registerTitle:".text-xl",
   alreadyHaveEmailXpath:`//*[@id="register"]/div[11]/div/div/div/div/p`,
   languageTextXpath:`//*[@id="__next"]/div[2]/header/div/div/span[2]/span`,    //note : Lang Text Inside The Dropdown,
   usernameTitleXpath:`//*[@id="register"]/div[2]/div/div/div/div/span`,
   emailTitleXpath:`//*[@id="register"]/div[4]/div/div/div/div/span`,
   phoneTitleXpath:`//*[@id="register"]/div[6]/div/div/div/div/span`,
   passwordTitleXpath:`//*[@id="register"]/div[8]/div/div/div/div/span`,
   changeToEnglishXpath:'/html/body/div[2]/div/div/div[2]/div/div/div/div[1]',

   changeToArabicXpath:`/html/body/div[2]/div/div/div[2]/div/div/div/div[2]`


   


  
} 