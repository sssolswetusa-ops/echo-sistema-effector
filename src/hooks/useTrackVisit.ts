import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import func2url from "../../backend/func2url.json"

export function useTrackVisit() {
  const location = useLocation()

  useEffect(() => {
    fetch(func2url["track-visit"], {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: location.pathname,
        referrer: document.referrer,
      }),
    }).catch(() => {})
  }, [location.pathname])
}
