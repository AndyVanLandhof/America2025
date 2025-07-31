"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Smartphone } from "lucide-react"

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if it's iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(iOS)

    // Handle PWA install prompt
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    }

    window.addEventListener("beforeinstallprompt", handler)

    // Show iOS install instructions if on iOS and not already installed
    if (iOS && !window.matchMedia("(display-mode: standalone)").matches) {
      setShowInstallPrompt(true)
    }

    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    }
  }

  if (!showInstallPrompt) return null

  return (
    <Card className="fixed bottom-4 left-4 right-4 z-50 border-amber-200 bg-amber-50 shadow-lg">
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">Install Holiday App</h4>
              {isIOS ? (
                <p className="text-xs text-gray-600">
                  Tap <strong>Share</strong> → <strong>Add to Home Screen</strong>
                </p>
              ) : (
                <p className="text-xs text-gray-600">Add to home screen for easy access</p>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            {!isIOS && (
              <Button size="sm" onClick={handleInstall} className="bg-amber-600 hover:bg-amber-700">
                Install
              </Button>
            )}
            <Button size="sm" variant="ghost" onClick={() => setShowInstallPrompt(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
