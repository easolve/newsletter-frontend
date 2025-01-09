"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { getCookie } from "cookies-next/client";
import { useEffect, useState } from "react";
import { subtitle, title } from "@/styles/primitives";

interface ProfileInfoProps {}

interface MyNewsDto {
  name: string;
  description: string;
  send_frequency: string;
}

const dummyNews: MyNewsDto[] = [
  {
    name: "news1",
    description: "도지코인에 대한 모든 것",
    send_frequency: "weekly",
  },
  {
    name: "news2",
    description: "일론 머스크와 테슬라 주식 추적 뉴스레터",
    send_frequency: "bi-weekly",
  },
  {
    name: "news3",
    description: "트럼프와 그의 막무가내 발언에 관한 모든 것",
    send_frequency: "daily",
  },
  {
    name: "news4",
    description: "테슬라의 최신 모델과 주식에 대한 모든 것",
    send_frequency: "monthly",
  },
  {
    name: "news5",
    description: "코로나19 백신에 대한 모든 것",
    send_frequency: "daily",
  },
  {
    name: "news6",
    description: "테슬라의 최신 모델과 주식에 대한 모든 것",
    send_frequency: "monthly",
  },
  {
    name: "news7",
    description: "코로나19 백신에 대한 모든 것",
    send_frequency: "daily",
  },
];

const ProfileInfo: React.FC<ProfileInfoProps> = () => {
  const [newsArr, setNewsArr] = useState<MyNewsDto[]>(dummyNews);

  const fetchNews = async () => {
    let url = new URL("/api/user/news", "http://localhost:8000");
    const accessToken = getCookie("accessToken");

    try {
      const response: Response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        // TODO: handle error
        // e.g., 401 if invalid token
        return;
      }
      const data = await response.json();
      console.log("Response:", data);
      // setNewsArr(data.news);
    } catch (error) {
      console.error("Error fetching news:", error);
      alert("Error fetching news.");
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <h1 className={title({ size: "sm", fullWidth: true })}>My News</h1>
      <div className="flex w-full flex-nowrap gap-6 overflow-x-auto py-2">
        {newsArr.map((news) => (
          <Card
            key={news.name}
            classNames={{
              base: "w-[300px] shrink-0",
            }}
          >
            <CardHeader>
              <h2 className={subtitle()}>{news.name}</h2>
              <p>{news.send_frequency}</p>
            </CardHeader>
            <CardBody>{news.description}</CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProfileInfo;
