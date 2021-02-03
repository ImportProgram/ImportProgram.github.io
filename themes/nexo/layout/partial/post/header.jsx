import React from "react";





export default ({ page, url_for, list_tags, theme, min2read, config }) => [
    <div className="post-url">
        <a href={theme.url}>
            <span>{theme.title}</span>
        </a>
    </div>,
    <h1 itemProp="headline" className="post-title">
        <a href={url_for(page.link || page.permalink)} itemProp="url">
            {page.title || "(no title)"}
        </a>
    </h1>,
    <div className="post-meta">
        <span><a href="../../"><strong>{config.title.toUpperCase()}</strong></a> | </span>
        <time itemProp="datePublished" dateTime={page.date.toISOString()}>
            {page.date.format("MMM DD, YYYY")}
        </time>
        <span>
            | 🏷️ {page.tags &&
                page.tags.length > 0 && [
                    <span
                        key={1}
                        dangerouslySetInnerHTML={{
                            __html: list_tags(page.tags, {
                                show_count: 0,
                                style: 'none',
                                class: 'tag',
                                separator: ', '
                            }),
                        }}
                    />,
                ]}
        </span>
        <span className="post-count"> | {min2read(page.content)} minutes read</span>
    </div>,
];
