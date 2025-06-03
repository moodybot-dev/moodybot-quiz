import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PersonalityType } from "@shared/schema";
import { shareToFacebook, shareToTwitter, shareToLinkedIn } from "@/lib/quiz-storage";
import { Facebook, Twitter, Linkedin } from "lucide-react";

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
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <Card className="mb-6 shadow-xl overflow-hidden">
          {/* Result Header */}
          <div className="bg-gradient-to-br from-indigo-600 to-pink-500 p-8 text-white text-center">
            <div className="text-6xl mb-4">{personalityType.emoji}</div>
            <h2 className="text-2xl font-bold mb-2">{personalityType.type}</h2>
            <p className="text-indigo-100 font-medium">Your Weapon: {personalityType.weapon}</p>
          </div>

          {/* Result Description */}
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              {personalityType.description}
            </p>

            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Recommended Resource:</h3>
              <a 
                href="#" 
                className="text-indigo-600 font-medium hover:underline"
                onClick={(e) => e.preventDefault()}
              >
                {personalityType.resource}
              </a>
            </div>

            {/* Additional Resources */}
            <div className="space-y-3 mb-6">
              <a 
                href="#" 
                className="block text-indigo-600 hover:text-indigo-700 font-medium"
                onClick={(e) => e.preventDefault()}
              >
                → Try the MoodyBot Telegram Trial Bot — 3 Free Replies
              </a>
              <a 
                href="#" 
                className="block text-indigo-600 hover:text-indigo-700 font-medium"
                onClick={(e) => e.preventDefault()}
              >
                → Follow @MoodyBotAI on X
              </a>
              <a 
                href="#" 
                className="block text-indigo-600 hover:text-indigo-700 font-medium"
                onClick={(e) => e.preventDefault()}
              >
                → Subscribe on Substack
              </a>
              <a 
                href="#" 
                className="block text-indigo-600 hover:text-indigo-700 font-medium"
                onClick={(e) => e.preventDefault()}
              >
                → MoodyBot.ai
              </a>
            </div>

            {/* Social Share */}
            <div className="border-t pt-6">
              <p className="text-sm text-gray-600 mb-4 text-center">Share your result:</p>
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
          <Button
            onClick={onRetakeQuiz}
            className="w-full bg-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-indigo-700 transition-all duration-200"
            size="lg"
          >
            Take Quiz Again
          </Button>
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
