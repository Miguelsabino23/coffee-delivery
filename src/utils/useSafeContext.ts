import { useContext } from "react";

export function useSafeContext<T>(
  context: React.Context<T | undefined>,
  errorMessage: string
): T {
  const ctx = useContext(context);

  if (!ctx) {
    throw new Error(errorMessage);
  }

  return ctx;
}
