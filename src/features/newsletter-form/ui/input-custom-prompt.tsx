import { Textarea } from "@heroui/react";
import { useNewsletterFormStore } from "../store/form-data";

interface Props {
  className?: string;
}

const InputCustomPrompt = ({ className }: Props) => {
  const custom_prompt = useNewsletterFormStore((state) => state.custom_prompt);
  const setCustomPrompt = useNewsletterFormStore(
    (state) => state.setCustomPrompt,
  );

  return (
    <Textarea
      className={className}
      minRows={12}
      maxRows={12}
      label="Prompt"
      value={custom_prompt}
      onValueChange={setCustomPrompt}
      placeholder="만들고 싶은 뉴스레터의 본문 예시를 적어주세요!
      예시:
      안녕하세요, Generletter 독자 여러분!이번 주 뉴스레터에서는 자동화와 AI 기술이 가져오는 혁신적인 변화들을 깊이 있게 탐구합니다.

🚀 기술 하이라이트: AI와 자동화가 바꾸는 비즈니스 환경

AI 기반 자동화 기술은 기업 운영 방식을 혁신적으로 변화시키고 있습니다. 반복적인 작업을 줄이고, 더 중요한 일에 집중할 수 있도록 돕는 AI 도구들이 속속 등장하고 있습니다. 특히 챗봇, 자동 이메일 마케팅, AI 기반 고객 지원 등 다양한 분야에서 그 효과를 발휘하고 있습니다.

📊 산업 인사이트: 노코드 & 로우코드 플랫폼의 급성장

이제는 프로그래밍을 몰라도 웹사이트와 앱을 쉽게 개발할 수 있는 시대입니다. 노코드(No-Code) 및 로우코드(Low-Code) 플랫폼이 빠르게 성장하며, 개발자뿐만 아니라 일반 사용자들도 디지털 제품을 직접 만들 수 있는 기회가 열리고 있습니다. 이 트렌드는 기업의 개발 비용을 절감하고, 빠른 프로토타이핑을 가능하게 합니다.

🔍 전문가 인터뷰: AI 자동화의 미래는?

이번 주에는 자동화 전문가 Jane Doe와의 인터뷰를 준비했습니다. 그녀는 “AI 기술은 단순한 반복 작업을 넘어, 창의적인 작업까지 보조하는 방향으로 발전하고 있다”고 말합니다. 또한 AI가 기업 내에서 업무 최적화, 데이터 분석, 그리고 실시간 의사 결정을 지원하는 방식에 대해 깊이 있는 의견을 나누었습니다.

💡 프로 팁: AI 기반 뉴스레터 마케팅 활용법

AI를 활용한 이메일 뉴스레터가 어떻게 더 많은 구독자와의 소통을 강화하는지 알아보세요. 개인화된 콘텐츠 추천, 자동 응답 기능, A/B 테스트 최적화 등 AI를 활용하면 마케팅 전략을 한층 더 스마트하게 만들 수 있습니다.

Generletter는 여러분과 함께 디지털 혁신의 최전선에서 뛰고 있습니다. 다음 뉴스레터도 기대해 주세요!"
    />
  );
};

export default InputCustomPrompt;
