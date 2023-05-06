# dreamcoding_react
드림코딩 리액트 개념정리 클론코딩 (https://academy.dream-coding.com/courses/react)

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
            eslint-config-react-app: '*'
      ```
   - `yarn cache clean`
   - `yarn install`
   - `yarn start`

## 포트가 열려 있을 때 kill
- `lsof -i :PORT`
- `kill -9 PID`
