import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ menuDisplay, menuDisplayHandler, children }) => {
  return (
    <>
      <Header
        menuDisplay={menuDisplay}
        menuDisplayHandler={menuDisplayHandler}
      />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
