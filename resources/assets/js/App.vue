<template>
    <div>
        <tableVue class="table__row"
                   v-for="car in cars"
                   :cars="cars"
        ></tableVue>
        <pagVue></pagVue>
    </div>
</template>

<script>
    import {MainSearch} from './MainSearch';
    import {post} from './helpers/api.js';
    export default {
        data() {
            return {
                cars: [],
                currentPage: 1,
                perPage: 10,
                total: 0
            }
        },
        methods: {

            getCars: function (page, searchData) {
                searchData['page'] = page;

                post(`/api/cars`, page)
                    .then((res) => {
                        console.log(res);
                        this.cars = res.data.data.data;
                        this.currentPage = res.data.data.current_page;
                        this.total = res.data.data.total;
                        console.log(res.data.data.current_page);
                    });
            }


        },
        created: function (){
            this.getCars(1, MainSearch.getSearchData());
        },
    }
</script>
