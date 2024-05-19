import { useState } from "react";
import { useForm } from "react-hook-form";
import { Typography } from "../../../Typography/Typography.jsx";
import { TextInput } from "../../../ui/textInput/TextInput.jsx";
import { CustomButton } from "../../../ui/customButton/CustomButton.jsx";
import s from "./QuestionForm.module.sass";
import { MessageTextarea } from "../messageTextarea/MessageTextarea.jsx";

export const QuestionForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      mode: "onBlur",
   });

   const [characterCount, setCharacterCount] = useState(0);

   const onSubmit = (data) => {
      console.error(data);
      reset();
      setCharacterCount(0);
   };

   const handleTextareaChange = (event) => {
      const inputValue = event.target.value;
      setCharacterCount(inputValue.length);
   };

   return (
       <section className={s.faq}>
          <Typography variant="h1" color="blue500">
             Задайте свой вопрос
          </Typography>
          <form className={s.faqForm} onSubmit={handleSubmit(onSubmit)}>
             <div>
                <label htmlFor="phoneNumber">Номер телефона</label>
                <TextInput
                    id="phoneNumber"
                    type="text"
                    {...register("number", {
                       pattern: {
                          value: /^\+996\d{9}$/,
                          message: "Неправильный формат номера",
                       },
                    })}
                    placeholder="+996"
                />
                {!errors?.number && <Typography className={s.note} variant="span"  color="grey500">необязательно</Typography>}
                <Typography className={s.errors}>
                   {errors?.number && errors.number.message}
                </Typography>
             </div>
             <div>
                <label htmlFor="name">ФИО</label>
                <TextInput
                    id="name"
                    type="text"
                    {...register("username", {
                       required:"Это поле обязательное!"
                    })}
                    placeholder="Иванов Иван Иванович"
                />
                <Typography className={s.errors}>
                   {errors?.username && errors.username.message}
                </Typography>
             </div>
             <div>
                <label htmlFor="email">Почта</label>
                <TextInput
                    id="email"
                    type="email"
                    {...register("email", {
                       required: "Это поле обязательное!",
                       pattern: {
                          value:  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                          message: "Неправильный формат почты",
                       },
                    })}
                    placeholder="Введите почту"
                />
                <Typography className={s.errors}>
                   {errors?.email && errors.email.message}
                </Typography>
             </div>
             <div>
                <MessageTextarea
                    maxLength="300"
                    id="text"
                    placeholder="Введите текст"
                    register={register("text", {
                       required: "Это поле обязательное!",
                    })}
                    errors={errors.text}
                    label="Ваш вопрос"
                    characterCount={characterCount}
                    handleTextareaChange={handleTextareaChange}
                />
             </div>
             <CustomButton
                 buttonStyle="blue"
                 type="submit"
                 text={"ОТПРАВИТЬ ВОПРОС"}
                 style={{ width: "100%" }}
             />
          </form>
       </section>
   );
};