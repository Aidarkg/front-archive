import classes from "./QuestionForm.module.sass";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { TextInput } from "../textInput/TextInput.jsx";
import { Typography } from "../../Typography/Typography.jsx";
import { regexForm } from "../../pages/FAQ/regexForm/regexForm.jsx";
import useQuestionStore from '../../pages/FAQ/store/store.jsx';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import {toast, ToastContainer} from "react-toastify";

export const QuestionForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors, isValid, isSubmitSuccessful },
      trigger,
      reset
   } = useForm({
      mode: "onBlur",
   });

   const [textAreaValue, setTextAreaValue] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");

   const submitQuestion = useQuestionStore(state => state.submitQuestion);

   const onSubmit = (data) => {
      submitQuestion(data);
      reset();
      setTextAreaValue("");
      setPhoneNumber("");
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
         toast.success("Вопрос успешно отправлен", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });
      }
   }, [isSubmitSuccessful, trigger]);

   const handleTextAreaChange = (event) => {
      const value = event.target.value;
      setTextAreaValue(value);
   };

   return (
       <section className={classes.faq}>
          <ToastContainer />
          <form className={classes.faqForm} onSubmit={handleSubmit(onSubmit)}>
             <div>
                <label htmlFor="phoneNumber">Номер телефона</label>
                <div>
                   <PhoneInput
                       inputProps={{
                          name: "phone_number",
                          required: true,
                       }}
                       country={"kg"}
                       value={phoneNumber}
                       onChange={setPhoneNumber}
                       inputClass
                       containerClass
                       buttonClass
                       dropdownClass
                   />
                </div>
                {!errors?.phone_number && (
                    <Typography className={classes.note} variant="span" color="grey500">
                       необязательно
                    </Typography>
                )}
                <Typography className={classes.errors} variant="span">
                   {errors?.phone_number && errors.phone_number.message}
                </Typography>
             </div>
             <div>
                <label htmlFor="name">ФИО</label>
                <TextInput
                    id="name"
                    type="text"
                    {...register("full_name", {
                       required: "Это поле обязательное!",
                    })}
                    placeholder="Иванов Иван Иванович"
                />
                <Typography className={classes.errors} variant="span">
                   {errors?.full_name && errors.full_name.message}
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
               <textarea
                   maxLength={300}
                   id="text"
                   placeholder="Введите текст"
                   {...register("question_text", {
                      required: "Это поле обязательное!",
                      minLength: {
                         value: 20,
                         message: "Не менее 20 символов"
                      }
                   })}
                   value={textAreaValue}
                   onChange={handleTextAreaChange}
               />
                <Typography className={classes.errors} variant="span">
                   {errors?.question_text && errors.question_text.message}
                </Typography>
                <Typography className={classes.counter} variant="span">
                   {textAreaValue.length}/300
                </Typography>
             </div>
             <button
                 className={`${!isValid ? classes.disabledBtn : classes.enabledBtn}`}
                 disabled={!isValid}
                 type="submit"
             >
                ОТПРАВИТЬ ВОПРОС
             </button>
          </form>
       </section>
   );
};
