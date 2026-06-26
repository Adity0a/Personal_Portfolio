import {
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";
import { isDesktop } from "../lib/device";
import { useProgress } from "@react-three/drei";
import { LoadingContext } from "./LoadingContext";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);
  const { progress } = useProgress();

  // Track loading progress.
  // We combine Three.js progress with a minimum incrementing baseline to prevent 0% stalls.
  useEffect(() => {
    setLoading((prev) => {
      const currentProgress = Math.round(progress);
      return Math.max(prev, currentProgress);
    });
  }, [progress]);

  // Fallback / Auto-increment:
  // If progress is slow or stuck, we gradually increment it to 100%
  // to ensure the user isn't stuck forever.
  useEffect(() => {
    if (loading >= 100) return;

    const interval = setInterval(() => {
      setLoading((prev) => {
        if (prev >= 99) {
          clearInterval(interval);
          return 100;
        }
        // Small random increment
        const increment = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + increment, 99);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [loading >= 100]); // Restart if not complete

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main
        className={`main-body ${isLoading ? "hidden" : ""}`}
        aria-busy={isLoading}
      >
        {children}
      </main>
    </LoadingContext.Provider>
  );
};
