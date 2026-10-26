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

2026년 10월 23일 확인한 앱 `feat/#18-appleFirebaseChat`의 동작과 Firebase 설정을 기준으로 작성했으며, 2026년 10월 26일 이메일 가입·로그인과 비밀번호 재설정 추가에 맞춰 문서 버전 1.1을 준비했습니다.

- 개인 일기·초안·선택한 사진은 기기에 보관합니다. 사진의 서버 업로드 기능은 없습니다.
- Apple 로그인은 이름·이메일 범위를 요청하지 않습니다.
- 이메일 가입·로그인은 이메일 주소를 아이디로 사용하며, 이메일과 비밀번호를 Firebase Authentication으로 전달합니다. 앱의 기기 저장소나 Firestore에 비밀번호를 저장하지 않으며 운영자가 원문을 조회하지 않습니다. 비밀번호 재설정 요청에는 이메일 주소를 사용합니다.
- 공개 프로필의 닉네임·관심사와 실제 대화, 읽음·보관·차단 상태는 Firebase를 이용합니다.
- Firestore 데이터베이스는 서울 `asia-northeast3`입니다. Firebase Authentication 데이터는 미국에서 처리됩니다.
- 계정 삭제 버튼은 현재 앱에 없습니다. 앱 삭제·로그아웃·대화 보관을 서버 삭제라고 안내하지 않습니다.
- 운영자/개인정보 담당자: **우상영**, **sangyoung2730@naver.com**

공식 참고 자료: [Firebase 개인정보 안내](https://firebase.google.com/support/privacy), [Firebase 데이터 처리 약관](https://firebase.google.com/terms/data-processing-terms), [Apple 개인정보 보호](https://www.apple.com/kr/legal/privacy/).

버전 1.1은 2026년 10월 26일 기존 Vercel 프로젝트에 배포했습니다. 공개 URL에서 이메일 인증 안내·버전·날짜를 확인했습니다. 이메일 인증 단위 테스트 8개와 실제 Firebase의 두 이메일 계정 인증·실시간 메시지 왕복을 확인했습니다. 비밀번호는 Firebase 인증으로만 전달하며 공개 프로필이나 대화 저장 필드에 넣지 않습니다. 재설정 메일의 수신함 도착 및 실제 비밀번호 변경은 별도 확인이 필요합니다.

## 배포와 운영

- 개인정보처리방침: https://connectingapp-site.vercel.app/
- 지원 URL: https://connectingapp-site.vercel.app/#contact
- 최초 공개: 2026년 10월 23일, Vercel `WCIF_CultureKeeper / connectingapp-site`
- 로그인 없는 요청에서 HTTP 200과 배포 본문이 원본과 일치하는 것을 확인했습니다.
- 운영자가 승인한 기준: 계정 삭제 7일 이내, 문의 이력 처리 완료 후 30일 뒤 삭제, 유해 콘텐츠 신고 24시간 이내 확인.

Vercel의 현재 GitHub 연동 범위에는 이 저장소가 포함되어 있지 않아 정적 파일을 직접 업로드했습니다. 자동 Git 배포는 아직 연결되지 않았습니다. 후속 변경은 `public/` 파일과 `outputDirectory` 항목을 제외한 `vercel.json`을 한 폴더로 준비해 같은 프로젝트에 배포해야 합니다. 저장소 전체에는 환경 변수와 자격 증명을 넣지 않습니다.

Git 연동을 설정할 경우 Framework는 **Other**, 빌드 명령은 비움, Output Directory는 **public**, Production Branch는 **main**입니다. 환경 변수는 필요 없습니다. 기능 PR은 `develop`으로 통합하고 출시할 내용을 `main`에 반영합니다.

## 앱 출시 확인 사항

앱 내 계정 삭제와 신고 접수, Apple 인증 철회, 운영자의 삭제 처리 절차를 구현·검증해야 합니다. 공개 연락처와 처리 기한이 삭제 자동화를 의미하지 않습니다. 실제 Apple 로그인과 두 계정 대화는 별도로 실기기에서 검증해야 합니다. 사이트 공개를 앱 심사 통과 또는 실계정 테스트 완료로 표시하지 않습니다.

## Git 작업 규칙

[CONTRIBUTING.md](CONTRIBUTING.md)는 기존 앱 저장소의 규칙을 그대로 따릅니다. `develop`에서 `태그/#이슈번호-작업하는파일` 브랜치를 만들고, `[태그] 한글 작업 내용` 형식으로 커밋한 뒤 `develop`을 대상으로 PR을 생성합니다.
