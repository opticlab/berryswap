import { useCallback, useMemo } from "react";

const toasty = require("toasty");

export default function useToasty() {
  const t = useCallback(() => {
    return toasty().trigger();
  }, []);

  return t;
}
