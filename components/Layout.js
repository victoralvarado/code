import Navbar from "./Navbar";
const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="p-0">{children}</main>
  </>
);

export default Layout;
