# ssing-pick
`Redux`에 익숙해지기 위해 진행한 토이 프로젝트입니다.
노래정보를 저장해두고 필요할 때 꺼내볼 수 있습니다. 

> URL: https://my-ssing-pick.firebaseapp.com/

## 기술 및 라이브러리
- html, css, javascript
- React.js
- Create-React-App 프로젝트
- firebase > realtime database
- tailwind 
- react-router-dom
- react-redux
- redux-toolkit
- redux-icon
- uuid

## 설치
> 사전 조건: `firebaseConfig`에 필요한 본인의 firebase 정보
### install
```js
npm install
```
### usage
```js
npm start
```

## 컴포넌트별 기능
### App
- [X] Database에 저장된 노래 목록을 가져와서 `redux store`에 저장합니다.
### List
- [X] 저장된 노래 목록을 불러옵니다.
- [X] Database에 새로운 곡을 추가할 수 있습니다.
- [X] Database로부터 특정 곡을 삭제할 수 있습니다.
### Pick
- [X] 저장된 노래 목록을 불러옵니다.
- [X] 노래 목록에서 원하는 갯수만큼 랜덤으로 곡을 뽑아서 보여줄 수 있습니다.
    
## 사용
### 목록 확인 페이지

!![ezgif-2-846c328d3e](https://user-images.githubusercontent.com/78143860/209783215-56dd792b-f153-4eb7-991d-fbd7be79e3ac.gif)
- 새로운 곡을 추가하고 삭제할 수 있습니다.
- 각 작업은 데이터베이스에 반영되는데, 데이터베이스가 업데이트되면서 `onValue` 메소드가 호출되어 리스트를 새로 불러오게 됩니다.
- 새로운 곡을 추가할때 input에 입력한 곡 정보 외에도 id나 date값이 추가로 필요한데 이런 데이터 가공 작업은 `firebase.js`에서 해서 컴포넌트는 최대한 독립적으로 존재할 수 있도록 만들었습니다.

### 랜덤 뽑기 페이지

![ezgif-2-338d5070ae](https://user-images.githubusercontent.com/78143860/209783340-800fdfa5-e00c-4090-9695-4cec4725088d.gif)
- 뽑을 곡의 갯수를 입력하면 해당 갯수만큼 랜덤으로 곡을 뽑아서 보여줍니다.
- 먼저 입력한 갯수만큼 index번호를 뽑고, 곡 리스트에서 index에 해당하는 곡 정보들을 가져오는 방식으로 구현했습니다. index번호를 뽑을 때는 번호가 중복되지 않도록 `Set`을 사용했습니다.
- 랜덤으로 뽑을 곡의 최대 갯수는 전체 곡의 갯수를 넘어갈 수 없다.


## 정보
더 자세한 개발기를 보고싶다면 ~~~~블로그~~~

	
