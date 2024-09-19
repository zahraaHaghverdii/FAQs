import { Outlet } from "react-router";
import styled, { ThemeProvider } from "styled-components";
import { createTheme } from "../hooks/theme";
import { useWindowWidth } from "../hooks/useWindowWidth";
import Header from "./Header";

// ایجاد تم با مقادیر سفارشی
const customBreakpoints = {
  mobile: "500px", // مقدار سفارشی برای mobile
  tablet: "795px", // مقدار سفارشی برای tablet
  desktop: "1440px", // مقدار سفارشی برای desktop
};

const StyledMain = styled.div`
  margin: 0;
  width: 100%;
  background: var(--color-pink-30);
`;

const Img = styled.img`
  width: 100%; /* تصویر کل عرض کانتینر را می‌گیرد */
  height: auto; /* ارتفاع به‌صورت خودکار تغییر می‌کند */
  max-height: 80vh; /* برای محدود کردن ارتفاع تصویر */
  display: block; /* حذف فضای خالی زیر تصویر */
  object-fit: cover; /* برای تناسب بهتر تصویر با کانتینر */
  position: relative;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-sm);
  margin: auto;
  padding: 15px 30px;
  position: absolute; /* موقعیت مطلق روی تصویر */
  top: 50%;
  left: 50%; /* باکس در مرکز افقی تصویر قرار می‌گیرد */
  transform: translate(-50%, -50%); /* نصف باکس داخل تصویر و نصف بیرون */
  width: 35%; /* عرض باکس */
  height: 400px; /* ارتفاع باکس */
  text-transform: capitalize;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    padding: 15px 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 15px 20px;
    width: 80%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 35%;
  }
`;

const Main = styled.div`
  overflow-y: auto;
  height: 320px;
`;

function AppLayout() {
  const theme = createTheme(customBreakpoints); // ایجاد تم با نقاط شکست سفارشی
  const width = useWindowWidth();

  const src =
    width >= parseInt(theme.breakpoints.mobile)
      ? "image/background-pattern-desktop.svg"
      : "image/background-pattern-mobile.svg";

  return (
    <ThemeProvider theme={createTheme}>
      <StyledMain>
        <Img src={src} />
        <StyledBody>
          <Header />
          <Main>
            <Outlet />
          </Main>
        </StyledBody>
      </StyledMain>
    </ThemeProvider>
  );
}

export default AppLayout;
