let token = undefined;
window.onSuccess = (val)=>{
  token = val;
};

const updateUI = (locale, t) => {
  document.documentElement.lang = locale;
  document.title = t.title.location;
  document.querySelector('.nav-link').textContent = t.nav.settings;
  document.getElementById('update').textContent = t.buttons.update;
};

const main = async() => {
  // Get current locale from preferences
  const preferences = await fetch('/api/v1/preferences');
  const preferencesData = await preferences.json();
  let currentLocale = 'ja';
  if (preferencesData.status === 'success' && preferencesData.data) {
    currentLocale = preferencesData.data.locale;
  }

  // Get translations
  const translationsResponse = await fetch('/api/v1/translations');
  const translations = await translationsResponse.json();
  const t = translations[currentLocale];

  // Update UI with current locale
  updateUI(currentLocale, t);

  const [positions,weather] = await Promise.all([await fetch('/api/v1/geo-list'), await fetch('/api')]);
  const data = (await positions.json()).data;
  const weatherData = await weather.json();
  const geoPosId = weatherData.geoPosId;
  const list = document.getElementById('list');
  for (const [key, prefs] of Object.entries(data)){
    const group = document.createElement('div');
    group.classList.add('group');
    const h2 = document.createElement('h2');
    h2.innerText = key;
    group.appendChild(h2);
    for (const [pref, regionData] of Object.entries(prefs)){
      if (typeof regionData === 'object'){
        const region = document.createElement('div');
        region.classList.add('region');
        const h3 = document.createElement('h3');
        h3.innerText = pref;
        region.appendChild(h3);
        const regionList = document.createElement('div');
        regionList.classList.add('region-list');
        for (const [city,value] of Object.entries(regionData)){
          const div = document.createElement('label');
          const input = document.createElement('input');
          input.type = 'radio';
          input.value = value;
          input.name = 'city';
          input.innerText = `${city}`;
          if (value === geoPosId){
            input.checked = true;
          }
          div.appendChild(input);
          const span = document.createElement('span');
          span.innerText = `${city}`;
          div.appendChild(span);
          regionList.appendChild(div);
        }
        region.appendChild(regionList);

        group.appendChild(region);
        continue;
      }
      const region = document.createElement('div');
      region.classList.add('region');
      const h3 = document.createElement('h3');
      h3.innerText = pref;
      region.appendChild(h3);
      const regionList = document.createElement('div');
      regionList.classList.add('region-list');
      const div = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.value = regionData;
      input.name = 'city';
      if (regionData === geoPosId){
        input.checked = true;
      }
      div.appendChild(input);
      const span = document.createElement('span');
      span.innerText = `${pref}`;
      div.appendChild(span);
      regionList.appendChild(div);
      region.appendChild(regionList);

      group.appendChild(region);
    }
    list.appendChild(group);
  }
  const update = document.getElementById('update');
  update.addEventListener('click', async() => {
    const city = document.querySelector('input[name="city"]:checked');
    if (!city){
      alert(t.messages.selectRegion);
      return;
    }
    if(!token){
      alert(t.messages.captchaRequired);
      return;
    }
    const res = await fetch('/api/v1/save-geo-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({geoPosId: city.value, token: token}),
    });
    const json = await res.json();
    if (json.status === 'success'){
      alert(t.messages.updateSuccess);
      location.reload()
      return;
    }else if (json.status === 'error'){
      alert(t.messages.updateError);
      return;
    }
  });
}
void main();
