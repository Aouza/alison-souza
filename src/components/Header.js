import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ImageLogo from "assets/images/logo.png";
import { menuItems } from "services/api";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import Menu from "components/Menu/Menu";
import { Container, Wrapper, Logo } from "styles/components/Header";
import { MenuContext } from "context/Context";
import { gsap, TimelineMax, Power3, TweenMax, Expo } from "gsap";

const Header = forwardRef((props, ref) => {
  const { openMenu, setOpenMenu } = useContext(MenuContext);
  const [isMobile, setIsMobile] = useState(false);

  let openRef = useRef();
  let buttonMenuRef = useRef();

  useEffect(() => {
    const changeMedia = () => {
      const { matches } = window.matchMedia("(max-width: 52rem)");
      setIsMobile(matches);
    };

    changeMedia();

    window.addEventListener("resize", changeMedia);

    return () => {
      window.removeEventListener("resize", changeMedia);
    };
  }, []);

  useEffect(() => {
    const open = openRef;
    const firstDiv = openRef.firstElementChild;
    const iconeButton = buttonMenuRef;

    openRef.current = gsap.timeline({ paused: true });
    buttonMenuRef.current = gsap.timeline({ paused: true });

    openRef.current.fromTo(
      [open, firstDiv],
      {
        duration: 0,
        x: "100%",
      },
      {
        duration: 0.7,
        x: "0%",
        ease: Power3.easeInOut,
        stagger: {
          amount: 0.1,
        },
      }
    );

    buttonMenuRef.current.fromTo(
      iconeButton,
      {
        background: "transparent",
        delay: 0.4,
      },
      {
        background: "#ffffff",
        delay: 0.3,
        ease: Expo.easeInOut,
      }
    );
  }, []);

  useEffect(() => {
    openMenu ? openRef.current.play() : openRef.current.reverse();
    openMenu ? buttonMenuRef.current.play() : buttonMenuRef.current.reverse();
  }, [openMenu]);

  return (
    <Container ref={ref} {...props}>
      <Wrapper isMobile={isMobile}>
        <Link href="/">
          <a>
            <Logo src={ImageLogo} alt="Alison Souza" />
          </a>
        </Link>
        <Menu isMobile={isMobile} />

        <button
          ref={(el) => (buttonMenuRef = el)}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <MdClose size={22} /> : <GiHamburgerMenu size={22} />}
        </button>
      </Wrapper>

      <article ref={(el) => (openRef = el)}>
        <div></div>

        <div></div>
        <ul>
          {menuItems.map(({ title }) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </article>
    </Container>
  );
});

export default Header;
