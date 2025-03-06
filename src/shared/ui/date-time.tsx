import { getDate, getTime } from "@/shared/lib";

interface Props {
  date: string | null;
}

const DateTime = ({ date }: Props) => {
  if (!date) {
    return <div className="flex w-full justify-center">-</div>;
  }

  return (
    <div className="flex gap-2">
      <div>{getDate(date)}</div>
      <div>{getTime(date)}</div>
    </div>
  );
};

export default DateTime;
