Open Active Voting

Simple ballot based voting system.

Here is a live demo:
https://ktest.betrireykjavik.is/

Setup guide:
https://docs.google.com/document/d/1M5mb-j_QaOPoB4twPe4lvXRrb1k0TmLKZxBCV5gdWuM

You now need OAV Keys & Counting app to use Open Active Voting
https://github.com/rbjarnason/oav-keys-and-counting

OAV Keys & Counting App setup guide:
https://docs.google.com/document/d/1llb6Li4KAs7pjiQEtaZnDGauBGdiplORe_eXQg1vKZw/

Install Ubuntu dependencies
````bash
sudo apt-get -yqq install curl git build-essential libxslt-dev libxml2-dev libmysqlclient-dev mysql-server
````

Install Ruby 2.0
````bash
http://cache.ruby-lang.org/pub/ruby/2.1/ruby-2.1.5.tar.gz
tar -xvzf ruby-2.1.5.tar.gz
cd ruby...
make
sudo make install
````

Install bundler and dependencies
````bash
gem install bundler
cd open-active-voting
bundle install
````

Setup the database (edit config file)
````bash
cd config
vi database.yml
# Edit database.yml to point to your MySQL server
cd ..
rake db:create
rake db:schema:load
rake db:seed
````

Running the test server
````bash
rails server -e test
````

In a new terminal Running the tests
````bash
cd open-active-voting
bundle exec rake test:integration
````

Browsing the test system

Open http://localhost:3000/ in your browser
