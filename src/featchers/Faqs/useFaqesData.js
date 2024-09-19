import { useQuery } from "@tanstack/react-query";
import { getApiFaqs } from "../../servises/apiFaqs";

export function useFaqesData() {
  const { data: faq, isLoading } = useQuery({
    queryFn: getApiFaqs,
    queryKey: ["FAQS"],
  });

  return { faq, isLoading };
}
