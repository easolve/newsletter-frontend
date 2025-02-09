import { tv } from "tailwind-variants";

export const card = tv({
  slots: {
    wrapper: "p-1 grow min-h-[200px]",
    header: "flex gap-2",
  },
});
