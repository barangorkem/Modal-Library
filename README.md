# How can I add the package in my project?

yarn add modal-case-lib@latest

npm install modal-case-lib@latest

# Modal package Link

  [Link](https://www.npmjs.com/package/modal-case-lib)

# How can I use the package features  in my project?(usage)

import {StickyButton,Modal} from 'modal-case-lib';

# What are the props of components?

### StickyButton

```js
import {StickyButton} from 'modal-case-lib';

const propTypes = {
    handleClick: () => void;
  className?: string;
  children?: React.ReactNode;
};
```

### Modal

```js
import {Modal} from 'modal-case-lib';

const propTypesForModalRoot = {
    handleClick: () => void;
  className?: string;
  children?: React.ReactNode;
};

const propTypesForModalHeader = {
  children?: React.ReactNode;
  className?: string;
};

const propTypesForModalBody = {
  children?: React.ReactNode;
  className?: string;
};
```



