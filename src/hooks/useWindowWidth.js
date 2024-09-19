import { useState, useEffect } from "react";

// هوک سفارشی برای دریافت عرض پنجره
export function useWindowWidth() {
  // state برای ذخیره عرض پنجره
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // effect برای گوش دادن به تغییرات عرض پنجره
  useEffect(() => {
    // تابعی برای به‌روزرسانی عرض پنجره در هنگام تغییر
    const handleResize = () => setWindowWidth(window.innerWidth);

    // افزودن event listener برای تغییر اندازه پنجره
    window.addEventListener("resize", handleResize);

    // پاک‌سازی event listener هنگام unmount شدن کامپوننت
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // [] به این معنی است که این effect فقط یک‌بار در mount شدن اجرا می‌شود

  return windowWidth; // بازگرداندن عرض فعلی پنجره
}
