# 프로젝트명 - 링클링클

## 팀원 소개

| FE/BE | 이름   | Github                                 | 블로그                              |
| ----- | ------ | -------------------------------------- | ----------------------------------- |
| `FE`  | 김선중 | https://github.com/Seogun95            | https://seons-dev.tistory.com/      |
| `FE`  | 권구민 | https://github.com/9mean2              |                                     |
| `FE`  | 정다정 | https://github.com/daaaj               |                                     |
| `BE`  | 오영석 | https://github.com/youngseokaa/new.git | https://blog.naver.com/jennykim6890 |
| `BE`  | 한지윤 | https://github.com/trueyoon/           |                                     |
| `BE`  | 최정환 | https://github.com/the1224             | https://hustlekr.tistory.com/       |
| `BE`  | 신경연 | https://github.com/bestfarmer94        | https://velog.io/@bestfarmer        |

## 롤링롤링 배포 사이트

[롤링롤링.com](http://rolling-rolling.s3-website.ap-northeast-2.amazonaws.com/home)

## 깃허브 레포

> FE :
> [https://github.com/Seogun95/RollingRolling](https://github.com/Seogun95/RollingRolling)

> BE :
> [https://github.com/trueyoon/RollingRolling](https://github.com/trueyoon/hanghaeWorld)

## 프로젝트 기능

### 😊 회원가입 & 로그인

> 회원가입 후 같은 정보로 로그인을 할 수 있습니다. 로그인에 성공하여 토큰을 발급
> 받아야만 모든 페이지를 정상적으로 이용할 수 있습니다.
>
> <img width="700" alt="image" src="https://user-images.githubusercontent.com/51226340/222370232-476ca711-f632-472d-89a6-ca82b72b3c4e.png">
> <img width="700" alt="image" src="https://user-images.githubusercontent.com/51226340/222370351-6402b328-362c-423f-a639-c2d86a9252ec.png">

### 🌟 회원 목록 조회

> home 화면에서 RollingRolling을 이용하는 모든 사용자의 rolling 페이지를 한 눈에
> 모아볼 수 있습니다. 그 중에 찾고자 하는 회원이 있다면 알고 있는 닉네임으로 해
> 당 회원의 Rolling 사이트를 조회할 수 있습니다.
>
> <img width="700" alt="image" src="https://user-images.githubusercontent.com/51226340/222370590-b7321a45-b190-458a-b942-3fbe7c2a8742.png">

### ✏️ Post & Comment

> 로그인에 성공한 유저라면 누구나 원하는 회원의 페이지에 방문해서 해당 페이지에
> 남겨진 질문과 답변을 조회할 수 있습니다. 직접 질문을 남길 때는 로그인한 닉네임
> 으로 질문을 남길지 익명으로 남길지 선택할 수 있으며, 본인이 작성한 질문은 ‘내
> 가 남긴 질문’ 단락에 따로 분리되어 표시됩니다. 질문 작성자는 페이지 주인이 질
> 문에 답변을 남기기 전까지 질문을 수정 및 삭제를 할 수 있지만, 답변이 완료되면
> 수정과 삭제를 모두 할 수 없습니다. 자신의 페이지에 남겨진 질문에는 본인만 답변
> 을 남길 수 있으며, 원치 않는 질문은 삭제할 수 있습니다.

### ❤️ 좋아요 기능

> 방문자의 질문, 사이트 주인의 답변, 그리고 유저의 프로필에 각각 좋아요를 추가할
> 수 있습니다. 이미 좋아요를 한 상태에서 한 번 더 좋아요를 등록하면 좋아요가 취
> 소되어 값이 반환됩니다.
>
> <img width="700" alt="image" src="https://user-images.githubusercontent.com/51226340/222370888-f9fae13d-de24-4e4e-a588-3961fefe4a80.png">

### 👨‍💻 마이페이지 기능 (내 정보 수정) - 정환

> 마이페이지에서 프로필사진, 자기소개, 닉네임, 비밀번호를 수정할 수 있습니다. 비
> 밀번호 수정란을 공백으로 둘 경우, 비밀번호는 변경하지 않고 나머지 항목만 수정
> 할 수 있습니다.
>
> <img width="700" alt="image" src="https://user-images.githubusercontent.com/51226340/222371536-9165e6bb-8c77-4191-a174-2c354f7a50c2.png">
> <img width="700" alt="image" src="https://user-images.githubusercontent.com/51226340/222371697-8e0a9035-1790-4b62-9b51-0805fb7a4c0d.png">

### ☑  페이징 처리

> 메인페이지에서 여러 회원들의 리스트가 페이징 처리되어 출력 됩니다. 회원의 개인
> 게시판에서 게시글들이 페이징 처리되어 출력 됩니다.

## FE적용 기술

### ☑ 디자인 - 선중

> - Welcome 페이지 타이핑 효과 Hook 구현 및 배경화면 자동 변경 Hook 구현
> - 전반적인 페이지 스타일 전담
> - 로고 생성
> - 사이드바 생성. 커스텀훅으로 스크롤 감지, 외부영역 클릭 감지, 페이지감지를 통
>   해 창이 닫히도록 구현
> - Header의 스크롤 여부에 따른 효과 적용

### ☑ 회원가입 및 로그인 - 선중

> JWT 토큰을 통해 서버와 연결, 정규식을 통한 정보 검수, 로그인시 토큰의 정보를저
> 장해 전역에서 사용. (패스워드 제외)

### ☑ CRUD - 선중, 다정, 구민

> - 타인 게시글에서 질문을 남기고 답변이 오면 get으로 뿌려지는 부분 구현 - 선중
> - 본인 게시글에서 답변 기능 구현 - 다정
> - 타인 게시글에서 본인 댓글 삭제 및 수정 구현 - 구민
> - 익명 체크기능을 통한 질문 작성 - 선중

### ☑ 검색 기능

> 검색 기능 구현 - 다정

### ☑ 좋아요 기능 - 다정

### ☑ 이미지 업로드 기능 - 선중, 다정

> - base64로 받아온 이미지 파일을 formData로 서버에 전송 (S3)
> - (사용자의 이미지가 없다면) ? 디폴트 이미지 : 사용자 이미지
> - 이미지 업로드를 통한 프로필 수정 기능

## BE적용 기술

### 📩 실시간 메일 전송 - 정환

> 회원 가입시 회원 가입이 완료되었다는 메시지가 등록한 이메일로 전송됩니다.

> <img width="700" alt="image" src="https://user-images.githubusercontent.com/51226340/222372233-8ebd7e24-429a-4244-a28f-ed3bd315493e.png">

### ◻ Swagger - 경연

> 프론트엔드와 정확하고 원활한 소통을 위해 스웨거를 도입하여 적용하였습니다.

### ◻ Spring Security - 정환

> 사용자 인증, 인가 기능 구현을 위해 Spring Security를 사용하였습니다.

### ◻ S3를 통한 이미지 업로드 - 정환

> 이미지를 업로드 하기 위해 S3를 활용하였습니다

### ◻ Java Mail Sending - 정환

> 특정 Service 수행 시 메일 전송이 가능해졌습니다.

### ◻ ec2 연결 - 지윤

> AWS ec2 서버를 열어 제공하였습니다.

### ◻ rds db 연결 - 영석 , 경연

공통적으로 db를 사용 할 수 있게 활용 하였습니다

## ⚙ Development Environment

`Java 17` `SpringBoot 2.7.9` `Ubuntu 20.04.5 LTS`

## 🚨 Trouble Shooting FE

- CORS problem
- insert image problem
- query refetch (최신 정보 업데이트 문제)
- map 사용으로 인해 answer container의 개별 적용이 불가한 문제

## 🚨 Trouble Shooting BE

- CORS problem
- entity 외래키 이슈
- application.properties관리 문제
- 배포관련 문제
- API 명세서 관리 문제

## 💭 API 명세

| Featuer            | Method   | Url                               | Request header       | Response header      | Request                                                                                                                                                   | Response                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------ | -------- | --------------------------------- | -------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 회원가입           | `POST`   | /api/user/signup                  | a                    |                      | { "username": "user1", "password": "Pw123123\*", "email" : "[user@user.com](mailto:user@user.com)", "nickname": "닉네임" }                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 로그인             | `POST`   | /api/user/login/                  |                      | Authorization bearer | { "username": "user1", "password": "Pw123123\*" }                                                                                                         | { "username": "username1", "nickname": "nick1", "image": “asdfasdf”, "introduction": “김선중입니다.”, “email”: “asdasd@naver.com” }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 회원 정보 로드     | `GET`    | /api/user/info                    |                      | Authorization bearer |                                                                                                                                                           | { "username": "username1", "nickname": "nick1", "image": “asdfasdf”, "introduction": “김선중입니다.”, “email”: “asdasd@naver.com” }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 전체회원 조회      | `GET`    | /api/home/{page}                  |                      |                      |                                                                                                                                                           | [ { "username": "username1", "nickname": "nick1", "image": “asdfasdf”, "introduction": “김선중입니다.” }, { "username": "username2", "nickname": "nick2", "image": “asdfasdf”, "introduction": “김선중입니다. } ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 특정회원 조회      | `GET`    | /api/user/search?nickname=서근2   | Authorization bearer |                      |                                                                                                                                                           | { "userResponseDto": { "username": "test2", "nickname": "서근2", "image": null, "introduction": null, "email": "test2@gmail.com", "likeCnt": 0 }, "newPostCnt": 1, "comPostCnt": 1 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 회원 프로필 좋아요 | `POST`   | /api/user/like/{likedUsername}    | Authorization bearer |                      | { liked: true/false }                                                                                                                                     | { liked: false/true, likeCount: 6 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 게시판 조회        | `GET`    | /api/post/{선중}                  | Authorization bearer |                      |                                                                                                                                                           | { “isMyPost": true, 프로필“user”: { “username”: “seogun95”, “nickname”: “김선중”, “introduction”: “김선중입니다.”, “image”: “프로필 이미지”, “liked”: true/false, “likeCnt”: 6, “email”: “asdasd@naver.com” }, ”upperPost”: [{ "postid": 1, "nickname" : "익명”, "content": "내용1", “image”: “asdasdasdasad”, “liked” : true/false, "likeCount": 6, "createdAt": "2022-12-01 12:52:06 }], ”bottomPost”: { “content” : [{ "postid": 1, "nickname" : "익명”, "content": "내용1", “image”: “asdasdasdasad”, "postlike": 0, "createdAt": "2022-12-01 12:52:06, “commentResponseDto”: { “commentId”: 1, “content”: “content”, "nickname": "김선중", “liked”: true/false, “likeCount”: 6, "createdAt": "2023-02-25 16:18:05” } }] } } |
| 게시판 스크롤      | `GET`    | /api/post?pageNum=2&username=선중 | Authorization bearer |                      |                                                                                                                                                           | { “content” : [{ "postid": 1, "nickname" : "회원2”, "content": "내용1", “image”: “asdasdasdasad”, "postlike": 0, "createdAt": "2022-12-01 12:52:06, “commentResponseDto”: { “commentId”: 1, “content”: “content”, "nickname": "선중", “liked”: true/false, “likeCount”: 6, "createdAt": "2023-02-25 16:18:05”, "commentlike": 0 } }] }                                                                                                                                                                                                                                                                                                                                                                                           |
| 질문 작성          | `POST`   | /api/post/{username}              | Authorization bearer |                      | { ”content” : ”질문 content 작성”, "anonymous" : true }                                                                                                   | { "postid": 1, "nickname" : “익명” "content": "내용1", "createdAt": "2022-12-01T12:52:06.729608”, ”comment”: null }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 질문 수정          | `PUT`    | /api/post/{postid}                | Authorization bearer |                      | { ”content” : ”질문 content 수정” }                                                                                                                       | { "postid": 1, "nickname" : ”질문 content 수정” ”content” : ”질문 content 수정”, "createdAt": "2022-12-01T12:52:06.729608” }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 질문 삭제          | `DELETE` | /api/post/{postid}                | Authorization bearer |                      |                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 답변 작성          | `POST`   | /api/comment/{postid}             | Authorization bearer |                      | { ”content” : “답변 content 작성” }                                                                                                                       | { ”commentId”: 1, ”content”: “답변 content 작성”, ”nickname”: }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 질문 하트          | `POST`   | /api/post/like/{postid}           | Authorization bearer |                      | { liked: true/false }                                                                                                                                     | { liked: false/true, likeCount: 6 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 답변 하트          | `POST`   | /api/comment/like/{commentid}     | Authorization bearer |                      | { liked: true/false }                                                                                                                                     | { liked: false/true, likeCount: 6 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 마이페이지 수정    | `PUT`    | /api/mypage                       | Authorization bearer |                      | {"nickname" : "nickname수정", "newPassword" : "A123456!", "newPasswordConfirm" : "A123456!" , ”image” : “https://”, "introduction" : "자기 소개글 예시” } | {"username" : "username", "nickname" : "nickname수정", ”image” : “https://online.spartacodingclub.kr/v2/assets/icons/logo-active.png”, "introduction" : "자기 소개글 예시” }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 비밀번호 확인      | `POST`   | /api/user/checkpwd                | Authorization bearer |                      | {"password": "Pw123123\*"}                                                                                                                                | true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| S3 업로드          | `POST`   | /api/upload                       | Authorization bearer |                      | {”img” : “uHbH0SAE6/unnamed.png”}                                                                                                                         | https://                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

###

## 🌐 Architecture

## 📋 ERD Diagram

<img width="700" alt="image" src="https://user-images.githubusercontent.com/51226340/222372453-9436d4a3-83a4-4301-b0fe-65c6f2f51df3.png">

## 📝 Technologies & Tools (BE) 📝
