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
                <div class="scanlines"></div>
                <div class="corner top-left"></div>
                <div class="corner top-right"></div>
                <div class="corner bottom-left"></div>
                <div class="corner bottom-right"></div>
                <div class="card-content">
                    <video class="ascii-logo" src="/logo.mp4" autoplay loop muted playsinline></video>
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
                        <a href="https://linkedin.com/in/nzxl" target="_blank" aria-label="LinkedIn profile" class="project-badge link-badge">
                            <i class="fab fa-linkedin icon"></i>
                        </a>
                    </div>
                    <div class="notifiarr-section">
                        <a href="https://dockwatch.wiki" target="_blank" class="project-badge project-link">
                            Dockwatch <img src="https://raw.githubusercontent.com/Notifiarr/images/refs/heads/main/icons/dockwatch.png" alt="Dockwatch logo" class="badge-logo">
                        </a>
                        <a href="https://github.com/Notifiarr/starrproxy/tree/develop" target="_blank" class="project-badge project-link">
                            starrproxy <img src="https://raw.githubusercontent.com/Notifiarr/starrproxy/develop/root/app/www/public/images/logo-64.png" alt="starrproxy logo" class="badge-logo">
                        </a>
                        <a href="https://notifiarr.com" target="_blank" class="project-badge project-link">
                            Notifiarr <img src="https://notifiarr.com/images/logo/notifiarr.png" alt="Notifiarr logo" class="badge-logo">
                        </a>
                    </div>
                    <div class="notifiarr-section" style="border-top: none; margin-top: 5px; padding-top: 5px;">
                        <a href="https://github.com/nzxl101/homedash-rs" target="_blank" class="project-badge project-link">
                            homedash-rs <img src="https://raw.githubusercontent.com/nzxl101/homedash-rs/main/public/icon.png" alt="homedash-rs logo" class="badge-logo">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
