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

# Hello, Next.js!

But I'm sorry using version 12. I don't know how to use ver.13 of `Next.js` in my application.

That's why I install ver.12.

## Setup

```
npx create-next-app --typescript my-next-app && cd my-next-app && npm install next@12
```

## Component

```tsx
interface Props {
  type: "text" | "email" | "password";
}

const Input = ({ type }: Props) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <input
      type={type}
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
    />
  );
};

export default Input;
```

### Bullshit

**Remember**, I want to be _a reasonable developer_, not ~~the greatest one~~.

| TO DO      |      Descriptions      |
| :--------- | :--------------------: |
| React      | Library for web fe dev |
| Next.js    |        the same        |
| TypeScript |       I Love it!       |
| CSS        |        Oh shit!        |
| Vue        |      I don't know      |
| BackEnd    |     What the F...?     |
