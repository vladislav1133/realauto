let CustomsCalculator = (function () {


    let lightCalculator = (function () {

        let TAX = 0.1
        let VAT = 0.2
        let currency = false
        let drive = false
        let EUR_TO_USD = 1.174
        let EXCISE = {
            'EUR': {
                1100: 0.063,
                1600: 0.102,
                20001: 0.276
            },
            'USD': {
                1100: (0.063 * EUR_TO_USD).toFixed(3),
                1600: (0.102 * EUR_TO_USD).toFixed(3),
                20001: (0.276 * EUR_TO_USD).toFixed(3)
            },
        }

        let PENSION_FUND = {
            'EUR': {
                0.03: 8100,
                0.04: 14350,
                0.05: 1000000
            },
            'USD': {
                0.03: (8100 * EUR_TO_USD).toFixed(3),
                0.04: (14350 * EUR_TO_USD).toFixed(3),
                0.05: (1000000 * EUR_TO_USD).toFixed(3)
            }
        }

        function getPension(price,tax) {

            price = price + tax

            console.log('PRR ' + price)

            let pension = 0

            for (let prop in PENSION_FUND[currency]) {

                // console.log('CURR ' +currency)
                //  console.log('PROP: ' + prop + ' ' + PENSION_FUND[currency][prop])

                if(price<=PENSION_FUND[currency][prop]){
                    pension = prop
                    break
                }
            }

            console.log('PENSIA ' +pension)
            return pension
        }

        function getExcise() {

            let excise = {
                cost: '',
                value: 0
            }


            for (let prop in EXCISE[currency]) {


                if (drive < prop) {
                    excise.value = EXCISE[currency][prop]

                    break
                }
            }


            excise.cost = excise.value + getCurrencyIcon() + ' за см <sup>3</sup>'
            excise.value = parseInt(drive * excise.value)

            return excise
        }



        function getPriceList(price) {

            price = parseInt(price)
            let excise = getExcise()

            let tax = parseInt(price * TAX)
            let vat = parseInt(VAT * (price + tax + excise.value))
            let pension = parseInt(getPension(price,tax) * (price + tax))


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

                    cost: (getPension(price,tax) * 100) + '%',
                    value: pension
                },
                EXCISE: {
                    cost: excise.cost,
                    value: excise.value
                },
                RASTAMOZHKA: rastamozhka
            }

            return priceList
        }

        function getCurrencyIcon() {
            if (currency === 'USD') return '$'
            else return '€'
        }

        render = (priceList) => {

            let html = ''

            html += getPriceRow('Цена с растаможкой', '', priceList['fullPrice'])
            html += getPriceRow('НДС', priceList['VAT'].cost, priceList['VAT'].value)
            html += getPriceRow('Пошлина', priceList['TAX'].cost, priceList['TAX'].value)
            html += getPriceRow('Акциз', String(priceList['EXCISE'].cost), priceList['EXCISE'].value)

            html += getPriceRow('Итого растарможка', '', priceList['RASTAMOZHKA'])
            html += getPriceRow('Дополнительные расходы', '', '', false)
            html += getPriceRow('Пенсионный фонд', priceList['PENSION'].cost, priceList['PENSION'].value)

            $(checkEl).html(html)
        }

        function getPriceRow(name, cost, val, setIcon = true) {

            let str = ''
            let curIcon = ''
            if (setIcon) curIcon = getCurrencyIcon()

            str += '<div class="col-xs-6">' + name + '</div>'
            str += '<div class="col-xs-4">' + cost + '</div>'
            str += '<div class="col-xs-2">' + val + curIcon + '</div>'
            str += '<div class="col-xs-12"><hr></div>'

            return str
        }

        function setDrive(driveAmount) {

            drive = driveAmount * 1000
        }

        function setCurrency(newCurrency) {

            currency = newCurrency
        }

        return {

            el: '#light-car-calculator',

            calculate: function (price, newCurrency, drive) {

                setDrive(drive)

                setCurrency(newCurrency)

                let priceList = getPriceList(price)

                render(priceList)
            }
        }
    })()

    let electricCalculator = (function () {

        let TAX = 0.08
        let VAT = 0.2
        let currency = false
        let drive = false

        let EUR_TO_USD = 1.174
        let EXCISE = {
            'EUR': 109.129,
            'USD': (109.129 * EUR_TO_USD).toFixed(3)

        }
        let PENSION_FUND = {
            'EUR': {
                0.03: 8100,
                0.04: 14350,
                0.05: 1000000
            },
            'USD': {
                0.03: (8100 * EUR_TO_USD).toFixed(3),
                0.04: (14350 * EUR_TO_USD).toFixed(3),
                0.05: (1000000 * EUR_TO_USD).toFixed(3)
            }
        }

        function getPension(price,tax) {

            price = price + tax

            console.log('PRR ' + price)

            let pension = 0

            for (let prop in PENSION_FUND[currency]) {

                // console.log('CURR ' +currency)
                //  console.log('PROP: ' + prop + ' ' + PENSION_FUND[currency][prop])

                if(price<=PENSION_FUND[currency][prop]){
                    pension = prop
                    break
                }
            }

            console.log('PENSIA ' +pension)
            return pension
        }

        function initPension() {

            let low = parseInt(5247 * EUR_TO_USD)
            let middle = parseInt(9298 * EUR_TO_USD)
            let hight = 1000000

            PENSION_FUND['USD'] = {}

            PENSION_FUND['USD'][low] = 0.03
            PENSION_FUND['USD'][middle] = 0.04
            PENSION_FUND['USD'][hight] = 0.05

            console.log(PENSION_FUND)
        }

        function getExcise() {

            let excise = {
                cost: EXCISE[currency] + getCurrencyIcon(),
                value: parseInt(EXCISE[currency])
            }

            return excise
        }

        function getPriceList(price) {

            price = parseInt(price)
            let excise = getExcise()
            let tax = parseInt(price * TAX)
            let pension = getPension(price,tax) * (price + tax)
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

                    cost: (getPension(price,tax) * 100) + '%',
                    value: pension
                },
                EXCISE: {
                    cost: excise.cost,
                    value: excise.value
                },
                RASTAMOZHKA: rastamozhka
            }

            return priceList
        }

        function getCurrencyIcon() {
            if (currency === 'USD') return '$'
            else return '€'
        }

        render = (priceList) => {

            let html = ''

            html += getPriceRow('Цена с растаможкой', '', priceList['fullPrice'])
            html += getPriceRow('НДС', priceList['VAT'].cost, priceList['VAT'].value)
            html += getPriceRow('Пошлина', priceList['TAX'].cost, priceList['TAX'].value)
            html += getPriceRow('Акциз', String(priceList['EXCISE'].cost), priceList['EXCISE'].value)

            html += getPriceRow('Итого растарможка', '', priceList['RASTAMOZHKA'])
            html += getPriceRow('Дополнительные расходы', '', '', false)
            html += getPriceRow('Пенсионный фонд', priceList['PENSION'].cost, priceList['PENSION'].value)

            $(checkEl).html(html)
        }

        function getPriceRow(name, cost, val, setIcon = true) {

            let str = ''
            let curIcon = ''
            if (setIcon) curIcon = getCurrencyIcon()

            str += '<div class="col-xs-6">' + name + '</div>'
            str += '<div class="col-xs-4">' + cost + '</div>'
            str += '<div class="col-xs-2">' + val + curIcon + '</div>'
            str += '<div class="col-xs-12"><hr></div>'

            return str
        }

        function setDrive(driveAmount) {

            drive = driveAmount * 1000
        }

        function setCurrency(newCurrency) {

            currency = newCurrency
        }


        return {

            el: '#electric-car-calculator',

            calculate: function (price, newCurrency, drive) {

                initPension()

                setDrive(drive)

                setCurrency(newCurrency)

                let priceList = getPriceList(price)

                render(priceList)
            }
        }
    })()

    let motoCalculator = (function () {

        let TAX = 0.1
        let VAT = 0.2
        let currency = false
        let drive = false
        let EUR_TO_USD = 1.174
        let EXCISE = {
            'EUR': {
                501: 0.06,
                20001: 0.44
            },
            'USD': {
                501: (0.06 * EUR_TO_USD).toFixed(3),
                20001: (0.44 * EUR_TO_USD).toFixed(3)
            },
        }
        let PENSION_FUND = {
            'EUR': {
                0.03: 8100,
                0.04: 14350,
                0.05: 1000000
            },
            'USD': {
                0.03: (8100 * EUR_TO_USD).toFixed(3),
                0.04: (14350 * EUR_TO_USD).toFixed(3),
                0.05: (1000000 * EUR_TO_USD).toFixed(3)
            }
        }

        function getPension(price,tax) {

            price = price + tax

            console.log('PRR ' + price)

            let pension = 0

            for (let prop in PENSION_FUND[currency]) {

                // console.log('CURR ' +currency)
                //  console.log('PROP: ' + prop + ' ' + PENSION_FUND[currency][prop])

                if(price<=PENSION_FUND[currency][prop]){
                    pension = prop
                    break
                }
            }

            console.log('PENSIA ' +pension)
            return pension
        }


        function getExcise() {

            let excise = {
                cost: '',
                value: 0
            }


            for (let prop in EXCISE[currency]) {


                if (drive < prop) {
                    excise.value = EXCISE[currency][prop]

                    break
                }
            }


            excise.cost = excise.value + getCurrencyIcon() + ' за см <sup>3</sup>'
            excise.value = parseInt(drive * excise.value)

            return excise
        }

        function getPriceList(price) {

            price = parseInt(price)
            let excise = getExcise()

            console.log('excise ' + excise)
            let tax = parseInt(price * TAX)
            let pension = getPension(price,tax) * (price + tax)

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

                    cost: (getPension(price,tax) * 100) + '%',
                    value: pension
                },
                EXCISE: {
                    cost: excise.cost,
                    value: excise.value
                },
                RASTAMOZHKA: rastamozhka
            }

            return priceList
        }

        function getCurrencyIcon() {
            if (currency === 'USD') return '$'
            else return '€'
        }

        render = (priceList) => {

            let html = ''

            html += getPriceRow('Цена с растаможкой', '', priceList['fullPrice'])
            html += getPriceRow('НДС', priceList['VAT'].cost, priceList['VAT'].value)
            html += getPriceRow('Пошлина', priceList['TAX'].cost, priceList['TAX'].value)
            html += getPriceRow('Акциз', String(priceList['EXCISE'].cost), priceList['EXCISE'].value)

            html += getPriceRow('Итого растарможка', '', priceList['RASTAMOZHKA'])
            html += getPriceRow('Дополнительные расходы', '', '', false)
            html += getPriceRow('Пенсионный фонд', priceList['PENSION'].cost, priceList['PENSION'].value)

            $(checkEl).html(html)
        }

        function getPriceRow(name, cost, val, setIcon = true) {

            let str = ''
            let curIcon = ''
            if (setIcon) curIcon = getCurrencyIcon()

            str += '<div class="col-xs-6">' + name + '</div>'
            str += '<div class="col-xs-4">' + cost + '</div>'
            str += '<div class="col-xs-2">' + val + curIcon + '</div>'
            str += '<div class="col-xs-12"><hr></div>'

            return str
        }

        function setDrive(driveAmount) {

            drive = driveAmount * 1000
        }

        function setCurrency(newCurrency) {

            currency = newCurrency
        }





        return {

            el: '#moto-calculator',

            calculate: function (price, newCurrency, drive) {

                setDrive(drive)

                setCurrency(newCurrency)

                let priceList = getPriceList(price)

                render(priceList)
            }
        }
    })()

    const checkEl = '.check'

    function onSubmitLightCar() {

        $("#light-car-calculator").submit(function (event) {
            event.preventDefault();

            let data = $(this).serializeArray()

            let price = data[0].value
            let currency = data[1].value
            let drive = data[2].value



            lightCalculator.calculate(price, currency, drive)
        });
    }

    function onSubmitMoto() {

        $("#moto-calculator").submit(function (event) {
            event.preventDefault();

            let data = $(this).serializeArray()

            let price = data[0].value
            let currency = data[1].value
            let drive = parseInt(data[2].value) / 1000


            motoCalculator.calculate(price, currency, drive)
        });
    }

    function onSubmitElectricCar() {

        $("#electric-car-calculator").submit(function (event) {
            event.preventDefault();

            let data = $(this).serializeArray()

            console.log(data)

            let price = data[0].value
            let currency = data[1].value
            let power = data[2].value


            electricCalculator.calculate(price, currency, power)
        });
    }

    function onChangeCalculator() {

        let tab = '.nav-tabs li'

        $(tab).click(function () {

            $('.check').empty()

        })
    }

    function initEvents() {


        onSubmitElectricCar()
        onSubmitLightCar()
        onSubmitMoto()

        onChangeCalculator()
    }

    return {

        init: function () {


            initEvents()
        },
    }
})()







