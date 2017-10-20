
let lightCalculator = (function () {

    let TAX = 0.1
    let VAT = 0.2
    let currency = 'EUR'
    let drive = false
    let EUR_TO_USD = 1.177
    let EXCISE = {
        'EUR': {
            1100: 0.063,
            1600: 0.102,
            3000: 0.276
        },
        'USD': {
            1100: (0.063*EUR_TO_USD).toFixed(3),
            1600: (0.102*EUR_TO_USD).toFixed(3),
            3000: (0.276*EUR_TO_USD).toFixed(3)
        },
    }

    function getPension(){

        return PENSION_FUND
    }

    getExcise = () => {
        return {
            cost:'',
            value:''
        }
    }

    function getPriceList(price){

        price = parseInt(price)
        let excise = getExcise()
        let pension = getPension()
        let tax = parseInt(price * TAX)
        let vat = parseInt(VAT * (price + tax + excise.value))
        let rastamozhka = parseInt(vat + tax + excise.value)
        let fullPrice = price + rastamozhka


        let priceList = {
            fullPrice: fullPrice,
            VAT: {
                cost: (VAT * 100) + '%',
                value: vat
            },
            TAX: {
                cost: (TAX * 100) + '%',
                value: tax
            },
            PENSION: {

                cost: (getPension() * 100) + '%',
                value:pension
            },
            EXCISE: {
                cost:  excise.cost,
                value: excise.value
            },
            RASTAMOZHKA: rastamozhka
        }

        return priceList
    }

    function getCurrencyIcon(){

        if(currency === 'USD') return '$'
        else return '€'
    }

    render = (priceList) => {

        let html = ''

        html += getPriceRow('Цена с растаможкой', '', priceList['fullPrice'])
        html += getPriceRow('НДС',priceList['VAT'].cost, priceList['VAT'].value)
        html += getPriceRow('Пошлина', priceList['TAX'].cost, priceList['TAX'].value)
        html += getPriceRow('Акциз', String(priceList['EXCISE'].cost) , priceList['EXCISE'].value)

        html += getPriceRow('Итого растарможка', '', priceList['RASTAMOZHKA'])
        html += getPriceRow('Дополнительные расходы', '', '', false)
        html += getPriceRow('Пенсионный фонд', priceList['PENSION'].cost, priceList['PENSION'].value)

        $(checkEl).html(html)
    }

    function getPriceRow(name, cost, val, setIcon = true){

        let str = ''
        let curIcon = ''
        if (setIcon) curIcon = getCurrencyIcon()

        str += '<div class="col-xs-6">' + name + '</div>'
        str += '<div class="col-xs-4">' + cost + '</div>'
        str += '<div class="col-xs-2">' + val + curIcon + '</div>'
        str += '<div class="col-xs-12"><hr></div>'

        return str
    }

    function setDrive(driveAmount){

        drive = driveAmount * 1000
    }

    function setCurrency(newCurrency){

        currency = newCurrency
    }

    getExcise = () => {

        let exc = {
            cost:'',
            value:0
        }


        for (let prop in EXCISE[currency]) {


            if (drive < prop) {
                exc.value = EXCISE[currency][prop]
                break
            }
        }


        exc.cost =  exc.value + getCurrencyIcon() + ' за см <sup>3</sup>'
        exc.value = parseInt(drive * exc.value)

        return exc
    }

    getPension = () => {
        let pension = 0

        for (let prop in PENSION_FUND) {


            if (drive < prop) {
                pension = PENSION_FUND[prop]
                break
            }
        }


        return pension
    }

    const PENSION_FUND = {
        1600: 0.03,
        2600: 0.04,
        3000: 0.05
    }

    return {

        el: '#light-car-calculator',

        calculate: function (price,newCurrency,drive) {

            setDrive(drive)

            setCurrency(currency)

            let priceList = getPriceList(price)

            render(priceList)
        }
    }
})()
