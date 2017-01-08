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
