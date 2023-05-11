# dreamcoding_react

드림코딩 리액트 개념정리 클론코딩 (https://academy.dream-coding.com/courses/react)

---

## 강의 커리큘럼
1. 강의 안내
2. 리액트란? 개념정리!
3. 개발환경 설정
4. 기본 내용들 정리
5. 고급 내용들 (Deep Dive)
6. CSS 라이브러리
7. 배포하기
8. 투두 프로젝트 챌린지
9. 리액트 라우터 (React Router)
10. 리액트 쿼리 (React Query)
11. 유튜브 프로젝트 준비
12. 유튜브 프로젝트 만들기
13. 쇼핑몰 프로젝트 준비
14. 쇼핑몰 프로젝트 만들기
15. 정리 (굿바이)

---

## yarn 이슈 해결

1. .yarn, pnp 생성되지 않는 이슈

   - `yarn -v` : 3.5.1
   - `corepack enable` (node >= 16.10)
   - `yarn set version stable`
   - delete `nodemodules, yarn.lock` files

1. react 파일 변경시 적용되지 않는 이슈 (eslint 이슈)
   - `yarn add -D eslint-config-react-app`
   - `yarn add eslint eslint-config-react-app --dev`
   - make file `yarrnrc.yml`
     ```yml
     packageExtensions:
       react-scripts@*:
         peerDependencies:
           eslint-config-react-app: "*"
     ```
   - `yarn cache clean`
   - `yarn install`
   - `yarn start`

## 포트가 열려 있을 때 kill

- `lsof -i :PORT`
- `kill -9 PID`

## custom snippets

- `command+shift+p` in vscode -> Snippets: Configure User Snippets -> open `global snippets` and paste `global.code-snippets.json`
