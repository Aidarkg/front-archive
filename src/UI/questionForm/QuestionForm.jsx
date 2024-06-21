import classes from "./QuestionForm.module.sass";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "../textInput/TextInput.jsx";
import { Typography } from "../Typography/Typography.jsx";
import { regexForm } from "../../pages/FAQ/regexForm/regexForm.jsx";
import useQuestionStore from "../../pages/FAQ/store/store.js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";
import { SuccessModal } from "../../modules/modalPage/successModal/SuccessModal.jsx";

export const QuestionForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors, isValid, isSubmitSuccessful },
      trigger,
      reset,
      setValue,
      watch
   } = useForm({
      mode: "onBlur",
   });

   const [phoneNumber, setPhoneNumber] = useState("");
   const [showModal, setShowModal] = useState(false);

   const submitQuestion = useQuestionStore((state) => state.submitQuestion);

   const onSubmit = (data) => {
      data.phone_number = phoneNumber;
      submitQuestion(data);
      reset();
      setValue("question_text", "", { shouldValidate: false });
      setPhoneNumber("");
      setShowModal(true);
   };

   const formValidate = (value) => ({
      required: "Это поле обязательное!",
      pattern: {
         value: value,
         message: "Неправильный формат почты!",
      },
   });

   useEffect(() => {
      if (isSubmitSuccessful) {
         trigger();
      }
   }, [isSubmitSuccessful, trigger]);

   const { t } = useTranslation();

   const handlePhoneNumberChange = (value) => {
      setPhoneNumber(value);
      setValue("phone_number", value, { shouldValidate: true });
   };

   const closeModal = () => {
      setShowModal(false);
   };

   return (
       <section className={classes.faq}>
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
                    <Typography className={classes.note} variant="span" color="grey500">
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
                    {...register("full_name", { required: "Это поле обязательное!" })}
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
                    id="question_text"
                    placeholder="Введите текст"
                    {...register("question_text", {
                       required: "Это поле обязательное!",
                       minLength: {
                          value: 20,
                          message: "Не менее 20 символов",
                       },
                       onChange: (e) => {
                          setValue("question_text", e.target.value);
                       },
                    })}
                />
                <Typography className={classes.errors} variant="span">
                   {errors?.question_text && errors.question_text.message}
                </Typography>
                <Typography className={classes.counter} variant="span">
                   {watch("question_text")?.length || 0}/300
                </Typography>
             </div>
             <button
                 className={`${!isValid ? classes.disabledBtn : classes.enabledBtn}`}
                 disabled={!isValid}
                 type="submit"
             >
                {t("q&aPage.form.button")}
             </button>
          </form>
          <SuccessModal show={showModal} onClose={closeModal} />
       </section>
   );
};
