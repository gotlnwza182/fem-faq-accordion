interface AccordionProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  focusNext?: () => void;
  focusPrev?: () => void;
  buttonRef?: (el: HTMLButtonElement | null) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle,
  focusNext,
  focusPrev,
  buttonRef,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusNext?.();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      focusPrev?.();
    }
  };

  return (
    <div className="border-b border-purple-100 py-6  first:pt-0 last:pb-0 last:border-0">
      <button
        ref={buttonRef}
        id={`accordion-${id}-header`}
        aria-expanded={isOpen}
        aria-controls={`accordion-${id}-panel`}
        type="button"
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="flex items-center justify-between w-full cursor-pointer focus:outline-2 focus:outline-violet-600 focus:outline-offset-2"
      >
        <span className="text-preset-2 w-11/12  text-start">{question}</span>
        <span aria-hidden={!isOpen}>
          {!isOpen ? (
            <img src="/images/icon-plus.svg" alt="expanded icon" />
          ) : (
            <img src="/images/icon-minus.svg" alt="expanded icon" />
          )}
        </span>
      </button>

      <div
        id={`accordion-${id}-panel`}
        role="region"
        aria-labelledby={`accordion-${id}-header`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-preset-3 mt-6 ">{answer}</p>
      </div>
    </div>
  );
};
export default Accordion;
