import FontShow from "../containers/fontshow";

export default function Home() {
  return (
    <div className="container">
      <FontShow />
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #fff;
          text-align: center;
          transition: 100ms ease-in background;
          color: #fff;

          @media only screen and (max-width: 480px) {
            font-size: 20px;
          }
        }
      `}</style>
      <style jsx global>
        {`
          html,
          body,
          #__next {
            height: 100%;
          }
          #__next {
            margin: 0 auto;
          }
          h1 {
            text-align: center;
          }
          html {
            width: 100%;
            height: 100%;
          }
          body {
            margin: 0;
            user-select: none;
            width: 100%;
            height: 100%;
            background: #000;
            font-family: "Roboto", sans-serif;
          }
        `}
      </style>
    </div>
  );
}
