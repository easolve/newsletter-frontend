namespace Newsletter {
  interface Base {
    name: string;
    description: string;
    custom_prompt: string;
    send_frequency: string;
    send_time: string;
    language: import("countries-list").TLanguageCode | null;
    is_active: boolean;
    topics: string[];
    sources: string[];
  }

  type ExampleData = Pick<
    Base,
    "topics" | "sources" | "language" | "custom_prompt"
  >;

  interface Primitive extends Base {
    send_frequency: Frequency;
    language: string;
    id: string;
    created_at: string;
    updated_at: string;
    subscribers_count: number;
    last_send_status: SentStatus;
  }

  interface Info extends Primitive {
    language: import("countries-list").TLanguageCode;
  }

  interface History {
    id: string;
    title: string;
    sent_status: SentStatus;
    sent_at: string | null;
    created_at: string;
    updated_at: string;
  }
}

type Frequency = "daily" | "weekly" | "bi-weekly" | "monthly";

type SentStatus = "FAILED" | "SENT" | "STANDBY" | "NONE";
