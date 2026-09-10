import React, { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { AccessibilitySettings, TextSize, ContrastMode, MotionMode } from '../types';

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  setTextSize: (size: TextSize) => void;
  setContrast: (contrast: ContrastMode) => void;
  setMotion: (motion: MotionMode) => void;
  toggleReadingMode: () => void;
  toggleDyslexiaFont: () => void;
  toggleHighlightLinks: () => void;
  toggleLargeTargets: () => void;
  toggleKeyboardMode: () => void;
  toggleSpeech: () => void;
  stopSpeech: () => void;
  resetAll: () => void;
  announcement: string;
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  textSize: 'normal',
  contrast: 'normal',
  motion: 'normal',
  readingMode: false,
  dyslexiaFont: false,
  highlightLinks: false,
  largeTargets: false,
  keyboardMode: false,
  isSpeaking: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem('ajce_a11y_settings');
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved), isSpeaking: false };
      }
    } catch {
      // ignore
    }
    return DEFAULT_SETTINGS;
  });

  const [announcement, setAnnouncement] = useState<string>('');

  const announce = useCallback((msg: string) => {
    setAnnouncement(msg);
    const timer = setTimeout(() => setAnnouncement(''), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      const { isSpeaking: _, ...toSave } = settings;
      localStorage.setItem('ajce_a11y_settings', JSON.stringify(toSave));
    } catch {
      // ignore
    }
  }, [settings]);

  // Apply classes to document.documentElement
  useEffect(() => {
    const root = document.documentElement;

    // Text Size
    root.classList.remove('text-size-large', 'text-size-xlarge');
    if (settings.textSize === 'large') root.classList.add('text-size-large');
    if (settings.textSize === 'xlarge') root.classList.add('text-size-xlarge');

    // Contrast
    if (settings.contrast === 'high') {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Motion
    if (settings.motion === 'reduced') {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Reading Mode
    if (settings.readingMode) {
      root.classList.add('reading-mode');
    } else {
      root.classList.remove('reading-mode');
    }

    // Dyslexia Font
    if (settings.dyslexiaFont) {
      root.classList.add('dyslexia-font');
    } else {
      root.classList.remove('dyslexia-font');
    }

    // Highlight Links
    if (settings.highlightLinks) {
      root.classList.add('highlight-links');
    } else {
      root.classList.remove('highlight-links');
    }

    // Large Targets
    if (settings.largeTargets) {
      root.classList.add('large-targets');
    } else {
      root.classList.remove('large-targets');
    }

    // Keyboard mode
    if (settings.keyboardMode) {
      root.classList.add('keyboard-focus-boost');
    } else {
      root.classList.remove('keyboard-focus-boost');
    }
  }, [settings]);

  // Handle Speech Synthesis
  const stopSpeech = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSettings((prev) => ({ ...prev, isSpeaking: false }));
    announce('Voice reading stopped');
  }, [announce]);

  const toggleSpeech = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      announce('Text-to-speech is not supported on this browser.');
      return;
    }

    if (settings.isSpeaking) {
      stopSpeech();
      return;
    }

    // Read visible main content
    const mainElement = document.getElementById('main-content') || document.body;
    // Extract textual content from headings and paragraphs
    const elements = mainElement.querySelectorAll('h1, h2, h3, p, [data-a11y-read]');
    const textPieces: string[] = [];

    elements.forEach((el) => {
      // Exclude hidden elements or accessibility panel itself
      if (el.closest('#a11y-panel') || el.closest('[aria-hidden="true"]')) return;
      const text = el.textContent?.trim();
      if (text && text.length > 2) {
        textPieces.push(text);
      }
    });

    const fullText = textPieces.slice(0, 45).join('. '); // reasonable chunk for narration
    if (!fullText) {
      announce('No readable text found.');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setSettings((prev) => ({ ...prev, isSpeaking: true }));
      announce('Reading page aloud started.');
    };

    utterance.onend = () => {
      setSettings((prev) => ({ ...prev, isSpeaking: false }));
      announce('Finished reading page aloud.');
    };

    utterance.onerror = () => {
      setSettings((prev) => ({ ...prev, isSpeaking: false }));
    };

    window.speechSynthesis.speak(utterance);
  }, [settings.isSpeaking, announce, stopSpeech]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const setTextSize = (size: TextSize) => {
    setSettings((prev) => ({ ...prev, textSize: size }));
    announce(`Text size set to ${size}`);
  };

  const setContrast = (contrast: ContrastMode) => {
    setSettings((prev) => ({ ...prev, contrast }));
    announce(`Contrast mode set to ${contrast}`);
  };

  const setMotion = (motion: MotionMode) => {
    setSettings((prev) => ({ ...prev, motion }));
    announce(`Motion set to ${motion}`);
  };

  const toggleReadingMode = () => {
    setSettings((prev) => {
      const next = !prev.readingMode;
      announce(next ? 'Reading mode enabled' : 'Reading mode disabled');
      return { ...prev, readingMode: next };
    });
  };

  const toggleDyslexiaFont = () => {
    setSettings((prev) => {
      const next = !prev.dyslexiaFont;
      announce(next ? 'Dyslexia-friendly font enabled' : 'Default font restored');
      return { ...prev, dyslexiaFont: next };
    });
  };

  const toggleHighlightLinks = () => {
    setSettings((prev) => {
      const next = !prev.highlightLinks;
      announce(next ? 'Highlight links enabled' : 'Highlight links disabled');
      return { ...prev, highlightLinks: next };
    });
  };

  const toggleLargeTargets = () => {
    setSettings((prev) => {
      const next = !prev.largeTargets;
      announce(next ? 'Larger click targets enabled' : 'Standard click targets restored');
      return { ...prev, largeTargets: next };
    });
  };

  const toggleKeyboardMode = () => {
    setSettings((prev) => {
      const next = !prev.keyboardMode;
      announce(next ? 'Keyboard high-visibility focus enabled' : 'Standard focus restored');
      return { ...prev, keyboardMode: next };
    });
  };

  const resetAll = () => {
    stopSpeech();
    setSettings(DEFAULT_SETTINGS);
    announce('All accessibility settings have been reset to defaults.');
  };

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        setTextSize,
        setContrast,
        setMotion,
        toggleReadingMode,
        toggleDyslexiaFont,
        toggleHighlightLinks,
        toggleLargeTargets,
        toggleKeyboardMode,
        toggleSpeech,
        stopSpeech,
        resetAll,
        announcement,
      }}
    >
      {children}
      {/* Live ARIA Region for screen-reader announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="a11y-announcements"
      >
        {announcement}
      </div>
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
