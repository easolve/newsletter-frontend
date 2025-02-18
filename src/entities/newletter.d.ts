namespace Newsletter {
  interface Base {
    name: string;
    description: string;
    custom_prompt: string;
    send_frequency: Frequency;
    send_time: string;
    language: Language;
    is_active: boolean;
    topic: string[];
    source: string[];
  }

  interface Info extends Base {
    id: string;
  }
}

type Frequency = "daily" | "weekly" | "bi-weekly" | "monthly";

type Language = "ko" | "en";
