export default class extends React.Component {
  render() {
    return (
      <div>
        <div id="container">
          <h1>Curso de Next.js by Platzi</h1>
          <img id="Nextjs-logo" src="/static/nextjs-logo.png" alt="Next.js" />
          <p>
            The React Framework for PWAs, Statics Websites, the Enterprise,
            <br />
            Electron, Productions,the Mobil Web,
            <br /> the Desktop,etc
          </p>
        </div>
        <style jsx>{`
          :global(p, h1) {
          }
          :global(body) {
            margin: 0;
          }
          #container {
            font-family: "Avenir", Helvetica, Arial, sans-serif;
            display: flex;
            flex-direction: column;
            height: 100%;
            align-items: center;
            justify-content: space-around;
          }
          img {
            max-width: 15%;
          }
          h1 {
            font-size: 3.5em;
            color: #14bdeb;
          }
          p {
            text-align: center;
            font-size: 1.5em;
          }
        `}</style>
        <style jsx global>
          {`
            body {
              background: #2c302e;
              color: white;
            }
          `}
        </style>
      </div>
    );
  }
}
