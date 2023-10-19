# React UI Framework 정리 및 실습

## 1. Material UI
  * React UI Framework 중 가장 인기가 많음(?) (2023년 기준)
  * 기본적으로 emotion 프레임워크를 지원함.
  * ```node.js
    // npm install
    npm install @mui/material @emotion/react @emotion/styled                // 기본 Material UI 추가(emotion)
    npm install @mui/material @mui/styled-engine-sc styled-components       // styled-component 추가(2021년도부터 사용 불가)

    // yarn install
    yarn add @material-ui/core

    /* ----------------------------------------- */

    // Material UI에서는 Roboto 폰트를 사용하므로 다음 글꼴을 추가하는 것이 좋다.
    npm install @fontsource/roboto

    // Material UI에는 다양한 Icon 파일들을 제공한다.
    npm install @mui/icons-material
    ```

    ```
    import '@fontsource/roboto/300.css';
    import '@fontsource/roboto/400.css';
    import '@fontsource/roboto/500.css';
    import '@fontsource/roboto/700.css';
    ```
  * mininum-scale=1 추가(index.html)
  
