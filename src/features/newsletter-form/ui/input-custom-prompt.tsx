import { Textarea } from "@heroui/react";
import { useNewsletterFormStore } from "../store/form-data";

interface Props {
  className?: string;
}

const Description = () => (
  <>
    <h4 className="font-semibold">[Example]</h4>
    <p>
      Hello, Generletter readers! In this week’s newsletter, we dive deep into
      the revolutionary changes brought by automation and AI technology.
    </p>
    <h5 className="mt-1 font-medium">
      🚀 Tech Highlights: How AI and Automation Are Transforming Businesses
    </h5>
    <p>
      AI-powered automation is reshaping the way companies operate. New AI tools
      are emerging to reduce repetitive tasks and help businesses focus on more
      strategic work. From chatbots and automated email marketing to AI-driven
      customer support, automation is proving its value across various
      industries.
    </p>
    <h5 className="mt-1 font-medium">
      📊 Industry Insights: The Rapid Growth of No-Code & Low-Code Platforms
    </h5>
    <p>
      We are now in an era where creating websites and apps no longer requires
      extensive coding knowledge. No-Code and Low-Code platforms are expanding
      rapidly, empowering not only developers but also non-technical users to
      build digital products. This trend is cutting development costs for
      businesses while enabling faster prototyping.
    </p>
    <h5 className="mt-1 font-medium">
      🔍 Expert Interview: The Future of AI Automation
    </h5>
    <p>
      This week, we sat down with automation expert Jane Doe. She shared her
      insights on how AI is evolving beyond repetitive tasks to assist in
      creative processes. She also discussed how AI is optimizing workflows,
      enhancing data analysis, and supporting real-time decision-making within
      organizations.
    </p>
    <h5 className="mt-1 font-medium">
      💡 Pro Tip: Leveraging AI for Smarter Newsletter Marketing
    </h5>
    <p>
      Discover how AI can enhance your email newsletters and strengthen
      engagement with subscribers. AI-driven content personalization, automated
      responses, and A/B test optimization can take your marketing strategy to
      the next level.
    </p>
    <p className="mt-1">
      At Generletter, we’re at the forefront of digital innovation with you.
      Stay tuned for our next issue!
    </p>
  </>
);

const InputCustomPrompt = ({ className }: Props) => {
  const custom_prompt = useNewsletterFormStore((state) => state.custom_prompt);
  const setCustomPrompt = useNewsletterFormStore(
    (state) => state.setCustomPrompt,
  );

  return (
    <Textarea
      className={className}
      maxRows={12}
      label="Prompt"
      value={custom_prompt}
      onValueChange={setCustomPrompt}
      placeholder="Provide an example of the newsletter content you want to create."
      description={!custom_prompt && <Description />}
    />
  );
};

export default InputCustomPrompt;
