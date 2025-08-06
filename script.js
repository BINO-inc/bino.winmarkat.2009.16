// Enhanced loading animation with smooth transitions
window.addEventListener('load', () => {
  // Add loading progress simulation
  let progress = 0;
  const loadingText = document.querySelector('#splash-screen h1');
  const progressInterval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;
    loadingText.textContent = `جارٍ التحميل... ${Math.floor(progress)}%`;
    if (progress >= 100) {
      clearInterval(progressInterval);
      loadingText.textContent = 'مرحباً بك في WinMarket!';
    }
  }, 200);

  setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    
    // Add entrance animation for main content
    setTimeout(() => {
      document.getElementById('main-content').style.opacity = '1';
      document.getElementById('main-content').style.transform = 'translateY(0)';
    }, 100);
  }, 4000);
});

// Enhanced areas data with more comprehensive coverage
const areas = {
  "عمان": [
    "تلاع العلي", "جبل الحسين", "صويلح", "عبدون", "ماركا", 
    "الجبيهة", "خريبة السوق", "أبو نصير", "الجويدة", "مرج الحمام",
    "ناعور", "وادي السير", "الشميساني", "جبل اللويبدة", "جبل النزهة"
  ],
  "إربد": [
    "الحصن", "بشرى", "النعيمة", "الرمثا", "المزار الشمالي",
    "كفر أسد", "دير أبي سعيد", "سال", "الطيبة", "كفر يوبا"
  ],
  "الزرقاء": [
    "الهاشمية", "الرصيفة", "الزرقاء الجديدة", "الضليل",
    "الأزرق", "خريبة السمرا", "الدليل الشرقي"
  ],
  "البلقاء": [
    "السلط", "ماحص", "الفحيص", "عين الباشا", "الشونة الجنوبية",
    "دير علا", "الرامة", "زي"
  ],
  "جرش": [
    "جرش", "عجلون", "برما", "الكتة", "ساكب"
  ],
  "عجلون": [
    "عجلون", "كفرنجة", "عين جنا", "راسون", "الوهادنة"
  ],
  "مأدبا": [
    "مأدبا", "ذيبان", "الفيصلية", "ليب", "الجيزة"
  ],
  "الكرك": [
    "الكرك", "المزار الجنوبي", "الثنية", "عي", "مؤتة"
  ],
  "الطفيلة": [
    "الطفيلة", "بصيرا", "الحسا", "غرندل", "عيمة"
  ],
  "معان": [
    "معان", "الشوبك", "الجفر", "القادسية", "أيل"
  ],
  "العقبة": [
    "العقبة", "القويرة", "الديسة", "وادي رم"
  ],
  "المفرق": [
    "المفرق", "الرويشد", "البادية الشمالية الشرقية", "أم الجمال", "سما السرحان"
  ]
};

// Enhanced governorate selection with smooth animations
document.getElementById("governorate").addEventListener("change", function () {
  const selectedGov = this.value;
  const areaSelect = document.getElementById("area");
  
  // Add loading animation
  areaSelect.innerHTML = '<option>جارٍ التحميل...</option>';
  areaSelect.style.opacity = '0.5';
  
  setTimeout(() => {
    areaSelect.innerHTML = "";
    if (areas[selectedGov]) {
      areas[selectedGov].forEach(area => {
        areaSelect.insertAdjacentHTML('beforeend', `<option value="${area}">${area}</option>`);
      });
    } else {
      areaSelect.innerHTML = "<option>الرجاء اختيار محافظة أولاً</option>";
    }
    
    // Restore opacity with animation
    areaSelect.style.opacity = '1';
    areaSelect.style.transform = 'scale(1.02)';
    setTimeout(() => {
      areaSelect.style.transform = 'scale(1)';
    }, 200);
  }, 300);
});

// Enhanced camera functionality with better UX
document.getElementById("camera-btn").addEventListener("click", () => {
  const button = document.getElementById("camera-btn");
  button.style.transform = 'scale(0.95)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
    document.getElementById("camera-input").click();
  }, 150);
});

document.getElementById("camera-input").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    // Show loading state
    const button = document.getElementById("camera-btn");
    const originalText = button.textContent;
    button.innerHTML = '<span class="loading"></span>';
    
    setTimeout(() => {
      button.textContent = originalText;
      showNotification("تم اختيار الصورة بنجاح! جاري تطوير ميزة الذكاء الاصطناعي...", "success");
    }, 2000);
  }
});

// Enhanced search functionality
document.getElementById("search-btn").addEventListener("click", () => {
  const searchInput = document.getElementById("text-search");
  const searchText = searchInput.value.trim();
  
  if (searchText) {
    // Add search animation
    const button = document.getElementById("search-btn");
    button.innerHTML = '<span class="loading"></span>';
    
    setTimeout(() => {
      button.textContent = "🔍";
      showNotification(`جاري البحث عن: ${searchText}`, "info");
      // Here you would implement actual search functionality
    }, 1500);
  } else {
    searchInput.focus();
    searchInput.style.borderColor = '#ff6b6b';
    setTimeout(() => {
      searchInput.style.borderColor = '#e2e8f0';
    }, 1000);
  }
});

// Enhanced store data with comprehensive coverage for all governorates
const storeData = {
  "عمان": {
    "ماركا": [
      {name: "سوبرماركت المدينة", lat: 31.95, lng: 36.00, type: "طعام", rating: 4.5},
      {name: "بيت العصير الطازج", lat: 31.94, lng: 36.01, type: "مشروبات", rating: 4.2},
      {name: "صيدلية النور", lat: 31.952, lng: 36.005, type: "منظفات", rating: 4.7},
      {name: "مخبز الأصالة", lat: 31.948, lng: 36.008, type: "طعام", rating: 4.3},
      {name: "محل الملابس العصرية", lat: 31.946, lng: 36.012, type: "ملابس", rating: 4.1}
    ],
    "تلاع العلي": [
      {name: "مول تلاع العلي", lat: 31.9454, lng: 35.8975, type: "مولات", rating: 4.8},
      {name: "كارفور تلاع العلي", lat: 31.9464, lng: 35.8985, type: "طعام", rating: 4.6},
      {name: "زارا تلاع العلي", lat: 31.9444, lng: 35.8965, type: "ملابس", rating: 4.4},
      {name: "ستarbucks تلاع العلي", lat: 31.9434, lng: 35.8955, type: "مشروبات", rating: 4.5}
    ],
    "الشميساني": [
      {name: "سيتي مول", lat: 31.9515, lng: 35.9239, type: "مولات", rating: 4.7},
      {name: "كوزمو سنتر", lat: 31.9525, lng: 35.9249, type: "ملابس", rating: 4.3},
      {name: "مطعم الأردن", lat: 31.9505, lng: 35.9229, type: "طعام", rating: 4.4}
    ],
    "عبدون": [
      {name: "سوق عبدون", lat: 31.9615, lng: 35.8889, type: "طعام", rating: 4.7},
      {name: "مقهى عبدون", lat: 31.9625, lng: 35.8899, type: "مشروبات", rating: 4.5},
      {name: "بوتيك عبدون", lat: 31.9635, lng: 35.8909, type: "ملابس", rating: 4.6}
    ],
    "الجبيهة": [
      {name: "سوبرماركت الجبيهة", lat: 32.0108, lng: 35.8664, type: "طعام", rating: 4.3},
      {name: "محل الحيوانات الأليفة", lat: 32.0118, lng: 35.8674, type: "مستلزمات حيوانات", rating: 4.6},
      {name: "صيدلية الجبيهة", lat: 32.0128, lng: 35.8684, type: "منظفات", rating: 4.2}
    ],
    "صويلح": [
      {name: "مجمع صويلح التجاري", lat: 32.0234, lng: 35.8567, type: "مولات", rating: 4.4},
      {name: "مطعم الشام", lat: 32.0244, lng: 35.8577, type: "طعام", rating: 4.2}
    ]
  },
  "إربد": {
    "النعيمة": [
      {name: "خيرات القدس", lat: 32.01, lng: 35.85, type: "طعام", rating: 4.4},
      {name: "مطعم الأصالة", lat: 32.015, lng: 35.855, type: "طعام", rating: 4.2},
      {name: "محل الملابس الشعبية", lat: 32.012, lng: 35.852, type: "ملابس", rating: 4.0}
    ],
    "الحصن": [
      {name: "سوق الحصن المركزي", lat: 32.0234, lng: 35.8567, type: "طعام", rating: 4.1},
      {name: "صيدلية الشفاء", lat: 32.0244, lng: 35.8577, type: "منظفات", rating: 4.5},
      {name: "مقهى الحصن", lat: 32.0254, lng: 35.8587, type: "مشروبات", rating: 4.3}
    ],
    "بشرى": [
      {name: "سوبرماركت بشرى", lat: 32.5556, lng: 35.8500, type: "طعام", rating: 4.2},
      {name: "محل الأدوات المنزلية", lat: 32.5566, lng: 35.8510, type: "منظفات", rating: 4.0}
    ]
  },
  "الزرقاء": {
    "الهاشمية": [
      {name: "مجمع الهاشمية التجاري", lat: 32.0867, lng: 36.0933, type: "مولات", rating: 4.3},
      {name: "سوبرماركت الخير", lat: 32.0877, lng: 36.0943, type: "طعام", rating: 4.0},
      {name: "مطعم الزرقاء", lat: 32.0887, lng: 36.0953, type: "طعام", rating: 4.1}
    ],
    "الرصيفة": [
      {name: "سوق الرصيفة الشعبي", lat: 32.0722, lng: 36.0881, type: "طعام", rating: 4.2},
      {name: "محل المنظفات", lat: 32.0732, lng: 36.0891, type: "منظفات", rating: 4.0}
    ]
  },
  "العقبة": {
    "وسط المدينة": [
      {name: "سوق العقبة", lat: 29.5267, lng: 35.0067, type: "طعام", rating: 4.3},
      {name: "مطعم البحر الأحمر", lat: 29.5277, lng: 35.0077, type: "طعام", rating: 4.5},
      {name: "محل الهدايا السياحية", lat: 29.5287, lng: 35.0087, type: "ملابس", rating: 4.2},
      {name: "كافيه البحر", lat: 29.5297, lng: 35.0097, type: "مشروبات", rating: 4.4}
    ]
  },
  "الكرك": {
    "وسط المدينة": [
      {name: "سوبرماركت الكرك", lat: 31.1856, lng: 35.7056, type: "طعام", rating: 4.2},
      {name: "مطعم القلعة", lat: 31.1866, lng: 35.7066, type: "طعام", rating: 4.4},
      {name: "محل الحرف اليدوية", lat: 31.1876, lng: 35.7076, type: "ملابس", rating: 4.1}
    ]
  },
  "معان": {
    "وسط المدينة": [
      {name: "سوق معان", lat: 30.1962, lng: 35.7340, type: "طعام", rating: 4.0},
      {name: "مطعم الصحراء", lat: 30.1972, lng: 35.7350, type: "طعام", rating: 4.2},
      {name: "محل البدو", lat: 30.1982, lng: 35.7360, type: "ملابس", rating: 3.9}
    ]
  },
  "مأدبا": {
    "وسط المدينة": [
      {name: "سوبرماركت مأدبا", lat: 31.7197, lng: 35.7956, type: "طعام", rating: 4.3},
      {name: "مطعم الفسيفساء", lat: 31.7207, lng: 35.7966, type: "طعام", rating: 4.5},
      {name: "محل التحف", lat: 31.7217, lng: 35.7976, type: "ملابس", rating: 4.2}
    ]
  },
  "جرش": {
    "وسط المدينة": [
      {name: "سوق جرش التراثي", lat: 32.2811, lng: 35.8981, type: "طعام", rating: 4.4},
      {name: "مطعم الآثار", lat: 32.2821, lng: 35.8991, type: "طعام", rating: 4.3},
      {name: "محل الصناعات التراثية", lat: 32.2831, lng: 35.9001, type: "ملابس", rating: 4.1}
    ]
  },
  "عجلون": {
    "وسط المدينة": [
      {name: "سوبرماركت عجلون", lat: 32.3328, lng: 35.7517, type: "طعام", rating: 4.1},
      {name: "مطعم الغابات", lat: 32.3338, lng: 35.7527, type: "طعام", rating: 4.3},
      {name: "محل المنتجات الطبيعية", lat: 32.3348, lng: 35.7537, type: "منظفات", rating: 4.2}
    ]
  },
  "البلقاء": {
    "السلط": [
      {name: "سوق السلط", lat: 32.0389, lng: 35.7272, type: "طعام", rating: 4.2},
      {name: "مطعم التراث", lat: 32.0399, lng: 35.7282, type: "طعام", rating: 4.4},
      {name: "محل الأزياء الشعبية", lat: 32.0409, lng: 35.7292, type: "ملابس", rating: 4.0}
    ],
    "الفحيص": [
      {name: "سوبرماركت الفحيص", lat: 32.0456, lng: 35.7789, type: "طعام", rating: 4.1},
      {name: "مقهى الريف", lat: 32.0466, lng: 35.7799, type: "مشروبات", rating: 4.3}
    ]
  },
  "الطفيلة": {
    "وسط المدينة": [
      {name: "سوبرماركت الطفيلة", lat: 30.8378, lng: 35.6044, type: "طعام", rating: 4.0},
      {name: "مطعم الجبال", lat: 30.8388, lng: 35.6054, type: "طعام", rating: 4.2},
      {name: "محل المنتجات الجبلية", lat: 30.8398, lng: 35.6064, type: "منظفات", rating: 3.9}
    ]
  },
  "المفرق": {
    "وسط المدينة": [
      {name: "سوق المفرق", lat: 32.3431, lng: 36.2081, type: "طعام", rating: 4.1},
      {name: "مطعم البادية", lat: 32.3441, lng: 36.2091, type: "طعام", rating: 4.0},
      {name: "محل الصوف والجلود", lat: 32.3451, lng: 36.2101, type: "ملابس", rating: 3.8}
    ]
  }
};

// Enhanced map initialization with better styling and Jordan coordinates
let map;
let markersGroup;

function initLeaflet() {
  // استخدام إحداثيات مركز الأردن من ملف الإحداثيات
  map = L.map('map-container', {
    zoomControl: true,
    scrollWheelZoom: true,
    doubleClickZoom: true,
    touchZoom: true
  }).setView(jordanCoordinates.center, jordanCoordinates.defaultZoom);
  
  // Use a more attractive tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    tileSize: 256,
    zoomOffset: 0
  }).addTo(map);
  
  // Initialize markers group
  markersGroup = L.layerGroup().addTo(map);
  
  // Add Jordan boundary visualization
  addJordanBoundary();
  
  // Add a custom control for map info
  const info = L.control({position: 'topright'});
  info.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'map-info');
    this._div.innerHTML = '<h4>خريطة الأردن التفاعلية</h4><p>اختر قسماً لعرض المتاجر</p>';
    this._div.style.background = 'rgba(255,255,255,0.9)';
    this._div.style.padding = '10px';
    this._div.style.borderRadius = '8px';
    this._div.style.fontSize = '12px';
    this._div.style.fontFamily = 'Cairo, sans-serif';
    this._div.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    return this._div;
  };
  info.addTo(map);
}

// إضافة حدود الأردن التقريبية بألوان خضراء
function addJordanBoundary() {
  const bounds = jordanCoordinates.bounds;
  const boundaryPoints = [
    [bounds.north, bounds.west],
    [bounds.north, bounds.east],
    [bounds.south, bounds.east],
    [bounds.south, bounds.west]
  ];
  
  L.polygon(boundaryPoints, {
    color: '#2e7d32',
    weight: 3,
    opacity: 0.8,
    fillColor: '#4caf50',
    fillOpacity: 0.1
  }).addTo(map);
}

// Initialize map when page loads
setTimeout(initLeaflet, 100);

// Enhanced category selection with animations and better UX using real coordinates
document.querySelectorAll("#categories li").forEach(li => {
  li.addEventListener("click", () => {
    const gov = document.getElementById("governorate").value;
    const area = document.getElementById("area").value;
    const type = li.dataset.type;
    
    // Add selection animation
    li.style.transform = 'scale(0.95)';
    setTimeout(() => {
      li.style.transform = 'scale(1.05)';
      setTimeout(() => {
        li.style.transform = 'scale(1)';
      }, 150);
    }, 100);
    
    if (!gov || !area) {
      showNotification("الرجاء اختيار المحافظة والمنطقة أولاً", "warning");
      // Highlight the selection fields
      document.getElementById("governorate").style.borderColor = '#ff6b6b';
      document.getElementById("area").style.borderColor = '#ff6b6b';
      setTimeout(() => {
        document.getElementById("governorate").style.borderColor = '#e2e8f0';
        document.getElementById("area").style.borderColor = '#e2e8f0';
      }, 2000);
      return;
    }
    
    // Clear existing markers with animation
    markersGroup.clearLayers();
    
    // Get coordinates for selected area
    const areaCoords = getAreaCoordinates(gov, area);
    if (!areaCoords) {
      showNotification(`لا توجد إحداثيات للمنطقة المحددة: ${area}`, "warning");
      return;
    }
    
    // Center map on selected area
    const govData = getGovernorateCoordinates(gov);
    if (govData) {
      map.setView(areaCoords, govData.zoom || 12);
    }
    
    // Get stores for selected criteria
    const stores = storeData[gov]?.[area] || [];
    const filteredStores = stores.filter(store => store.type === type);
    
    if (filteredStores.length === 0) {
      showNotification(`لا توجد متاجر من نوع "${type}" في ${area}`, "info");
      
      // Add area marker even if no stores
      const areaMarker = L.marker(areaCoords, {
        icon: L.divIcon({
          className: 'area-marker',
          html: `<div style="background: #4caf50; 
                        color: white; 
                        border-radius: 50%; 
                        width: 25px; 
                        height: 25px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        font-weight: bold; 
                        font-size: 10px;
                        box-shadow: 0 4px 12px rgba(46, 125, 50, 0.4);
                        border: 2px solid white;">📍</div>`,
          iconSize: [25, 25],
          iconAnchor: [12.5, 12.5]
        })
      }).bindPopup(`
        <div style="font-family: 'Cairo', sans-serif; text-align: center; direction: rtl;">
          <h3 style="margin: 0 0 10px 0; color: #2e7d32;">${area}</h3>
          <p style="margin: 5px 0; color: #666;">المحافظة: ${gov}</p>
          <p style="margin: 5px 0; color: #666;">لا توجد متاجر من نوع "${type}" حالياً</p>
        </div>
      `);
      
      markersGroup.addLayer(areaMarker);
      return;
    }
    
    // Add markers with custom icons and popups
    filteredStores.forEach((store, index) => {
      setTimeout(() => {
        const customIcon = L.divIcon({
          className: 'custom-marker',
          html: `<div style="background: linear-gradient(135deg, #2e7d32 0%, #4caf50 100%); 
                        color: white; 
                        border-radius: 50%; 
                        width: 30px; 
                        height: 30px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        font-weight: bold; 
                        font-size: 12px;
                        box-shadow: 0 4px 12px rgba(46, 125, 50, 0.4);
                        border: 3px solid white;">${index + 1}</div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });
        
        const marker = L.marker([store.lat, store.lng], {icon: customIcon})
          .bindPopup(`
            <div style="font-family: 'Cairo', sans-serif; text-align: center; direction: rtl;">
              <h3 style="margin: 0 0 10px 0; color: #2e7d32;">${store.name}</h3>
              <p style="margin: 5px 0; color: #666;">النوع: ${store.type}</p>
              <p style="margin: 5px 0; color: #666;">التقييم: ${'⭐'.repeat(Math.floor(store.rating))} ${store.rating}</p>
              <p style="margin: 5px 0; color: #666;">المسافة: ${calculateDistance(areaCoords[0], areaCoords[1], store.lat, store.lng).toFixed(1)} كم</p>
              <button onclick="getDirections(${store.lat}, ${store.lng})" 
                      style="background: linear-gradient(135deg, #2e7d32 0%, #4caf50 100%); 
                             color: white; 
                             border: none; 
                             padding: 8px 16px; 
                             border-radius: 6px; 
                             cursor: pointer; 
                             margin-top: 10px;
                             font-family: 'Cairo', sans-serif;
                             font-weight: 600;">
                🗺️ الاتجاهات
              </button>
            </div>
          `);
        
        markersGroup.addLayer(marker);
      }, index * 200); // Stagger marker appearance
    });
    
    // Fit map to show all markers
    if (filteredStores.length > 0) {
      const group = new L.featureGroup(markersGroup.getLayers());
      map.fitBounds(group.getBounds().pad(0.1));
    }
    
    showNotification(`تم العثور على ${filteredStores.length} متجر من نوع "${type}" في ${area}`, "success");
  });
});

// Enhanced notification system
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notif => notif.remove());
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  const colors = {
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    info: '#2196f3'
  };
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${colors[type]};
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    font-family: 'Cairo', sans-serif;
    font-weight: 500;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 300px;
    word-wrap: break-word;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto remove after 4 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 4000);
}

// Function to get directions (placeholder for future implementation)
function getDirections(lat, lng) {
  showNotification(`جاري فتح الاتجاهات إلى الموقع...`, "info");
  // Here you would integrate with a maps service like Google Maps
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  window.open(url, '_blank');
}

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll to map when category is selected
  const categories = document.querySelectorAll('#categories li');
  categories.forEach(category => {
    category.addEventListener('click', () => {
      setTimeout(() => {
        document.getElementById('map').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 500);
    });
  });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const activeElement = document.activeElement;
    if (activeElement.tagName === 'SELECT') {
      // Trigger change event for select elements
      activeElement.dispatchEvent(new Event('change'));
    }
  }
});

// Add touch support for mobile devices
let touchStartY = 0;
document.addEventListener('touchstart', function(e) {
  touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', function(e) {
  const touchEndY = e.changedTouches[0].clientY;
  const diff = touchStartY - touchEndY;
  
  // If swipe up gesture detected, scroll to map
  if (diff > 50) {
    document.getElementById('map').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});

// Initialize tooltips for better UX
function initTooltips() {
  const elements = [
    {selector: '#camera-btn', text: 'ارفع صورة منتج للبحث عنه'},
    {selector: '#search-btn', text: 'ابحث عن منتج أو متجر'},
  ];
  
  elements.forEach(({selector, text}) => {
    const element = document.querySelector(selector);
    if (element) {
      element.title = text;
    }
  });
}

// Initialize tooltips when page loads
setTimeout(initTooltips, 1000);

