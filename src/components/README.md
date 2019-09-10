# Components

Following are properties of a component defined by lrat:

1. If basic, move it to a component library (CL), e.g your own [lrct](https://github.com/louisgv/lrct)
2. Should extend basic components in your CL
3. Should standalone. I.e things inside here shouldn't import each other. (see [pages](../pages/README.md))

> Master those 3 and break them when you are ready.

## Handle internal logic

1. useState()
2. useRef()
3. useReducer()

## Handle external logic (Only when you are ready)

1. Let the children passed from a page do it. (see [pages](../pages/README.md))
2. import context
3. redux/overmind - Use a global state management solution.
4. axion/fetch/graphql - Leave it to the backend.