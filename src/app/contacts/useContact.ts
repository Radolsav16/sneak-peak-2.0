import { ref, push } from "firebase/database";
import { db } from "../firebase";
import { toast } from "react-toastify";
export default function useContact(){
      const onSubmit = async (e) => {
        e.preventDefault();
    
        const form = e.target;
        const data = {
          question: form.question.value,
          name: form.name.value,
          email: form.email.value,
          number: form.number.value,
          website: form.website.value,
          message: form.message.value,
          createdAt: new Date().toISOString(),
        };
    
    
        try {
          await push(ref(db, "contactMessages"), data);
          toast.success("Съобщението е изпратено успешно!");
          form.reset();
        } catch (error) {
          toast.error("Грешка при изпращане! Опитайте отново.");
        }
      };

      return {onSubmit}
}