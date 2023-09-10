import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";

const Layout = ({ menuDisplay, setMenuDisplay, children }) => {
  return (
    <>
      <Header menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} />
      <Aside
        className={menuDisplay ? "aside-open" : "aside-closed"}
        menuDisplay={menuDisplay}
        setMenuDisplay={setMenuDisplay}
      />

      {children}
      <Footer />
    </>
  );
};
export default Layout;
