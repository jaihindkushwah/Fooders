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
                    <li><a href="./index.html#about-us">About</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Terms of Use</a></li>
                </div>
                <div class="social-links">
                    <div class="facebook"><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a></div>
                    <div class="insta"><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a></div>
                    <div class="linkedin"><a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a></div>
                    <div class="twitter"><a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a></div>
                    <div class="youtube"><a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a></div>
                </div>
            </div>`;
    footer.innerHTML=el;
}
createFooter();