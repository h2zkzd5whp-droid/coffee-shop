/**
 * AURA ROASTERS × WILD VOYAGE
 * Content-to-Commerce Pipeline & Interactive Editorial Engine
 */

// ==========================================
// 1. DATA REPOSITORY: LOCATIONS & PRODUCTS
// ==========================================

const PRODUCTS_DB = {
  // Pyeongchang Items (Exact Match to User Request)
  "py-kettle": {
    id: "py-kettle",
    location: "pyeongchang",
    category: "gear",
    categoryLabel: "전기 드립케틀 (Gooseneck Kettle)",
    title: "펠로우 스태그 EKG 드립케틀 (매트 블랙)",
    price: 249000,
    priceFormatted: "₩249,000",
    weight: "0.9L • 가변 온도 제어 PID",
    image: "assets/pyeongchang.jpg",
    badge: "PRECISION TEMPERATURE",
    desc: "육백마지기 고지대의 급격한 기온 변화에도 1℃ 단위로 온도를 정확히 고정하는 PID 컨트롤러 탑재. 카운터밸런스 핸들과 정밀한 구스넥 노즐로 바람 앞에서도 흔들림 없는 완벽한 물줄기를 구현합니다.",
    radar: {
      aroma: 88,
      acidity: 82,
      body: 85,
      sweetness: 90
    },
    influencerTip: "산 정상에서는 기압이 낮아 물이 96도 전후에서 끓습니다. 펠로우 스태그 EKG로 93.5℃로 설정해 유지하면 원두의 떫은맛 없이 단맛만을 가장 매끄럽게 추출할 수 있습니다.",
    stock: "국내 정식 발주 잔여 6대"
  },
  "py-dripper": {
    id: "py-dripper",
    location: "pyeongchang",
    category: "gear",
    categoryLabel: "핸드드립 드리퍼 (Pour-Over Dripper)",
    title: "하리오 V60 글래스 드리퍼 & 올리브우드 스탠드 세트",
    price: 68000,
    priceFormatted: "₩68,000",
    weight: "내열 글래스 • 1~4인용",
    image: "assets/pyeongchang.jpg",
    badge: "ICONIC EXTRACTION",
    desc: "나선형 리브 구조로 커피 가루의 팽창을 극대화하여 투명하고 화사한 산미를 끌어내는 세계 챔피언 표준 드리퍼. 고화질 화보 속에서 활발히 뜸이 들여지며 김이 피어오르고 있는 바로 그 제품입니다.",
    radar: {
      aroma: 96,
      acidity: 94,
      body: 75,
      sweetness: 88
    },
    influencerTip: "뜸 들이기 40초 동안 커피 베드 전체가 봉긋하게 부풀어 오르는 '커피 빵'의 향을 맡아보세요. 신선한 원두일수록 가스가 활발하게 방출됩니다.",
    stock: "재고 보유 (즉시 출고)"
  },
  "py-grinder": {
    id: "py-grinder",
    location: "pyeongchang",
    category: "gear",
    categoryLabel: "프리미엄 핸드밀 (Manual Grinder)",
    title: "코만단테 C40 MK4 니트로 블레이드 그라인더",
    price: 360000,
    priceFormatted: "₩360,000",
    weight: "고질소 스테인리스 스틸 버 • 600g",
    image: "assets/pyeongchang.jpg",
    badge: "GOLD STANDARD",
    desc: "아웃도어와 실내를 불문하고 세계 최고의 균일도를 자랑하는 핸드밀의 끝판왕. 미분이 극도로 억제되어 1,200m 산 위에서도 원두 본연의 클린컵을 온전히 지켜냅니다.",
    radar: {
      aroma: 98,
      acidity: 95,
      body: 90,
      sweetness: 94
    },
    influencerTip: "예가체프 워시드 원두의 경우 24~26클릭으로 분쇄하면, 미세한 입자 뭉침 없이 물이 매끄럽게 통과하며 맑은 꽃향기를 만들어냅니다.",
    stock: "MK4 우드 에디션 3대 한정"
  },
  "py-bean": {
    id: "py-bean",
    location: "pyeongchang",
    category: "bean",
    categoryLabel: "스페셜티 원두 (Specialty Beans)",
    title: "원두: 에티오피아 예가체프 G1 (육백마지기 윈터 에디션)",
    price: 25000,
    priceFormatted: "₩25,000",
    weight: "200g (테라로사 콜라보 스페셜)",
    image: "assets/pyeongchang.jpg",
    badge: "WINTER SUMMIT BLEND",
    desc: "육백마지기의 새하얀 풍력발전기와 새벽 운해의 청량함을 담은 싱글오리진. 고지대 캠핑에서 첫 모금을 마셨을 때 입안 가득 퍼지는 재스민, 복숭아, 살구의 맑은 꿀맛이 환상적인 조화를 이룹니다.",
    radar: {
      aroma: 98,
      acidity: 92,
      body: 70,
      sweetness: 92
    },
    influencerTip: "테이블 옆 텐트에서 갓 깨어나 차가운 공기를 마시며 내리는 첫 잔으로 추천합니다. 온도가 식어갈수록 복숭아의 단맛이 더욱 선명해집니다.",
    stock: "금주 로스팅 22봉 남음"
  },
  "py-bundle": {
    id: "py-bundle",
    location: "pyeongchang",
    category: "bundle",
    categoryLabel: "에디토리얼 풀 번들 (Full Master Set)",
    title: "육백마지기 하이엔드 브루잉 마스터 번들",
    price: 640000,
    priceFormatted: "₩640,000",
    weight: "풀 패키지 (15% 세트 할인)",
    image: "assets/pyeongchang.jpg",
    badge: "COMPLETE MASTER SET",
    desc: "화보에 등장한 펠로우 스태그 EKG + 하리오 V60 세트 + 코만단테 C40 MK4 + 에티오피아 예가체프 G1 원두 200g + 스노우피크 티타늄 머그를 한 번에 소장하는 올인원 컬렉션.",
    radar: { aroma: 98, acidity: 95, body: 90, sweetness: 95 },
    influencerTip: "더 이상 장비 업그레이드가 필요 없는 아웃도어 & 홈카페 궁극의 조합입니다.",
    stock: "한정 3세트"
  },

  // Jeju Items
  "jj-bean": {
    id: "jj-bean",
    location: "jeju",
    category: "bean",
    categoryLabel: "스페셜티 원두 (Specialty Beans)",
    title: "제주 선셋 다크 로스트 (과테말라 안티구아)",
    price: 23000,
    priceFormatted: "₩23,000",
    weight: "200g",
    image: "assets/jeju.jpg",
    badge: "SUNSET ROAST",
    desc: "제주 서쪽 금릉 바다의 현무암 바위와 붉은 황혼에 영감을 얻은 묵직한 다크 로스트입니다. 스모키한 참나무 향, 쌉싸름한 다크초콜릿과 구운 피칸의 중후한 여운이 특징입니다.",
    radar: { aroma: 88, acidity: 45, body: 96, sweetness: 85 },
    influencerTip: "파도 소리를 들으며 마시는 황혼의 커피는 묵직함이 생명입니다. 분쇄도를 곱게 하여 9기압 이상의 고압축 레버 프레스로 농밀한 크레마를 추출하세요.",
    stock: "원두 25봉 남음"
  },
  "jj-press": {
    id: "jj-press",
    location: "jeju",
    category: "gear",
    categoryLabel: "에스프레소 기어 (Espresso Gear)",
    title: "황동 아날로그 아웃도어 에스프레소 레버 머신",
    price: 298000,
    priceFormatted: "₩298,000",
    weight: "1.4kg (포터블 황동 주물)",
    image: "assets/jeju.jpg",
    badge: "ICONIC ESPRESSO",
    desc: "전기 없이 인간의 손 힘으로 정통 9바(bar) 에스프레소를 만들어내는 기계식 레버 프레스. 해변가에서도 황동 앤틱 감성의 두터운 크레마 샷을 추출할 수 있습니다.",
    radar: { aroma: 92, acidity: 50, body: 98, sweetness: 90 },
    influencerTip: "레버를 내릴 때 첫 5초간 프리인퓨전(Pre-infusion)을 주면 바닷바람 속에서도 균일한 에멀젼과 황금빛 크레마가 폭발합니다.",
    stock: "한정 수량 5대"
  },
  "jj-grinder": {
    id: "jj-grinder",
    location: "jeju",
    category: "gear",
    categoryLabel: "브루잉 기어 (Brewing Gear)",
    title: "빈티지 우드 & 메탈 미니 핸드밀",
    price: 89000,
    priceFormatted: "₩89,000",
    weight: "380g",
    image: "assets/jeju.jpg",
    badge: "RETRO OUTDOOR",
    desc: "월넛 원목 바디와 고탄소강 48mm 버를 결합하여 에스프레소 미분 영역까지 오차 없이 미세 조절이 가능한 빈티지 핸드 그라인더입니다.",
    radar: { aroma: 85, acidity: 60, body: 90, sweetness: 80 },
    influencerTip: "에스프레소 추출 시 12클릭 정도로 조절하면 18g 원두가 완벽한 저항값을 가집니다.",
    stock: "재고 보유"
  },
  "jj-lantern": {
    id: "jj-lantern",
    location: "jeju",
    category: "gear",
    categoryLabel: "캠핑 무드 기어 (Mood Gear)",
    title: "클래식 브론즈 오일 랜턴 앰버 글래스",
    price: 54000,
    priceFormatted: "₩54,000",
    weight: "450g",
    image: "assets/jeju.jpg",
    badge: "EVENING AMBIENCE",
    desc: "노을이 지고 어두워지는 바닷가 테이블을 은은한 호박색 불빛으로 채워주는 독일식 정통 허리케인 오일 랜턴입니다.",
    radar: { aroma: 70, acidity: 50, body: 80, sweetness: 75 },
    influencerTip: "파라핀 오일에 은은한 시트로넬라 아로마를 섞어 태우면 야외 벌레를 방지하면서도 커피 타임의 감성을 200% 올려줍니다.",
    stock: "재고 12개"
  },
  "jj-tumbler": {
    id: "jj-tumbler",
    location: "jeju",
    category: "gear",
    categoryLabel: "테이블웨어 (Tableware)",
    title: "레더 슬리브 브라스 보온 텀블러 400ml",
    price: 46000,
    priceFormatted: "₩46,000",
    weight: "220g",
    image: "assets/jeju.jpg",
    badge: "LEATHER WRAP",
    desc: "황동의 고급스러운 질감과 베지터블 천연 가죽 슬리브가 손을 감싸주는 프리미엄 진공 텀블러. 8시간 보온 유지.",
    radar: { aroma: 75, acidity: 55, body: 85, sweetness: 80 },
    influencerTip: "야외 캠핑 코트에 누워 갓 내린 롱블랙 에스프레소를 담아 마시기에 최상의 그립감을 줍니다.",
    stock: "재고 보유"
  },
  "jj-bundle": {
    id: "jj-bundle",
    location: "jeju",
    category: "bundle",
    categoryLabel: "에디토리얼 풀 번들 (Full Editorial Bundle)",
    title: "제주 선셋 에스프레소 마스터 번들",
    price: 450000,
    priceFormatted: "₩450,000",
    weight: "리미티드 우드 케이스 패키지",
    image: "assets/jeju.jpg",
    badge: "MASTER COLLECTION (-18% OFF)",
    desc: "제주 선셋 다크 원두 200g + 황동 레버 에스프레소 머신 + 월넛 핸드밀 + 브론즈 오일 랜턴 + 레더 텀블러가 모두 포함된 하이엔드 아웃도어 에스프레소 풀 세트.",
    radar: { aroma: 95, acidity: 50, body: 99, sweetness: 90 },
    influencerTip: "일상에서 벗어나 바다를 바라보며 나만의 정통 에스프레소 바를 차리는 가장 완벽한 방법입니다.",
    stock: "3세트 한정"
  }
};

const LOCATIONS_DATA = {
  pyeongchang: {
    id: "pyeongchang",
    title: "강원도 평창 청옥산 육백마지기",
    coords: "GPS 37°18'22.4\"N 128°33'14.1\"E • ALTITUDE 1,256m • TEMP 14℃",
    image: "assets/pyeongchang.jpg",
    headline: "\"BREATHING CLOUDS & MORNING JASMINE\"",
    subtext: "사진 속 반짝이는 핀을 탭하면 실제 사용된 원두와 장비의 상세 스펙과 레시피가 펼쳐집니다.",
    storyTitle: "\"안개와 구름이 머무는 1,256m 고지대, 온도가 증명하는 커피의 본질\"",
    author: "박진우 (Jinwoo Park) • 아웃도어 바리스타",
    storyParagraphs: [
      "일반 카페의 완벽하게 통제된 92℃의 물과 24℃의 실내는 아웃도어에 존재하지 않습니다. 청옥산 정상의 매서운 새벽 칼바람은 드립포트의 물 온도를 분당 3℃씩 떨어뜨립니다.",
      "이런 야생의 환경에서는 산미가 뭉개지기 쉽기 때문에, 우리는 산미의 스펙트럼이 맑고 투명한 에티오피아 시다마 보나주르바 G1을 선택했습니다. 가볍고 보온성이 뛰어난 티타늄 접이식 드리퍼와 94℃의 시작 온도로 보정했을 때, 차가운 운해를 뚫고 피어나는 재스민 꽃향기와 복숭아의 단맛은 평생 잊을 수 없는 충격을 선사합니다."
    ],
    recipe: {
      name: "평창 육백마지기 고지대 드립 공식",
      ratio: "20.0g (코스)",
      temp: "94°C (바람 보정)",
      time: "2분 20초",
      yield: "300ml",
      steps: [
        { num: "01", title: "뜸 들이기 (Blooming)", text: "40g의 물을 부은 뒤 스푼으로 1회 교반, 45초간 아웃도어 가스 방출" },
        { num: "02", title: "1차 푸어 (First Pour)", text: "150g까지 나선형으로 중심부에서 외곽으로 부드럽게 주수 (1분 15초)" },
        { num: "03", title: "2차 푸어 & 티타늄 컵 서빙", text: "300ml 도달 시 드리퍼 제거, 예열된 티타늄 싱글 머그에 즉시 푸어링" }
      ],
      tip: "야외에서는 바람막이를 설치하거나 텐트 전실에서 추출해야 드립 주전자 물줄기가 흔들리지 않습니다."
    },
    strip: [
      { label: "실제 로케이션", val: "평창 청옥산", desc: "해발 1,256m 육백마지기 풍력발전단지" },
      { label: "주요 향미 노트", val: "재스민 & 복숭아", desc: "에티오피아 예가체프 G1 윈터" },
      { label: "추출 장비", val: "하리오 V60 & 펠로우 EKG", desc: "온도 가변 정밀 푸어오버" },
      { label: "그라인더", val: "코만단테 C40 MK4", desc: "균일도 최상급 니트로 블레이드" }
    ],
    hotspots: [
      { id: "py-kettle", x: 26, y: 64, label: "펠로우 스태그 EKG 드립케틀", price: "₩249,000", tag: "PRECISION KETTLE" },
      { id: "py-dripper", x: 50, y: 52, label: "하리오 V60 드리퍼 • 추출 중", price: "₩68,000", tag: "POUR-OVER DRIPPER" },
      { id: "py-grinder", x: 63, y: 69, label: "코만단테 C40 MK4 그라인더", price: "₩360,000", tag: "HAND GRINDER" },
      { id: "py-bean", x: 73, y: 66, label: "원두: 에티오피아 예가체프 G1 (육백마지기 윈터)", price: "₩25,000", tag: "SPECIALTY BEAN" }
    ],
    bundleId: "py-bundle"
  },
  jeju: {
    id: "jeju",
    title: "제주도 한림 금릉 해변 (비양도 뷰)",
    coords: "GPS 33°23'48.2\"N 126°13'12.0\"E • SEA LEVEL 3m • SUNSET TWILIGHT",
    image: "assets/jeju.jpg",
    headline: "\"CRACKLING BASALT & SUNSET CREMA\"",
    subtext: "검은 현무암 너머 황혼의 바다, 수동 레버로 추출하는 묵직한 에스프레소의 여운.",
    storyTitle: "\"황혼의 파도 소리와 짙은 초콜릿 바디감의 선셋 에스프레소\"",
    author: "박진우 (Jinwoo Park) • 아웃도어 바리스타",
    storyParagraphs: [
      "제주 서쪽 금릉 해변의 일몰은 눈부실 정도로 붉은 보랏빛으로 물듭니다. 파도 소리와 바람이 부딪히는 바닷가에서는 가벼운 산미보다 깊고 묵직한 바디감이 마음을 데워줍니다.",
      "황동으로 만들어진 수동 레버 머신을 야외 캠핑 테이블에 거치하고 과테말라 안티구아 원두를 분쇄합니다. 9바의 손맛으로 짜낸 짙은 갈색 크레마가 에스프레소 잔에 가득 차는 순간, 하루의 피로는 바다 너머로 사라집니다."
    ],
    recipe: {
      name: "제주 금릉 선셋 레버 에스프레소 공식",
      ratio: "18.5g (파인)",
      temp: "92°C 고압 추출",
      time: "30초 (프리인퓨전 6초)",
      yield: "38ml (더블샷)",
      steps: [
        { num: "01", title: "침칠 & 탬핑 (Distribution)", text: "바다 습기를 고려해 18.5g 원두를 바스켓에 평평하게 레벨링 후 강하게 탬핑" },
        { num: "02", title: "프리인퓨전 6초 (Pre-infusion)", text: "레버를 올려 챔버에 물을 채운 뒤 6초간 원두 퍽을 고르게 적시기" },
        { num: "03", title: "9바 압력 추출 (9-Bar Pull)", text: "양손으로 레버를 균일하게 내리며 황금빛 진한 타이거 크레마를 추출" }
      ],
      tip: "에스프레소 잔에 뜨거운 물을 미리 부어 잔을 따뜻하게 데워두어야 크레마가 오래 유지됩니다."
    },
    strip: [
      { label: "실제 로케이션", val: "제주 금릉 비양도", desc: "해변 바위 캠핑 사이트" },
      { label: "주요 향미 노트", val: "다크초콜릿 & 피칸", desc: "중후한 스모키 바디감" },
      { label: "추출 도구", val: "수동 레버 에스프레소", desc: "무전원 9바 황동 프레스" },
      { label: "현장 무드", val: "선셋 & 오일 랜턴", desc: "황혼의 파도 소리와 앰비언스" }
    ],
    hotspots: [
      { id: "jj-bean", x: 34, y: 72, label: "제주 선셋 원두 200g", price: "₩23,000", tag: "SPECIALTY BEAN" },
      { id: "jj-press", x: 49, y: 58, label: "황동 레버 에스프레소 머신", price: "₩298,000", tag: "LEVER PRESS" },
      { id: "jj-grinder", x: 56, y: 65, label: "빈티지 우드 핸드밀", price: "₩89,000", tag: "RETRO GRINDER" },
      { id: "jj-lantern", x: 65, y: 62, label: "클래식 브론즈 오일 랜턴", price: "₩54,000", tag: "VINTAGE LANTERN" },
      { id: "jj-tumbler", x: 73, y: 70, label: "레더 슬리브 브라스 텀블러", price: "₩46,000", tag: "BRASS TUMBLER" }
    ],
    bundleId: "jj-bundle"
  }
};

// ==========================================
// 2. APPLICATION STATE MANAGEMENT
// ==========================================

const state = {
  currentLocation: "pyeongchang",
  cart: [
    { product: PRODUCTS_DB["py-bean"], qty: 1 },
    { product: PRODUCTS_DB["py-dripper"], qty: 1 }
  ],
  selectedProduct: null,
  activeHotspotId: null,
  isAudioPlaying: false
};

// ==========================================
// 3. AMBIENT AUDIO SYNTHESIZER (Web Audio API)
// ==========================================

let audioCtx = null;
let noiseNode = null;
let gainNode = null;
let crackleTimer = null;

function initAmbientSound() {
  if (audioCtx) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  audioCtx = new AudioContext();

  // Create Pink/Brown noise buffer for gentle mountain wind
  const bufferSize = audioCtx.sampleRate * 2;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
    b6 = white * 0.115926;
  }

  noiseNode = audioCtx.createBufferSource();
  noiseNode.buffer = noiseBuffer;
  noiseNode.loop = true;

  // Filter for wind warmth
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 380;

  gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);

  noiseNode.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  noiseNode.start();

  // Fire crackle simulator
  crackleTimer = setInterval(() => {
    if (!state.isAudioPlaying || !audioCtx) return;
    if (Math.random() > 0.45) {
      playFireCrackle();
    }
  }, 350);
}

function playFireCrackle() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const clickGain = audioCtx.createGain();
  const freq = 400 + Math.random() * 1200;

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.04);

  clickGain.gain.setValueAtTime(0.04 + Math.random() * 0.05, audioCtx.currentTime);
  clickGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.04);

  osc.connect(clickGain);
  clickGain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.045);
}

function toggleSound() {
  const btn = document.getElementById('sound-btn');
  if (!audioCtx) {
    initAmbientSound();
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  if (!state.isAudioPlaying) {
    gainNode.gain.setTargetAtTime(0.18, audioCtx.currentTime, 0.5);
    state.isAudioPlaying = true;
    btn.classList.add('playing');
    btn.innerHTML = '<span class="sound-icon">🔊</span><span class="sound-text">Sound: Nature Playing</span>';
  } else {
    gainNode.gain.setTargetAtTime(0.001, audioCtx.currentTime, 0.3);
    state.isAudioPlaying = false;
    btn.classList.remove('playing');
    btn.innerHTML = '<span class="sound-icon">🔈</span><span class="sound-text">Sound: Mute</span>';
  }
}

// ==========================================
// 4. RENDERING FUNCTIONS
// ==========================================

function renderLocation(locKey) {
  const loc = LOCATIONS_DATA[locKey];
  if (!loc) return;

  state.currentLocation = locKey;

  // 1. Update Tabs
  document.querySelectorAll('.loc-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.location === locKey);
    btn.setAttribute('aria-selected', btn.dataset.location === locKey);
  });

  // 2. Update Hero Summary
  document.getElementById('current-location-title').textContent = loc.title;
  document.getElementById('current-location-coords').textContent = loc.coords;
  document.getElementById('magazine-bg-image').src = loc.image;
  document.getElementById('stage-headline').textContent = loc.headline;

  // 3. Render Hotspots on Stage
  const container = document.getElementById('hotspots-container');
  container.innerHTML = '';

  loc.hotspots.forEach((spot, idx) => {
    const el = document.createElement('div');
    el.className = 'hotspot-item';
    el.style.left = `${spot.x}%`;
    el.style.top = `${spot.y}%`;
    el.dataset.productId = spot.id;

    el.innerHTML = `
      <div class="hotspot-pin">
        <div class="pulse-ring"></div>
        <div class="pin-core"></div>
      </div>
      <div class="hotspot-pill">
        <span>${spot.label}</span>
        <span class="pill-price-sub">${spot.price}</span>
      </div>
    `;

    el.addEventListener('click', () => {
      openProductDrawer(spot.id);
      setActiveHotspot(spot.id);
    });

    container.appendChild(el);
  });

  // 4. Render Highlights Strip
  const strip = document.getElementById('location-strip');
  strip.innerHTML = loc.strip.map(item => `
    <div class="strip-item">
      <div class="strip-label">${item.label}</div>
      <div class="strip-val">${item.val}</div>
      <div class="strip-desc">${item.desc}</div>
    </div>
  `).join('');

  // 5. Render Story & Infographic
  document.getElementById('story-title').textContent = loc.storyTitle;
  document.getElementById('story-body').innerHTML = loc.storyParagraphs.map(p => `<p>${p}</p>`).join('');
  document.getElementById('story-bundle-btn').onclick = () => openProductDrawer(loc.bundleId);
  document.getElementById('story-bundle-btn').innerHTML = `<span>이 화보 속 '${loc.title.split(' ')[1]} 풀 패키지' 묶음 보기</span><span class="arrow">→</span>`;

  // Recipe
  const rec = loc.recipe;
  document.getElementById('recipe-name').textContent = rec.name;
  document.getElementById('recipe-ratio').textContent = rec.ratio;
  document.getElementById('recipe-temp').textContent = rec.temp;
  document.getElementById('recipe-time').textContent = rec.time;
  document.getElementById('recipe-yield').textContent = rec.yield;
  document.getElementById('recipe-tip').innerHTML = `<strong>캠핑 팁:</strong> ${rec.tip}`;

  document.getElementById('recipe-steps').innerHTML = rec.steps.map(s => `
    <div class="timeline-step">
      <div class="step-num">${s.num}</div>
      <div class="step-desc">
        <strong>${s.title}</strong>
        <p>${s.text}</p>
      </div>
    </div>
  `).join('');

  // 6. Refresh Curated Shop Grid
  renderShopGrid();
}

function setActiveHotspot(id) {
  state.activeHotspotId = id;
  document.querySelectorAll('.hotspot-item').forEach(el => {
    el.classList.toggle('active', el.dataset.productId === id);
  });
}

function renderShopGrid(filter = 'all') {
  const grid = document.getElementById('shop-items-grid');
  const items = Object.values(PRODUCTS_DB).filter(prod => {
    if (filter === 'all') return true;
    return prod.category === filter;
  });

  grid.innerHTML = items.map(prod => `
    <article class="product-card" data-id="${prod.id}">
      <div class="card-badge-pinned">${prod.badge}</div>
      <div class="card-img-wrap">
        <img src="${prod.image}" alt="${prod.title}" class="card-img" />
      </div>
      <div class="card-details">
        <span class="card-category">${prod.categoryLabel}</span>
        <h3 class="card-title">${prod.title}</h3>
        <div class="card-flavor-tags">
          <span class="flavor-pill">${prod.weight}</span>
          <span class="flavor-pill">${prod.location === 'pyeongchang' ? '강원 평창' : '제주 금릉'}</span>
        </div>
        <div class="card-pricing-row">
          <div class="card-price">${prod.priceFormatted}</div>
          <button class="card-btn-inspect" onclick="openProductDrawer('${prod.id}')">상세 & 레시피</button>
        </div>
      </div>
    </article>
  `).join('');
}

// ==========================================
// 5. PRODUCT DRAWER (INFORMATION LAYER)
// ==========================================

function openProductDrawer(productId) {
  const prod = PRODUCTS_DB[productId];
  if (!prod) return;

  state.selectedProduct = prod;
  const drawer = document.getElementById('product-drawer');
  const backdrop = document.getElementById('product-drawer-backdrop');
  const body = document.getElementById('drawer-body');

  body.innerHTML = `
    <div class="drawer-media">
      <img src="${prod.image}" alt="${prod.title}" />
    </div>
    <span class="drawer-tag">${prod.categoryLabel}</span>
    <h2 class="drawer-heading" id="drawer-title">${prod.title}</h2>
    
    <div class="drawer-price-bar">
      <span class="drawer-price">${prod.priceFormatted}</span>
      <span class="drawer-stock-badge">${prod.stock}</span>
    </div>

    <p class="drawer-desc">${prod.desc}</p>

    <!-- Taste / Performance Radar Representation -->
    <div class="taste-chart-box">
      <h4>센서리 & 아웃도어 성능 지표 (Sensory Spectrum)</h4>
      <div class="taste-bars">
        <div class="taste-bar-row">
          <span>향미 (Aroma)</span>
          <div class="bar-track"><div class="bar-fill" style="width: ${prod.radar.aroma}%"></div></div>
          <span>${prod.radar.aroma}</span>
        </div>
        <div class="taste-bar-row">
          <span>산미 (Acidity)</span>
          <div class="bar-track"><div class="bar-fill" style="width: ${prod.radar.acidity}%"></div></div>
          <span>${prod.radar.acidity}</span>
        </div>
        <div class="taste-bar-row">
          <span>바디 (Body)</span>
          <div class="bar-track"><div class="bar-fill" style="width: ${prod.radar.body}%"></div></div>
          <span>${prod.radar.body}</span>
        </div>
        <div class="taste-bar-row">
          <span>단맛 (Sweet)</span>
          <div class="bar-track"><div class="bar-fill" style="width: ${prod.radar.sweetness}%"></div></div>
          <span>${prod.radar.sweetness}</span>
        </div>
      </div>
    </div>

    <!-- Influencer Field Note -->
    <div class="drawer-influencer-note">
      <span class="influencer-badge">FIELD NOTES BY @WILD_BARISTA.JIN</span>
      <p>"${prod.influencerTip}"</p>
    </div>

    <div class="drawer-actions">
      <button class="btn-secondary" id="btn-add-cart">장바구니 담기</button>
      <button class="btn-accent" id="btn-instant-buy">원클릭 바로 주문</button>
    </div>
  `;

  // Attach Action Listeners
  document.getElementById('btn-add-cart').onclick = () => {
    addToCart(prod);
    closeProductDrawer();
    openCartDrawer();
  };

  document.getElementById('btn-instant-buy').onclick = () => {
    closeProductDrawer();
    triggerInstantCheckout(prod);
  };

  drawer.classList.add('active');
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductDrawer() {
  document.getElementById('product-drawer').classList.remove('active');
  document.getElementById('product-drawer-backdrop').classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 6. CART MANAGEMENT (TRANSACTION PREP)
// ==========================================

function addToCart(product) {
  const existing = state.cart.find(item => item.product.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ product, qty: 1 });
  }
  updateCartUI();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.product.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);

  document.getElementById('cart-counter').textContent = totalCount;
  document.getElementById('cart-header-count').textContent = totalCount;

  const list = document.getElementById('cart-items-list');
  if (state.cart.length === 0) {
    list.innerHTML = `<div class="cart-empty-message">담긴 상품이 없습니다.<br>화보 속 핫스팟 핀을 탭해보세요!</div>`;
    document.getElementById('btn-proceed-checkout').disabled = true;
  } else {
    document.getElementById('btn-proceed-checkout').disabled = false;
    list.innerHTML = state.cart.map(item => `
      <div class="cart-item-row">
        <img src="${item.product.image}" class="cart-item-img" alt="${item.product.title}" />
        <div>
          <div class="cart-item-title">${item.product.title}</div>
          <div class="cart-item-price">${item.product.priceFormatted} × ${item.qty}</div>
        </div>
        <button class="cart-item-del-btn" onclick="removeFromCart('${item.product.id}')" title="삭제">✕</button>
      </div>
    `).join('');
  }

  const formattedTotal = `₩${totalPrice.toLocaleString()}`;
  document.getElementById('cart-subtotal').textContent = formattedTotal;
  document.getElementById('cart-total').textContent = formattedTotal;
  document.getElementById('modal-pay-amount').textContent = formattedTotal;
}

function openCartDrawer() {
  document.getElementById('cart-drawer').classList.add('active');
  document.getElementById('cart-drawer-backdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cart-drawer').classList.remove('active');
  document.getElementById('cart-drawer-backdrop').classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 7. CHECKOUT MODAL PIPELINE (TRANSACTION)
// ==========================================

function openCheckoutModal() {
  closeCartDrawer();
  const backdrop = document.getElementById('checkout-modal-backdrop');
  document.getElementById('checkout-form-view').classList.remove('hidden');
  document.getElementById('checkout-success-view').classList.add('hidden');
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal-backdrop').classList.remove('active');
  document.body.style.overflow = '';
}

function triggerInstantCheckout(product) {
  // If cart doesn't have it, ensure it is in cart
  const exists = state.cart.find(i => i.product.id === product.id);
  if (!exists) {
    state.cart = [{ product, qty: 1 }];
  }
  updateCartUI();
  openCheckoutModal();
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const btn = document.getElementById('btn-submit-order');
  const originalText = btn.innerHTML;
  btn.innerHTML = `<span>트랜잭션 검증 및 승인 중...</span>`;
  btn.disabled = true;

  // Simulate SE Transaction Processing Pipeline
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.disabled = false;

    // Generate Transaction Record
    const txId = 'TX-' + new Date().getFullYear() + String(Math.floor(1000 + Math.random() * 9000));
    const totalPrice = state.cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);
    const payMethod = document.querySelector('input[name="pay-method"]:checked').value;
    const dest = document.getElementById('cust-address').value;

    let payLabel = "카카오페이 (간편결제)";
    if (payMethod === 'naverpay') payLabel = "네이버페이 (포인트결제)";
    if (payMethod === 'card') payLabel = "신용/체크카드 (안전승인)";

    document.getElementById('receipt-tx-id').textContent = txId;
    document.getElementById('receipt-payment').textContent = payLabel;
    document.getElementById('receipt-destination').textContent = dest.substring(0, 24) + '...';
    document.getElementById('receipt-date').textContent = new Date().toLocaleString();
    document.getElementById('receipt-total').textContent = `₩${totalPrice.toLocaleString()}`;

    // Switch view to success
    document.getElementById('checkout-form-view').classList.add('hidden');
    document.getElementById('checkout-success-view').classList.remove('hidden');

    // Empty cart upon successful transaction
    state.cart = [];
    updateCartUI();
  }, 900);
}

// Global hook for location switching
window.switchLocation = function(locKey) {
  renderLocation(locKey);
};

// Global hook for product inspecting
window.openProductDrawer = openProductDrawer;
window.removeFromCart = removeFromCart;

// ==========================================
// 8. INITIALIZATION & EVENT BINDINGS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Render
  renderLocation('pyeongchang');
  updateCartUI();

  // 2. Tab switching
  document.getElementById('tab-pyeongchang').addEventListener('click', () => renderLocation('pyeongchang'));
  document.getElementById('tab-jeju').addEventListener('click', () => renderLocation('jeju'));

  // 3. Audio toggle
  document.getElementById('sound-btn').addEventListener('click', toggleSound);

  // 4. Cart Drawer Toggles
  document.getElementById('cart-btn').addEventListener('click', openCartDrawer);
  document.getElementById('cart-close').addEventListener('click', closeCartDrawer);
  document.getElementById('cart-drawer-backdrop').addEventListener('click', closeCartDrawer);

  // 5. Product Drawer Closes
  document.getElementById('drawer-close').addEventListener('click', closeProductDrawer);
  document.getElementById('product-drawer-backdrop').addEventListener('click', closeProductDrawer);

  // 6. Checkout Modals
  document.getElementById('btn-proceed-checkout').addEventListener('click', openCheckoutModal);
  document.getElementById('checkout-close').addEventListener('click', closeCheckoutModal);
  document.getElementById('order-form').addEventListener('submit', handleCheckoutSubmit);
  document.getElementById('btn-return-magazine').addEventListener('click', closeCheckoutModal);

  // 7. Shop Filter Pills
  document.getElementById('shop-filter-pills').addEventListener('click', (e) => {
    if (e.target.classList.contains('pill-btn')) {
      document.querySelectorAll('#shop-filter-pills .pill-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderShopGrid(e.target.dataset.filter);
    }
  });

  // 8. Escape Key Listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductDrawer();
      closeCartDrawer();
      closeCheckoutModal();
    }
  });
});
