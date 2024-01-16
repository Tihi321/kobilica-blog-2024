import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";
import { getTheme, toggleTheme } from "../../utils/theme";

const Button = styled("button")`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
`;

const MobileButton = styled("button")`
  background: none;
  padding: 2px;
  border: 2px solid var(--primary);
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ThemeSwitch = styled("button")`
  background: var(--primary);
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  color: var(--focus);
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  flex: 1;
`;

const MenuSvg = styled("svg")`
  width: 24px;
  path {
    fill: var(--primary);
  }
`;

const MobileSvg = styled("svg")`
  fill: none;
  stroke: var(--primary);
`;

const FixedContainer = styled("div")`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--focus);
  color: var(--primary);

  a {
    color: var(--primary);
  }
`;

const MenuContent = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Title = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 14px;
`;

const HeaderLinks = styled("div")`
  margin: 10px 0;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Menu = () => {
  const [showMenu, setShowMenu] = createSignal<boolean>(false);

  return (
    <>
      <Button onClick={() => setShowMenu(true)} role="button" title="open menu">
        <MenuSvg
          class="cog-icon"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="cog-icon-path"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 0a1 1 0 0 0-1 1v5.458a13.4 13.4 0 0 0-2.12.764L9.1 3.444a1 1 0 0 0-1.414 0L3.444 7.686a1 1 0 0 0 0 1.415l3.468 3.468A13.439 13.439 0 0 0 5.768 15H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4.458c.262.979.631 1.913 1.094 2.79L3.444 28.9a1 1 0 0 0 0 1.414l4.242 4.242a1 1 0 0 0 1.415 0l3.108-3.108c.878.463 1.812.832 2.791 1.094V37a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.768a13.436 13.436 0 0 0 2.43-1.145l3.47 3.47a1 1 0 0 0 1.414 0l4.242-4.243a1 1 0 0 0 0-1.415l-3.778-3.778c.311-.679.568-1.387.764-2.121H37a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-5.768a13.41 13.41 0 0 0-.784-1.79l4.108-4.11a1 1 0 0 0 0-1.414l-4.242-4.242a1 1 0 0 0-1.415 0l-4.108 4.108A13.427 13.427 0 0 0 23 6.768V1a1 1 0 0 0-1-1h-6Zm3 28a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            fill="#fff"
          ></path>
        </MenuSvg>
      </Button>
      {showMenu() && (
        <FixedContainer>
          <MenuContent>
            <Title>
              <ThemeSwitch onClick={toggleTheme}>{getTheme()}</ThemeSwitch>
              <MobileButton onClick={() => setShowMenu(false)} role="button" title="close menu">
                <MobileSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </MobileSvg>
              </MobileButton>
            </Title>
            <HeaderLinks>
              <a href="/about">About</a>
              <a href="https://puzzles.tihomir-selak.from.hr">Puzzles</a>
            </HeaderLinks>
          </MenuContent>
        </FixedContainer>
      )}
    </>
  );
};
