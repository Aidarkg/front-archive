import { Typography } from "../../../Typography/Typography.jsx";
import { TextInput } from "../../../ui/textInput/TextInput.jsx";
import {CustomButton} from "../../../ui/customButton/CustomButton.jsx";
// import {useForm} from "react-hook-form";
export const QuestionForm = () => {

   // const {
   //    register,
   //    handleSubmit
   // } = useForm();
   //
   // const onSubmit = (data) => {
   //    console.log(data);
   // };

   return (
      <section>
         <Typography variant="h1" color="blue500">Задайте свой вопрос</Typography>
         <form>
            <div>
               <TextInput
                   type="number"
                   placeholder="+996"
               />
            </div>
            <div>
               <TextInput
                   type="text"
                   placeholder="Иванов Иван Иванович"
               />
            </div>
            <div>
               <TextInput
                   type="text"
                   placeholder="Введите почту"
               />
            </div>
            <CustomButton text="отправить вопрос" type="submit"/>
         </form>
      </section>
   );
};
