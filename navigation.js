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
        <p>
            THIS SPACE WAS CREATED AS A PLATFORM TO SHOWCASE TALENTED EMERGING CREATIVES 
            UNITED UNDER ONE BANNER.  THEY WILL COLLECTIVELY BENEFIT FROM AN OMNI-CHANNEL 
            SALES AND MARKETING STRATEGY. IN TURN THE SPACE PROVIDES BRANDS WITH A BETTER 
            OPPORTUNITY TO SELL THEIR PRODUCTS AND INCREASE EXPOSURE
        </p>
        <!-- <p>
            PROFIT FINANCIALLY WITHOUT COMPROMISING ARTISTIC INTEGRITY
            IMPROVE PRODUCTIVITY AND INCREASE EFFICIENCY
            OPTIMIZE SYNERGY OF ART, DESIGN AND COMMERCE
            NURTURE INNOVATION
            MAKE CREATIVITY THE IDEOLOGY
            UTILIZE WORLDWIDE TRAVEL TO CREATE GREATER ACCESSIBILITY
            CREATE AN INTERCONNECTED NETWORK FOR EXPANSIVE GROWTH -->
        </p>
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
}

$(readyNavButtons);