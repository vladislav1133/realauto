
let CustomsCalculator = (function () {

    let lightCalculator = (function () {

        let TAX = 0.1
        let VAT = 0.2
        let currency = false
        let drive = false
        let fuel = false
        let EUR_TO_USD = 1.15
        let EXCISE = {

            'gas': {
                'EUR': {
                    1000: 0.063,
                    1500: 0.102,
                    2200: 0.267,
                    3000: 0.276,
                    20000: 2.209
                },

                'USD': {
                    1000: (0.063 * EUR_TO_USD).toFixed(3),
                    1500: (0.102 * EUR_TO_USD).toFixed(3),
                    2200: (0.267 * EUR_TO_USD).toFixed(3),
                    3000: (0.276 * EUR_TO_USD).toFixed(3),
                    20000: (2.209 * EUR_TO_USD).toFixed(3)
                },
            },
            'diesel': {
                'EUR': {
                    1500: 0.103,
                    2500: 0.327,
                    20000: 2.209
                },

                'USD': {
                    1500: (0.103 * EUR_TO_USD).toFixed(3),
                    2500: (0.327 * EUR_TO_USD).toFixed(3),
                    20000: (2.209 * EUR_TO_USD).toFixed(3)
                },
            }

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


            let pension = 0

            for (let prop in PENSION_FUND[currency]) {


                if(price<=PENSION_FUND[currency][prop]){
                    pension = prop
                    break
                }
            }


            return pension
        }

        function getExcise() {

            let excise = {
                cost: '',
                value: 0
            }


            for (let prop in EXCISE[fuel][currency]) {


                if (drive <= prop) {
                    excise.value = EXCISE[fuel][currency][prop]

                    break
                }
            }


            excise.cost = excise.value + getCurrencyIcon() + ' за см <sup>3</sup>'
            excise.value = parseInt(drive * excise.value)

            return excise
        }

        function getPriceList(price) {

            console.log('FUEL ' + fuel)


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

        function render(priceList) {

            let html = ''


            html += getPriceRow('Цена с учетом таможенных платежей', '', priceList['fullPrice'], true, 'price-row_bold')
            html += getPriceRow('НДС', priceList['VAT'].cost, priceList['VAT'].value)
            html += getPriceRow('Пошлина', priceList['TAX'].cost, priceList['TAX'].value)
            html += getPriceRow('Акциз', String(priceList['EXCISE'].cost), priceList['EXCISE'].value)

            html += getPriceRow('Дополнительные расходы', '', '', false)
            html += getPriceRow('Налог в пенсионный фонд', priceList['PENSION'].cost, priceList['PENSION'].value)
            html += getPriceRow('Итого таможенных платежей', '', priceList['RASTAMOZHKA'], true, 'price-row_bold')

            $(checkEl).html(html)
        }

        function getPriceRow(name, cost, val, setIcon = true, classes = '') {

            let str = ''
            let curIcon = ''
            if (setIcon) curIcon = getCurrencyIcon()

            str += '<div class="col-xs-6 '+ classes +'">' + name + '</div>'
            str += '<div class="col-xs-4">' + cost + '</div>'
            str += '<div class="col-xs-2 '+ classes +'">' + val + curIcon + '</div>'
            str += '<div class="col-xs-12"><hr></div>'

            return str
        }

        function setDrive(driveAmount) {

            drive = driveAmount * 1000
        }

        function setFuel(newFuel) {

            fuel = newFuel
        }

        function setCurrency(newCurrency) {

            currency = newCurrency
        }

        return {

            el: '#light-car-calculator',

            calculate: function (price, newCurrency, drive, newFuel) {

                setDrive(drive)

                setCurrency(newCurrency)

                setFuel(newFuel)

                let priceList = getPriceList(price)

                render(priceList)
            }
        }
    })()

    let electricCalculator = (function () {

        let TAX = 0.08
        let VAT = 0.2
        let currency = 'EUR'
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


            console.log('PENSION_FUND')
            console.log(PENSION_FUND)

            let pension = 0

            for (let prop in PENSION_FUND[currency]) {



                if(price<=PENSION_FUND[currency][prop]){

                    pension = prop
                    break
                }
            }



            return pension
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

        function render(priceList) {

            let html = ''

            html += getPriceRow('Цена с учетом таможенных платежей', '', priceList['fullPrice'],true,'price-row_bold')
            html += getPriceRow('НДС', priceList['VAT'].cost, priceList['VAT'].value)
            html += getPriceRow('Пошлина', priceList['TAX'].cost, priceList['TAX'].value)
            html += getPriceRow('Акциз', String(priceList['EXCISE'].cost), priceList['EXCISE'].value)

            html += getPriceRow('Дополнительные расходы', '', '', false)
            html += getPriceRow('Налог в пенсионный фонд', priceList['PENSION'].cost, priceList['PENSION'].value)
            html += getPriceRow('Итого таможенных платежей', '', priceList['RASTAMOZHKA'],true,'price-row_bold')

            $(checkEl).html(html)
        }

        function getPriceRow(name, cost, val, setIcon = true, classes = '') {

            let str = ''
            let curIcon = ''
            if (setIcon) curIcon = getCurrencyIcon()

            str += '<div class="col-xs-6 '+ classes +'">' + name + '</div>'
            str += '<div class="col-xs-4">' + cost + '</div>'
            str += '<div class="col-xs-2 '+ classes +'">' + val + curIcon + '</div>'
            str += '<div class="col-xs-12"><hr></div>'

            return str
        }

        function setDrive(driveAmount) {

            drive = driveAmount * 1000
        }

        function setCurrency(newCurrency) {



            currency = newCurrency

            console.log(currency)
        }


        return {

            el: '#electric-car-calculator',

            calculate: function (price, newCurrency, drive) {

               
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



            let pension = 0

            for (let prop in PENSION_FUND[currency]) {


                if(price<=PENSION_FUND[currency][prop]){
                    pension = prop
                    break
                }
            }


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


            html += getPriceRow('Цена с учетом таможенных платежей', '', priceList['fullPrice'],true,'price-row_bold')
            html += getPriceRow('НДС', priceList['VAT'].cost, priceList['VAT'].value)
            html += getPriceRow('Пошлина', priceList['TAX'].cost, priceList['TAX'].value)
            html += getPriceRow('Акциз', String(priceList['EXCISE'].cost), priceList['EXCISE'].value)

            html += getPriceRow('Дополнительные расходы', '', '', false)
            html += getPriceRow('Налог в пенсионный фонд', priceList['PENSION'].cost, priceList['PENSION'].value)
            html += getPriceRow('Итого таможенных платежей', '', priceList['RASTAMOZHKA'],true,'price-row_bold')

            $(checkEl).html(html)
        }

        function getPriceRow(name, cost, val, setIcon = true, classes = '') {

            let str = ''
            let curIcon = ''
            if (setIcon) curIcon = getCurrencyIcon()

            str += '<div class="col-xs-6 '+ classes +'">' + name + '</div>'
            str += '<div class="col-xs-4">' + cost + '</div>'
            str += '<div class="col-xs-2 '+ classes +'">' + val + curIcon + '</div>'
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
            let fuel = data[3].value



            lightCalculator.calculate(price, currency, drive,fuel)
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

            let price = data[0].value
            let currency = data[1].value
            let power = data[2].value

            console.log('CURRENCY ' + currency)

            electricCalculator.calculate(price, currency, power)
        });
    }



    function onChangeCalculator() {

        let tab = '.nav-tabs li';

        $(tab).click(function (event) {

            if(event.currentTarget.classList.contains("active") != true){

            $('.check').empty();
            $(".resultBlock").css("display", "none");

            };
        })
    }

    function onClickCalculatorButton() {

        $(".custom-calc button").click(function(event){

            let target = event.currentTarget;

            target.parentElement.nextElementSibling.style.display="block";

        });
    }

    function initEvents() {


        onSubmitElectricCar()
        onSubmitLightCar()
        onSubmitMoto()
        onChangeCalculator()
        onClickCalculatorButton()
    }

    return {

        init: function () {


            initEvents()
        },
    }
})()







