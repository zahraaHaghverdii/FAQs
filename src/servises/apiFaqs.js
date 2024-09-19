import toast from "react-hot-toast";

export async function getApiFaqs() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  if (!res.ok) {
    toast.error(`خطا در برقراری ارتباط با سرور`);
    throw new Error("no fetch data movies");
  }

  const data = await res.json();
  return data;
}
