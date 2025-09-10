import { useCallback, useRef, useState } from "react";
import Accordion from "./Accordion";

const Card = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const setButtonRef = useCallback(
    (index: number, el: HTMLButtonElement | null) => {
      buttonRefs.current[index] = el;
    },
    []
  );

  const focusItem = (index: number) => {
    buttonRefs.current[index]?.focus();
  };

  const faqs = [
    {
      q: "What is Frontend Mentor, and how will it help me?",
      a: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills...",
    },
    {
      q: "Is Frontend Mentor free?",
      a: "Yes, Frontend Mentor offers both free and premium challenges.",
    },
    {
      q: "Can I use Frontend Mentor projects in my portfolio?",
      a: "Absolutely! It's a great way to showcase your skills.",
    },
    {
      q: "How can I get help if I'm stuck on a challenge?",
      a: "The community forum is a great place to ask questions and get feedback.",
    },
  ];

  return (
    <main className="max-w-81.75 bg-white text-purple-950 p-6 rounded-lg md:max-w-150 md:p-10">
      <div className="flex gap-6 mb-6">
        <img src="/images/icon-star.svg" alt="icon star" />
        <h1 className="text-preset-1">FAQs</h1>
      </div>
      <section>
        {faqs.map((faq, index) => {
          return (
            <Accordion
              key={index}
              id={String(index)}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              buttonRef={(el) => setButtonRef(index, el)}
              focusNext={() => focusItem((index + 1) % faqs.length)}
              focusPrev={() =>
                focusItem((index - 1 + faqs.length) % faqs.length)
              }
            />
          );
        })}
      </section>
    </main>
  );
};
export default Card;
