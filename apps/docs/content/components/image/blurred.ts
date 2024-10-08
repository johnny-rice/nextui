const App = `import {Image} from "@nextui-org/react";

export default function App() {
  return (
    <Image
      isBlurred
      width={240}
      src="https://nextui.org/images/album-cover.png"
      alt="NextUI Album Cover"
      className="m-5"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
