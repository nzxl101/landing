interface SocialLink {
    href: string;
    label: string;
    color: string;
    icon?: string;
    imgSrc?: string;
    imgFilter?: string;
    imgStyle?: string;
}

interface Project {
    href: string;
    label: string;
    logoSrc: string;
}

const socialLinks: SocialLink[] = [
    { href: "https://github.com/nzxl101", label: "GitHub", icon: "fa-github", color: "#333" },
    { href: "https://steamcommunity.com/id/nzxl", label: "Steam", icon: "fa-steam", color: "#00ade9" },
    { href: "https://anilist.co/user/kiyomi/", label: "Anilist", imgSrc: "https://files.svgcdn.io/simple-icons/anilist.svg", color: "#02a9ff", imgStyle: "filter: brightness(0); opacity: 0.4" },
    { href: "https://osu.ppy.sh/users/19012828", label: "osu!", imgSrc: "https://osu.ppy.sh/assets/images/osu-lazer-logo-white.62cae952.svg", color: "#ff66aa", imgFilter: "brightness(0)" },
    { href: "https://linkedin.com/in/nzxl", label: "LinkedIn", icon: "fa-linkedin", color: "#0077b5" },
];

const projects: Project[] = [
    { href: "https://dockwatch.wiki", label: "Dockwatch", logoSrc: "https://raw.githubusercontent.com/Notifiarr/images/refs/heads/main/icons/dockwatch.png" },
    { href: "https://github.com/Notifiarr/starrproxy/tree/develop", label: "starrproxy", logoSrc: "https://raw.githubusercontent.com/Notifiarr/starrproxy/develop/root/app/www/public/images/logo-64.png" },
    { href: "https://notifiarr.com", label: "Notifiarr", logoSrc: "https://notifiarr.com/images/logo/notifiarr.png" },
    { href: "https://github.com/nzxl101/homedash-rs", label: "homedash-rs", logoSrc: "https://raw.githubusercontent.com/nzxl101/homedash-rs/main/public/icon.png" },
    { href: "https://github.com/nzxl101/offsetsuggester", label: "offsetsuggester", logoSrc: "https://files.svgcdn.io/simple-icons/github.svg" },
    { href: "https://github.com/nzxl101/nix-config", label: "nix-config", logoSrc: "https://cdn.simpleicons.org/nixos" },
];

export default function App() {
    return (
        <div class="container">
            <img src="/signature.png" alt="NZXL" class="signature" />
            <div class="links">
                {socialLinks.map((link) => (
                    <a
                        href={link.href}
                        target="_blank"
                        aria-label={link.label}
                        class="link-badge"
                        style={`--hover-color: ${link.color}`}
                    >
                        {link.icon ? (
                            <i class={`fab ${link.icon} icon`} />
                        ) : (
                            <img
                                src={link.imgSrc}
                                alt={`${link.label} logo`}
                                class="badge-icon"
                                style={link.imgStyle ?? (link.imgFilter ? `filter: ${link.imgFilter}` : undefined)}
                            />
                        )}
                    </a>
                ))}
            </div>
            <div class="section-divider" />
            <div class="project-grid">
                {projects.map((project) => (
                    <a href={project.href} target="_blank" class="project-badge project-link">
                        {project.label}
                        <img src={project.logoSrc} alt={`${project.label} logo`} class="badge-logo" />
                    </a>
                ))}
            </div>
        </div>
    );
}
