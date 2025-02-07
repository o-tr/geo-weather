let token = undefined;
let currentTranslations = null;

window.onSuccess = (val)=>{
  token = val;
};

const updateUI = (locale, t) => {
  document.documentElement.lang = locale;
  document.title = t.title.settings;
  document.querySelector('.nav-link').textContent = t.nav.location;
  
  // Update preferences labels
  document.querySelector('label[for="hideLocation"] .label-text').textContent = t.preferences.hideLocation;
  document.querySelector('label[for="locale"] .label-text').textContent = t.preferences.language;
  document.querySelector('label[for="autoUpdateInterval"] .label-text').textContent = t.preferences.updateInterval;
  
  // Update language options
  const languageSelect = document.getElementById('locale');
  const currentValue = languageSelect.value;
  languageSelect.innerHTML = '';
  Object.entries(t.languages).forEach(([value, label]) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    languageSelect.appendChild(option);
  });
  languageSelect.value = locale;

  // Update interval options
  const intervalSelect = document.getElementById('autoUpdateInterval');
  const currentInterval = intervalSelect.value;
  const intervalValues = [3600, 7200, 10800, 21600, 43200];
  const intervalKeys = ["1hour", "2hours", "3hours", "6hours", "12hours"];
  intervalSelect.innerHTML = '';
  intervalValues.forEach((value, index) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = t.preferences.intervals[intervalKeys[index]];
    intervalSelect.appendChild(option);
  });
  intervalSelect.value = currentInterval || intervalValues[3].toString(); // デフォルトは6時間

  // Update button
  document.getElementById('update').textContent = t.buttons.save;
};

const main = async() => {
  // Get current settings and translations
  const [preferences, translationsResponse] = await Promise.all([
    fetch('/api/v1/preferences'),
    fetch('/api/v1/translations')
  ]);
  const [preferencesData, translations] = await Promise.all([
    preferences.json(),
    translationsResponse.json()
  ]);
  
  currentTranslations = translations;
  let currentLocale = 'ja';
  if (preferencesData.status === 'success' && preferencesData.data) {
    const data = preferencesData.data;
    document.getElementById('hideLocation').checked = data.hideLocation;
    currentLocale = data.locale;
    document.getElementById('autoUpdateInterval').value = data.autoUpdateInterval.toString();
  }

  // Update UI based on current locale
  updateUI(currentLocale, translations[currentLocale]);

  // Language change event listener
  document.getElementById('locale').addEventListener('change', (e) => {
    const newLocale = e.target.value;
    updateUI(newLocale, translations[newLocale]);
  });

  // Update button event listener
  const update = document.getElementById('update');
  update.addEventListener('click', async() => {
    const currentLocale = document.getElementById('locale').value;
    const t = translations[currentLocale];

    if(!token){
      alert(t.messages.captchaRequired);
      return;
    }

    const data = {
      token,
      hideLocation: document.getElementById('hideLocation').checked,
      locale: document.getElementById('locale').value,
      autoUpdateInterval: parseInt(document.getElementById('autoUpdateInterval').value)
    };

    const res = await fetch('/api/v1/preferences', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    if (json.status === 'success'){
      alert(t.messages.updateSuccess);
      // 設定の更新に成功したら、UIを即座に更新
      updateUI(data.locale, translations[data.locale]);
    }else{
      alert(t.messages.updateError);
    }
  });
}

void main();