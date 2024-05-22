import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Typography } from "../../../Typography/Typography.jsx";
import { TextInput } from "../../../ui/textInput/TextInput.jsx";
import { CustomButton } from "../../../ui/customButton/CustomButton.jsx";
import classes from "./QuestionForm.module.sass";
import { MessageTextarea } from "../messageTextarea/MessageTextarea.jsx";
import { regexForm } from "../regexForm/regexForm.jsx";

export const QuestionForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors, isValid, isSubmitSuccessful },
      trigger,
      reset,
      clearErrors
   } = useForm({
      mode: "onBlur",
   });

   const [characterCount, setCharacterCount] = useState(0);

   const onSubmit = (data) => {
      console.error(data);
      reset();
      clearErrors();
      setCharacterCount(0);
   };

   const handleTextareaChange = (event) => {
      const inputValue = event.target.value;
      setCharacterCount(inputValue.length);
   };

   const formValidate = (value) => {
      return {
         required: "Это поле обязательное!",
         pattern: {
            value: value,
            message: "Неправильный формат почты!",
         },
      };
   };

   useEffect(() => {
      if (isSubmitSuccessful) {
         trigger();
      }
   }, [isSubmitSuccessful, trigger]);

   return (
       <section className={classes.faq}>
          <form className={classes.faqForm} onSubmit={handleSubmit(onSubmit)}>
             <div>
                <label htmlFor="phoneNumber">Номер телефона</label>
                <TextInput
                    maxLength="13"
                    id="phoneNumber"
                    type="tel"
                    {...register("tel", {
                       pattern: {
                          value: /^\+996\d{9}$/,
                          message: "Неправильный формат номера!",
                       },
                    })}
                    placeholder="+996"
                />
                {!errors?.tel && (
                    <Typography className={classes.note} variant="span" color="grey500">
                       необязательно
                    </Typography>
                )}
                <Typography className={classes.errors} variant="span">
                   {errors?.tel && errors.tel.message}
                </Typography>
             </div>
             <div>
                <label htmlFor="name">ФИО</label>
                <TextInput
                    id="name"
                    type="text"
                    {...register("username", {
                       required: "Это поле обязательное!",
                    })}
                    placeholder="Иванов Иван Иванович"
                />
                <Typography className={classes.errors} variant="span">
                   {errors?.username && errors.username.message}
                </Typography>
             </div>
             <div>
                <label htmlFor="email">Почта</label>
                <TextInput
                    id="email"
                    type="email"
                    errors={errors.email}
                    {...register("email", formValidate(regexForm.email))}
                    placeholder="Введите почту"
                />
                <Typography className={classes.errors} variant="span">
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
             <p>{isValid && "Successful"}</p>
             <CustomButton
                 disabled={!isValid}
                 buttonStyle="blue"
                 type="submit"
                 text={"ОТПРАВИТЬ ВОПРОС"}
                 className={`${!isValid ? classes.disabledBtn : ''}`}
             />
          </form>
       </section>
   );
};
