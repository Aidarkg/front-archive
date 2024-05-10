import { Typography } from "../../../Typography/Typography.jsx";
import { TextInput } from "../../../ui/textInput/TextInput.jsx";
export const QuestionForm = () => {
   return (
      <section>
         <Typography variant="h1" color="blue500">
            Задайте свой вопрос
         </Typography>
         <form>
            <div>
               <TextInput type="text" placeholder="Username" />
            </div>
         </form>
      </section>
   );
};
