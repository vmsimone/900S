function debug() {
    console.log('working');
}

const HOME_PAGE = `
    <section class="home">
        <ul>
            <li>
                <a href="http://www.blackfistlabel.com/">BLACKFIST</a>  
            </li>     
            <li>
                <a href="http://www.heightened-sense.com/">HEIGHTENED SENSE</a>
            </li>
            <li>
                <a href="https://www.juneprojects.com/">JUNE_PROJECTS</a>
            </li>
        </ul>
    </section>
`;

const ABOUT_PAGE = `
    <section class="about">
        <h2>About</h2>
        <p>
            This space was created as a platform to showcase talented emerging creatives 
            united under one banner.  They will collectively benefit from an omni-channel 
            sales and marketing strategy. In turn the space provides brands with a better 
            opportunity to sell their products and increase exposure
        </p>
        <p>
            Profit financially without compromising artistic integrity
            Improve Productivity and increase efficiency
            Optimize synergy of art, design and commerce
            Nurture Innovation
            Make creativity the ideology
            Utilize worldwide travel to create greater accessibility
            Create an interconnected network for expansive growth
        </p>
    </section>
`;

const CONTACT_PAGE = `
<section class="contact">
    <h2>Contact</h2>
    <ul>
        <li>900[ S ]</li>
        <li>Kyle Simone</li>
        <li>“Director”</li>
    </ul>
    <ul>     
        <li><a href="tel:+1 213-841-5945">+1 213.841.5945</a></li>
        <li>900-S.com</li>
        <li>@900S_fanclub</li>
    </ul>
</section>
`;

function listen(anchorID, page) {
    $(anchorID).on('click', () => {
        $('main').html(page);
    });
}

function readyNavButtons() {
    listen('#home', HOME_PAGE);
    listen('#about', ABOUT_PAGE);
    listen('#contact', CONTACT_PAGE);
}

$(readyNavButtons);