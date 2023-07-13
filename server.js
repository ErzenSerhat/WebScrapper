const PORT = 5000
const url ='https://www.erzendigital.com'
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()



axios(url)
    .then(response => {
        try {
            const html = response.data
            const data = cheerio.load(html)

            const news = []

            data('.p12-col', html).each(function(){ // element class name
            const title = data(this).find('.hbBoxText').text()
            const imageUrl = data(this).find('.hbBoxImage').attr('data-src')
            news.push({
                title,imageUrl
                })
            })
            console.log(news)
            }catch (error) {
            console.log(error)
        }
    })

app.listen(PORT, () => console.log('server runing'))
