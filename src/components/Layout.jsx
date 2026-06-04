import Navbar from './Navbar';
import Footer from './Footer';
import AnnouncementBanner from './AnnouncementBanner';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AnnouncementBanner />
            <Navbar />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
