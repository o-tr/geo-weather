let token = undefined;
let currentTranslations = null;

window.onSuccess = (val)=>{
  token = val;
};

const createRegionList = (regionData, geoPosId, name) => {
  const div = document.createElement('label');
  const input = document.createElement('input');
  input.type = 'radio';
  input.value = regionData;
  input.name = 'city';
  input.checked = regionData === geoPosId;
  div.appendChild(input);
  const span = document.createElement('span');
  span.innerText = name;
  div.appendChild(span);
  return div;
};

const createRegion = (pref, regionData, geoPosId) => {
  const region = document.createElement('div');
  region.classList.add('region');
  
  const h3 = document.createElement('h3');
  h3.innerText = pref;
  region.appendChild(h3);
  
  const regionList = document.createElement('div');
  regionList.classList.add('region-list');

  if (typeof regionData === 'object') {
    Object.entries(regionData).forEach(([city, value]) => {
      regionList.appendChild(createRegionList(value, geoPosId, city));
    });
  } else {
    regionList.appendChild(createRegionList(regionData, geoPosId, pref));
  }

  region.appendChild(regionList);
  return region;
};

const createLocationList = (data, geoPosId) => {
  const list = document.getElementById('list');
  list.innerHTML = '';

  Object.entries(data).forEach(([key, prefs]) => {
    const group = document.createElement('div');
    group.classList.add('group');
    
    const h2 = document.createElement('h2');
    h2.innerText = key;
    group.appendChild(h2);

    Object.entries(prefs).forEach(([pref, regionData]) => {
      group.appendChild(createRegion(pref, regionData, geoPosId));
    });

    list.appendChild(group);
  });
};

const updateUI = (locale, t) => {
  document.documentElement.lang = locale;
  document.title = t.title.location;
  document.querySelector('.nav-link').textContent = t.nav.settings;
  document.getElementById('update').textContent = t.buttons.update;
};

const handleUpdateClick = async (t) => {
  const city = document.querySelector('input[name="city"]:checked');
  if (!city) {
    alert(t.messages.selectRegion);
    return;
  }
  if (!token) {
    alert(t.messages.captchaRequired);
    return;
  }

  const res = await fetch('/api/v1/save-geo-id', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ geoPosId: city.value, token }),
  });

  const json = await res.json();
  if (json.status === 'success') {
    alert(t.messages.updateSuccess);
    location.reload();
  } else {
    alert(t.messages.updateError);
  }
};

const main = async () => {
  try {
    // Get current locale and translations
    const [preferences, translationsResponse] = await Promise.all([
      fetch('/api/v1/preferences'),
      fetch('/api/v1/translations')
    ]);

    const [preferencesData, translations] = await Promise.all([
      preferences.json(),
      translationsResponse.json()
    ]);

    let currentLocale = 'ja';
    if (preferencesData.status === 'success' && preferencesData.data) {
      currentLocale = preferencesData.data.locale;
    }

    const t = translations[currentLocale];
    updateUI(currentLocale, t);

    // Get location data
    const [positions, weather] = await Promise.all([
      fetch('/api/v1/geo-list'),
      fetch('/api')
    ]);

    const data = (await positions.json()).data;
    const weatherData = await weather.json();
    const geoPosId = weatherData.geoPosId;

    // Create and render location list
    const locationData = LocationData.create(data, geoPosId);
    const listContainer = document.getElementById('list');
    listContainer.replaceWith(locationData.toElement());

    // Add event listener
    document.getElementById('update').addEventListener('click', () => handleUpdateClick(t));
  } catch (error) {
    console.error('Error initializing location page:', error);
    alert('エラーが発生しました。ページを再読み込みしてください。');
  }
};

void main();
