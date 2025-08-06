// 이미지 데이터 저장소 (실제 프로젝트에서는 서버 데이터베이스를 사용)
let images = [
    {
        id: 1,
        title: "아름다운 자연 풍경",
        description: "푸른 하늘과 초록빛 산들이 어우러진 아름다운 자연 풍경입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        uploadDate: "2024-01-15",
        likes: 89,
        downloads: 245
    },
    {
        id: 2,
        title: "도시의 밤",
        description: "빛나는 네온사인과 고층빌딩들이 어우러진 도시의 야경입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop",
        uploadDate: "2024-01-14",
        likes: 67,
        downloads: 189
    },
    {
        id: 3,
        title: "행복한 가족",
        description: "따뜻한 햇살 아래 행복한 가족의 모습을 담았습니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    },
    {
        id: 4,
        title: "추상적 예술",
        description: "색채와 형태가 자유롭게 어우러진 추상적인 예술 작품입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop"
    },
    {
        id: 5,
        title: "바다의 평화",
        description: "잔잔한 파도와 하늘의 구름이 조화를 이루는 평화로운 바다 풍경입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop"
    },
    {
        id: 6,
        title: "현대적 건축",
        description: "기하학적 형태와 유리 재질이 돋보이는 현대적인 건축물입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
    },
    {
        id: 7,
        title: "숲속의 오솔길",
        description: "고요한 숲속을 가로지르는 아름다운 오솔길의 모습입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
    },
    {
        id: 8,
        title: "비오는 거리",
        description: "비에 젖은 도시 거리의 반사되는 빛들이 아름다운 풍경을 만들어냅니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600&h=400&fit=crop"
    },
    {
        id: 9,
        title: "춤추는 소녀",
        description: "자유롭게 춤추는 소녀의 아름다운 순간을 포착했습니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 10,
        title: "기하학적 패턴",
        description: "정교한 기하학적 패턴들이 만들어내는 추상적인 아름다움입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    },
    {
        id: 11,
        title: "황금빛 들판",
        description: "해질녘 황금빛으로 물든 넓은 들판의 장관입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 12,
        title: "고대 유적",
        description: "시간의 흔적을 간직한 고대 유적의 웅장한 모습입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 13,
        title: "노래하는 음악가",
        description: "열정적으로 노래하는 음악가의 생동감 넘치는 모습입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
    },
    {
        id: 14,
        title: "유동적 형태",
        description: "자유롭게 흐르는 형태들이 만들어내는 추상적인 조화입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop"
    },
    {
        id: 15,
        title: "만년설 산봉우리",
        description: "하얀 만년설로 덮인 거대한 산봉우리의 장엄한 모습입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 16,
        title: "미래적 도시",
        description: "미래를 상상하게 하는 혁신적인 도시 건축물들입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
    },
    {
        id: 17,
        title: "책 읽는 노인",
        description: "평화롭게 책을 읽는 노인의 지혜로운 모습입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
    },
    {
        id: 18,
        title: "색채의 폭발",
        description: "다양한 색채가 폭발적으로 어우러진 추상적 작품입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop"
    },
    {
        id: 19,
        title: "폭포의 장관",
        description: "거대한 폭포에서 쏟아지는 물줄기의 웅장한 모습입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 20,
        title: "고급스러운 호텔",
        description: "세련되고 고급스러운 호텔 건물의 우아한 디자인입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop"
    },
    {
        id: 21,
        title: "웃는 아이들",
        description: "순수하고 밝은 웃음으로 가득한 아이들의 모습입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop"
    },
    {
        id: 22,
        title: "대칭의 미학",
        description: "완벽한 대칭이 만들어내는 기하학적 아름다움입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    },
    {
        id: 23,
        title: "사막의 일출",
        description: "넓은 사막 위로 떠오르는 붉은 태양의 장관입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 24,
        title: "역사적 다리",
        description: "오랜 역사를 간직한 아름다운 다리의 건축미입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 25,
        title: "꽃밭의 향연",
        description: "다양한 꽃들이 만발한 아름다운 꽃밭의 풍경입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=400&fit=crop"
    },
    {
        id: 26,
        title: "빗방울의 예술",
        description: "유리창에 맺힌 빗방울들이 만들어내는 추상적인 패턴입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 27,
        title: "요리하는 셰프",
        description: "전문적인 기술로 요리를 만드는 셰프의 열정적인 모습입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
    },
    {
        id: 28,
        title: "고대 성벽",
        description: "오랜 세월을 견뎌온 고대 성벽의 웅장한 모습입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 29,
        title: "호수의 평화",
        description: "잔잔한 호수와 주변의 아름다운 자연이 어우러진 평화로운 풍경입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 30,
        title: "색채의 흐름",
        description: "물감이 물에 녹아 흘러가는 아름다운 추상적 순간입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop"
    },
    {
        id: 31,
        title: "운동하는 운동선수",
        description: "열정적으로 운동하는 운동선수의 생동감 넘치는 모습입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 32,
        title: "현대적 쇼핑몰",
        description: "세련된 디자인과 화려한 조명이 돋보이는 현대적 쇼핑몰입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 33,
        title: "구름의 무리",
        description: "하늘을 가득 채운 아름다운 구름들의 다양한 모양들입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 34,
        title: "기하학적 건축",
        description: "정교한 기하학적 형태로 구성된 현대적 건축물의 아름다움입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
    },
    {
        id: 35,
        title: "그림을 그리는 화가",
        description: "캔버스에 열정을 담아 그림을 그리는 화가의 창작 순간입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 36,
        title: "빛의 춤",
        description: "빛과 그림자가 만들어내는 아름다운 추상적 패턴입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop"
    },
    {
        id: 37,
        title: "가을 단풍",
        description: "붉은 단풍으로 물든 아름다운 가을 숲의 풍경입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 38,
        title: "고급 레스토랑",
        description: "우아하고 세련된 분위기의 고급 레스토랑의 인테리어입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 39,
        title: "요가 수련자",
        description: "평화롭게 요가 자세를 취하는 수련자의 고요한 모습입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 40,
        title: "대비의 미학",
        description: "밝음과 어둠의 대비가 만들어내는 강렬한 추상적 표현입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop"
    },
    {
        id: 41,
        title: "봄의 벚꽃",
        description: "아름다운 벚꽃이 만발한 봄날의 로맨틱한 풍경입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 42,
        title: "고대 궁전",
        description: "화려하고 웅장한 고대 궁전의 건축적 아름다움입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 43,
        title: "독서하는 학생",
        description: "집중해서 책을 읽는 학생의 진지한 모습입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 44,
        title: "유기적 형태",
        description: "자연에서 영감을 받은 유기적 형태들의 추상적 조화입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop"
    },
    {
        id: 45,
        title: "겨울 설원",
        description: "하얀 눈으로 덮인 아름다운 겨울 설원의 고요한 풍경입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 46,
        title: "현대적 사무실",
        description: "깔끔하고 효율적인 현대적 사무실의 세련된 인테리어입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 47,
        title: "연주하는 음악가",
        description: "악기를 연주하는 음악가의 열정적인 공연 순간입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 48,
        title: "점의 구성",
        description: "무수한 점들이 만들어내는 복잡하고 아름다운 추상적 패턴입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop"
    },
    {
        id: 49,
        title: "열대 우림",
        description: "다양한 식물들이 우거진 신비로운 열대 우림의 모습입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 50,
        title: "고대 신전",
        description: "신성하고 웅장한 고대 신전의 건축적 위엄입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 51,
        title: "사진작가",
        description: "카메라를 들고 아름다운 순간을 포착하는 사진작가의 모습입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 52,
        title: "선의 미학",
        description: "다양한 선들이 만들어내는 우아하고 세련된 추상적 구성입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop"
    },
    {
        id: 53,
        title: "해변의 일몰",
        description: "바다와 하늘이 만나는 지평선에서 펼쳐지는 아름다운 일몰입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 54,
        title: "현대적 박물관",
        description: "혁신적 디자인과 전시 공간이 돋보이는 현대적 박물관입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 55,
        title: "춤추는 발레리나",
        description: "우아하고 아름다운 자세로 춤추는 발레리나의 순간입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 56,
        title: "색채의 조화",
        description: "서로 다른 색채들이 조화롭게 어우러진 추상적 작품입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop"
    },
    {
        id: 57,
        title: "고산 지대",
        description: "구름 위로 솟아오른 고산 지대의 장엄하고 아름다운 풍경입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 58,
        title: "고급 아파트",
        description: "세련되고 현대적인 고급 아파트 단지의 건축미입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 59,
        title: "명상하는 사람",
        description: "평화롭게 명상에 잠긴 사람의 고요하고 평온한 모습입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 60,
        title: "입체적 구성",
        description: "다양한 입체적 요소들이 만들어내는 복잡한 추상적 공간입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop"
    },
    {
        id: 61,
        title: "초원의 바람",
        description: "넓은 초원을 가로지르는 바람에 흔들리는 풀들의 아름다운 모습입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 62,
        title: "고대 성",
        description: "중세 시대의 웅장하고 신비로운 고대 성의 모습입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 63,
        title: "운동하는 여성",
        description: "건강하고 활기찬 모습으로 운동하는 여성의 생동감입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 64,
        title: "미니멀리즘",
        description: "단순함 속에서 찾을 수 있는 깊이 있는 추상적 아름다움입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop"
    },
    {
        id: 65,
        title: "강물의 흐름",
        description: "산을 가로지르며 흐르는 맑은 강물의 아름다운 흐름입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 66,
        title: "현대적 교회",
        description: "현대적 디자인과 신성함이 조화를 이루는 교회 건물입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 67,
        title: "작업하는 장인",
        description: "전통 기술로 정성스럽게 작업하는 장인의 숙련된 모습입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 68,
        title: "동적 구성",
        description: "움직임과 에너지가 느껴지는 역동적인 추상적 표현입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop"
    },
    {
        id: 69,
        title: "사막의 밤",
        description: "별이 총총한 하늘 아래 펼쳐진 신비로운 사막의 밤 풍경입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 70,
        title: "고급 주택",
        description: "세련되고 고급스러운 주택의 아름다운 건축 디자인입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 71,
        title: "공부하는 학생",
        description: "열심히 공부하는 학생의 진지하고 집중된 모습입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 72,
        title: "색채의 대비",
        description: "강렬한 색채 대비가 만들어내는 시각적 충격의 추상 작품입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop"
    },
    {
        id: 73,
        title: "숲속의 안개",
        description: "고요한 숲속을 감싸는 신비로운 안개의 아름다운 모습입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 74,
        title: "현대적 도서관",
        description: "지식의 보물창고인 현대적 도서관의 세련된 공간입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 75,
        title: "웃는 노인",
        description: "인생의 지혜가 묻어나는 따뜻한 미소의 노인입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 76,
        title: "유기적 흐름",
        description: "자연에서 영감을 받은 유기적 흐름의 추상적 표현입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop"
    },
    {
        id: 77,
        title: "해안 절벽",
        description: "거대한 파도가 부딪히는 웅장한 해안 절벽의 모습입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 78,
        title: "고급 레스토랑",
        description: "세련되고 로맨틱한 분위기의 고급 레스토랑입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 79,
        title: "연주하는 피아니스트",
        description: "피아노를 연주하는 음악가의 열정적인 공연 순간입니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: 80,
        title: "기하학적 조화",
        description: "정교한 기하학적 요소들이 만들어내는 완벽한 조화입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    }
];

let currentFilter = 'all';
let currentSearchTerm = '';
let currentSort = 'latest';
let currentImageId = null;
let currentPage = 1;
let imagesPerPage = 40;

// DOM 요소들
const gallery = document.getElementById('imageGallery');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const uploadModal = document.getElementById('uploadModal');
const imageModal = document.getElementById('imageModal');
const uploadForm = document.getElementById('uploadForm');
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentPageSpan = document.getElementById('currentPage');
const totalPagesSpan = document.getElementById('totalPages');

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 테마 초기화
    initializeTheme();
    
    // 성능 최적화: 이미지 지연 로딩
    setupLazyLoading();
    
    // 터치 제스처 설정
    setupTouchGestures();
    
    renderGallery();
    setupEventListeners();
    updatePagination();
});

// 이벤트 리스너 설정
function setupEventListeners() {
    // 필터 버튼
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            setActiveFilter(filter);
            filterImages(filter);
        });
    });
    
    // 검색 기능 (디바운스 적용)
    searchInput.addEventListener('input', debouncedSearch);
    clearSearchBtn.addEventListener('click', clearSearch);
    
    // 정렬 기능
    sortButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sort = button.dataset.sort;
            setActiveSort(sort);
            sortImages(sort);
        });
    });
    
    // 테마 토글 버튼
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // 모바일 메뉴 토글
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        
        // 모바일 메뉴 외부 클릭 시 닫기
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // ESC 키로 메뉴 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });
    }
    
    // 업로드 폼
    uploadForm.addEventListener('submit', handleUpload);
    
    // 드래그 앤 드롭
    setupDragAndDrop();
    
    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (e) => {
        if (e.target === uploadModal) closeUploadModal();
        if (e.target === imageModal) closeImageModal();
    });
}

// 갤러리 렌더링
function renderGallery(filteredImages = images) {
    const totalImages = filteredImages.length;
    const totalPages = Math.ceil(totalImages / imagesPerPage);
    
    if (totalImages === 0) {
        gallery.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-images"></i>
                <h3>이미지가 없습니다</h3>
                <p>이미지를 찾을 수 없습니다.</p>
            </div>
        `;
        return;
    }
    
    // 현재 페이지가 총 페이지 수를 초과하면 마지막 페이지로 조정
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    
    // 현재 페이지의 이미지들만 선택
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = filteredImages.slice(startIndex, endIndex);
    
    gallery.innerHTML = currentImages.map(image => `
        <div class="gallery-item" onclick="goToDetailPage(${image.id})">
            <div class="image-container">
                <img src="${image.src}" alt="${image.title}" loading="lazy">
            </div>
            <div class="gallery-item-info">
                <h3>${image.title}</h3>
            </div>
        </div>
    `).join('');
    
    updatePagination();
}

// 페이지네이션 업데이트
function updatePagination() {
    let filteredImages = images;
    
    // 필터 적용
    if (currentFilter !== 'all') {
        filteredImages = filteredImages.filter(image => image.category === currentFilter);
    }
    
    // 검색 적용
    if (currentSearchTerm) {
        filteredImages = filteredImages.filter(image => 
            image.title.toLowerCase().includes(currentSearchTerm) ||
            image.description.toLowerCase().includes(currentSearchTerm) ||
            (image.tags && image.tags.some(tag => tag.toLowerCase().includes(currentSearchTerm)))
        );
    }
    
    // 정렬 적용 (페이지네이션 계산에는 정렬 불필요)
    const totalImages = filteredImages.length;
    const totalPages = Math.ceil(totalImages / imagesPerPage);
    
    currentPageSpan.textContent = currentPage;
    totalPagesSpan.textContent = totalPages;
    
    // 버튼 활성화/비활성화
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

// 이전 페이지
function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderGallery();
    }
}

// 다음 페이지
function nextPage() {
    let filteredImages = images;
    
    // 필터 적용
    if (currentFilter !== 'all') {
        filteredImages = filteredImages.filter(image => image.category === currentFilter);
    }
    
    // 검색 적용
    if (currentSearchTerm) {
        filteredImages = filteredImages.filter(image => 
            image.title.toLowerCase().includes(currentSearchTerm) ||
            image.description.toLowerCase().includes(currentSearchTerm) ||
            (image.tags && image.tags.some(tag => tag.toLowerCase().includes(currentSearchTerm)))
        );
    }
    
    const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
    
    if (currentPage < totalPages) {
        currentPage++;
        renderGallery();
    }
}

// 검색 기능
function handleSearch(e) {
    currentSearchTerm = e.target.value.toLowerCase().trim();
    currentPage = 1; // 검색 시 첫 페이지로 이동
    
    if (currentSearchTerm) {
        clearSearchBtn.style.display = 'flex';
    } else {
        clearSearchBtn.style.display = 'none';
    }
    
    applyFiltersAndSearch();
}

function clearSearch() {
    searchInput.value = '';
    currentSearchTerm = '';
    clearSearchBtn.style.display = 'none';
    applyFiltersAndSearch();
}

function applyFiltersAndSearch() {
    let filteredImages = images;
    
    // 필터 적용
    if (currentFilter !== 'all') {
        filteredImages = filteredImages.filter(image => image.category === currentFilter);
    }
    
    // 검색 적용
    if (currentSearchTerm) {
        filteredImages = filteredImages.filter(image => 
            image.title.toLowerCase().includes(currentSearchTerm) ||
            image.description.toLowerCase().includes(currentSearchTerm) ||
            (image.tags && image.tags.some(tag => tag.toLowerCase().includes(currentSearchTerm)))
        );
    }
    
    // 정렬 적용
    filteredImages = sortImagesByType(filteredImages, currentSort);
    
    renderGallery(filteredImages);
}

function sortImagesByType(images, sortType) {
    const sortedImages = [...images];
    
    switch (sortType) {
        case 'latest':
            return sortedImages.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
        case 'popular':
            return sortedImages.sort((a, b) => (b.likes || 0) - (a.likes || 0));
        case 'downloads':
            return sortedImages.sort((a, b) => (b.downloads || 0) - (a.downloads || 0));
        default:
            return sortedImages;
    }
}

// 정렬 기능
function setActiveSort(sort) {
    sortButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-sort="${sort}"]`).classList.add('active');
}

function sortImages(sort) {
    currentSort = sort;
    currentPage = 1; // 정렬 변경 시 첫 페이지로 이동
    applyFiltersAndSearch();
}

// 필터 기능
function filterImages(filter) {
    currentFilter = filter;
    currentPage = 1; // 필터 변경 시 첫 페이지로 이동
    applyFiltersAndSearch();
}

// 활성 필터 설정
function setActiveFilter(filter) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
}

// 업로드 모달 열기
function openUploadModal() {
    uploadModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 업로드 모달 닫기
function closeUploadModal() {
    uploadModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    uploadForm.reset();
}

// 상세페이지로 이동
function goToDetailPage(imageId) {
    window.location.href = `detail.html?id=${imageId}`;
}

// 이미지 모달 열기 (기존 코드 유지)
function openImageModal(imageId) {
    const image = images.find(img => img.id === imageId);
    if (!image) return;
    
    currentImageId = imageId;
    document.getElementById('modalImage').src = image.src;
    document.getElementById('modalTitle').textContent = image.title;
    document.getElementById('modalDescription').textContent = image.description;
    
    imageModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 이미지 모달 닫기
function closeImageModal() {
    imageModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentImageId = null;
}

// 업로드 처리
function handleUpload(e) {
    e.preventDefault();
    
    const title = document.getElementById('imageTitle').value;
    const category = document.getElementById('imageCategory').value;
    const description = document.getElementById('imageDescription').value;
    const files = fileInput.files;
    
    if (files.length === 0) {
        alert('이미지를 선택해주세요.');
        return;
    }
    
    // 실제 프로젝트에서는 서버로 파일을 업로드합니다
    // 여기서는 예시로 첫 번째 파일을 사용
    const file = files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const newImage = {
            id: Date.now(),
            title: title,
            description: description,
            category: category,
            src: e.target.result
        };
        
        images.unshift(newImage);
        renderGallery();
        closeUploadModal();
        
        // 성공 메시지
        showNotification('이미지가 성공적으로 업로드되었습니다!', 'success');
    };
    
    reader.readAsDataURL(file);
}

// 드래그 앤 드롭 설정
function setupDragAndDrop() {
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;
            // 파일 선택 시 미리보기 표시
            showFilePreview(files[0]);
        }
    });
    
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });
    
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            showFilePreview(e.target.files[0]);
        }
    });
}

// 파일 미리보기
function showFilePreview(file) {
    if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드 가능합니다.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        uploadArea.innerHTML = `
            <img src="${e.target.result}" style="max-width: 200px; max-height: 200px; border-radius: 10px;">
            <p>${file.name}</p>
        `;
    };
    reader.readAsDataURL(file);
}

// 이미지 다운로드
function downloadImage() {
    if (!currentImageId) return;
    
    const image = images.find(img => img.id === currentImageId);
    if (image) {
        const link = document.createElement('a');
        link.href = image.src;
        link.download = `${image.title}.jpg`;
        link.click();
    }
}

// 이미지 공유
function shareImage() {
    if (!currentImageId) return;
    
    const image = images.find(img => img.id === currentImageId);
    if (image && navigator.share) {
        navigator.share({
            title: image.title,
            text: image.description,
            url: window.location.href
        });
    } else {
        // 클립보드에 복사
        navigator.clipboard.writeText(`${image.title}\n${image.description}\n${window.location.href}`);
        showNotification('링크가 클립보드에 복사되었습니다!', 'info');
    }
}

// 알림 표시
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 테마 초기화
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

// 테마 설정
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // 테마 토글 버튼 아이콘 업데이트
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// 테마 토글
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // 테마 변경 알림
    const themeName = newTheme === 'dark' ? '다크 모드' : '라이트 모드';
    showNotification(`${themeName}로 변경되었습니다!`, 'success');
}

// 모바일 메뉴 토글
function toggleMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
}

// 모바일 메뉴 열기
function openMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.classList.add('active');
        navMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
}

// 모바일 메뉴 닫기
function closeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = ''; // 스크롤 복원
    }
}

// 이미지 지연 로딩 설정
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// 터치 제스처 설정
function setupTouchGestures() {
    let startX = 0;
    let startY = 0;
    let isDragging = false;

    // 터치 시작
    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = false;
    }, { passive: true });

    // 터치 이동
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) {
            const deltaX = Math.abs(e.touches[0].clientX - startX);
            const deltaY = Math.abs(e.touches[0].clientY - startY);
            
            if (deltaX > 10 || deltaY > 10) {
                isDragging = true;
            }
        }
    }, { passive: true });

    // 터치 종료 - 스와이프 제스처
    document.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        
        // 수평 스와이프 감지 (최소 50px)
        if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
            const navMenu = document.getElementById('navMenu');
            if (navMenu && navMenu.classList.contains('active')) {
                // 오른쪽에서 왼쪽으로 스와이프하면 메뉴 닫기
                if (deltaX < 0) {
                    closeMobileMenu();
                }
            }
        }
    }, { passive: true });
}

// 성능 최적화: 디바운스 함수
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 검색 최적화
const debouncedSearch = debounce(handleSearch, 300);

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 