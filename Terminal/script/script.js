const Config = {
    name: "cialu",
    scale: 1,
    Links: [
        [
            "resources",
            [
                ["bitly", "https://bitly.com/"],
                ["github", "https://github.com/"],
                ["pexels", "https://www.pexels.com/"],
                ["protonmail", "https://mail.protonmail.com/inbox"]
            ]
        ],
        [
            "shopping",
            [
                ["amazon", "https://amzn.to/2puHQNz"],
                ["drop", "https://drop.com/"],
                ["ebay", "http://www.ebay.it/"]
            ]
        ],
        [
            "social",
            [
                ["4chan", "https://4chan.org"],
                ["reddit", "https://reddit.com"],
                ["youtube", "https://youtube.com"]
            ]
        ],
        [
            "trading",
            [
                ["finance", "https://finance.yahoo.com/"],
                ["futures", "https://www.investing.com/indices/indices-futures"],
                ["markets", "https://www.marketwatch.com/"],
                ["news", "https://www.cnbc.com/?region=usa"],
                ["stocks", "https://www.tradingview.com/"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
