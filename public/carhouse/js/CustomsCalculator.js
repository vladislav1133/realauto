let CustomsCalculator = (function () {

    const el = '#customs-calculator'
    const checkEl = '#check'
    const priceInput = el + ' #input-price'
    const currencySelect = '#select-currency'
    const driveAmountSelect = '#search-drive-amount'

    let price = 0
    let currency = 'USD'
    let driveAmount

    const currencyIcon = {
        'USD': '$',
        'EUR': '€',
    }
    const VAT = 0.2
    const TAX = 0.1
    const PENSION_FUND = {
        1600:0.03,
        2600:0.04,
        3000:0.05
    }
    let EXCISE = {
        'EUR': {
            1600: 0.103,
            2600: 0.327,
            3000: 2.209
        }
    }

    function initUSD() {

        let usd = {}

        for(let prop in EXCISE['EUR']){

            usd[prop] = (EXCISE['EUR'][prop] * 1.183).toFixed(3)
        }
        EXCISE['USD'] = usd
    }

    function initVariable() {

        price = $(priceInput).val()

        if(price > 0) price = $(priceInput).val()
        else price = 0

        driveAmount = $(driveAmountSelect).val()

        currency = $(currencySelect).val()


    }

    function onSubmit() {

        $(el).submit(function (e) {
            e.preventDefault()

            initVariable()



            CustomsCalculator.renderCheck()
        })
    }


    function initEvents() {

        onSubmit()

    }

    return {

        init: function () {

            initUSD()
            initEvents()
        },



        renderCheck: function () {

            let price = CustomsCalculator.getPrice()
            let currency = CustomsCalculator.getCurrency()
            let driveAmount = CustomsCalculator.getDriveAmount()

            let curIcon = CustomsCalculator.getCurrency(true)
            let exc = CustomsCalculator.getExcise(driveAmount,currency)
            let pensionCef = CustomsCalculator.getPension(driveAmount)
            let tax = Math.round(price*TAX)
            let excCount = Math.round(exc * 1000 * driveAmount)
            let vat = Math.round((parseInt(price) + parseInt(tax) + parseInt(excCount))*VAT)

            let pension = Math.round((parseInt(price) + parseInt(tax) + parseInt(excCount))*pensionCef)


            let customsClearing = vat + tax  + excCount
            let fullPrice = parseInt(price) + customsClearing




            let html = ''

            html += CustomsCalculator.getPriceRow('Цена с растаможкой','',fullPrice)
            html += CustomsCalculator.getPriceRow('НДС', (VAT * 100) + '%', vat)
            html += CustomsCalculator.getPriceRow('Пошлина', (TAX * 100) + '%', tax)
            html += CustomsCalculator.getPriceRow('Акциз', exc +curIcon + ' за см<sup>3</sup>', excCount)

            html += CustomsCalculator.getPriceRow('Итого растарможка','', customsClearing)
            html += CustomsCalculator.getPriceRow('Дополнительные расходы','', '',false)
            html += CustomsCalculator.getPriceRow('Пенсионный фонд', (pensionCef * 100) + '%', pension)

            $(checkEl).html(html)
        },

        getPriceRow: function (name, cost, val,setIcon = true) {

            let str = ''
            let curIcon = ''
            if(setIcon) curIcon = CustomsCalculator.getCurrency(true)

            str += '<div class="col-xs-6">' + name + '</div>'
            str += '<div class="col-xs-4">' + cost + '</div>'
            str += '<div class="col-xs-2">' + val + curIcon + '</div>'
            str += '<div class="col-xs-12"><hr></div>'


            return str
        },

        getCurrency: function (icon =false) {

            if(icon === true) return currencyIcon[currency];

            return currency
        },

        getPrice: function () {
            return price
        },

        getDriveAmount: function () {
          return driveAmount
        },

        getExcise: function (driveAmount,currency) {
            let exc = 0


            driveAmount*=1000

            for (let prop in EXCISE[currency]) {


                if (driveAmount < prop) {
                    exc = EXCISE[currency][prop]
                    break
                }
            }

            console.log(exc +'EXC')
            return exc
        },

        getPension: function (driveAmount) {
            let pension = 0


            driveAmount*=1000

            for (let prop in PENSION_FUND) {


                if (driveAmount < prop) {
                    pension = PENSION_FUND[prop]
                    break
                }
            }


            return pension
        },

    }
})()




