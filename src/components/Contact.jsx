import { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
import ButtonIcon from "./ButtonIcon";
import ContactInput from "./ContactInput";
import Container from "./Container";
import { AiOutlineSend } from "react-icons/ai";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [project, setProject] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (name == "" || project == "" || mail == "") {
      Swal.fire(
        "Empty fields",
        "Fill in all the fields and try again",
        "error"
      );
      return false;
    }
    if (!validarMail()) return false;
    // sendEmail();
  };

  const validarMail = () => {
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (validEmail.test(mail)) return true;
    else {
      Swal.fire("Invalid mail", "Check the mail and try again", "error");
      return false;
    }
  };

  // Funcion que enviar el correo electronico
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_xz1cvv9",
  //       "template_cahu2ic",
  //       form.current,
  //       "GpyFVreFO_vdIz3Rm"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <>
      <Container id="contact" titulo="Contact Me">
        <p className="text-base font-medium text-gray-900 mb-8">
          Write me your project
        </p>
        <form action="" className="w-full flex flex-col gap-y-6" ref={form} data-aos="fade-up">
          <ContactInput
            id="name"
            name="user_name"
            texto="Name"
            placeholder="Insert your name"
            valor={name}
            onChange={setName}
          />
          <ContactInput
            id="mail"
            name="user_email"
            texto="Mail"
            placeholder="Insert your email"
            valor={mail}
            onChange={setMail}
          />
          <div className="relative w-full">
            <label
              htmlFor="project"
              className="absolute -top-3 left-4 bg-slate-50 text-sm text-gray-500 px-1"
            >
              Project
            </label>
            <textarea
              type="text"
              id="project"
              name="message"
              placeholder="Write your project"
              className="w-full h-full px-6 py-3 text-base font-light text-gray-900 border border-gray-300 rounded-2xl bg-slate-50 min-h-[200px] focus:border-gray-500 duration-200"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            ></textarea>
          </div>
          <ButtonIcon
            texto="Send Message"
            icono={<AiOutlineSend className="text-2xl text-white" />}
            onClick={(e) => onSubmitForm(e)}
            disabled={true}
          />
        </form>
      </Container>
    </>
  );
};

export default Contact;
