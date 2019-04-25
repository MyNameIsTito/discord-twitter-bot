var store = [{
        "title": "Documentation",
        "excerpt":"TODO: Write script that iterates over every doc in docs except itself displaying its content.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/",
        "teaser":null},{
        "title": "Installation",
        "excerpt":"Intro   This project requires Python >=3.6.0. It is untested against Python &gt;=3.7.0.   The required version-locked Python packages are listed in requirements.txt and can be installed from PyPI.org.       Install it now                                                                                                                              Ubuntu                                                    Classic Linux distribution.                                                   Read More                                                                                                                                                           Windows                                                    Everyone has a Windows machine.                                                   Read More                                                                                                                                                           Mac OS                                                    Set it up on Mac OS.                                                   Read More                                                                                                                                                                   Heroku                                                    This set up is the user-friendliest. No knowledge about command line, git, python is required!                                                   Read More                                                                                                                                                                   Docker                                                    Docker is easy to set up for power users.                                                   Read More                                                                                                                                                                   Raspbian                                                    For the tinkerers out there.                                                   Read More                                        Recommendation   Heroku has the easiest installation. However it requires a verified credit card to unlock 1000 free dyno hours per month enabling you hosting the bot 24/7. If you already have a VPS or a machine running 24/7 I recommend not using this option.   For Docker users I’ve released a Docker image which is only 31 MB big. The benefit of Docker is you can deploy it on any machine and it’ll work. Use this if you are already using Docker.   Ubuntu is the go-to OS. Some use it as their personal office OS. Often times you see this as the OS of choice for their VPS.   Everyone has a Windows machine. It’s not recommended since Windows machines usually don’t run 24/7. But if you have the money or want to try this bot out use Windows.   Mac OS: A significant amount of people are using Mac OS so I’m including this.   Honorary mention to the Raspberry Pi Community. This guide also has install introduction for Raspbian users. The Docker images are also available for the arm architecture.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/installation/",
        "teaser":null},{
        "title": "Installing the bot on Ubuntu",
        "excerpt":"   It’s recommended to install the Discord-Twitter-Bot via the command line. If you are running multiple python scripts on your server it is recommended to use virtualenv.   Installing Python3.6 and pip  Ubuntu 18.04 &amp; Ubuntu 16.04   # Install system dependencies sudo apt-get update -y sudo apt-get install git python3.6 python3.6-pip sudo apt-get upgrade -y  # Upgrading pip and installing venv sudo python3.6 -m pip install --upgrade pip   Ubuntu 14.04   # Install system dependencies sudo apt-get update -y sudo apt-get install git python3.6 sudo apt-get upgrade -y  # Install pip and installing venv curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py sudo python3.6 get-pip.py sudo python3.6 -m pip install --upgrade pip   Installing  When running Python scripts it is recommended to use virtualenv. Without virtualenv there is a risk of breaking your Python scripts when you install other Python scripts that depend on different Python packages versions.   Installing the bot with virtualenv  # Installing virtualenv python3.6 -m pip install virtualenv  # Clone the Discord-Twitter-Bot to your home directory git clone https://github.com/nntin/discord-twitter-bot.git ~/discord-twitter-bot -b master cd ~/discord-twitter-bot  # Creating the virtual environment and activating it python3.6 -m pip venv venv . venv/bin/activate  # Install Python dependencies pip install -r requirements.txt  # Exiting the virtual environment deactivate   Installing the bot without virtualenv   # Clone the Discord-Twitter-Bot to your home directory git clone https://github.com/nntin/discord-twitter-bot.git ~/discord-twitter-bot -b master cd ~/discord-twitter-bot  # Install Python dependencies python3.6 -m pip install -r requirements.txt   python3.6 -m is necessary. Else it is possible you are installing the dependencies on another Python version!   Configuring the bot   Watch out! Before you can start the bot you need to configure the bot first. It needs to know which tweets it is supposed to post into your text channel.   Starting the bot   If everything was done correctly you can now start the bot.   Starting the bot with virtualenv   cd ~/discord-twitter-bot . venv/bin/activate python3.6 bot/main.py deactivate   Starting the bot without virtualenv   cd ~/discord-twitter-bot python3.6 bot/main.py   Misc   Every system is a tiny bit different. You might already had Python3.6 or you have multiple Python versions.   In this guide I wrote everywhere python3.6 to ensure you really have the correct version. It is however possible that python and python3 are using the same version as python3.6. Even if that is the case you should not use them interchangeably since it is possible you have the same version installed twice.   # Check your Python version. python -V python3 -V python3.6 -V  # Check the location of your Python version. # This is useful if you want to run your script in systemd which python3.6  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/inst-ubuntu/",
        "teaser":null},{
        "title": "Windows",
        "excerpt":"   Discord-Twitter-Bot runs on all versions of Windows.   Install Python   This project requires Python &gt;=3.6.0. If you don’t have Python or you have the wrong version download Python here.   You can check the version of your python in your command prompt with python -V.   During the setup it is important that you tick Add Python 3.6 to PATH.   Go into the command prompt again and check if the Python version is accessible there with python -V.  Windows is finnicky. Instead of python your variable may be called py, py3 or python3.   In this documentation I will use py -3.6 instead of python, python3, py and py3. This is an acceptable syntax that should always work.   Do not use py -3.6, python, python3, py and py3 interchangeably. Stick to one else things can break.   Downloading the Discord-Twitter-Bot   You have two options here. Either through git or by downloading the zip and unpacking it e.g. with WinRAR.   Git method:  git clone https://github.com/NNTin/discord-twitter-bot.git   Zip method: Click to download, then unpack it.   Configuring the bot   Watch out! Before you can start the bot you need to configure the bot first. It needs to know which tweets it is supposed to post into your text channel.   Installing dependencies and starting the bot   Open the command prompt, navigate to the folder and write  py -36 -m pip install -r requirements.txt py -36 bot/main.py   Misc   There is a reason why hardly most programs are run on Linux servers. The setup is more complicated and it consumes more computational resources and energy.   If this is too hard for you I recommend reading through the other installation methods and doing them instead.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/inst-windows/",
        "teaser":null},{
        "title": "MacOS",
        "excerpt":" Since I do not have a Mac I cannot tell if these install instructions work. I am relying on your feedback to keep this page up to date.   Installation   # Install Homebrew /usr/bin/ruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\" brew update xcode-select --install  # Install dependencies brew install git brew unlink python brew install --ignore-dependencies https://raw.githubusercontent.com/Homebrew/homebrew-core/f2a764ef944b1080be64bd88dca9a1d80130c558/Formula/python.rb  # Clone the Discord Twitter Bot cd desktop git clone https://github.com/nntin/discord-twitter-bot.git discord-twitter-bot -b master  # Install Python dependencies cd discord-twitter-bot python3 -m pip install --upgrade pip python3 -m pip install -r requirements.txt   Configuring the bot   Watch out! Before you can start the bot you need to configure the bot first. It needs to know which tweets it is supposed to post into your text channel.   Running the bot   Open the command prompt, navigate to the folder and write  cd desktop/discord-twitter-bot python3 bot/main.py  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/inst-macos/",
        "teaser":null},{
        "title": "Heroku",
        "excerpt":" This is by far the easiest installation method.   Heroku Deployment      Remember to activate the app. View the logs here.  Use this to initially deploy your discord-twitter-bot.   YT Video to Heroku Deployment     Further Configuration   You can go into the settings tab and edit the environment variables there. Head over to Configuration to see how environment variables work.  After editing the configuration you have to deactivate and activate the app.   Due to the way Heroku works it is not recommended to configure the bot through yaml. If you are interested in maintaining your own separate fork this could be an option.   Misc   The ease of usage has a cost. First you need a verified credit card in order to host the bot 24/7. Although this doesn’t cost anything a lot of people don’t have access to a credit card.  Furthermore Heroku Dynos restart every 24 hours so it is possible it might be missing some tweets during the startup time.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/inst-heroku/",
        "teaser":null},{
        "title": "Docker",
        "excerpt":" With Docker you don’t have to worry about installing dependencies. It’s already installed in form of an image. You just execute the image and get a Docker container.   The requirement of this is you have Docker installed. Since installation steps vary a lot from system to system I won’t provide a guide at this moment.   Docker images   Docker images are available on Docker Hub. The image is available as a multi-architecture image. This means it works on an arm architecture (e.g. Raspberry Pi) as well!   There are 3 maintained tags:     latest: stable release   dev: early release, should be stable   azure: work in progress, may be broken   If you do not specify a tag you are automatically using latest.   Configuring the bot   Configure the bot first. It needs to know which tweets it is supposed to post into your text channel.   Running the bot   Depending on which configuration method you picked you have 2 options. Running the image by supplying an .env file or by mounting your custom config.yml   .env file   docker run --env-file ./.env nntin/discord-twitter-bot   mounting config.yml   docker run -v config.yml:/app/bot/config.yml:ro nntin/discord-twitter-bot   Misc   Out of all the installation methods this is by far my most favorite one. However I do know Docker is not for everyone. This is recommended for people who are already into Docker and maybe if you are struggling with the other installation guides.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/inst-docker/",
        "teaser":null},{
        "title": "Raspbian",
        "excerpt":" Although I no longer use Raspberry Pi for hosting scripts I first started out hosting my scripts on a Raspberry Pi.   Installing Python3.6   # Update system packages sudo apt-get update -y sudo apt-get upgrade -y  # Install dependencies sudo apt install python3.6 sudo apt install python3.6-pip sudo apt install git   Installing the bot   cd ~ git clone https://github.com/nntin/discord-twitter-bot.git discord-twitter-bot -b master cd discord-twitter-bot sudo python3.6 -m pip install --upgrade pip sudo python3.6 -m pip install -r requirements.txt   Configuring the bot   Watch out! Before you can start the bot you need to configure the bot first. It needs to know which tweets it is supposed to post into your text channel.   Starting the bot   After you have set it all up you can run the script with:  cd ~/discord-twitter-bot python3.6 bot/main.py   Misc   If you have a stable internet connection and you are using your RPi e.g. for some home automation why not run this script on it?  It will have barely any effect on the CPU load since it is mostly just doing API calls.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/inst-raspbian/",
        "teaser":null},{
        "title": "Configuration",
        "excerpt":"Intro   There are 2 methods to configure the bot: Editing config.yml or using environment variables.                                                                                                                              YAML                                                    Configure the bot through YAML. This is easy to read but you need to follow the syntax closely!                                                   Read More                                                                                                                                                                   Docker                                                    Not recommended but in some cases you don’t have any other option.                                                   Read More                                        If at any point you run into a problem please check out troubleshooting first.  I’ve poured a lot of time into writing this guide and it feels bad if people ask questions that has been already answered in this guide.  If you’ve read something in this guide and did not understand it please feel free to reach out to me.   Recommendation   The recommended configuration method is by editing the config.yml file. However that option is not always available so you could use the default config.yml file and fill it with environment variables. E.g. when deploying the bot via Heroku.  In all the other scenarios you can edit config.yml.   Getting Twitter API Credentials   TODO.   Explanation of the variables   With the exception of the webhook_urls none of the other variables are mandatory.  You could just define a webhook url and a twitter id and it will post just fine. Or a webhook url and a location box.   IncludeReplyToUser   If you are tracking a twitter user through twitter_ids, twitter_lists or twitter_handles this variable determines if tweets from random twitter user to your followed twitter user should be displayed or not.   IncludeUserReply   If you are tracking a twitter user through twitter_ids, twitter_lists or twitter_handles this variable determines if tweets from your followed twitter user to random twitter user should be displayed or not.   IncludeRetweet   This variable determines whether a retweet should be displayed or not.   custom_message   If you want to supply a custom message you can do it here. This could be used to ping certain roles or users.  Ping yourself on Discord and put the escape letter in front of the mention.  If you for example send I'm pinging \\@Linley#8686 in chat you will see  I'm pinging &lt;@77488778255540224&gt;.  This is the syntax you are going to need to provide in custom_message if you want to ping a user. You can try it with roles as well.   keyword_sets   The tweet will be only be posted when certain keywords are present. You can make it only post when a combination of keywords are present or if a single out of many keywords are present.   You can imagine it if any set of the keyword sets are present it will be posted. A set can contain a single keyword but it could also contain multiple keywords.   blackword_sets   Same as keyword_sets but the opposite scenario. Don’t post the tweet when a blackword set is present.   twitter_ids   This is the recommended way of following certain Twitter users. A twitter handle can change so it’s not reliable. Twitter lists may change unbeknownst to you. You can get the twitter id from here.   Furthermore when you define twitter_handles or twitter_lists they will be converted to twitter_ids which can take a while. To minimize the script boot time you should try configure it through twitter_ids.   twitter_handles   A more user friendly way of defining the value. The twitter handle is part of the link when you visit a Twitter Profile. When you ping a Twitter user you do @twitter_handle. Don’t confuse it with someone’s Twitter name which can be different from the Twitter handle.   twitter_lists   If you are maintaining or know someone who is maintaining a Twitter list you could use that.   Here is an example how it could look like:  https://twitter.com/rokxx/lists/dota-2   track   If you want to get tweets beyond from certain users you can use this. But beware if you use a really common word you will get a lot of tweets which will lead to being rate limited by Discord.  You can make it only retrieve hashtags by prefixing it with a hashtag #.   location   If you want to get location based tweets you can define a location box. Use this website.  Beware. Don’t use a location box that is too big. You will be rate limited by Discord.  Bear in mind that not everyone reveals their geolocation.   webhook_urls   This is what enables the bot to post in your text channel. Discord has written a nice article about it.   Discord Server Example   In order for the following links to work you have to be part of my Discord Server. Join here  It is explained in the next pages how the config.yml or .env file have to look like to reproduce those twitter feeds.   discordapp   #discordapp   Set to follow @discordapp. IncludeRetweet, IncludeUserReply, IncludeReplyToUser is set to True. This was configured through the variable twitter_ids   dota-2, lol, csgo   #dota-2  #lol  #csgo   IncludeRetweet, IncludeUserReply, IncludeReplyToUser is set to False.  This was configured through twitter_lists. The twitter list URLs can be found here.   vietnam   #vietnam   I’ve defined 4 webhooks for this channel. Each webhook represents a city in Vietnam. Those are the cities Saigon, Da Nang, Hue and Hanoi.   For each webhook I provided a location box.   python   #python   This channel posts any tweet that says python on Twitter. If I would have written #python it would explicitly only look for the hashtag. I chose not to since the tweets that were posted were very infrequent.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/configuration/",
        "teaser":null},{
        "title": "YAML Configuration",
        "excerpt":"Location   The yaml file is located at discord-twitter-bot/bot/config.yml. By editing the config.yml file you are configuring your bot.   Quick Intro in how to modify any value in a .yml file   true and false are Booleans. You do not put them in “quotation marks” or ‘single quotes’.  You define a string by putting them in “quotation marks” or ‘single quotes’.  You define a list/array element by using dashes - OR you define a list/array element by putting them in square brackets []. Comma separate multiple.   Be mindful of the dashes and indentation. They are crucial to make your configuration work.   Configuration  Twitter   In a previous page you’ve set up your Twitter App. Copy those keys and fill out the config.yml like this.   Twitter:   access_token: 'XXX-XXX'   access_token_secret: 'XXX'   consumer_key: 'XXX'   consumer_secret: 'XXX'   Config.yml Example   If you are wondering what the variables are doing read this again.  In this example we provide the Twitter credentials and define 2 feeds for your text channel.   At the configuration page I explained how the channels in my Discord servers were configured. Here I’m showing concrete examples how they were configured in config.yml.   discordapp   #discordapp   Discord:   - IncludeReplyToUser: true     IncludeRetweet: true     IncludeUserReply: true     twitter_ids: ['3065618342']     webhook_urls: ['https://discordapp.com/api/webhooks/123456/XXXXXX']   dota-2, lol, csgo   #dota-2  #lol  #csgo   Discord:   - IncludeReplyToUser: false     IncludeRetweet: false     IncludeUserReply: false     twitter_lists:      - 'https://twitter.com/rokxx/lists/dota-2'     webhook_urls: ['https://discordapp.com/api/webhooks/123456/XXXXXX']   - IncludeReplyToUser: false     IncludeRetweet: false     IncludeUserReply: false     twitter_lists:      - 'https://twitter.com/JacobWolf/lists/league-of-legends-eu'      - 'https://twitter.com/JacobWolf/lists/league-of-legends-na'     webhook_urls:      - 'https://discordapp.com/api/webhooks/123456/XXXXXX'   - IncludeReplyToUser: false     IncludeRetweet: false     IncludeUserReply: false     twitter_lists: ['https://twitter.com/JacobWolf/lists/counter-strike-na1', 'https://twitter.com/JacobWolf/lists/counter-strike-eu1']     webhook_urls:      - 'https://discordapp.com/api/webhooks/123456/XXXXXX'   Note: I’m intentionally being inconsistent on the formatting to show the difference between using dashes and square brackets. Do not make the mistake of defining a variable as a string if it was supposed to be a list/array of strings.   vietnam   #vietnam   Discord:  - location: [106.405897,10.526054,106.999159,11.027906]    webhook_urls: ['https://discordapp.com/api/webhooks/123456/XXXXXX']  - location: [105.5531,20.7885,106.1464,21.2653]    webhook_urls: ['https://discordapp.com/api/webhooks/123456/XXXXXX']  - location: [107.372125,16.288804,107.782899,16.649613]    webhook_urls: ['https://discordapp.com/api/webhooks/123456/XXXXXX']  - location: [108.005212,15.887674,108.415986,16.249221]    webhook_urls: ['https://discordapp.com/api/webhooks/123456/XXXXXX']   python   #python   Discord:  - track:     - 'python'    webhook_urls:     - 'https://discordapp.com/api/webhooks/123456/XXXXXX'   All in One   Twitter:   access_token: 'XXX-XXX'   access_token_secret: 'XXX'   consumer_key: 'XXX'   consumer_secret: 'XXX'  Discord:   - IncludeReplyToUser: true     IncludeRetweet: true     IncludeUserReply: true     twitter_ids: ['3065618342']     webhook_urls: ['https://discordapp.com/api/webhooks/123456/XXXXXX']   - IncludeReplyToUser: false     IncludeRetweet: false     IncludeUserReply: false     twitter_lists:      - 'https://twitter.com/rokxx/lists/dota-2'     webhook_urls: ['https://discordapp.com/api/webhooks/123456/XXXXXX']   - IncludeReplyToUser: false     IncludeRetweet: false     IncludeUserReply: false     twitter_lists:      - 'https://twitter.com/JacobWolf/lists/league-of-legends-eu'      - 'https://twitter.com/JacobWolf/lists/league-of-legends-na'     webhook_urls:      - 'https://discordapp.com/api/webhooks/123456/XXXXXX'   - IncludeReplyToUser: false     IncludeRetweet: false     IncludeUserReply: false     twitter_lists: ['https://twitter.com/JacobWolf/lists/counter-strike-na1', 'https://twitter.com/JacobWolf/lists/counter-strike-eu1']     webhook_urls:      - 'https://discordapp.com/api/webhooks/123456/XXXXXX'   - location: [106.405897,10.526054,106.999159,11.027906]     webhook_urls: ['https://discordapp.com/api/webhooks/123456/XXXXXX']   - location: [105.5531,20.7885,106.1464,21.2653]     webhook_urls: ['https://discordapp.com/api/webhooks/123456/XXXXXX']   - location: [107.372125,16.288804,107.782899,16.649613]     webhook_urls: ['https://discordapp.com/api/webhooks/123456/XXXXXX']   - location: [108.005212,15.887674,108.415986,16.249221]     webhook_urls: ['https://discordapp.com/api/webhooks/123456/XXXXXX']   - track:      - 'python'     webhook_urls:      - 'https://discordapp.com/api/webhooks/123456/XXXXXX'   An example using the other fields   Twitter:   access_token: 'XXX-XXX'   access_token_secret: 'XXX'   consumer_key: 'XXX'   consumer_secret: 'XXX'  Discord:   - IncludeReplyToUser: false     IncludeRetweet: false     IncludeUserReply: true     custom_message: 'A new tweet!'     keyword_sets:      - - 'League'    # tweet will be posted if tweet contains all 3 words {League of Legends}, no particular order.        - 'of'        - 'Legends'      - - 'Dota 2'    # tweet will be posted if tweet contains 'Dota 2'. A tweet saying `2day we play Dota` will not be posted.     blackword_sets:      - - 'MOBA'      # tweet will not be posted if it contains 'MOBA'     twitter_ids:      - '123'         # define as many as you want with a dash {-} at the beginning      - '456'     twitter_handles:      - 'discordapp'     twitter_lists:      - 'https://twitter.com/rokxx/lists/dota-2'     track:      - 'python'     location: [106.405897,10.526054,106.999159,11.027906]     webhook_urls:      - 'https://discordapp.com/api/webhooks/123456/XXXX-XXXX'   - track:      - 'python'     webhook_urls:      - 'https://discordapp.com/api/webhooks/123456/XXXXXX'  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/conf-config-yaml/",
        "teaser":null},{
        "title": "Environment Variable",
        "excerpt":"This guide is only relevant for Heroku if you want to do further configuration. As in maintaining multiple different twitter feeds in multiple different text channels.   This guide has not been written yet. In the mean time try host the bot on Linux, Windows, MacOS or Docker and configure the bot through config.yml.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/conf-environment-variable/",
        "teaser":null},{
        "title": "systemd",
        "excerpt":"Intro   Are you wondering how you can keep the bot running after closing the terminal? This page addresses that problem.   You may be already familiar with tmux or screen. And although those allow you to keep your program running they face 2 major problems:  After your VPS restarts your script is no longer running. Furthermore if your script runs into an error, e.g. it lost internet connection, it will stop functioning.   Systemd solves it. It runs in the background, starts up the service even after a server restart and when an error happens you can set it to rerun the script.   This guide is written for Linux users!   Main Body   This part hasn’t been written yet. In the mean time please do your own research. Systemd is widely used so you will find a lot of resources. Developers make use of it very extensively.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/systemd/",
        "teaser":null},{
        "title": "FAQ",
        "excerpt":"Frequently Asked Questions also known as potential Questions and Answers   Q: Why Heroku?  A: Heroku has a lot of bad reputation for being an inferior hosting service. The heroku dynos restart roughly every 24 hours and data are lost. However Heroku can be incredibly user friendly once it is properly set up. No knowledge about git, ssh and python is required. I personally prefer using a VPS but I appreciate Heroku since it is a free hosting solution and it can be very user friendly (but not developer friendly). There are a lot of developers that look down on Heroku but simultaneously most of my users are using Heroku to deploy their bot.   Q: Why add automated testing, automated docker image deployment and Jekyll GitHub Pages for a relatively simple solo project? Isn’t this overkill?  A: Continuous integration/deployment is incredible useful in bigger projects. It cuts down development time. I contributed to other FOSS projects that had CI/CD and I was interested how the flow was actually implemented. Same story with Jekyll. (My second website project after discord-logo)   Q: Why Travis and Azure Pipelines?  I added Travis CI support first. But then I learned about how they were acquired by another company and there was a massive layoff. To futureproof myself I looked for alternatives in case Travis becomes less user friendly and Azure Pipelines seemed like a good choice. I have migrated from Travis to Azure Pipelines but I will keep both around for educational purposes.   Q: How can I support you?  The best way of supporting me is just using the project. I like giving back to the community and what is especially satisfying is to have your work recognized as simple as it may be.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/faq/",
        "teaser":null},{
        "title": "Troubleshooting",
        "excerpt":"TODO: Provide some test for troubleshooting (running tox).  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/troubleshooting/",
        "teaser":null},{
        "title": "Known Issues",
        "excerpt":"Script does not post multiple pictures   This is intended. When multiple pictures are provided the script will only pick a single image. The reason behind this is you can only attach a single image and a single thumbnail in a single embed. The thumbnail is not used in my script.  I could post the picture in multiple messages or multiple embeds but it looks bad. If you want it I can point you in the right direction but I won’t add it to my script.   Script does not post any pictures   This is outside of my control. The tweet on Twitter has a picture. My script retrieves the data through the Twitter API. This is what my bot sees. The image link is not in the json. I don’t know why for some tweets Twitter chooses not to include the picture hyperlink but since they are not providing it through the API I can’t access it thus I can’t post it to Discord.   I can’t get my Twitter application approved   That’s a tough one I cannot easily answer.    There was one guy who had a Twitter account since 2009 and it took him 3 weeks to get his app approved.    Meanwhile when he created a new account and applied for it it got accepted right away. Another guy had his app approved after he confirmed his e-mail.   So my advice is to confirm e-mail and if that doesn’t work create a (throwaway) Twitter account with confirmed e-mail and try again.   How can I keep my bot running after closing the terminal   I’ve dedicated a page regarding that here.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/issues/",
        "teaser":null},{
        "title": "Resources & Credits",
        "excerpt":"Useful links     Twitter API   What’s a webhook?   Discord.py   Docker   Azure Pipelines   Heroku   Minimal Mistakes   Credits  I would like to thank especially.   Twitter Lists    Rokxx    JacobWolf   This website  Jekyll &amp; Minimal Mistakes.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/discord-twitter-bot/docs/resources/",
        "teaser":null},]
