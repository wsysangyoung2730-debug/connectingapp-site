# connectingapp-site

날담의 개인정보처리방침을 안내하는 한국어 정적 웹사이트입니다. 크림색 종이와 갈색 봉투를 사용한 앱의 시각 요소를 이어갑니다. 로그인이나 패키지 설치 없이 열 수 있습니다.

## 구성

- `public/index.html`: 개인정보처리방침 전문, 목차, 문의처
- `public/styles.css`: 반응형 화면, 인쇄 스타일, 두 가지 CSS 애니메이션
- `public/script.js`: 봉투 효과, 목차 위치 표시, 이메일 복사, 인쇄
- `public/licenses.txt`: Animate.css와 Animista의 원문 라이선스 및 수정 내역
- `vercel.json`: 정적 파일 경로와 응답 헤더 설정

외부 폰트, 분석 스크립트, CDN, 쿠키, 로컬 저장소를 사용하지 않습니다. 별도의 서버나 빌드 과정도 필요하지 않습니다. JavaScript 없이도 본문과 문의 이메일을 읽을 수 있습니다.

## 로컬에서 보기

저장소 루트에서 실행한 뒤 `http://127.0.0.1:4173`을 엽니다.

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory public
```

## 애니메이션 출처

- [Animate.css v4.1.1](https://github.com/animate-css/animate.css/tree/v4.1.1)의 `fadeInUp`: 첫 화면 제목과 봉투에만 적용합니다. 이동 거리를 14px로 줄였습니다. MIT 라이선스입니다.
- [Animista flip-2-ver-right-1](https://animista.net/play/basic/flip-2/flip-2-ver-right-1): 봉투를 누를 때 장식 인장만 뒤집혔다 돌아옵니다. FreeBSD 라이선스입니다.

자동 반복은 없습니다. `prefers-reduced-motion: reduce`에서는 등장 효과, 뒤집기, 부드러운 스크롤을 모두 끕니다. 개인정보 본문에는 애니메이션을 넣지 않았습니다. 출처와 저작권 고지는 배포 파일에도 포함됩니다.

## 개인정보 내용의 기준

2026년 10월 23일 확인한 앱 `feat/#18-appleFirebaseChat`의 동작과 Firebase 설정을 기준으로 작성했습니다.

- 개인 일기·초안·선택한 사진은 기기에 보관합니다. 사진의 서버 업로드 기능은 없습니다.
- Apple 로그인은 이름·이메일 범위를 요청하지 않습니다.
- 공개 프로필의 닉네임·관심사와 실제 대화, 읽음·보관·차단 상태는 Firebase를 이용합니다.
- Firestore 데이터베이스는 서울 `asia-northeast3`입니다. Firebase Authentication 데이터는 미국에서 처리됩니다.
- 계정 삭제 버튼은 현재 앱에 없습니다. 앱 삭제·로그아웃·대화 보관을 서버 삭제라고 안내하지 않습니다.
- 운영자/개인정보 담당자: **우상영**, **sangyoung2730@naver.com**

공식 참고 자료: [Firebase 개인정보 안내](https://firebase.google.com/support/privacy), [Firebase 데이터 처리 약관](https://firebase.google.com/terms/data-processing-terms), [Apple 개인정보 보호](https://www.apple.com/kr/legal/privacy/).

## 공개 전에 확인할 운영 사항

이 저장소는 웹사이트 구현과 방침 초안입니다. 다음 운영 결정을 확정한 뒤 문구와 작성일을 최종 반영해 주세요.

- 삭제 요청 시 본인 확인 방법, Firestore 프로필·대화·차단 데이터와 Firebase Auth 삭제 범위, 상대방 메시지 처리, 처리 기한을 확정하고 실제로 검증합니다. 이메일 연락처를 안내한 것만으로 삭제 처리가 자동화되지는 않습니다.
- 문의 이력의 구체적 보관 기간, 법령상 별도 보존 대상 여부, 국외 처리 고지·동의의 적용 근거 및 아동 이용 정책을 확정합니다.
- Vercel 배포 시 호스팅 업체의 접속 로그 처리·국외 처리 정보를 본문에 반영하고 실제 공개일을 명시합니다.
- 계정 생성 앱은 [Apple 심사 지침 5.1.1(v)](https://developer.apple.com/app-store/review/guidelines/#data-collection-and-storage)에 맞는 앱 내 계정 삭제도 준비해야 합니다. 본 사이트는 이 앱 기능을 구현하거나 실제 두 계정 채팅을 검증하지 않습니다.

## Vercel 배포 준비

**이번 작업에서는 배포하지 않습니다.** 나중에 Vercel에서 이 GitHub 저장소를 Import하면 됩니다.

1. Framework Preset: **Other**
2. Root Directory: 저장소 루트
3. Build Command: 비워 둡니다.
4. Output Directory: **public** (`vercel.json`에도 지정)
5. 환경 변수: 필요 없음
6. Production Branch: **main**. 기능 PR을 `develop`으로 검토·통합하고 출시할 내용을 `main`에 반영한 뒤 배포합니다.

배포 후 `/`에서 로그인 없이 방침 전문이 표시되는지 확인하고, 확정된 HTTPS 주소를 App Store Connect와 앱의 개인정보처리방침 링크에 연결합니다. 배포 주소가 아직 없으므로 canonical URL이나 임의의 운영 URL은 넣지 않았습니다.

## Git 작업 규칙

[CONTRIBUTING.md](CONTRIBUTING.md)는 기존 앱 저장소의 규칙을 그대로 따릅니다. `develop`에서 `태그/#이슈번호-작업하는파일` 브랜치를 만들고, `[태그] 한글 작업 내용` 형식으로 커밋한 뒤 `develop`을 대상으로 PR을 생성합니다.
