import { Link } from "wouter";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { shareToFacebook, shareToTwitter, shareToLinkedIn } from "@/lib/quiz-storage";

interface McuQuizResultsProps {
  answers: number[];
  onRestart: () => void;
  quiz: {
    calculateResult: (answers: number[]) => {
      emoji: string;
      name: string;
      title: string;
      description: string;
      resource?: {
        label: string;
        link: string;
      };
    };
  };
}

const VILLAIN_IMAGES: Record<string, string> = {
  "🏴": "/images/killmonger.png",
  "💎": "/images/thanos.png",
  "😏": "/images/loki.png",
  "🩸": "/images/wanda.png",
  "🤯": "/images/ultron.png",
};

export function McuQuizResults({ answers, onRestart, quiz }: McuQuizResultsProps) {
  const result = quiz.calculateResult(answers);

  const handleShare = (platform: "facebook" | "twitter" | "linkedin") => {
    switch (platform) {
      case "facebook":
        shareToFacebook(result.title);
        break;
      case "twitter":
        shareToTwitter(result.title);
        break;
      case "linkedin":
        shareToLinkedIn(result.title);
        break;
    }
  };

  const handleLearnMore = () => {
    window.open("https://moodybot.ai", "_blank");
  };

  const imageSrc = VILLAIN_IMAGES[result.emoji] ?? "/images/default.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-800 p-6">
      <div className="max-w-md mx-auto">
        <Card className="mb-6 shadow-xl overflow-hidden bg-zinc-900 border border-zinc-700">
          {/* Gradient Header */}
          <div className="bg-gradient-to-br from-indigo-600 to-pink-500 p-8 text-white text-center">
            <div className="text-6xl mb-4">{result.emoji}</div>
            <h2 className="text-2xl font-bold mb-2">{result.name}</h2>
            <p className="text-indigo-100 font-medium">{result.title}</p>
          </div>

          <CardContent className="p-6">
            {/* Description */}
            <p className="text-white leading-relaxed mb-6 text-center">
              {result.description}
            </p>

            {/* Recommended Resource */}
            {result.resource && (
              <div className="bg-zinc-800 p-4 rounded-xl mb-6 text-center">
                <p className="text-white font-semibold mb-1">
                  Recommended Resource:
                </p>
                <a
                  href={result.resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 font-medium hover:underline"
                >
                  {result.resource.label}
                </a>
              </div>
            )}

            {/* Villain Image */}
            <img
              src={imageSrc}
              alt={result.name}
              className="w-full h-64 object-cover rounded-xl mb-6 shadow-md"
            />

            {/* MoodyBot Links */}
            <div className="space-y-3 mb-6 text-sm text-indigo-300">
              <a
                href="https://t.me/MoodyBotTrialBot"
                target="_blank"
                className="block hover:text-indigo-400 font-medium"
              >
                → Try the MoodyBot Telegram Trial Bot — 3 Free Replies
              </a>
              <a
                href="https://x.com/MoodyBotAI"
                target="_blank"
                className="block hover:text-indigo-400 font-medium"
              >
                → Follow @MoodyBotAI on X
              </a>
              <a
                href="https://moodybot.substack.com"
                target="_blank"
                className="block hover:text-indigo-400 font-medium"
              >
                → Subscribe on Substack
              </a>
              <a
                href="https://moodybot.ai"
                target="_blank"
                className="block hover:text-indigo-400 font-medium"
              >
                → MoodyBot.ai
              </a>
            </div>

            {/* Share Buttons */}
            <div className="border-t border-zinc-700 pt-6">
              <p className="text-sm text-zinc-400 mb-4 text-center">
                Share your result:
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => handleShare("facebook")}
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                  size="sm"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleShare("twitter")}
                  className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800"
                  size="sm"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleShare("linkedin")}
                  className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800"
                  size="sm"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>

          {/* Action Buttons */}
          <div className="space-y-3 mt-4 px-6 pb-6">
            {/* Wrap in a <Link href="/"> … </Link> so it navigates home */}
            <Link href="/">
              <Button
                className="w-full bg-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-indigo-700"
                size="lg"
              >
                Take Another Quiz
              </Button>
            </Link>

            <Button
              onClick={handleLearnMore}
              variant="outline"
              className="w-full border-2 border-indigo-600 text-indigo-600 font-semibold py-4 px-6 rounded-xl hover:bg-indigo-50 transition-all duration-200"
              size="lg"
            >
              Learn More About MoodyBot
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
