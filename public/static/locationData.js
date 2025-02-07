class LocationData {
  constructor(data, geoPosId) {
    this.data = data;
    this.currentGeoPosId = geoPosId;
  }

  static create(data, geoPosId) {
    return new LocationData(data, geoPosId);
  }

  /**
   * 地点データをHTMLエレメントに変換
   */
  toElement() {
    const list = document.createElement('div');
    list.id = 'list';

    Object.entries(this.data).forEach(([region, prefs]) => {
      list.appendChild(this.createRegionGroup(region, prefs));
    });

    return list;
  }

  /**
   * 地域グループを作成
   */
  createRegionGroup(region, prefs) {
    const group = document.createElement('div');
    group.classList.add('group');
    
    const heading = document.createElement('h2');
    heading.innerText = region;
    group.appendChild(heading);

    Object.entries(prefs).forEach(([pref, data]) => {
      group.appendChild(this.createPrefecture(pref, data));
    });

    return group;
  }

  /**
   * 都道府県セクションを作成
   */
  createPrefecture(pref, data) {
    const region = document.createElement('div');
    region.classList.add('region');
    
    const heading = document.createElement('h3');
    heading.innerText = pref;
    region.appendChild(heading);
    
    const list = document.createElement('div');
    list.classList.add('region-list');

    if (typeof data === 'object') {
      Object.entries(data).forEach(([city, id]) => {
        list.appendChild(this.createLocationItem(id, city));
      });
    } else {
      list.appendChild(this.createLocationItem(data, pref));
    }

    region.appendChild(list);
    return region;
  }

  /**
   * 地点選択用のラジオボタンを作成
   */
  createLocationItem(id, label) {
    const container = document.createElement('label');
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'city';
    input.value = id;
    input.checked = id === this.currentGeoPosId;
    container.appendChild(input);
    
    const text = document.createElement('span');
    text.innerText = label;
    container.appendChild(text);
    
    return container;
  }
}