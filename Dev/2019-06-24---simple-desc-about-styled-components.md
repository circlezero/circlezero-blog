---
title: Styled Components 사용법
date: "2019-06-24T17:48:00"
template: "post"
draft: false
slug: "/posts/simple-desc-about-styled-components/"
category: "Web Development"
tags:
  - "styled-components"
  - "Web Development"
description: "Styled Components 간단 사용 설명"
---

# Styled Components 사용법

![Styled Components Logo](/img/styled-components.png)

우선 당연한 이야기이지만 styled-components에 관해서 자세하게 알고 싶으시다면 
홈페이지인 https://www.styled-components.com/docs 에서 찾으실수 있으실 겁니다.

우선 styled-components가 어떻게 사용되는지 먼저 간단한 코드부터 보겠습니다.

## CODE

```javascript
import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const Text = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Title = styled(Text)`
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.bgColor ? "ivory" : "black")};
  }
`;

function App() {
  return (
    <>
      <GlobalStyle bgColor/>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Title>Hello World!</Title>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
```

실행화면은 아래와 같구요

![Excute App Capture](/img/styled-components-app.png)


이제부터 간단히 하나씩 보도록 하겠습니다.

### Component

```javascript
const Text = styled.h1`
  font-size: 1.5em;
  text-align: center;
`
```

styled.TagName 과 같이 styled뒤에 HTML Tag의 이름을 붙여서 컴포넌트를 생성할 수 있습니다. 
위의 태그는 h1태그를 가진 컴포넌트를 만들었네요

### Extend

```javascript
const Title = styled(Text)`
  color: palevioletred;
`;
```

위의 코드와 같이 사용하시면 Extend가 가능합니다.

### Prop & Global

```javascript
const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`
```

props를 통해서 컴포넌트의 css코드를 관리할 수 있습니다. 또한 Global로 css코드를 주기 위해서는 *createGlobalStyle*을 통해서 컴포넌트를 생성하고 렌더안에 넣어주게 된다면 css가 적용됩니다. 참고로 createGlobalStyle은 웹에서만 됩니다. 



## ETC
코드들을 보시면 아시겠지만 JS 파일 안에 CSS의 내용을 담고 있습니다. 그리고 Template Literal  \` \`안에 CSS 코드를 넣는데 그 이유에 관해서는 https://mxstbr.blog/2016/11/styled-components-magic-explained/ 여기를 찾아보시면 이유가 나와있습니다 간단 설명에 관한 포스트이므로 이것에 관해서는 궁금하신 분만 읽어보시면 되겠습니다.