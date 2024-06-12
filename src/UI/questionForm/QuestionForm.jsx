import classes from "./QuestionForm.module.sass";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "../textInput/TextInput.jsx";
import { Typography } from "../Typography/Typography.jsx";
import { regexForm } from "../../pages/FAQ/regexForm/regexForm.jsx";
import useQuestionStore from "../../pages/FAQ/store/store.jsx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

export const QuestionForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors, isValid, isSubmitSuccessful },
      trigger,
      reset,
      setValue, // add setValue to update phone number
   } = useForm({
      mode: "onBlur",
   });

   const [textAreaValue, setTextAreaValue] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");

   const submitQuestion = useQuestionStore((state) => state.submitQuestion);

   const onSubmit = (data) => {
      data.phone_number = phoneNumber; // ensure phone number is included in the form data
      submitQuestion(data);
      reset();
      setTextAreaValue("");
      setPhoneNumber("");
      console.log(data, "form");
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

   const { t } = useTranslation();

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

   // Update phone number in react-hook-form on change
   const handlePhoneNumberChange = (value) => {
      setPhoneNumber(value);
      setValue("phone_number", value, { shouldValidate: true });
   };

   return (
       <section className={classes.faq}>
          <ToastContainer />
          <form className={classes.faqForm} onSubmit={handleSubmit(onSubmit)}>
             <div>
                <label htmlFor="phoneNumber">{t("q&aPage.form.phoneNumber")}</label>
                <div>
                   <PhoneInput
                       inputProps={{
                          name: "phone_number",
                          required: true,
                       }}
                       country={"kg"}
                       value={phoneNumber}
                       onChange={handlePhoneNumberChange}
                       inputClass={classes.phoneInput}
                       containerClass={classes.phoneContainer}
                       buttonClass={classes.phoneButton}
                       dropdownClass={classes.phoneDropdown}
                   />
                </div>
                {!errors?.phone_number && (
                    <Typography
                        className={classes.note}
                        variant="span"
                        color="grey500"
                    >
                       {t("q&aPage.form.notNecessary")}
                    </Typography>
                )}
                <Typography className={classes.errors} variant="span">
                   {errors?.phone_number && errors.phone_number.message}
                </Typography>
             </div>
             <div>
                <label htmlFor="name">{t("q&aPage.form.fullName")}</label>
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
                <label htmlFor="email">{t("q&aPage.form.mail")}</label>
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
                <label htmlFor="question">{t("q&aPage.form.yourQuestion")}</label>
                <textarea
                    maxLength={300}
                    id="text"
                    placeholder="Введите текст"
                    {...register("question_text", {
                       required: "Это поле обязательное!",
                       minLength: {
                          value: 20,
                          message: "Не менее 20 символов",
                       },
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
                 className={`${
                     !isValid ? classes.disabledBtn : classes.enabledBtn
                 }`}
                 disabled={!isValid}
                 type="submit"
             >
                {t("q&aPage.form.button")}
             </button>
          </form>
       </section>
   );
};
