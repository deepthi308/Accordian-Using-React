export default function AccordianItem({ faq, index, isOpenAcc, setIsOpenAcc }) {
  const { title, text } = faq;

  const handleAccordianClick = () => {
    setIsOpenAcc((isOpenAcc) => (isOpenAcc === index ? null : index));
  };

  return (
    <li className="accordian-item" onClick={handleAccordianClick}>
      <div className="top">
        <div className="text">{index + 1}</div>
        <div className="title">{faq.title}</div>
        <div className="symbol">+</div>
      </div>
      {isOpenAcc === index && (
        <div className="bottom">
          <div className="ans">{text}</div>
        </div>
      )}
    </li>
  );
}
