# WSIL DSA Chapter Website

[Deployed Site](https://wsil.dsachapters.org)

[Staging Site](https://wsildsa-staging.netlify.app)

## Development

### Setup
The following was tested on Ubuntu LTS.  If you're using a different distro, you're on your own.

#### Install Packages
```bash
sudo apt install ruby-dev git build-essential zlib1g-dev
```

#### Setup Environment Variables
```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

#### Install gems
```bash
gem install jekyll bundler github-pages
```

#### Clone Repo to a directory of your choice
```bash
git clone https://github.com/wsildsa/wsildsa.github.io.git
```

#### Install more gems
```bash
cd wsildsa.github.io/
bundle install
```

### Host Locally (from repo root directory)
```bash
bundle exec jekyll serve --livereload
```

## TODO
- [x] Add WSIL logo
- [x] Remove Language Selector
- [x] Figure out news/posts
- [x] Staging Branch
- [x] Add WSIL background logo
- [ ] Add frontpage image
- [x] Add image of coverage map for the chapter
- [x] change chapter map embed to static image (or fix scaling on mobile)
- [ ] add public facing email address as contact info
- [ ] add fake mailing list signup that just takes you to dsausa.org/join
- [x] create bsky acocunt and add link in socials section
- [x] add post under news for meet your allies event
- [ ] create chapter signal account and add link in socials section
- [x] fix calendar embed scaling on mobile
- [x] Calender Subscription Tutorial
- [ ] Re-implement loadCalendar javascript function for Google Calendar
- [ ] Fix jekyll-webp on github-pages deployment (Github-Pages uses Jekyll v4 but jekyll-webp requires v3)

## Acknowledgments
Thanks to our comrades at Chicago DSA for the [Haymarket theme](https://github.com/ChicagoDSA/haymarket)
