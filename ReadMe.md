# 녕희의 포트폴리오 사이트 사용법
#### 프로필 이미지 바꾸기!
1. 웹에서 firebase 콘솔 로그인<br>
[Firebase Console](https://console.firebase.google.com)

2. Storage (파일 저장소)에 가서 profile.png를 삭제하고 바꾸고 싶은 프로필로 업로드한다.<br>

3. 업로드된 profile.png를 클릭하고 나오는 다운로드 URL을 복사(한번 클릭하면 복사됨)한다.<br>
![업로드이미지](./img/img_profile_url.png)

4. IDE( 드림위버 or 아톰 .. )에서 프로젝트 파일을 연다

5. portfoliohyh/public/assets/js/indexjs.js파일을 연다.

6. var profile_url = '' <= 이부분에 복사한 url을 넣는다

7. console(명령 프롬프트)를 연다.
 ( 윈도우키 + R키 --> cmd 검색 )

8. 프로젝트 파일까지 접근한다.
TODO : 녕쨩 데스크탑에서 파일 위치, 접근 경로
cd portfoliohyh

8. 배포한다. ( 최종적으로 파일을 올려서 다른사람들도 볼 수 있는 사이트를 '배포'한다 )
firebase deploy

9. 종권님에게 감사한 마음을 가지도록 한다.

#### SNS 바꾸는 방법 !

1. 웹에서 firebase 콘솔 로그인
[Firebase Console](https://console.firebase.google.com)

2. Storage (파일 저장소)에 가서 추가하고싶은 파일을 올린다.

3. 업로드된 파일를 클릭하고 나오는 다운로드 URL을 복사(한번 클릭하면 복사됨)한다.

4. Database -> 실시간 데이터베이스로 간다.

5. portfoliohyh
     - sns               <---- 이부분에 마우스를 가져다 대서 +를 누른다
        - facebook
           - img_path :
           - path :
        - instargram
           - img_path :
           - path :

![업로드이미지](./img/img_add_sns.png)

7. 배포한다. ( 프로필바꾸기의 7번부터 참조 )

8. 종권님에게 감사한 마음을 가지도록 한다.

=================================================================================
