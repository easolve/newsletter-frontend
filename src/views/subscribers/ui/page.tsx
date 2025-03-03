import { fetchSubscribers } from "../api/subscriber";
import SubscriberTable from "./table";

interface Props {
  params: Promise<{
    info_id: string;
  }>;
}

const Subscribers = async ({ params }: Props) => {
  const { info_id } = await params;
  const subscribers = await fetchSubscribers(info_id);

  return <SubscriberTable subscribers={subscribers} />;
};

export default Subscribers;
