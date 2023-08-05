import AccordianItem from "./AccordianItem";

export default function Accordian({ faqs, isOpenAcc, setIsOpenAcc }) {
  return (
    <ul className="accordian">
      {faqs.map((faq, index) => {
        return (
          <AccordianItem
            faq={faq}
            index={index}
            isOpenAcc={isOpenAcc}
            setIsOpenAcc={setIsOpenAcc}
          />
        );
      })}
    </ul>
  );
}
