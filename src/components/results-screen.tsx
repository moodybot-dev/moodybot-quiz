import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PersonalityType } from "@shared/schema";
import { shareToFacebook, shareToTwitter, shareToLinkedIn } from "@/lib/quiz-storage";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";

interface ResultsScreenProps {
  personalityType: PersonalityType;
  totalScore: number;
  onRetakeQuiz: () => void;
}

export function ResultsScreen({ personalityType, totalScore, onRetakeQuiz }: ResultsScreenProps) {
  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin') => {
    switch (platform) {
      case 'facebook':
        shareToFacebook(personalityType.type);
        break;
      case 'twitter':
        shareToTwitter(personalityType.type);
        break;
      case 'linkedin':
        shareToLinkedIn(personalityType.type);
        break;
    }
  };

  const handleLearnMore = () => {
    window.open('https://moodybot.ai', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-800 p-6">
      <div className="max-w-md mx-auto">
        <Card className="mb-6 shadow-xl overflow-hidden bg-zinc-900 border border-zinc-700">
          {/* Result Header */}
          <div className="bg-gradient-to-br from-indigo-600 to-pink-500 p-8 text-white text-center">
            <div className="text-6xl mb-4">{personalityType.emoji}</div>
            <h2 className="text-2xl font-bold mb-2">{personalityType.type}</h2>
            <p className="text-indigo-100 font-medium">
              Your Weapon: {personalityType.weapon}
            </p>
          </div>

          {/* Result Description */}
          <CardContent className="p-6">
            <p className="text-white leading-relaxed mb-6">
              {personalityType.description}
            </p>

            <div className="bg-zinc-800 rounded-xl p-4 mb-6 text-center">
              <h3 className="font-semibold text-white mb-2">Recommended Resource:</h3>
              <a
                href={personalityType.resourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 font-medium hover:underline"
              >
                {personalityType.resource}
              </a>
            </div>

            {/* Additional Resources */}
            <div className="space-y-3 mb-6 text-sm text-indigo-300">
              <a
                href="https://t.me/MoodyBotTrialBot"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-indigo-400 font-medium"
              >
                → Try the MoodyBot Telegram Trial Bot — 3 Free Replies
              </a>
              <a
                href="https://x.com/MoodyBotAI"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-indigo-400 font-medium"
              >
                → Follow @MoodyBotAI on X
              </a>
              <a
                href="https://moodybot.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-indigo-400 font-medium"
              >
                → Subscribe on Substack
              </a>
              <a
                href="https://moodybot.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-indigo-400 font-medium"
              >
                → MoodyBot.ai
              </a>
            </div>

            {/* Social Share */}
            <div className="border-t border-zinc-700 pt-6">
              <p className="text-sm text-zinc-400 mb-4 text-center">Share your result:</p>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => handleShare('facebook')}
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                  size="sm"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleShare('twitter')}
                  className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
                  size="sm"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleShare('linkedin')}
                  className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors"
                  size="sm"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
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
      </div>
    </div>
  );
}

