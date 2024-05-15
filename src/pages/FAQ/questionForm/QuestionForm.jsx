import { Typography } from "../../../Typography/Typography.jsx";
import { TextInput } from "../../../ui/textInput/TextInput.jsx";
import {CustomButton} from "../../../ui/customButton/CustomButton.jsx";
import {useForm} from "react-hook-form";
import s from "./QuestionForm.module.sass";
export const QuestionForm = () => {

   const {
      register,
      handleSubmit,
      // formState: { errors}
   } = useForm();

   const onSubmit = (data) => {
      console.error(data);
   };

   return (
      <section className={s.faq}>
         <Typography variant="h1" color="blue500">Задайте свой вопрос</Typography>
         <form className={s.faqForm} onSubmit={handleSubmit(onSubmit)}>
            <div>
               <label htmlFor="myInput">Номер телефона</label>
               <TextInput
                   id="myInput"
                   type="number"
                   placeholder="+996"
                   {...register("number")}
               />
            </div>
            <div>
               <label htmlFor="myInput">ФИО</label>
               <TextInput
                   id="myInput"
                   type="text"
                   placeholder="Иванов Иван Иванович"
                   {...register("userName")}
               />
            </div>
            <div>
               <label htmlFor="myInput">Почта</label>
               <TextInput
                   id="myInput"
                   type="email"
                   placeholder="Введите почту"
                   {...register("email")}
               />
            </div>
            <CustomButton
                buttonStyle="blue"
                type="submit"
                text={"ОТПРАВИТЬ ВОПРОС"}
                style={{ width: "91.24% !important" }} />
         </form>
      </section>
   );
};

