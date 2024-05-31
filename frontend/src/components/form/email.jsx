import emailjs from '@emailjs/browser'


const sendCustomEmail = (detalhes)=>{
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        name:form.name,
        email:form.email,
        mensagem:form.message,
      }
    )
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    });
}
export {sendCustomEmail}