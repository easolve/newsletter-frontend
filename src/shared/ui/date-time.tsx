import { getDate, getTime } from "@/shared/lib";

interface Props {
  date: string;
}

const DateTime = ({ date }: Props) => (
  <div className="flex gap-2">
    <div>{getDate(date)}</div>
    <div>{getTime(date)}</div>
  </div>
);

export default DateTime;
