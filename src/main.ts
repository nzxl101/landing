import "./style.css";

const loadFontAwesome = () => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
    link.integrity = "sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==";
    link.crossOrigin = "anonymous";
    link.referrerPolicy = "no-referrer";
    document.head.appendChild(link);
};

loadFontAwesome();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div class="container">
        <div class="card-wrapper">
            <div class="card">
                <div class="card-content">
                    <img src="/ascii.png" alt="nzxl" class="header-image">
                    <p>Core contributor to the <a href="https://dockwatch.wiki" target="_blank" class="project-badge dockwatch-badge">
                        Dockwatch <img src="https://dockwatch.wiki/assets/logo.png" alt="Dockwatch logo" class="badge-logo">
                    </a> project.</p>
                    <div class="links">
                        <a href="https://github.com/nzxl101" target="_blank" aria-label="GitHub profile" class="project-badge link-badge">
                            <i class="fab fa-github icon"></i>
                        </a>
                        <a href="https://steamcommunity.com/id/nzxl" target="_blank" aria-label="Steam profile" class="project-badge link-badge">
                            <i class="fab fa-steam icon"></i>
                        </a>
                        <a href="https://anilist.co/user/kiyomi/" target="_blank" aria-label="Anilist profile" class="project-badge link-badge">
                            <img src="https://anilist.co/img/icons/icon.svg" alt="Anilist logo" class="icon badge-icon">
                        </a>
                        <a href="https://osu.ppy.sh/users/19012828" target="_blank" aria-label="osu! profile" class="project-badge link-badge">
                            <img src="https://osu.ppy.sh/assets/images/osu-lazer-logo-white.62cae952.svg" alt="osu! logo" class="icon badge-icon">
                        </a>
                    </div>
                    <div class="notifiarr-section">
                        <p>This domain is part of
                            <a href="https://notifiarr.com" target="_blank" class="project-badge notifiarr-badge">
                                Notifiarr <img src="https://notifiarr.com/images/logo/notifiarr.png" alt="Notifiarr logo" class="badge-logo">
                            </a>
                        services.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
