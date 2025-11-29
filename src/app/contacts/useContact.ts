import { ref, push } from "firebase/database";
import { db } from "../firebase";
import { toast } from "react-toastify";



export default function useContact() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement & {
      question: HTMLInputElement;
      name: HTMLInputElement;
      email: HTMLInputElement;
      number: HTMLInputElement;
      website: HTMLInputElement;
      message: HTMLInputElement;
    };
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

  return { onSubmit };
}
