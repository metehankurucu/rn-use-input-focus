<div align="center">
  <h1>
    <br/>
    <br />
    rn-use-input-focus
    <br />
    <br />
  </h1>
  <sup>
    <br />
    <a href="https://www.npmjs.com/package/rn-use-input-focus">
       <img src="https://img.shields.io/npm/v/rn-use-input-focus?color=%231ABC9C" alt="npm package" />
    </a>
    <a href="https://www.npmjs.com/package/rn-use-input-focus">
      <img src="https://img.shields.io/npm/dm/rn-use-input-focus?color=%232ECC71" alt="downloads" />
    </a>
    <a>
      <img src="https://img.shields.io/npm/l/rn-use-input-focus" alt="license" />
    </a>
    <br />
    <br />
    <h3>
    A React Native hook that makes it easier to use focus in inputs without create a lot of refs
    </h3>
  </sup>
  <br />
  <pre>npm i rn-use-input-focus</pre>
</div>

## Usage

```js
import useInputFocus from "rn-use-input-focus";

const App = () => {
  const [inputRefs, focus] = useInputFocus(["email", "password"]);

  return (
    <View>
      <TextInput onSubmitEditing={() => focus("email")} placeholder="Name" />
      <TextInput
        ref={inputRefs.email}
        onSubmitEditing={() => focus("password")}
        placeholder="Email"
      />
      <TextInput ref={inputRefs.password} placeholder="Password" />
    </View>
  );
};
```

[Full example](https://github.com/metehankurucu/rn-use-focus-input/blob/main/examples/index.js)
