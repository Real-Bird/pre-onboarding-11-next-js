---
no: 02
title: second markdown post
author: Real-Bird
summary: my second markdown post!
tags:
  - markdown
  - blog
  - post
createdAt: 2023.07.10
updatedAt: 2023.07.10
---

# Markdown 문법 테스트

## 제목

- `#`으로 제목의 크기를 정합니다.

```
# 첫 번째 수준 제목 (h1)
## 두 번째 수준 제목 (h2)
### 세 번째 수준 제목 (h3)
#### 네 번째 수준 제목 (h4)
##### 다섯 번째 수준 제목 (h5)
###### 여섯 번째 수준 제목 (h6)
```

**ex**

# 첫 번째 수준 제목 (h1)

## 두 번째 수준 제목 (h2)

### 세 번째 수준 제목 (h3)

#### 네 번째 수준 제목 (h4)

##### 다섯 번째 수준 제목 (h5)

###### 여섯 번째 수준 제목 (h6)

---

## 인용

- `>`으로 인용문을 나타냅니다.

```
> # 1단 인용
>1단 인용 내용
>> ## 2단 인용
>>2단 중첩
>>> ### 3단 중첩
>>>> #### 4단 중첩...
```

**ex**

> # 1단 인용
>
> 1단 인용 내용
>
> > ## 2단 인용
> >
> > 2단 중첩
> >
> > > ### 3단 중첩
> > >
> > > > #### 4단 중첩...

---

## 목록

- `*, -, +` 기호로 목록을 생성합니다.

```
* 별표 목록
- 대시 목록
+ 더하기 목록
```

**ex**

- 별표 목록

* 대시 목록

- 더하기 목록

### 내부 목록

- 목록 아래에 스페이스바를 누르면 내부 목록을 생성합니다.
- 2번 당 단계를 높입니다.

```
- 외부 목록
	- 1단계 내부 목록(스페이스바 2번)
      - 2단계 내부 목록(스페이스바 4번)
        - 3단계 내부 목록(스페이스바 6번)
```

**ex**

- 외부 목록
  - 1단계 내부 목록(스페이스바 2번)
    - 2단계 내부 목록(스페이스바 4번)
      - 3단계 내부 목록(스페이스바 6번)

---

## 코드 블록

### 한 줄 코드 블록

- ` 백틱(``) `으로 감싸 코드 블록을 생성합니다.

```
`code는 백틱으로 감싼다`
```

**ex**
`code는 백틱으로 감싼다`

### 여러 줄 코드 블록

- 백틱 6개로 감싸고, 적용할 언어를 적어 생성합니다.

````
 	```js
    const a = 10,
    b = 10;
    const c = a + b;
    console.log(c); // 20
	```
````

**ex**

- javascript(js)

```js
const a = 10,
  b = 10;
const c = a + b;
console.log(c); // 20
```

- html

```html
<h1>HI</h1>
```

- css

```css
body {
  background-color: black;
}
```

- jsx

```jsx
function Component() {
  return <h1>Hi</h1>;
}
```

- typescript(ts)

```ts
type A = string;

let a: A = "abc";
```

- tsx

```jsx
interface Props {
  children: ReactNode;
}

function Component({ children }: Props) {
  return <h1>{children}</h1>;
}
```

- diff

```diff
function Component({children}:Props) {
-  return <h1>{children}</h1>
+  return <Layout>{children}</Layout>
}
```

- json

```json
{
  "scripts": {
    "dev": "next dev"
  }
}
```

- 선언 가능한 언어는 다음과 같습니다.

| 언어 이름  | 작성 방식  |
| :--------: | :--------: |
|    HTML    |    html    |
|    CSS     |    css     |
| JavaScript | javascript |
|    JSX     |    jsx     |
| TypeScript | typescript |
|    TSX     |    tsx     |
|    Diff    |    diff    |
|    JSON    |    json    |

## 구분선

- 구분선은 `-, *` 3개 이상으로 생성합니다.

```
---
----------------------
- - -
***
**********************
* * *
```

## **ex**

---

---

---

---

---

## 링크

- 링크는 세 가지 방법으로 표현합니다.

```
인라인 링크
[인라인 링크](url)
url 링크
<url>
참조 링크
[참조 링크]:https://url
[참조 링크]
```

**ex**
[인라인 링크](url)
<https://url링크>
[참조 링크]: https://naver.com
[참조 링크]

---

## 강조

- 강조는 **볼드**, _이탤릭_, ~~취소선~~을 사용할 수 있습니다.

```
**볼드**, __볼드__
*이탤릭*, _이탤릭_
~~취소선~~
```

**ex**
**볼드**, **볼드**
_이탤릭_, _이탤릭_
~~취소선~~

---

## 이미지

- 이미지 링크 맨 앞에 `!`를 붙입니다.
- 링크 괄호 안의 `""`를 통해 이미지 설명 첨부가 가능합니다.
  - 마우스 오버 시 확인 가능
- 이미지를 링크 문법으로 감싸 연결도 가능합니다.

```
기본 장미 이미지
![장미 이미지](https://pixabay.com/get/g593731cd57da04008bdfc8e1aeaacd895e8009c038b596d2d64b9c72e0c6bf0f33dbe393e1fb42987d8050f6e01ee078f8377524f4d8a9349508d49c86ce4eb02b6c5de833b4cb812d09f8191bc94bb4_640.jpg)
```

```
설명 장미 이미지
![장미 이미지](https://pixabay.com/get/g593731cd57da04008bdfc8e1aeaacd895e8009c038b596d2d64b9c72e0c6bf0f33dbe393e1fb42987d8050f6e01ee078f8377524f4d8a9349508d49c86ce4eb02b6c5de833b4cb812d09f8191bc94bb4_640.jpg "장미 이미지")
```

```
링크 연결 장미 이미지
[![장미 이미지](https://pixabay.com/get/g593731cd57da04008bdfc8e1aeaacd895e8009c038b596d2d64b9c72e0c6bf0f33dbe393e1fb42987d8050f6e01ee078f8377524f4d8a9349508d49c86ce4eb02b6c5de833b4cb812d09f8191bc94bb4_640.jpg)](https://pixabay.com/ko/photos/%EC%9E%A5%EB%AF%B8-%EA%BD%83-%EC%82%AC%EB%9E%91-%EB%A1%9C%EB%A7%A8%EC%8A%A4-729509/)
```

**ex**
기본 장미 이미지
![장미 이미지](https://pixabay.com/get/g593731cd57da04008bdfc8e1aeaacd895e8009c038b596d2d64b9c72e0c6bf0f33dbe393e1fb42987d8050f6e01ee078f8377524f4d8a9349508d49c86ce4eb02b6c5de833b4cb812d09f8191bc94bb4_640.jpg)
설명 장미 이미지
![장미 이미지](https://pixabay.com/get/g593731cd57da04008bdfc8e1aeaacd895e8009c038b596d2d64b9c72e0c6bf0f33dbe393e1fb42987d8050f6e01ee078f8377524f4d8a9349508d49c86ce4eb02b6c5de833b4cb812d09f8191bc94bb4_640.jpg "장미 이미지")
링크 연결 장미 이미지
[![장미 이미지](https://pixabay.com/get/g593731cd57da04008bdfc8e1aeaacd895e8009c038b596d2d64b9c72e0c6bf0f33dbe393e1fb42987d8050f6e01ee078f8377524f4d8a9349508d49c86ce4eb02b6c5de833b4cb812d09f8191bc94bb4_640.jpg)](https://pixabay.com/ko/photos/%EC%9E%A5%EB%AF%B8-%EA%BD%83-%EC%82%AC%EB%9E%91-%EB%A1%9C%EB%A7%A8%EC%8A%A4-729509/)

---

## 문법 기호 사용

- 문법에 활용되는 기호를 일반 기호로 사용하려면 앞에 `\`를 붙입니다.

```
\*
\_
\()
\{}
\[]
\#
\+
\-
\.
\!
\\
```

**ex** \*
\_
\()
\{}
\[]
\#
\+
\-
\.
\!
\\

---

## 테이블

- 열(columns)은 `|`으로 구분합니다.
- 열의 이름과 내용은 `---`으로 구분합니다.
- 정렬은 `:`으로 구분합니다.

```
|    |왼쪽 정렬 |가운데 정렬|오른쪽 정렬
|----|:----|:----:|----:
|1행|좌1   |  중1  |   우1
|2행|좌2   |  중2  |   우2
|3행|좌3   |  중3  |   우3
```

**ex**

|     | 왼쪽 정렬 | 가운데 정렬 | 오른쪽 정렬 |
| --- | :-------- | :---------: | ----------: |
| 1행 | 좌1       |     중1     |         우1 |
| 2행 | 좌2       |     중2     |         우2 |
| 3행 | 좌3       |     중3     |         우3 |

---

## 체크 박스

- 목록 기호 다음 `[]`를 추가합니다.
- `[]`안에 x를 입력하면 체크된 상태, 공백을 넣으면 체크되지 않은 상태입니다.

```
- [ ] 체크되지 않은 박스
- [x] 체크된 박스
```

- [ ] 체크되지 않은 박스
- [x] 체크된 박스
