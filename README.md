![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

# Arizona Traffic Maps
Arizona Traffic Maps (AZTM) is an app that allows you to view traffic cameras and events on a custom built google map for the state of Arizona. This project was a 2-day sprint to build a MVP full-stack app.

![image](https://lh3.googleusercontent.com/8vx06nJxucGnL_10P1MaSZkHpWRFNE-LOJ4ZU5JVzSfwCZEsQ21607gtTQQtoKehxOrufXAJNUBiDyLjymsmBOZ9-qv2tTkzs7T-1h9qrVUx9RRVSEj6Kn6kwnoKZY83ANLQPagpMA=w2400)

AZTM's map is populated with orange drop pins that are placed in accordance with the latitude and longitude coordinates of traffic events that are fetched from the ADOT API. Upon clicking one of these drop pins appears an information window displaying the road event along with a snail icon.  Traffic Cameras can be viewed under the cameras tab with a grid layout of some of the traffic cameras you can view throughout the valley. In a future update, this page will be removed and camera data will be added to the map itself populated with camera icons.  

![image](https://lh3.googleusercontent.com/dGpPPGPNsH0PLOZ0HK3GjCxOBQueY1lY8O7FgZyRvJC3aiTpV-mKuTT7uc4MC2oNkHDshYWjxiEpYT9BKQq_HHMA0r4OjFsLkn8hmsIepX2z3mZJk82csFRn1rEDzjh7_sY4VQaXqA=w2400)

![image](https://lh3.googleusercontent.com/u13JWK3EF4aPjr6-i0nDI-toDSg30lwJ1PP26kuFwegQT2LScDveBt0z_4dq0G3l33ar8bVlPzY08ZLg87LXAO2AuT8TA1nia-ovbbHfrvFMXDIDDfsU8TD3e1G9NI1R9KZaN_xtEQ=w2400)

### Future Implementations
To increase latency speeds, the mongodb database will be expanded to support all fetched data from the ADOT API.  Currently the ADOT API response times take around 2000ms to 1700ms and has throttling preventing more than 10 requests every minute. Having the cameras data has proven successful in reducing the response times to 70ms and horizontal scaling will be implemented to support more users.

Plans for the emergency section include modal prompts that will display when new emergency data is available as well as a feed displaying previous emergency alerts.

The google maps component will be refractored to load points within the viewport only. Information windows will include conditional icons depending on the event and camera icons will be added to the maps displaying that cameras feed upon click.


## Getting Started
1. From a terminal, clone from [this](https://github.com/OwenMY/Arizona-Traffic-Maps.git) repo.
```
git clone https://github.com/OwenMY/Arizona-Traffic-Maps.git
```
2. Install dependencies
```
npm install
```

3. Set up config file in `config.js` using `exampleConfig.js` as an example.

4. Start Webpack
```
npm run build
```
5. Start your server
```
npm start
```
