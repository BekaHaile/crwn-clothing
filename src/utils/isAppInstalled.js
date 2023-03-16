import { useState, useEffect } from "react";

function useAppInstalledChecker(appName) {
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  useEffect(() => {
    const checkAppInstalled = () => {
      const isInstalled =
        !!window.navigator.standalone ||
        window.matchMedia("(display-mode: standalone)").matches;
      setIsAppInstalled(isInstalled);
    };

    if (appName) {
      window.addEventListener("appinstalled", checkAppInstalled);
      window.addEventListener("DOMContentLoaded", checkAppInstalled);
    }

    return () => {
      window.removeEventListener("appinstalled", checkAppInstalled);
      window.removeEventListener("DOMContentLoaded", checkAppInstalled);
    };
  }, [appName]);

  return isAppInstalled;
}
