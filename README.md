![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

# Arizona Traffic Maps
Arizona Traffic Maps (AZTM) is an app that allows you to view traffic cameras and events on a custom built google map for the state of Arizona. This project was a 2 day sprint to build a MVP full-stack app.

![image](https://lh3.googleusercontent.com/8vx06nJxucGnL_10P1MaSZkHpWRFNE-LOJ4ZU5JVzSfwCZEsQ21607gtTQQtoKehxOrufXAJNUBiDyLjymsmBOZ9-qv2tTkzs7T-1h9qrVUx9RRVSEj6Kn6kwnoKZY83ANLQPagpMA=w2400)

AZTM's map is populated with orange drop pins that are placed in accordance with the latitude and longitude coordinates of traffic events that are fetched from the ADOT API. Upon clicking one of these drop pins appears an information window displaying the road event along with a snail icon.  Traffic Cameras can be viewed under the cameras tab with a grid layout of some of the traffic cameras you can view throughout the valley. In a future update, this page will be removed and camera data will be added to the map itself populated with camera icons.  

![image](https://lh3.googleusercontent.com/kXlnLGIzOm8TuesDOyYgzxBpsDo_2IeFC5uEgsB1RrM-whzq9tsKtB4Qc5KLeZ9XN6t-bsDDaUKImvDfXMURNVwACJrYHDwC5uTkmNJ6LIyscNuazFkhwSUzWfAGRjVCJS-cIv8S9w=w2400)

 The emergency section is not yet implemented will be added in a future update.

To increase load speeds, the mongodb database will be expanded to support all fetched data from ADOT API.  Currently the ADOT API response times take around 2000ms to 1700ms.  ADOT's API does not support pagination

### Getting Started
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
