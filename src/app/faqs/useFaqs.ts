"use client";
import { useState } from "react";

export default function useFaqs(){
     const [activeQuestion, setActiveQuestion] = useState<null|string>(null);
    
        const toggle = (question:string) => {
        setActiveQuestion((prev) => (prev === question ? null : question));
      };

    return {activeQuestion,toggle}
}