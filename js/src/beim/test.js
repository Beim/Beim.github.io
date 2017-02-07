console.log('HELO from next/source/js/src/beim/test.js')

const printable = () => {
    let header = document.getElementById('header')
    let postHeader = document.getElementsByClassName('post-header')[0]
    let postFooter = document.getElementsByClassName('post-footer')[0]
    let shang = document.getElementById('rewardButton')
    let comments = document.getElementById('comments')
    let footer = document.getElementById('footer')

    for (let item of [header, postHeader, postFooter, shang, comments, footer]) {
        item.className += ' go-away'
    }
}

const show_visitors_today = (records) => {
    let now = new Date()
    let start_of_today = new Date()
    start_of_today.setMilliseconds(0)
    start_of_today.setSeconds(0)
    start_of_today.setMinutes(0)
    start_of_today.setHours(0)
    let is_today = (Dtime) => (Dtime <= now) && (Dtime >= start_of_today)
    visitors = records.filter((value) => is_today(new Date(value.date)))
    // console.log(visitors)
    let ips = {}
    let count = 0
    for (let item of visitors) {
        if (!ips[item.ip]) {
            ips[item.ip] = true
            count++
        }
    }
    console.log(`今日访客: ${count}`)

    na = document.getElementsByClassName('site-state motion-element')
    if (!na[0]) return;
    else na = na[0]
    na.innerHTML += `
        <div class="site-state-item site-state-visitors">
            <a href="http://beiming.life:3000">
              <span class="site-state-item-count">${count}</span>
              <span class="site-state-item-name">visitors</span>
            </a>
        </div>
    `
    
}

const record_me = () => {
    let xhr = new XMLHttpRequest
    xhr.open('GET', 'http://beiming.life:3000')
    xhr.onload = function (e) {
        if (this.status == 200) {
            let res = JSON.parse(this.response)
            show_visitors_today(res)
            // console.log(res)
        }
    }
    xhr.send()
}
record_me()

/*
let xhr = new XMLHttpRequest()
xhr.responstType = 'text'
xhr.open('GET', 'http://beim.site/url?-t;;100')

xhr.onload = (e) => {
    if (this.status == 200) {
        console.log(this.responseText)
    } else {
        console.log('nononono')
    }
}
xhr.send()
*/
