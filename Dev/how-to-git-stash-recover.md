---
title: Git Stash 복구하는 방법
date: "2019-07-23T04:01:00"
template: "post"
draft: false
slug: "/posts/how-to-use-gitignore/"
category: "Git"
tags:
  - "Git"
  - "Stash"
  - "Stash Recover"
description: "삭제한 Stash 복구하는 방법"
---

[##_Image|kage@GLpKL/btqElWLonst/hzQAFJzOIGw3iY6YBrnduK/img.png|alignCenter|data-filename="Git-Icon-1788C.png" data-origin-width="383" data-origin-height="383" data-ke-mobilestyle="widthContent"|||_##]
​

### Git 명령어를 통한 삭제된 Stash 복구

​
▶ 삭제된 Stash List 가져오기
​

```
git fsck --unreachable | grep commit | cut -d ' ' -f3 | xargs git log --merges --no-walk
```

​
▶ 삭제된 Stash 복구시키기
​

```
git update-ref refs/stash < Commit ID > -m "다시 저장할 Stash 이름"
```

​
▶ 복구된 Stash가 보이지 않을 때
​

```
git update-ref refs/stash < Commit ID > --create-reflog -m "다시 저장할 Stash 이름"
```

## ​

​
가끔씩 다른 branch의 작업을 먼저 해줘야 하는 경우가 종종 존재하는데 이때 저는 stash를 사용해서 작업하던 내역들을 저장해 두고 추후에 다시 작업을 진행합니다. 그런데 이러한 작업을 하다가 실수를 할 때가 있는데 그것이 바로 stash를 날려 버렸을 때,
​

```
git stash pop
```

​
**위를 통해서 저장된 stash를 없애면서 파일을 받고 난 이후에 파일이 저장되지 않고 닫힐 때** _(주로 컴퓨터가 갑자기 뻗거나, 수정 내역들 정리를 하다가 잘못 클릭했을 때)_ 일어나는 참사를 저도 몇 번 경험을 해봤는데 이때까지는 코드의 양이 얼마 되지 않거나 금방 작성이 가능하여서 코드를 다시 작성했었습니다.
​
그런데 최근에 이러한 상황이 발생하였을 때 작업했던 양이 상당했고 기간 또한 어느 정도 지나서 전혀 생각이 나지 않아 검색을 통해 찾아보고서 **[Dev.to에 작성된 포스트](https://dev.to/meduzen/recover-a-lost-git-stash-in-two-steps-569?signin=true)**를 통해 삭제된 stash를 복구하는 방법을 찾았고 이를 바탕으로 Stash를 삭제하고 복구하는 작업을 직접 진행해보도록 하겠습니다.
​

### ◆ Stash 생성

​
우선 테스트를 위해서 Stash를 몇 개 만들어 보도록 하겠습니다.
​
[##_Image|kage@9yoU6/btqEjD7QeEF/R1j6BbldQvmTJF0UIxObN1/img.png|alignLeft|data-filename="스크린샷 2020-05-22 오전 11.39.40.png" data-origin-width="386" data-origin-height="111" width="493" height="NaN" data-ke-mobilestyle="widthContent"|||_##]
​

### ◆ Stash 삭제

​
Apply가 아니라 Pop을 통해서 Stash List에서 해당 Stash가 사라지는 것을 확인할 수 있습니다.
​
(삭제하실 때는 Drop을 사용하셔도 무방합니다.)
​
[##_Image|kage@cEVYfT/btqEjDzYDf1/tTj8R70zZtI3jjqNp9Y6N1/img.png|alignLeft|data-origin-width="666" data-origin-height="180" width="707" height="NaN" data-ke-mobilestyle="widthContent"|||_##][##_image|kage@rcflt/btqeknwcqio/o4k2esobnzhldlwtyaaym1/img.png|alignleft|data-filename="스크린샷 2020-05-22 오전 11.45.22.png" data-origin-width="365" data-origin-height="70" width="407" height="nan" data-ke-mobilestyle="widthcontent"|||_##]
​

### ◆ 삭제한 Stash List 불러오기

​
자 그러면 이제 삭제한 Stash를 복구하기 위해서 삭제된 Stash List를 불러와야 하는데요 아래의 명령어를 통해서 불러와 도록 하겠습니다.
​

```
// 삭제된 Stash List 가져오기
git fsck --unreachable | grep commit | cut -d ' ' -f3 | xargs git log --merges --no-walk
```

​
삭제한 Stash가 하나뿐이라서 List를 출력하기 위해서 임의로 Stash를 생성하고 삭제했습니다.
​
[##_Image|kage@lW0b9/btqEjRdE4zN/5mTGm73iypGlvOx2GKuFuK/img.png|alignLeft|data-origin-width="514" data-origin-height="465" data-ke-mobilestyle="widthContent"|||_##]
​

### ◆ Stash List 복구

​
자 그러면 위의 그림을 통해서 삭제한 Stash의 **commit ID** 값을 확인할 수가 있습니다.
​
그러면 해당 ID 값을 가지고 아래의 명령어를 통해서 삭제한 Stash를 복구하겠습니다.
​

```
// 삭제된 Stash 복구 시키기
git update-ref refs/stash f3286a58b3f9f82c3f10bad018f253348bf81b7f -m "스태시 복구 완료"
```

​
[##_Image|kage@bzPAi1/btqEjDUeXy9/W7MreYhg2oQGvFMvAwifdK/img.png|alignCenter|data-origin-width="915" data-origin-height="149" data-ke-mobilestyle="widthContent"|||_##][##_image|kage@belkvy/btqejqve7qb/xbwn1kk3srcrqkqvmmywmk/img.png|alignleft|data-filename="스크린샷 2020-05-22 오후 12.00.26.png" data-origin-width="368" data-origin-height="117" data-ke-mobilestyle="widthcontent"|||_##]
​
이렇게 스태시를 복구할 수 있게 되었습니다.
​
만약에 복구된 스태시가 보이지 않는다면 아래의 명령어를 작성해보시면 스태시가 다시 생성되는 것을 확인할 수 있을 것입니다.
​

### ◆ 복구된 Stash가 보이지 않을 때

​

```
git update-ref refs/stash < Commit ID > --create-reflog -m "다시 저장할 Stash 이름"
```

​

### ※ Reference

​
\- [https://dev.to/meduzen/recover-a-lost-git-stash-in-two-steps-569](https://dev.to/meduzen/recover-a-lost-git-stash-in-two-steps-569)
​
[
​
Recover a lost Git stash in two steps
​
A technique to retrieve lost stashes from the limbos.
​
dev.to
​
​
​
](https://dev.to/meduzen/recover-a-lost-git-stash-in-two-steps-569)
