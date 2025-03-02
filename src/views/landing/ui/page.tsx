import { tv } from "tailwind-variants";
import { DESCRIPTION } from "@/shared/config";
import TryItButton from "@/views/landing/ui/try-it-button";

const style = tv({
  slots: {
    title: "sm:text-9xl font-black italic text-7xl",
    description: "text-lg sm:text-2xl text-default-700",
  },
  variants: {
    color: {
      primary: {
        title: "text-primary",
      },
    },
  },
});

export default function Home() {
  const { title, description } = style();

  return (
    <article className="flex flex-col self-center px-2">
      <div className="flex flex-wrap">
        <span className="mr-4 flex w-fit shrink-0 flex-row">
          <h1 className={title({ color: "primary" })}>Gener</h1>
          <h1 className={title()}>ate</h1>
        </span>
        <h1 className={title()}>Your</h1>
      </div>
      <div className="mb-2 flex">
        <h1 className={title()}>News</h1>
        <h1 className={title({ color: "primary" })}>Letter</h1>
      </div>
      {DESCRIPTION.split(".")
        .filter((line) => line)
        .map((line) => (
          <p key={line} className={description()}>
            {line}.
          </p>
        ))}
      <TryItButton className="mt-7" />
    </article>
  );
}
