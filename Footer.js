const footer=document.querySelector('.footer');

function createFooter(){
    let el=`<div class="footer">
                <div class="site-name">
                    <a href="./index.html">
                        <h2>Fooder<sup>FREE</sup></h2>
                        <h5>INDIAN FOOD</h5>
                    </a>
                </div>
                <div class="footer-links">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="#about-us">About</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Terms of Use</a></li>
                </div>
                <div class="social-links">
                    <div class="facebook"><a href=""><i class="fa-brands fa-facebook"></i></a></div>
                    <div class="insta"><a href=""><i class="fa-brands fa-instagram"></i></a></div>
                    <div class="linkedin"><a href=""><i class="fa-brands fa-linkedin"></i></a></div>
                    <div class="twitter"><a href=""><i class="fa-brands fa-twitter"></i></a></div>
                    <div class="youtube"><a href=""><i class="fa-brands fa-youtube"></i></a></div>
                </div>
            </div>`;
    footer.innerHTML=el;
}
createFooter();