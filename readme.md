# Brendan's Blog
This is the blog. I will post random 

## Using
This blog use `hexo` for the base runtime. The theme was custom built (using React).

1. Clone the repo
2. Install hexo
    - `npm install -g hexo-cli`
3. Install the packages for the repo
    - `npm install`
4. Then run the hexo server
    - `hexo server`
5. Go to port http://localhost:4000// to view

## Configuration
The custom theme (nexo) allows for these custom configuration!

```yaml
# Home page
social_names:
    - GitHub 
    - Twitter
    - Twitch
    - YouTube

#Links to the social names
social_links:
    - https://github.com/ImportProgram
    - https://twitter.com/ImportProgram
    - https://twitch.com/ImportProgram
    - https://www.youtube.com/channel/UCKFqjKcFpKf9vzBlwvsRApA


# The main site footer
site_copyright: Copyright © 2021 Brendan Fuller

# Comment Repository for utterances
utterances_repo: ImportProgram/ImportProgram.github.io
```

## Deploying
For deploying reference to your own GitHub pages [hexo documentation](https://hexo.io/docs/github-pages.html).

## Comments
The comments on this blog are powered by [utteranc.es](https://utteranc.es/). 

### License
Everything, except the content within `source` folder is licensed under:
- [MIT license](http://github.com/ImportProgram/importprogram.github.io/blob/master/LICENSE)