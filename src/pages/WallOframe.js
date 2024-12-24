import React from 'react';
import "../sass/WallOfFame.scss"

const WallOfFame = () => {
    const works = [
        { title: 'Smile Restoration', link: '/profile/1' },
        { title: 'Cavity Treatment', link: '/profile/2' },
        { title: 'Orthodontics Showcase', link: '/profile/3' },
    ];

    return (
        <section className="wall-of-fame">
            <h2>Wall of Fame</h2>
            <ul>
                {works.map((work, index) => (
                    <li key={index}>
                        <a href={work.link}>{work.title}</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default WallOfFame;
