const daysOfWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье',]
const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']


const dateUser = new Date('2024-02-20 04:00:00')
let stop = setInterval(counter, 1000)


function zero (num){
    return  num < 10 ? '0' + num : num
}


function counter (){
    const currentDate = new Date()
    const diff = dateUser - currentDate
    const day = Math.floor(diff / 1000 / 60 / 60 / 24)
    const hour = Math.floor(diff / 1000 / 60 / 60) % 24
    const minute = Math.floor(diff / 1000 / 60) % 60
    const seconds = Math.floor(diff / 1000) % 60
 
    document.querySelector('.timer__days').innerText = days(parseInt(zero(day)))
    document.querySelector('.timer__hours').innerText = hours(parseInt(zero(hour)))
    document.querySelector('.timer__minutes').innerText = minutes(parseInt(zero(minute))) 
    document.querySelector('.timer__seconds').innerText = secondss(parseInt(zero(seconds))) 
    // console.log(day, hour, minute, seconds)
}

function days (num) {
    switch(num) {
        case 1:
            return num + ' день '
            break

        case 2: 
            return num + ' дня '
            break

        case 3: 
            return num + ' дня '
            break

        case 4: 
            return num + ' дня '
            break
        
         case 21:
            return num + ' день '
            break

        case 22: 
            return num + ' дня '
            break

        case 23: 
            return num + ' дня '
            break

        case 24: 
            return num + ' дня '
            break

        default: 
            return num  + ' дней '
            break
    }
}

function hours (num) {
    switch(num) {
        case 1:
            return num + ' час '
            break

        case 2: 
            return num + ' часа '
            break

        case 3: 
            return num + ' часа '
            break

        case 4: 
            return num + ' часа '
            break
        
         case 21:
            return num + ' час '
            break

        case 22: 
            return num + ' часа '
            break

        case 23: 
            return num + ' часа '
            break

        case 24: 
            return num + ' часа '
            break

        default: 
            return num  + ' часов '
            break
    }
}

function minutes (num) {
    switch(num) {
        case 1:
            return num + ' минута '
            break

        case 2: 
            return num + ' минуты '
            break

        case 3: 
            return num + ' минуты '
            break

        case 4: 
            return num + ' минуты '
            break
        
         case 21:
            return num + ' минута '
            break

        case 22: 
            return num + ' минуты '
            break

        case 23: 
            return num + ' минуты '
            break

        case 24: 
            return num + ' минуты '
            break

        case 31:
            return num + ' минута '
            break

        case 32: 
            return num + ' минуты '
            break

        case 33: 
            return num + ' минуты '
            break

        case 34: 
            return num + ' минуты '
            break

        case 41:
            return num + ' минута '
            break

        case 42: 
            return num + ' минуты '
            break

        case 43: 
            return num + ' минуты '
            break

        case 44: 
            return num + ' минуты '
            break

        case 51:
            return num + ' минута '
            break

        case 52: 
            return num + ' минуты '
            break

        case 53: 
            return num + ' минуты '
            break

        case 54: 
            return num + ' минуты '
            break

        default: 
            return num  + ' минут '
            break
    }
}

function secondss (num) {
    switch(num) {
        case 1:
            return num + ' секунда '
            break

        case 2: 
            return num + ' секунды '
            break

        case 3: 
            return num + ' секунды '
            break

        case 4: 
            return num + ' секунды '
            break
        
         case 21:
            return num + ' секунда '
            break

        case 22: 
            return num + ' секунды '
            break

        case 23: 
            return num + ' секунды '
            break

        case 24: 
            return num + ' секунды '
            break

        case 31:
            return num + ' секунда '
            break

        case 32: 
            return num + ' секунды '
            break

        case 33: 
            return num + ' секунды '
            break

        case 34: 
            return num + ' секунды '
            break

        case 41:
            return num + ' секунда '
            break

        case 42: 
            return num + ' секунды '
            break

        case 43: 
            return num + ' секунды '
            break

        case 44: 
            return num + ' секунды '
            break

        case 51:
            return num + ' секунда '
            break

        case 52: 
            return num + ' секунды '
            break

        case 53: 
            return num + ' секунды '
            break

        case 54: 
            return num + ' секунды '
            break

        default: 
            return num  + ' секунд '
            break
    }
}

function stopFunc(seconds){
    if (seconds == 0) {
        clearInterval(stop)
    }
}



