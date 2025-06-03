import { QuizProgress } from "@shared/schema";

const STORAGE_KEY = 'emotional-weapon-quiz-progress';

export function saveQuizProgress(progress: QuizProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.warn('Failed to save quiz progress:', error);
  }
}

export function loadQuizProgress(): QuizProgress | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.warn('Failed to load quiz progress:', error);
    return null;
  }
}

export function clearQuizProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Failed to clear quiz progress:', error);
  }
}

export function shareToFacebook(personalityType: string): void {
  const text = `I just discovered I'm a ${personalityType}! Take the Emotional Weapon Quiz to find your type.`;
  const url = encodeURIComponent(window.location.href);
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodeURIComponent(text)}`;
  window.open(shareUrl, '_blank', 'width=600,height=400');
}

export function shareToTwitter(personalityType: string): void {
  const text = `I just discovered I'm a ${personalityType}! Take the Emotional Weapon Quiz to find your type.`;
  const url = encodeURIComponent(window.location.href);
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`;
  window.open(shareUrl, '_blank', 'width=600,height=400');
}

export function shareToLinkedIn(personalityType: string): void {
  const url = encodeURIComponent(window.location.href);
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  window.open(shareUrl, '_blank', 'width=600,height=400');
}
