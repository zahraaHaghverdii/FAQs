import { createContext, useContext, useState } from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const StyledSpanInformation = styled.span`
  color: var(--color-grey-300);
  font-size: 1.3rem;
  line-height: 2.5rem;
`;

// 1. ایجاد کانتکس
const FaqContext = createContext();

// 2. ایجاد کامپوننت برای باز یا بسته بودن
function Faqs({ children }) {
  const [openId, setOpenId] = useState(null);

  // تابع toggle برای باز و بسته کردن تنها یک آیتم
  const toggle = (id) => {
    setOpenId((prevOpenId) => (prevOpenId === id ? null : id));
  };

  return (
    <FaqContext.Provider value={{ openId, toggle }}>
      {children}
    </FaqContext.Provider>
  );
}

// 3. ساخت کامپوننت‌های مدنظر
// 3-1 کامپوننت Title
function Title({ children, id }) {
  const { toggle } = useContext(FaqContext);

  const handleToggle = () => {
    toggle(id);
  };

  return <StyledTitle onClick={handleToggle}>{children}</StyledTitle>;
}

// 3-2 کامپوننت SpanInformation
function Information({ children, id }) {
  const { openId } = useContext(FaqContext);

  // تنها زمانی محتوای SpanInformation نمایش داده شود که openId برابر با شناسه آیتم باشد
  return openId === id ? (
    <StyledSpanInformation>{children}</StyledSpanInformation>
  ) : null;
}

//Chenge Icon
function Icon({ id, openIcon, closeIcon }) {
  const { openId } = useContext(FaqContext);
  // تنها زمانی محتوای SpanInformation نمایش داده شود که openId برابر با شناسه آیتم باشد
  return openId !== id ? <img src={openIcon} /> : <img src={closeIcon} />;
}

// 4. export کردن کامپوننتی که محتوای اصلی یعنی قسمت (2) در آن ساخته شده
Faqs.Title = Title;
Faqs.Information = Information;
Faqs.Icon = Icon;

export default Faqs;
