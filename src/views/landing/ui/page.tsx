import { tv } from "tailwind-variants";
import { DESCRIPTION } from "@/shared/config";
import TryItButton from "@/views/landing/ui/try-it-button";

const style = tv({
  slots: {
    title: "text-9xl font-black italic",
    description: "text-2xl text-default-700",
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
    <article className="flex h-full flex-col justify-center">
      <div className="flex">
        <h1 className={title({ color: "primary" })}>Gener</h1>
        <h1 className={title({ class: "mr-4" })}>ate</h1>
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
