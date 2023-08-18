import { Outlet } from 'react-router-dom';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';

function RootLayout() {
  return (
    <>
      {/* <div className="overlay"></div> */}
      <HeaderBar />
      <main className="p-5">
        <Outlet />
      </main>
      <FooterBar />
    </>
  );
}

export default RootLayout;
