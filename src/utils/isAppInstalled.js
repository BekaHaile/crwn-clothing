import { useState, useEffect } from "react";

function useAppInstalledChecker(appName) {
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  useEffect(() => {
    console.log("Checking if app is installed");
    const checkAppInstalled = () => {
      const isInstalled =
        !!window.navigator.standalone ||
        window.matchMedia("(display-mode: standalone)").matches;
      setIsAppInstalled(isInstalled);
    };

    if (appName) {
      console.log("Checking for ", appName);
      window.addEventListener("appinstalled", checkAppInstalled);
      window.addEventListener("DOMContentLoaded", checkAppInstalled);
    }

    return () => {
      window.removeEventListener("appinstalled", checkAppInstalled);
      window.removeEventListener("DOMContentLoaded", checkAppInstalled);
    };
  }, [appName]);

  console.log("isAppInstalled", isAppInstalled);
  return isAppInstalled;
}

export default useAppInstalledChecker;