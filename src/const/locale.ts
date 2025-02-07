export const translations = {
  ja: {
    title: {
      settings: "設定",
      location: "地域設定"
    },
    nav: {
      settings: "設定",
      location: "地域設定"
    },
    preferences: {
      hideLocation: "位置情報を非表示にする",
      language: "言語/Language:",
      updateInterval: "自動更新間隔:",
      intervals: {
        "1hour": "1時間",
        "2hours": "2時間",
        "3hours": "3時間",
        "6hours": "6時間",
        "12hours": "12時間"
      }
    },
    buttons: {
      save: "保存",
      update: "更新する"
    },
    messages: {
      captchaRequired: "CAPTCHAの認証を行ってください",
      updateSuccess: "設定を更新しました",
      updateError: "エラーが発生しました\n開発者にお問い合わせください",
      selectRegion: "都道府県を選択してください"
    },
    languages: {
      ja: "日本語",
      en: "English"
    }
  },
  en: {
    title: {
      settings: "Settings",
      location: "Location Settings"
    },
    nav: {
      settings: "Settings",
      location: "Location"
    },
    preferences: {
      hideLocation: "Hide location information",
      language: "言語/Language:",
      updateInterval: "Auto-update interval:",
      intervals: {
        "1hour": "1 hour",
        "2hours": "2 hours",
        "3hours": "3 hours",
        "6hours": "6 hours",
        "12hours": "12 hours"
      }
    },
    buttons: {
      save: "Save",
      update: "Update"
    },
    messages: {
      captchaRequired: "Please complete the CAPTCHA verification",
      updateSuccess: "Settings updated successfully",
      updateError: "An error occurred\nPlease contact the developer",
      selectRegion: "Please select a region"
    },
    languages: {
      ja: "日本語",
      en: "English"
    }
  }
} as const;