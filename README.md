# Next.js로 마크다운 블로그 만들기 - 원티드 프리온보딩 FE 챌린지 7월

## 1. 최종 구현 화면
### 1-1. Home
![1-next-blog-home](https://github.com/Real-Bird/pre-onboarding-11-next-js/assets/83404864/94129966-a152-40d4-8e8e-34b87eb90bee)

### 1-2. Post
![1-next-blog-post](https://github.com/Real-Bird/pre-onboarding-11-next-js/assets/83404864/faa8b3b8-407b-421e-8ca5-0f5b7b07a5b8)

## 2. Demo

https://main--delicate-hotteok-d21631.netlify.app/

## 3. 구현 요구 사항 목록

- [x] 사용자는 루트 경로의 __posts 폴더에 마크다운 파일(.md)을 작성할 수 있어야 한다

다음과 같은 폴더 구조로 마크다운 파일을 생성했습니다.
```
- _posts/
  - 1.md
  - 2.md
  ...
```
- [x] 해당 파일은 마크다운 본문과 게시물에 대한 meta data를 담을 수 있어야 한다

마크다운 파일마다 `frontmatter`를 작성하여 meta data를 구성했습니다.

```yml
---
no: 01
title: first markdown post
author: Real-Bird
summary: my first markdown post!
tags:
  - markdown
  - blog
  - post
createdAt: 2023.07.09
updatedAt: 2023.07.09
---
```
- [x] 블로그에 작성된 게시물을 렌더링하는 `목록 페이지`와 개별 게시물을 렌더링하는 `상세 페이지`로 나누어 작성한다
    - `/` - 목록 페이지
    - `/[id]` - 상세 페이지

Next.js의 페이지 라우팅을 이용해 목록 페이지는 `index.tsx`에, 상세 페이지는 `[slug].tsx`에 작성했습니다. 파일명으로 `pathname`을 구성했습니다.

- [x] Next.js 12에서 지원하는 Prefetching 메서드를 적절히 사용한다

`getStaticProps`를 이용하여 마크다운 파일을 읽어 왔습니다.

```tsx
export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = readdirSync("_posts").map((file) => {
    const content = readFileSync(`_posts/${file}`, "utf-8");
    const [slug, _] = file.split(".");
    return { ...matter(content).data, slug };
  });
  return {
    props: { posts: blogPosts.reverse() },
  };
};
```

상세 페이지 경로는 `getStaticPaths`에서 처리하였습니다.

```tsx
export const getStaticPaths: GetStaticPaths = async () => {
  const files = readdirSync("_posts").map((file) => {
    const [name, _] = file.split(".");
    return { params: { slug: name } };
  });
  return {
    paths: files,
    fallback: false,
  };
};
```
