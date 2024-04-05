import { useRouter } from "next/navigation";

export default function useRoute() {
  const router = useRouter();
  return router;
}
