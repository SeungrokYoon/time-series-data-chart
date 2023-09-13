# 원티드 프리온보딩 인턴십 프론트엔드 - 4주차 과제

## 주제

주어진 데이터를 기반으로 시계열 차트 만들기

데이터는 json파일로 제공이 되어 있습니다.

## 프로젝트 소개

원티드 프리온보딩 프론트엔드 - 4주차 과제 내용을 구현한 시계열 차트 만들기입니다!

[목표] Aria 그래프와 Bar 그래프를 한 번에 그리기 및 부가 기능 구현

[요구사항] [링크](https://www.notion.so/sonicrok/Week-4-9efa38f02bf14c7a93776ecea5a5e474)

## 지원자 소개

<img src="https://avatars.githubusercontent.com/SeungrokYoon" width="130" height="130">

[@SeungrokYoon](https://github.com/SeungrokYoon)

## 개발 환경

### Developement

<img src="https://img.shields.io/badge/Node.js v18 (LTS)-grey?style=for-the-badge&logo=nodedotjs"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>

### Convention

<img src="https://img.shields.io/badge/husky-brown?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/lint staged-white?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">

## 배포 및 실행방법

배포된 프로젝트는 [여기](https://time-series-data-chart.vercel.app/)에서 체험해 볼 수 있습니다.

로컬에서는 빈 폴더에 본 프로젝트를 클론한 후, `npm start`를 입력하면 됩니다.
아래 커맨드를 입력해주세요!

```text
git clone https://github.com/SeungrokYoon/time-series-data-chart.git .
npm start
```

## 핵심 라이브러리

- Rechart

## 구현 기능

1. 시계열 차트 만들기

- [x] 주어진 JSON 데이터의 `key`값(시간)을 기반으로 시계열 차트를 만들어주세요
- [x] 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 만들어주세요
- [x] Area 그래프의 기준값은 `value_area` 값을 이용해주세요
- [x] Bar 그래프의 기준값은 `value_bar` 값을 이용해주세요
- [x] 차트의 Y축에 대략적인 수치를 표현해주세요(예시 이미지 참고)

2. 호버 기능 구현

- [x] 특정 데이터 구역에 마우스 호버시 `id, value_area, value_bar` 데이터를 툴팁 형태로 제공해주세요

3. 필터링 기능 구현

- [x] 필터링 기능을 구현해주세요, 필터링은 특정 데이터 구역을 하이라이트 하는 방식으로 구현해주세요
- [x] 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용해주세요
- [x] 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리를 해주세요
- [x] 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해주세요

## 데모영상

![final](https://github.com/SeungrokYoon/time-series-data-chart/assets/44149596/1018e2d9-5f02-4a00-80ba-47bcd22329ae)
