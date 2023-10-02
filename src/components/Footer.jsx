export default function Footer() {
    return (
        <div className="flex footer">
            <div className="footer-top">
                <h2 className="footer-heading">Newsletter</h2>
                <form>
                    <input type="text" className="footer-input" placeholder="your@email.com" />
                    <button className="footer-btn">Subscribe</button>
                </form>
            </div>
            <div className="footer-bottom">
                <div className="footer-link-cont flex">
                    <a href='#' className="footer-link">About</a>
                    <a href='#' className="footer-link">Store</a>
                    <a href='#' className="footer-link">FAQs</a>
                    <a href='#' className="footer-link">News</a>
                    <a href='#' className="footer-link">Careers</a>
                    <a href='#' className="footer-link">Contact us</a>
                </div>

                <h3 className="footer-note">Design   by <a href="https://github.com/Monu7671" target="_blank">Mohan</a></h3>

            </div>
        </div>
    )
}