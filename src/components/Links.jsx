import InstagramLogo from "./InstagramLogo.png";

export const Links = () => {
  return (
    <>
        <nav className="listOfLinks">
          <ul>

            <li>
              <a
                className="babylonLinks"
                href="https://babylonmicrofarms.com/"
                target="_blank"
              >
                Babylon Micro-Farms Website
              </a>
            </li>

            <li>
              <a
                className="babylonLinks"
                href="https://babylonmicrofarms.com/the-galleri-by-babylon-micro-farms/"
                target="_blank"
              >
                Galleri Micro-Farm
              </a>
            </li>

            <li>
              <a
                className="babylonLinks"
                href="https://babylonmicrofarms.com/your-impact/"
                target="_blank"
              >
                Sustainability Policy
              </a>
            </li>

            <li>
              <a
                className="babylonLinks"
                href="https://babylonmicrofarms.com/about-babylon/"
                target="_blank"
              >
                About Babylon
              </a>
            </li>

            <li>
              <a
                className="babylonLinks"
                href="https://babylonmicrofarms.com/get-a-quote/"
                target="_blank"
              >
                Get a Quote
              </a>
            </li>
            <a href="https://www.instagram.com/babylonmicrofarms/?hl=en" target="_blank">
              <img
                className="instagramImage"
                src={InstagramLogo}
                alt="Instagram Logo"
              />
            </a>
          </ul>
        </nav>
    </>
  );
};
