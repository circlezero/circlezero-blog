---
title: gitignore 사용 설명서
date: "2019-07-23T04:01:00"
template: "post"
draft: false
slug: "/posts/how-to-use-gitignore/"
category: "Git"
tags:
  - "Git"
  - "gitignore"
description: ".gitignore를 잘 사용하기 위한 방법"
---
#.gitignore 설명

## gitignore에 명시된 파일은 왜 Stage, Commit이 되지 않는가?

**📢 .gitignore에 명시되어 있는 파일들은 Untracked인 상태로 남아있기 때문입니다.**

File의 Status는 아래의 그림과 같이 변합니다.

![File Life Cycle](/media/file-life-cycle.png)
[ 이미지 출처 - [Pro Git](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository) ]

gitignore에 명시되어 있는 파일들은 파일이 추가 되거나, 수정되어도 상태가 변하지 않고 

Untracked로 남아있기 때문에, Stage나, Commit을 할 수가 없게 됩니다.

그래서 저장소에 원하는 파일들만을 올려서 저장소를 원활하게 관리할 수 있게 도와줍니다. 🛀


## gitignore 파일은 Global로 관리하지 않아도 된다

**📢 Directory 📁 마다 .gitignore 파일을 생성해서 관리할 수 있습니다 !!**

보통 .gitignore를 root Directory 📁 에 두고 관리를 하는데 (아닐수도...)

모든 디렉토리에 .gitignore를 파일을 만들어서 설정할 수가 있습니다.

하지만 개인적으로 .gitignore 파일 하나로 프로젝트 파일 관리하는 것을 선호합니다.


## gitignore 사용하기
많이 사용되는 몇가지만 대표적으로 코드를 통해 설명해보겠습니다.
```
# .aa 확장자명을 가진 모든 파일을 무시한다.
*.aa

# .aa를 무시하더라도, test.aa는 무시하지 않는다.
!test.aa

# node_modules를 무시한다.(하위 영역 포함)
node_modules/

# 모든 폴더의 node_modules는 무시한다. ex) a/node_modules/, a/b/c/node_modules
**/node_modules/
```

자세하게 알고싶으신 분들은 [Git Docs](https://git-scm.com/docs/gitignore)에서 *PATTERN FORMAT* 에 해당하는 부분을 읽어보시면 되겠습니다.

## PS
[**gitignore.io**](https://www.gitignore.io/) 개발환경을 세팅하면 gitignore 파일을 만들어주는 사이트입니다.

설명이 부족하거나 잘못된 것이 있으면 바로 수정하도록 하겠습니다.

## Reference
- [GitHub Help](https://help.github.com/en/articles/ignoring-files)
- [Git Docs](https://git-scm.com/docs/gitignore)
- [Pro Git](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)