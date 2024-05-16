import { Typography } from "../../../Typography/Typography.jsx";
import { TextInput } from "../../../ui/textInput/TextInput.jsx";
import {CustomButton} from "../../../ui/customButton/CustomButton.jsx";
import {useForm} from "react-hook-form";
import s from "./QuestionForm.module.sass";
export const QuestionForm = () => {

   const {
      register,
      handleSubmit,
      formState: { errors},
       reset
   } = useForm({
      mode: "onBlur",
   });



   const onSubmit = (data) => {
      console.error(data);
      reset();
   };

   return (
      <section className={s.faq}>
         <Typography variant="h1" color="blue500">Задайте свой вопрос</Typography>
         <form className={s.faqForm} onSubmit={handleSubmit(onSubmit)}>
            <div>
               <label htmlFor="myInput">Номер телефона</label>
               <TextInput
                   id="myInput"
                   type="text"
                   placeholder="+996"
                   {...register("number", {
                       pattern: {
                         value:  /^\+996\d{9}$/,
                         // /^\+996[2579]\d{9}$/,
                         message: "Неправильный формат номера"
                   }
                   })}
               />
               <Typography className={s.errors}>
                  {errors?.number && errors.number.message }
               </Typography>
            </div>
            <div>
               <label htmlFor="myInput">ФИО</label>
               <TextInput
                   id="myInput"
                   type="text"
                   {...register("username", {
                      required: "Это поле обязательное!",
                      pattern: {
                         value: /^[а-яёА-ЯЁa-zA-Z]+(?:[^\W\d]|[-\s])*(?:[^\W\d]|[-])$/,
                         message: "Неправильный формат ФИО"
                      }
                   })}
                   placeholder="Иванов Иван Иванович"
               />
               <Typography className={s.errors}>
                  {errors?.username && errors.username.message }
               </Typography>
               {/*<p className={s.errors}>*/}
               {/*   {errors?.username && errors.username.message }*/}
               {/*</p>*/}
            </div>
            <div>
               <label htmlFor="myInput">Почта</label>
               <TextInput
                   id="myInput"
                   type="email"
                   {...register("email",{
                      required: "Это поле обязательное!",
                      pattern: {
                         value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                         message: "Неправильный формат почты"
                      }
                   })}
                   placeholder="Введите почту"
               />
               <Typography className={s.errors}>
                  {errors?.email && errors.email.message }
               </Typography>
            </div>
            <CustomButton
                buttonStyle="blue"
                type="submit"
                text={"ОТПРАВИТЬ ВОПРОС"}
                style={{ width: "91.24%" }} />
         </form>
      </section>
   );
};

