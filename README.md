# 📱 iShare - 아이디어 공유/거래 플랫폼(React-Native Version)

> **🚧 개발 진행 상태**  
> 현재 Jetpack Compose 기반의 Android 앱을 React Native/Expo로 크로스 플랫폼 전환 작업을 진행 중입니다.

## 프로젝트 소개 💡

iShare는 혁신적인 아이디어를 안전하게 공유하고 거래할 수 있는 모바일 플랫폼입니다. 처음에는 Android 전용으로 개발되었으나, 더 넓은 사용자층을 위해 iOS까지 지원하는 크로스 플랫폼 앱으로 전환 중입니다.

---
### 기획 및 개발 의도

평소 아이디어를 상상하고 구상하는 것을 즐겼지만, 메모해두기만 하고 제대로 활용하지 못한 경험이 많았습니다.  
그러던 중,

> “누군가의 아이디어가 적절히 활용된다면 얼마나 좋을까?”

라는 질문이 떠올랐고, 이를 계기로  
**아이디어의 기록 → 보호 → 공유 → 검증 → 거래·창업·소통**까지  
자연스럽게 이어지는 플랫폼을 기획하게 되었습니다.

### 핵심 기능
- 아이디어 등록 및 보호 시스템
- NDA/특허 여부 표시
- 카테고리별 필터링
- 댓글 및 답글 시스템
- 아이디어 검색 및 정렬
- 실시간 채팅
- 안전한 거래 시스템

## 기술 스택 🛠

### Frontend
- **Core**
  - React Native
  - Expo (SDK 49)
  - TypeScript
  - Expo Router (파일 기반 라우팅)

### UI/UX
- expo-linear-gradient (그라데이션 효과)
- expo-blur (블러 효과)
- @expo-google-fonts/poppins (타이포그래피)
- React Native Animated (애니메이션)

### 상태 관리 및 데이터
- React Context API
- AsyncStorage

### 개발 도구
- VS Code
- ESLint & Prettier
- React Native Debugger

## 설치 및 실행 🚀

```bash
# 저장소 클론
git clone https://github.com/JustDoIt-Lee/idea-share.git

# 프로젝트 디렉토리로 이동
cd idea-share/iShareRN

# 의존성 설치
npm install

# 개발 서버 실행
npx expo start
```

## 개발 현황 📊

### 완료된 기능
- [x] 프로젝트 초기 설정 및 구조 잡기
- [x] 메인 화면 UI 구현
- [x] 기본 네비게이션 구조 설정

### 진행 중인 작업
- [ ] Native 버전 기능 마이그레이션
- [ ] iOS 최적화
- [ ] 상태 관리 시스템 구축
- [ ] API 연동 준비
